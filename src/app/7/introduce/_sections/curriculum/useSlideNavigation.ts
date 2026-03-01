'use client';

import { useEffect, useRef, useState } from 'react';

type SlideNavigation = {
  sliderRef: React.RefObject<HTMLDivElement>;
  activeSlide: number;
  isProjectAnimating: boolean;
  moveSlide: (direction: -1 | 1) => void;
  handleScroll: () => void;
  isSlideMounted: (index: number) => boolean;
  shouldMountProjects: boolean;
  shouldMountStaff: boolean;
};

export default function useSlideNavigation(totalSlides: number): SlideNavigation {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isProjectAnimating, setIsProjectAnimating] = useState(false);
  const [visitedSlides, setVisitedSlides] = useState<boolean[]>(() =>
    Array.from({ length: totalSlides }, (_, index) => index === 0),
  );
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSlideMounted = (index: number) => Math.abs(activeSlide - index) <= 1;
  const shouldMountProjects = activeSlide === 2 || isProjectAnimating;
  const shouldMountStaff = visitedSlides[3] || activeSlide === 3;

  const moveSlide = (direction: -1 | 1) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const width = slider.clientWidth;
    const current = Math.round(slider.scrollLeft / Math.max(width, 1));
    const next = Math.max(0, Math.min(totalSlides - 1, current + direction));

    slider.scrollTo({ left: width * next, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const width = slider.clientWidth;
    if (width > 0) {
      const rawIndex = slider.scrollLeft / width;
      const shouldAnimateProject = rawIndex > 1 && rawIndex < 3;
      setIsProjectAnimating((prev) => (prev === shouldAnimateProject ? prev : shouldAnimateProject));
    }

    if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = setTimeout(() => {
      const width = slider.clientWidth;
      if (width === 0) return;

      const index = Math.round(slider.scrollLeft / width);
      const clamped = Math.max(0, Math.min(totalSlides - 1, index));
      setActiveSlide(clamped);
      slider.scrollTo({ left: width * clamped, behavior: 'smooth' });
    }, 90);
  };

  useEffect(() => {
    setVisitedSlides((prev) => {
      if (prev[activeSlide]) return prev;
      const next = [...prev];
      next[activeSlide] = true;
      return next;
    });
  }, [activeSlide]);

  useEffect(() => {
    return () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  return {
    sliderRef,
    activeSlide,
    isProjectAnimating,
    moveSlide,
    handleScroll,
    isSlideMounted,
    shouldMountProjects,
    shouldMountStaff,
  };
}
