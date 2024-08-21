import { useState, useCallback, useRef } from 'react';

export const usePageNavigation = (
  totalPages: number,
  onPageChange: (page: number) => void,
  isAnimating: boolean
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastEventTime = useRef(0);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const accumulatedDelta = useRef(0);

  // 페이지 전환을 처리하는 함수
  const handlePageTransition = useCallback(
    (newDirection: 'up' | 'down') => {
      if (isAnimating) return; // 애니메이션 중이면 페이지 전환 무시
      const now = Date.now();
      if (now - lastEventTime.current < 300) return; // 연속된 이벤트 방지
      lastEventTime.current = now;

      let nextPage: number;
      if (newDirection === 'down') {
        nextPage = Math.min(totalPages - 1, currentPage + 1);
      } else {
        nextPage = Math.max(0, currentPage - 1);
      }

      if (nextPage !== currentPage) {
        setDirection(newDirection);
        setCurrentPage(nextPage);
        onPageChange(nextPage);
      }
    },
    [totalPages, currentPage, onPageChange, isAnimating]
  );

  // 스크롤 이벤트를 처리하는 함수
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      const isStaffPage = currentPage === totalPages - 1;
      const staffContainer = document.querySelector('.staff-grid-container');

      if (isStaffPage && staffContainer) {
        // 운영진 페이지에서의 수평 스크롤 처리
        staffContainer.scrollLeft += event.deltaY;

        // 페이지 전환을 위한 누적 델타 계산
        accumulatedDelta.current += Math.abs(event.deltaY);

        // 누적 델타가 충분히 크면 페이지 전환 고려
        if (accumulatedDelta.current > window.innerHeight * 0.5) {
          const newDirection = event.deltaY > 0 ? 'down' : 'up';
          handlePageTransition(newDirection);
          accumulatedDelta.current = 0;
        }
      } else {
        // 다른 페이지에서의 일반 스크롤 처리
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          const newDirection = event.deltaY > 0 ? 'down' : 'up';
          handlePageTransition(newDirection);
        }, 50);
      }
    },
    [handlePageTransition, currentPage, totalPages]
  );

  // 터치 시작 이벤트를 처리하는 함수
  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
    touchStartX.current = event.touches[0].clientX;
  }, []);

  // 터치 이동 이벤트를 처리하는 함수
  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touchCurrentY = event.touches[0].clientY;
      const touchCurrentX = event.touches[0].clientX;
      const deltaY = touchStartY.current - touchCurrentY;
      const deltaX = touchStartX.current - touchCurrentX;

      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      const minSwipeDistance = window.innerHeight * 0.08;

      const isStaffPage = currentPage === totalPages - 1;
      const staffContainer = document.querySelector('.staff-grid-container');

      if (isStaffPage && staffContainer && isHorizontalSwipe) {
        staffContainer.scrollLeft += deltaX;
      } else if (!isHorizontalSwipe && Math.abs(deltaY) > minSwipeDistance) {
        const newDirection = deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
        touchStartY.current = touchCurrentY;
      }

      if (!isHorizontalSwipe) {
        event.preventDefault();
      }
    },
    [handlePageTransition, currentPage, totalPages]
  );

  return {
    currentPage,
    direction,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
  };
};
