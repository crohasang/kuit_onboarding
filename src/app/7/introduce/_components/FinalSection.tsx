'use client';

import { useEffect, useMemo, useState } from 'react';

const TARGET_TIMESTAMP = new Date('2026-03-07T00:00:00+09:00').getTime();

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdown(): Countdown {
  const now = Date.now();
  const diff = Math.max(0, TARGET_TIMESTAMP - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export default function FinalSection() {
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownText = useMemo(() => {
    return `${pad(countdown.days)}:${pad(countdown.hours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}`;
  }, [countdown]);

  return (
    <section className="flex h-full min-h-0 flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="mt-2 flex items-center justify-center py-2 sm:py-3">
          <div>
            <p className="mb-1 text-center text-[11px] font-semibold tracking-[0.08em] text-white/65 sm:text-xs">서류 지원 마감까지</p>
            <p className="text-center font-black tracking-[0.06em] text-white text-[38px] sm:text-[56px]">{countdownText}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-nowrap gap-2">
          <a
            href="https://forms.gle/nzwVP9fqamhRYvUh8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md border border-[#45cc63]/75 bg-gradient-to-r from-[#2db54a] to-[#45cc63] px-3 py-2 text-[12px] font-bold text-[#041206] shadow-[0_0_20px_rgba(69,204,99,0.35)] transition-transform duration-150 hover:scale-[1.01] hover:from-[#35c454] hover:to-[#58da75] active:scale-[0.99] sm:px-4 sm:text-[13px]"
          >
            개발자/PM 지원
          </a>
          <a
            href="https://forms.gle/XK4ZeKooLhZWCoPk6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md border border-white/55 bg-gradient-to-r from-[#e4e9ef] to-[#ffffff] px-3 py-2 text-[12px] font-bold text-[#101522] shadow-[0_0_16px_rgba(255,255,255,0.26)] transition-transform duration-150 hover:scale-[1.01] hover:from-[#edf2f7] hover:to-[#ffffff] active:scale-[0.99] sm:px-4 sm:text-[13px]"
          >
            디자이너 지원
          </a>
        </div>

        <div className="mt-5 space-y-1.5 text-[12px] text-white/85 sm:text-[13px]">
          <p className="font-semibold text-white">✅ 문의 사항</p>
          <p>
            ✔️ 카카오톡 플러스 친구 :
            <a className="ml-1 text-[#9ed7ff] underline-offset-2 hover:underline" href="http://pf.kakao.com/_Dxbgvxj" target="_blank" rel="noreferrer">
              http://pf.kakao.com/_Dxbgvxj
            </a>
          </p>
          <p>
            ✔️ 인스타그램 계정 :
            <a className="ml-1 text-[#9ed7ff] underline-offset-2 hover:underline" href="https://www.instagram.com/kuit.official" target="_blank" rel="noreferrer">
              https://www.instagram.com/kuit.official
            </a>
          </p>
        </div>
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
