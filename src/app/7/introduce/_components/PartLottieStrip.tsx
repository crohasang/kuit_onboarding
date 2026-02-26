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
  designer: '/lottie/seventh-introduce/design.lottie',
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
    <div className="-mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
      <div className="flex min-w-max gap-2 sm:grid sm:min-w-0 sm:grid-cols-5">
        {PART_ORDER.map((part) => {
          const isActive = activePart === part;

          return (
            <button
              key={part}
              type="button"
              onClick={() => onChange(part)}
              className={`${styles.glassMini} w-[86px] shrink-0 rounded-md p-2 transition-all sm:w-auto ${
                isActive
                  ? 'border-[#45cc63] bg-[#45cc63]/14 shadow-[0_0_0_1px_rgba(69,204,99,0.25)_inset]'
                  : 'hover:border-white/35'
              }`}
            >
              <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14">
                <Player src={LOTTIE_BY_PART[part]} autoplay loop style={{ width: '100%', height: '100%' }} />
              </div>
              <div className={`mt-1 text-[10px] font-bold tracking-[0.08em] sm:text-[11px] ${isActive ? 'text-[#45cc63]' : 'text-white/72'}`}>
                {LABEL_BY_PART[part]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
