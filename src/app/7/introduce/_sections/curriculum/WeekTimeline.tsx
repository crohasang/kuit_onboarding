'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CurriculumItem } from './curriculum.types';

type WeekTimelineProps = {
  items: CurriculumItem[];
};

export default function WeekTimeline({ items }: WeekTimelineProps) {
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.killTweensOf(rowRefs.current);
    gsap.killTweensOf(textRefs.current);

    gsap.fromTo(
      rowRefs.current,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.05,
        clearProps: 'opacity,transform',
      },
    );

    gsap.fromTo(
      textRefs.current,
      { autoAlpha: 0, y: 10 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.26,
        ease: 'power2.out',
        stagger: 0.004,
      },
    );
  }, [items]);

  return (
    <div className="mt-3 space-y-0 sm:mt-4">
      {items.map((item, idx) => (
        <div
          key={`${item.week}-${item.title}`}
          ref={(el) => {
            if (el) rowRefs.current[idx] = el;
          }}
          className="group flex items-start gap-2 border-b border-white/18 py-2 sm:gap-3 sm:py-2.5"
        >
          <div className="w-[70px] shrink-0 pt-[1px] text-[11px] font-bold tracking-[0.02em] text-[#45cc63] sm:w-[78px] sm:text-xs">
            {item.week + '주차'}
          </div>
          <div
            className="flex-1 overflow-x-auto whitespace-nowrap text-sm leading-relaxed text-white/90 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:text-[15px]"
          >
            {Array.from(item.title).map((ch, cIdx) => (
              <span
                key={`${item.week}-${cIdx}-${ch}`}
                ref={(el) => {
                  if (el) textRefs.current[idx * 120 + cIdx] = el;
                }}
                className="inline-block"
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
