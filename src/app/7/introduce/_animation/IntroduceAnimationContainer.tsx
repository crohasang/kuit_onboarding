'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import SlotReels from './SlotReels';
import useIntroSlotAnimation from './useIntroSlotAnimation';

const CurriculumSection = dynamic(() => import('../_sections/curriculum').then((m) => m.CurriculumSection), {
  ssr: false,
});

export default function IntroduceAnimationContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slotStageRef = useRef<HTMLDivElement | null>(null);
  const curriculumRef = useRef<HTMLDivElement | null>(null);
  const reelRefs = useRef<HTMLDivElement[]>([]);

  useIntroSlotAnimation({ containerRef, slotStageRef, curriculumRef, reelRefs });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_10%_15%,rgba(69,204,99,0.24),transparent_70%),radial-gradient(60%_50%_at_92%_10%,rgba(78,190,255,0.2),transparent_72%),linear-gradient(180deg,#060812_0%,#04050b_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.18)_0.45px,transparent_0.45px)] [background-size:2px_2px]" />
      </div>

      <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent">
        <div className="relative flex h-full w-full items-center justify-center">
          <div ref={slotStageRef} className="absolute top-[40%] -translate-y-1/2">
            <SlotReels reelRefs={reelRefs} />
          </div>
        </div>
      </div>

      <div ref={curriculumRef} className="fixed inset-0 z-[110] overflow-hidden">
        <div className="flex h-full w-full items-stretch justify-stretch">
          <div className="h-full w-full">
            <CurriculumSection />
          </div>
        </div>
      </div>
    </div>
  );
}
