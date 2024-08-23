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
  const lastScrollTime = useRef(0);
  const isTransitioning = useRef(false);

  const handlePageTransition = useCallback(
    (newDirection: 'up' | 'down') => {
      if (isAnimating || isTransitioning.current) return;
      const now = Date.now();
      if (now - lastEventTime.current < 500) return;
      lastEventTime.current = now;

      let nextPage: number;
      if (newDirection === 'down') {
        nextPage = Math.min(totalPages - 1, currentPage + 1);
      } else {
        nextPage = Math.max(0, currentPage - 1);
      }

      if (nextPage !== currentPage) {
        isTransitioning.current = true;
        setDirection(newDirection);
        setCurrentPage(nextPage);
        onPageChange(nextPage);

        setTimeout(() => {
          isTransitioning.current = false;
        }, 1000);
      }
    },
    [totalPages, currentPage, onPageChange, isAnimating]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      if (timeSinceLastScroll > 500 && Math.abs(event.deltaY) > 50) {
        const newDirection = event.deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
        lastScrollTime.current = now;
      }
    },
    [handlePageTransition]
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
    touchStartX.current = event.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touchCurrentY = event.touches[0].clientY;
      const touchCurrentX = event.touches[0].clientX;
      const deltaY = touchStartY.current - touchCurrentY;
      const deltaX = touchStartX.current - touchCurrentX;

      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      const minSwipeDistance = window.innerHeight * 0.15;

      if (!isHorizontalSwipe) {
        event.preventDefault();
      }

      if (!isHorizontalSwipe && Math.abs(deltaY) > minSwipeDistance) {
        const newDirection = deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
        touchStartY.current = touchCurrentY;
        event.preventDefault();
      }
    },
    [handlePageTransition]
  );

  return {
    currentPage,
    direction,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
  };
};
