'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-09-05T23:59:59+09:00') - +new Date();
    let timeLeft: { days?: number; hours?: number; minutes?: number; seconds?: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const hasTimeLeft = Object.values(timeLeft).some(value => value > 0);

  if (!isClient) {
    return (
      <div className="text-center my-4">
        <div className="text-5xl md:text-7xl font-bold text-black font-mono" style={{ opacity: 0 }}>
          00:00:00:00
        </div>
      </div>
    );
  }

  return (
    <div className="text-center my-4">
      {hasTimeLeft ? (
        <div className="text-5xl md:text-7xl font-bold text-black font-mono">
          <span>{String(timeLeft.days).padStart(2, '0')}:</span>
          <span>{String(timeLeft.hours).padStart(2, '0')}:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      ) : (
        <span className="text-2xl md:text-4xl font-bold text-black">모집이 마감되었습니다.</span>
      )}
    </div>
  );
};

export default CountdownTimer;