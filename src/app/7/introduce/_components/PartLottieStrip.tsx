'use client';

import { DotLottiePlayer as Player } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { PartKey } from './curriculum.types';
import styles from './CurriculumGlass.module.css';

const LOTTIE_BY_PART: Record<PartKey, string> = {
  web: '/lottie/seventh-introduce/web.lottie',
  android: '/lottie/seventh-introduce/android.lottie',
  server: '/lottie/seventh-introduce/server.lottie',
  pm: '/lottie/seventh-introduce/management.lottie',
  designer: '/lottie/sixth-introduce/design.lottie',
};

const LABEL_BY_PART: Record<PartKey, string> = {
  web: 'WEB',
  android: 'ANDROID',
  server: 'SERVER',
  pm: 'PM',
  designer: 'DESIGN',
};
const PART_ORDER: PartKey[] = ['android', 'web', 'server', 'pm', 'designer'];

type PartLottieStripProps = {
  activePart: PartKey;
  onChange: (part: PartKey) => void;
};

export default function PartLottieStrip({ activePart, onChange }: PartLottieStripProps) {
  return (
    <div className="mt-1">
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {PART_ORDER.map((part) => {
          const isActive = activePart === part;

          return (
            <button
              key={part}
              type="button"
              onClick={() => onChange(part)}
              className={`${styles.glassMini} min-w-0 rounded-md px-1 py-1.5 transition-all sm:py-2 ${
                isActive
                  ? 'border-[#45cc63] bg-[#45cc63]/14 shadow-[0_0_0_1px_rgba(69,204,99,0.25)_inset]'
                  : 'hover:border-white/35'
              }`}
            >
              <div className="mx-auto h-8 w-8 sm:h-10 sm:w-10">
                <Player
                  key={part}
                  src={LOTTIE_BY_PART[part]}
                  autoplay
                  loop
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div
                className={`mt-0.5 truncate px-0.5 text-center text-[9px] font-bold tracking-[0.04em] sm:text-[10px] ${
                  isActive ? 'text-[#45cc63]' : 'text-white/72'
                }`}
              >
                {LABEL_BY_PART[part]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
