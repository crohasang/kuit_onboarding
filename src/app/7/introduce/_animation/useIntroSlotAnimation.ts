'use client';

import { useEffect } from 'react';
import type { MutableRefObject, RefObject } from 'react';
import gsap from 'gsap';
import { REEL_DIGITS } from './slot.constants';

type IntroSlotAnimationArgs = {
  containerRef: RefObject<HTMLDivElement | null>;
  slotStageRef: RefObject<HTMLDivElement | null>;
  curriculumRef: RefObject<HTMLDivElement | null>;
  reelRefs: MutableRefObject<HTMLDivElement[]>;
};

export default function useIntroSlotAnimation({ containerRef, slotStageRef, curriculumRef, reelRefs }: IntroSlotAnimationArgs) {
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
  }, [containerRef, slotStageRef, curriculumRef, reelRefs]);
}
