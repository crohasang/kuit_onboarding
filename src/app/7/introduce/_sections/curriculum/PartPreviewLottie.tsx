'use client';

import { DotLottiePlayer as Player } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { PartKey } from './curriculum.types';

const LOTTIE_BY_PART: Record<PartKey, string> = {
  web: '/lottie/seventh-introduce/web.lottie',
  android: '/lottie/seventh-introduce/android.lottie',
  server: '/lottie/seventh-introduce/server.lottie',
  pm: '/lottie/seventh-introduce/management.lottie',
  designer: '/lottie/seventh-introduce/design.lottie',
};

type PartPreviewLottieProps = {
  part: PartKey;
  className?: string;
};

export default function PartPreviewLottie({ part, className }: PartPreviewLottieProps) {
  return (
    <div className={className}>
      <div className="mx-auto h-[110px] w-[110px] sm:h-[140px] sm:w-[140px]">
        <Player key={part} src={LOTTIE_BY_PART[part]} autoplay loop style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
