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

export default function useCountdown(isActive: boolean) {
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown());

  useEffect(() => {
    if (!isActive) return;
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isActive]);

  return useMemo(() => {
    return `${pad(countdown.days)}:${pad(countdown.hours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}`;
  }, [countdown]);
}

