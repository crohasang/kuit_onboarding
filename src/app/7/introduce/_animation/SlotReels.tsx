'use client';

import type { MutableRefObject } from 'react';
import { REEL_DIGITS, REEL_POSITIONS } from './slot.constants';

type SlotReelsProps = {
  reelRefs: MutableRefObject<HTMLDivElement[]>;
};

export default function SlotReels({ reelRefs }: SlotReelsProps) {
  return (
    <div
      className="[transform:scale(min(1,calc((100vw-24px)/460)))] sm:[transform:none]"
      style={{ transformOrigin: 'center center' }}
    >
      <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-14">
        {REEL_POSITIONS.map((pos, index) => (
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
  );
}
