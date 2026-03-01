'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type BottomNavigatorProps = {
  activeSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function BottomNavigator({ activeSlide, totalSlides, onPrev, onNext }: BottomNavigatorProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[140]">
      <div className="flex w-full items-center justify-center gap-3 border-t border-white/10 bg-black/35 px-4 py-2 backdrop-blur-md sm:px-6 sm:py-3">
        <button
          type="button"
          onClick={onPrev}
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
          onClick={onNext}
          disabled={activeSlide === totalSlides - 1}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white transition hover:border-white/45 hover:bg-black/55 disabled:cursor-not-allowed disabled:opacity-45"
          aria-label="다음 섹션"
        >
          <FaChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

