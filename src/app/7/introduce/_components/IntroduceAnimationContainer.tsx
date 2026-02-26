'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const REEL_DIGITS = [...Array.from({ length: 30 }, (_, i) => i % 10), 7];

export default function IntroduceAnimationContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fireworksRef = useRef<HTMLDivElement | null>(null);
  const slotStageRef = useRef<HTMLDivElement | null>(null);
  const reelRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      requestAnimationFrame(() => {
        const firstReel = reelRefs.current[0];
        const firstItem = firstReel?.children?.[0] as HTMLElement | undefined;
        if (!firstItem) return;

        const itemHeight = firstItem.offsetHeight;
        const finalY = -(REEL_DIGITS.length - 1) * itemHeight;

        gsap.set(reelRefs.current, { y: 0 });
        gsap.set(titleRef.current, { autoAlpha: 0, y: 18 });

        const burst = (xPercent: number, yPercent: number) => {
          const root = fireworksRef.current;
          if (!root) return;

          const count = 34;
          for (let i = 0; i < count; i += 1) {
            const particle = document.createElement('span');
            particle.className = 'absolute h-[8px] w-[8px] rounded-full';
            particle.style.left = `${xPercent}%`;
            particle.style.top = `${yPercent}%`;
            particle.style.backgroundColor = i % 2 === 0 ? '#45cc63' : '#ffffff';
            root.appendChild(particle);

            const angle = (Math.PI * 2 * i) / count;
            const distance = 95 + Math.random() * 130;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            gsap.fromTo(
              particle,
              { x: 0, y: 0, autoAlpha: 1, scale: 0.7 },
              {
                x: dx,
                y: dy,
                autoAlpha: 0,
                scale: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => particle.remove(),
              },
            );
          }
        };

        const tl = gsap.timeline();

        reelRefs.current.forEach((reel, index) => {
          const approachY = finalY + itemHeight * (8 + index * 2);

          tl.to(
            reel,
            {
              y: approachY,
              duration: 1,
              ease: 'none',
            },
            index * 0.28,
          ).to(
            reel,
            {
              y: finalY,
              duration: 0.85,
              ease: 'expo.out',
            },
            index * 0.28 + 1,
          );
        });

        tl.call(() => {
          burst(34, 40);
          burst(66, 40);
        })
          .to({}, { duration: 1 })
          .to(slotStageRef.current, {
            yPercent: -120,
            autoAlpha: 0,
            duration: 0.7,
            ease: 'power2.inOut',
          })
          .to(titleRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div ref={fireworksRef} className="pointer-events-none absolute inset-0" />
      <div className="relative flex h-full w-full items-center justify-center">
        <div ref={slotStageRef} className="absolute top-[40%] -translate-y-1/2">
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

        <h1
          ref={titleRef}
          className="pointer-events-none absolute text-[40px] font-black tracking-[0.08em] text-white sm:text-[56px] md:text-[76px]"
        >
          <span className="text-[#45cc63]">KUIT</span> SEVENTH
        </h1>
      </div>
    </div>
  );
}
