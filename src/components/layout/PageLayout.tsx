'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

interface PageLayoutProps {
  children: React.ReactNode[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onAnimationComplete: () => void;
  isAnimating: boolean;
}

const PageLayout = ({
  children,
  currentPage,
  onPageChange,
  onAnimationComplete,
  isAnimating,
}: PageLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastEventTime = useRef(0);
  const touchStartY = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = React.Children.count(children);
  const [showChevron, setShowChevron] = useState(true);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // 모바일인지 확인
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 페이지 전환 함수
  const handlePageTransition = useCallback(
    (newDirection: 'up' | 'down') => {
      if (isAnimating) return;
      const now = Date.now();
      if (now - lastEventTime.current < 300) return;
      lastEventTime.current = now;

      let nextPage: number;
      if (newDirection === 'down') {
        nextPage = Math.min(totalPages - 1, currentPage + 1);
      } else {
        nextPage = Math.max(0, currentPage - 1);
      }

      if (nextPage !== currentPage) {
        setDirection(newDirection);
        setShowChevron(false);
        onPageChange(nextPage);
      }
    },
    [totalPages, currentPage, onPageChange, isAnimating]
  );

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const newDirection = event.deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
      }, 50); // 50ms 딜레이로 스크롤 이벤트 디바운싱
    },
    [handlePageTransition]
  );

  // 터치 시작 이벤트 핸들러
  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  // 터치 이동 이벤트 핸들러
  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touchCurrentY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchCurrentY;

      // 최소 스와이프 거리를 화면 높이의 5%로 설정
      const minSwipeDistance = window.innerHeight * 0.05;

      if (Math.abs(deltaY) > minSwipeDistance) {
        const newDirection = deltaY > 0 ? 'down' : 'up';
        handlePageTransition(newDirection);
        touchStartY.current = touchCurrentY; // 터치 시작 위치 재설정
      }
    },
    [handlePageTransition]
  );

  // 이벤트 리스너 등록 및 해제
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      container.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

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

  const handleAnimationComplete = () => {
    setShowChevron(true);
    onAnimationComplete();
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
        onExitComplete={handleAnimationComplete}
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

      <div
        className={`fixed bottom-4 left-4 text-white ${
          isMobile ? 'text-xs' : 'text-sm'
        } z-50`}
      >
        {currentPage + 1}/{totalPages}
      </div>

      {showChevron && currentPage === 0 && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            isMobile ? 'bottom-4' : 'bottom-6'
          } z-50`}
        >
          <IoChevronDownOutline
            className={`text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}
          />
          <IoChevronDownOutline
            className={`text-white -mt-3 ${isMobile ? 'text-xl' : 'text-2xl'}`}
          />
        </div>
      )}

      {showChevron && currentPage === totalPages - 1 && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 ${
            isMobile ? 'top-4' : 'top-6'
          } z-50`}
        >
          <IoChevronUpOutline
            className={`text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}
          />
          <IoChevronUpOutline
            className={`text-white -mt-3 ${isMobile ? 'text-xl' : 'text-2xl'}`}
          />
        </div>
      )}
    </div>
  );
};

export default PageLayout;
