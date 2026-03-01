'use client';

import ApplyButtons from './ApplyButtons';
import ContactLinks from './ContactLinks';
import CountdownDisplay from './CountdownDisplay';
import useCountdown from './useCountdown';

type FinalSectionProps = {
  isActive?: boolean;
};

export default function FinalSection({ isActive = true }: FinalSectionProps) {
  const countdownText = useCountdown(isActive);

  return (
    <section className="flex h-full min-h-0 flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <CountdownDisplay value={countdownText} />
        <ApplyButtons />
        <ContactLinks />
      </div>

      <p className="mt-8 text-center text-[12px] text-white/55 sm:text-[13px]">
        Created by{' '}
        <a href="https://github.com/crohasang" target="_blank" rel="noreferrer" className="text-white/75 underline-offset-2 hover:underline">
          crohasang
        </a>
      </p>
    </section>
  );
}
