'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CurriculumSection from './CurriculumSection';

const REEL_DIGITS = [...Array.from({ length: 30 }, (_, i) => i % 10), 7];

export default function IntroduceAnimationContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slotStageRef = useRef<HTMLDivElement | null>(null);
  const curriculumRef = useRef<HTMLDivElement | null>(null);
  const reelRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        const firstReel = reelRefs.current[0];
        const firstItem = firstReel?.children?.[0] as HTMLElement | undefined;
        if (!firstItem) return;

        const itemHeight = firstItem.offsetHeight;
        const finalY = -(REEL_DIGITS.length - 1) * itemHeight;

        gsap.set(reelRefs.current, { y: 0 });
        gsap.set(curriculumRef.current, { autoAlpha: 0, y: 120 });

        const tl = gsap.timeline();

        reelRefs.current.forEach((reel, index) => {
          const approachY = finalY + itemHeight * (8 + index * 2);

          tl.to(
            reel,
            {
              y: approachY,
              duration: 0.65,
              ease: 'none',
            },
            index * 0.18,
          ).to(
            reel,
            {
              y: finalY,
              duration: 0.55,
              ease: 'expo.out',
            },
            index * 0.18 + 0.65,
          );
        });

        tl.to({}, { duration: 0.45 })
          .to(
            slotStageRef.current,
            {
              yPercent: -120,
              autoAlpha: 0,
              duration: 0.45,
              ease: 'power2.inOut',
            },
            'sync',
          )
          .to(
            curriculumRef.current,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              ease: 'power2.inOut',
            },
            'sync',
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_10%_15%,rgba(69,204,99,0.24),transparent_70%),radial-gradient(60%_50%_at_92%_10%,rgba(78,190,255,0.2),transparent_72%),linear-gradient(180deg,#060812_0%,#04050b_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.18)_0.45px,transparent_0.45px)] [background-size:2px_2px]" />
      </div>

      <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent">
        <div className="relative flex h-full w-full items-center justify-center">
          <div ref={slotStageRef} className="absolute top-[40%] -translate-y-1/2">
            <div
              className="[transform:scale(min(1,calc((100vw-24px)/460)))] sm:[transform:none]"
              style={{ transformOrigin: 'center center' }}
            >
              <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-14">
                {['left', 'center', 'right'].map((pos, index) => (
                  <div
                    key={pos}
                    className="h-[96px] w-[64px] overflow-hidden rounded-lg border border-[#45cc63]/40 bg-black/40 sm:h-[128px] sm:w-[84px] md:h-[156px] md:w-[108px]"
                  >
                    <div
                      ref={(el) => {
                        if (el) reelRefs.current[index] = el;
                      }}
                    >
                      {REEL_DIGITS.map((digit, digitIdx) => (
                        <div
                          key={`${pos}-${digitIdx}`}
                          className="flex h-[96px] items-center justify-center text-[72px] font-black leading-none text-[#45cc63] sm:h-[128px] sm:text-[96px] md:h-[156px] md:text-[120px]"
                        >
                          {digit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
