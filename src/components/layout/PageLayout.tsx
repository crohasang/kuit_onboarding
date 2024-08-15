import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onAnimationComplete: () => void;
  isAnimating: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  currentPage,
  onPageChange,
  onAnimationComplete,
  isAnimating,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastEventTime = useRef(0);
  const touchStartY = useRef(0);

  // 페이지 전환  함수
  const handlePageTransition = useCallback(
    (newDirection: 'up' | 'down') => {
      if (isAnimating) return; // 애니메이션 중이면 무시
      const now = Date.now();
      if (now - lastEventTime.current < 1000) return; // 1초 내 중복 이벤트 방지
      lastEventTime.current = now;

      let nextPage: number;
      if (newDirection === 'down') {
        nextPage = Math.min(
          React.Children.count(children) - 1,
          currentPage + 1
        );
      } else {
        nextPage = Math.max(0, currentPage - 1);
      }

      if (nextPage !== currentPage) {
        setDirection(newDirection);
        onPageChange(nextPage);
      }
    },
    [children, currentPage, onPageChange, isAnimating]
  );

  // 마우스 휠 이벤트 핸들러
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      const newDirection = event.deltaY > 0 ? 'down' : 'up';
      handlePageTransition(newDirection);
    },
    [handlePageTransition]
  );

  // 터치 시작 이벤트 핸들러
  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  // 터치 종료 이벤트 핸들러
  const handleTouchEnd = useCallback(
    (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        // 최소 스와이프 거리
        const newDirection = deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
      }
    },
    [handlePageTransition]
  );

  // 이벤트 리스너 등록 및 해제
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  // 페이지 전환 애니메이션 variants
  const pageVariants = {
    enter: (direction: 'up' | 'down') => ({
      y: direction === 'down' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: 'up' | 'down') => ({
      y: direction === 'down' ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // 페이지 전환 애니메이션 설정
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden relative bg-black touch-none"
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="sync"
        onExitComplete={onAnimationComplete}
      >
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="h-full w-full absolute top-0 left-0"
        >
          {children[currentPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageLayout;
