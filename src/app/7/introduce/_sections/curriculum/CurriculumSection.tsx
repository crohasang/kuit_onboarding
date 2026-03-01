'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import curriculumJson from '@/app/7/introduce/_data/curriculum.json';
import { BottomNavigator, SlidePanel } from '@/app/7/introduce/_layout';
import { FinalSection } from '../final';
import { IntroduceSection } from '../introduce';
import WeekTimeline from './WeekTimeline';
import { CurriculumData, PartKey } from './curriculum.types';
import useSlideNavigation from './useSlideNavigation';
import styles from '@/app/7/introduce/_layout/CurriculumGlass.module.css';

const curriculumData = curriculumJson as CurriculumData;
const PartLottieStrip = dynamic(() => import('./PartLottieStrip'), {
  ssr: false,
  loading: () => <div className="mt-1 h-[72px] rounded-md border border-white/15 bg-black/20" />,
});
const ProjectsSection = dynamic(() => import('../projects').then((m) => m.ProjectsSection), {
  ssr: false,
  loading: () => <div className="h-full min-h-[220px] rounded-md border border-white/15 bg-black/20" />,
});
const StaffSection = dynamic(() => import('../staff').then((m) => m.StaffSection), {
  ssr: false,
  loading: () => <div className="h-full min-h-[220px] rounded-md border border-white/15 bg-black/20" />,
});

export default function CurriculumSection() {
  const [activePart, setActivePart] = useState<PartKey>('android');

  const items = useMemo(() => curriculumData[activePart], [activePart]);
  const totalSlides = 5;
  const {
    sliderRef,
    activeSlide,
    isProjectAnimating,
    moveSlide,
    handleScroll,
    isSlideMounted,
    shouldMountProjects,
    shouldMountStaff,
  } = useSlideNavigation(totalSlides);

  return (
    <section
      className={`h-[100dvh] w-screen px-2 pb-[calc(64px+env(safe-area-inset-bottom))] pt-2 sm:h-screen sm:px-4 sm:pb-20 sm:pt-4 ${styles.sectionBg}`}
    >
      <div className={styles.noiseLayer} />
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="relative z-10 flex h-[calc(100dvh-74px-env(safe-area-inset-bottom))] items-stretch snap-x snap-mandatory overflow-x-auto scroll-smooth sm:h-[calc(100vh-92px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <SlidePanel>{isSlideMounted(0) ? <IntroduceSection /> : null}</SlidePanel>

        <SlidePanel>
          {isSlideMounted(1) ? (
            <>
              <h2 className="text-[20px] font-bold tracking-[0.05em] text-white sm:text-[26px]">커리큘럼</h2>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">5개의 파트, 9주간의 스터디</p>

              <div className="mt-4 sm:mt-5">
                <PartLottieStrip activePart={activePart} onChange={setActivePart} />
                <WeekTimeline items={items} />
              </div>
            </>
          ) : null}
        </SlidePanel>

        <SlidePanel>{shouldMountProjects ? <ProjectsSection isActive={activeSlide === 2 || isProjectAnimating} /> : null}</SlidePanel>

        <SlidePanel>{shouldMountStaff ? <StaffSection isActive={shouldMountStaff} /> : null}</SlidePanel>

        <SlidePanel>{activeSlide === 4 ? <FinalSection isActive={activeSlide === 4} /> : null}</SlidePanel>
      </div>

      <BottomNavigator
        activeSlide={activeSlide}
        totalSlides={totalSlides}
        onPrev={() => moveSlide(-1)}
        onNext={() => moveSlide(1)}
      />
    </section>
  );
}
