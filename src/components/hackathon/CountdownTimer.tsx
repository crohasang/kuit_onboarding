'use client';

import { useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface CountdownProps {
  targetDate: Date;
  label: ReactNode;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, label }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      // 일, 시, 분, 초 계산
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // 초기 시간 설정
    setTimeLeft(calculateTimeLeft());

    // 1초마다 업데이트
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex flex-col items-center">
        {label && <div className="mb-2 text-white">{label}</div>}
        <div className="grid grid-flow-col gap-4 text-center auto-cols-max items-center">
          <div className="flex flex-col">
            <span className="font-mono text-4xl bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-xs text-white">일</span>
          </div>
          <span className="text-2xl text-white">:</span>
          <div className="flex flex-col">
            <span className="font-mono text-4xl bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs text-white">시</span>
          </div>
          <span className="text-2xl text-white">:</span>
          <div className="flex flex-col">
            <span className="font-mono text-4xl bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs text-white">분</span>
          </div>
          <span className="text-2xl text-white">:</span>
          <div className="flex flex-col">
            <span className="font-mono text-4xl bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-xs text-white">초</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
