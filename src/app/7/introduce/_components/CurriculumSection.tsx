'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import curriculumJson from '@/app/7/introduce/_data/curriculum.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PartLottieStrip from './PartLottieStrip';
import ProjectsSection from './ProjectsSection';
import WeekTimeline from './WeekTimeline';
import { CurriculumData, PartKey } from './curriculum.types';
import styles from './CurriculumGlass.module.css';

const curriculumData = curriculumJson as CurriculumData;

export default function CurriculumSection() {
  const [activePart, setActivePart] = useState<PartKey>('android');
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = useMemo(() => curriculumData[activePart], [activePart]);
  const totalSlides = 2;
  const unifiedPanelSizeClass = 'h-full min-h-0';

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
    return () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  return (
    <section className={`h-screen w-screen px-2 pb-16 pt-2 sm:px-4 sm:pb-20 sm:pt-4 ${styles.sectionBg}`}>
      <div className={styles.noiseLayer} />
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="relative z-10 flex h-[calc(100vh-72px)] items-stretch snap-x snap-mandatory overflow-x-auto scroll-smooth sm:h-[calc(100vh-92px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className={`flex w-full shrink-0 snap-start ${unifiedPanelSizeClass}`}>
          <div className={`h-full w-full p-4 sm:p-6 ${styles.glassPanel}`}>
            <h2 className="text-[20px] font-bold tracking-[0.05em] text-white sm:text-[26px]">커리큘럼</h2>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">5개의 파트, 9주간의 스터디</p>

            <div className="mt-4 sm:mt-5">
              <PartLottieStrip activePart={activePart} onChange={setActivePart} />
              <WeekTimeline items={items} />
            </div>
          </div>
        </div>
        <div className={`flex w-full shrink-0 snap-start ${unifiedPanelSizeClass}`}>
          <div className={`h-full w-full p-4 sm:p-6 ${styles.glassPanel}`}>
            <ProjectsSection />
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[140]">
        <div className="flex w-full items-center justify-center gap-3 border-t border-white/10 bg-black/35 px-4 py-2 backdrop-blur-md sm:px-6 sm:py-3">
          <button
            type="button"
            onClick={() => moveSlide(-1)}
            disabled={activeSlide === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white transition hover:border-white/45 hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="이전 섹션"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          <span className="min-w-[60px] text-center text-xs font-semibold tracking-[0.05em] text-white/75 sm:text-sm">
            {activeSlide + 1} / {totalSlides}
          </span>

          <button
            type="button"
            onClick={() => moveSlide(1)}
            disabled={activeSlide === totalSlides - 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white transition hover:border-white/45 hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label="다음 섹션"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
