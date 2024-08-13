'use client';

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
  const lastWheelTime = useRef(0);

  // 휠 이벤트 핸들러
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isAnimating) return; // 애니메이션 중이면 휠 이벤트 무시
      event.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 1000) return; // 휠 이벤트 디바운싱 (1초)
      lastWheelTime.current = now;

      const newDirection = event.deltaY > 0 ? 'down' : 'up';
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

  // 휠 이벤트 리스너 등록 및 해제
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  // 페이지 전환 애니메이션 설정
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

  // 페이지 전환 트랜지션 설정
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden relative bg-black"
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
