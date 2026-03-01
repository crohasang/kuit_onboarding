'use client';

import { PartKey } from './curriculum.types';

const PART_LABELS: Record<PartKey, string> = {
  web: 'WEB',
  android: 'ANDROID',
  server: 'SERVER',
  pm: 'PM',
  designer: 'DESIGN',
};

type PartTabsProps = {
  activePart: PartKey;
  onChange: (part: PartKey) => void;
};

export default function PartTabs({ activePart, onChange }: PartTabsProps) {
  return (
    <div role="tablist" aria-label="Curriculum parts" className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {(Object.keys(PART_LABELS) as PartKey[]).map((part) => {
        const isActive = activePart === part;

        return (
          <button
            key={part}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(part)}
            className={`h-11 rounded-md border text-xs font-bold tracking-[0.08em] transition-all sm:text-sm ${
              isActive
                ? 'border-[#45cc63] bg-[#45cc63]/15 text-[#45cc63] shadow-[0_0_0_1px_rgba(69,204,99,0.25)_inset]'
                : 'border-white/20 bg-black/35 text-white/72 hover:border-white/45 hover:text-white'
            }`}
          >
            {PART_LABELS[part]}
          </button>
        );
      })}
    </div>
  );
}
