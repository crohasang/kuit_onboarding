'use client';

import Image from 'next/image';
import { StaffItem } from './staff.types';

const STAFF_PLACEHOLDER_SRC = '/images/seventh-staff-placeholder.svg';

type StaffCardProps = {
  id: string;
  item: StaffItem;
  isFlipped: boolean;
  isLoaded: boolean;
  onToggle: () => void;
  onLoad: () => void;
};

export default function StaffCard({ id, item, isFlipped, isLoaded, onToggle, onLoad }: StaffCardProps) {
  return (
    <button
      key={id}
      type="button"
      onClick={onToggle}
      className="h-[220px] w-[48%] min-w-[150px] max-w-[180px] cursor-pointer [perspective:1000px] sm:w-[170px]"
    >
      <div
        className="relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/20 bg-[#2f343b] [backface-visibility:hidden]">
          {!isLoaded ? <div className="absolute inset-0 z-[1] animate-pulse bg-gradient-to-br from-[#4f5560] via-[#626a76] to-[#4f5560]" /> : null}
          <Image
            src={item.image || STAFF_PLACEHOLDER_SRC}
            alt={item.name}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 48vw, 170px"
            className={item.image ? 'object-cover object-top' : 'object-cover object-center'}
            onLoadingComplete={onLoad}
            onError={onLoad}
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/60 px-2.5 py-2 text-left">
            <div className="flex items-end justify-between gap-2">
              <p className="truncate text-[13px] font-bold text-white sm:text-[14px]">{item.name}</p>
              {item.role ? <p className="shrink-0 text-[10px] font-medium text-white/55 sm:text-[11px]">{item.role}</p> : null}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-lg border border-[#45cc63]/35 bg-[#0b1118] px-3 py-3 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-3.5 sm:py-3.5">
          <p className="text-[12px] font-semibold text-[#45cc63] sm:text-[13px]">{item.name}</p>
          <p className="mt-2 line-clamp-8 text-[12px] leading-relaxed text-white/85 sm:text-[13px]">{item.comment || '잘 부탁드립니다!'}</p>
        </div>
      </div>
    </button>
  );
}

