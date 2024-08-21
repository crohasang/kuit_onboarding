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
  const accumulatedDelta = useRef(0);
  const isTransitioning = useRef(false);

  const handlePageTransition = useCallback(
    (newDirection: 'up' | 'down') => {
      if (isAnimating || isTransitioning.current) return;
      const now = Date.now();
      if (now - lastEventTime.current < 500) return; // Increased debounce time
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

        // Reset transition state after animation
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1000); // Adjust this value to match your transition duration
      }
    },
    [totalPages, currentPage, onPageChange, isAnimating]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      const now = Date.now();
      const isStaffPage = currentPage === totalPages - 1;
      const staffContainer = document.querySelector('.staff-grid-container');

      if (isStaffPage && staffContainer) {
        staffContainer.scrollLeft += event.deltaY;
        accumulatedDelta.current += Math.abs(event.deltaY);

        if (accumulatedDelta.current > window.innerHeight * 0.5) {
          // Increased threshold
          const newDirection = event.deltaY > 0 ? 'down' : 'up';
          handlePageTransition(newDirection);
          accumulatedDelta.current = 0;
        }
      } else {
        const timeSinceLastScroll = now - lastScrollTime.current;
        if (timeSinceLastScroll > 500 && Math.abs(event.deltaY) > 50) {
          // Increased delay and added threshold
          const newDirection = event.deltaY > 0 ? 'down' : 'up';
          handlePageTransition(newDirection);
          lastScrollTime.current = now;
        }
      }
    },
    [handlePageTransition, currentPage, totalPages]
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
      const minSwipeDistance = window.innerHeight * 0.15; // Increased swipe distance

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
