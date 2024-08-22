import React, { useRef, useState, useEffect } from 'react';
import { PageTransition } from './PageTransition';
import { PageIndicator } from './PageIndicator';
import { NavigationArrows } from './NavigationArrows';
import { usePageNavigation } from './usePageNavigation';

interface PageLayoutProps {
  children: React.ReactNode[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onAnimationComplete: () => void;
  isAnimating: boolean;
}

export const PageLayout = ({
  children,
  onPageChange,
  onAnimationComplete,
  isAnimating,
}: PageLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showChevron, setShowChevron] = useState(true);
  const totalPages = React.Children.count(children);

  const {
    currentPage,
    direction,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
  } = usePageNavigation(totalPages, onPageChange, isAnimating);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleAnimationComplete = () => {
    setShowChevron(true);
    onAnimationComplete();
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden relative bg-black"
    >
      <PageTransition
        currentPage={currentPage}
        direction={direction}
        onAnimationComplete={handleAnimationComplete}
      >
        {children[currentPage]}
      </PageTransition>

      <PageIndicator
        currentPage={currentPage}
        totalPages={totalPages}
        isMobile={isMobile}
      />

      <NavigationArrows
        currentPage={currentPage}
        totalPages={totalPages}
        isMobile={isMobile}
        showChevron={showChevron}
      />
    </div>
  );
};
