'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { STAFF_DATA } from '../_constants/staff.ts';
import MarqueeItem from './MarqueeItem.tsx';
import TechStack from './TechStack.tsx';
import CountdownTimer from './CountdownTimer.tsx';


interface ThirdInteractionProps {
  refs: {
    sectionRef: React.RefObject<HTMLElement>;
    managementGroupRef: React.RefObject<HTMLDivElement>;
    androidGroupRef: React.RefObject<HTMLDivElement>;
    webGroupRef: React.RefObject<HTMLDivElement>;
    serverGroupRef: React.RefObject<HTMLDivElement>;
    designGroupRef: React.RefObject<HTMLDivElement>;
    applySectionRef: React.RefObject<HTMLDivElement>;
  };
}

const ThirdInteraction = ({ refs }: ThirdInteractionProps) => {
  const { sectionRef, managementGroupRef, androidGroupRef, webGroupRef, serverGroupRef, designGroupRef, applySectionRef } =
    refs;
  const topMarqueeRef = useRef<HTMLDivElement>(null);
  const bottomMarqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!topMarqueeRef.current || !bottomMarqueeRef.current) return;

    const ctx = gsap.context(() => {
      const topMarqueeWidth = topMarqueeRef.current!.scrollWidth / 2;
      const bottomMarqueeWidth = bottomMarqueeRef.current!.scrollWidth / 2;
      const duration = 20;

      gsap.set(topMarqueeRef.current, { x: -topMarqueeWidth });
      gsap.to(topMarqueeRef.current, {
        x: 0,
        duration,
        ease: 'none',
        repeat: -1,
      });

      gsap.to(bottomMarqueeRef.current, {
        x: -bottomMarqueeWidth,
        duration,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderMarqueeContent = (text: string, direction: 'left' | 'right') =>
    Array.from({ length: 10 }).map((_, i) => <MarqueeItem key={i} text={text} direction={direction} />);

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 w-screen h-screen bg-white flex flex-col justify-between overflow-hidden"
      style={{ visibility: 'hidden' }}
    >
      <div
        className="w-full h-16 md:h-28 flex items-center mt-8 short:h-10"
        style={{ background: 'linear-gradient(270deg, #7427ff, #002aff)' }}
      >
        <div ref={topMarqueeRef} className="flex flex-nowrap">
          <div className="flex items-center">{renderMarqueeContent('KUIT', 'right')}</div>
          <div className="flex items-center">{renderMarqueeContent('KUIT', 'right')}</div>
        </div>
      </div>

      <div className="flex-grow relative overflow-hidden">
        <TechStack
          lottie="/lottie/sixth-introduce/management.lottie"
          name="Management"
          fRef={managementGroupRef}
          staff={STAFF_DATA.Management}
        />
        <TechStack
          lottie="/lottie/sixth-introduce/android.lottie"
          name="Android"
          fRef={androidGroupRef}
          staff={STAFF_DATA.Android}
        />
        <TechStack lottie="/lottie/sixth-introduce/web.lottie" name="Web" fRef={webGroupRef} staff={STAFF_DATA.Web} />
        <TechStack
          lottie="/lottie/sixth-introduce/server.lottie"
          name="Server"
          fRef={serverGroupRef}
          staff={STAFF_DATA.Server}
        />
        <TechStack
          lottie="/lottie/sixth-introduce/design.lottie"
          name="PM & Design"
          fRef={designGroupRef}
          staff={[...STAFF_DATA.PM, ...STAFF_DATA.Design]}
        />
        <div ref={applySectionRef} className="absolute inset-0 flex flex-col items-center justify-center">
          <CountdownTimer />
          <a
            href="https://forms.gle/4rFKsrrH9No2HEiT6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-10 py-3 text-xl font-bold text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
            style={{ background: '#000' }}
          >
            KUIT 6기 지원하기
          </a>
          <p className="mt-6 text-sm text-gray-500">
            Created By{' '}
            <a
              href="https://github.com/crohasang"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-700 underline hover:text-blue-600 transition-colors"
            >
              crohasang
            </a>
          </p>
        </div>
      </div>

      <div
        className="w-full h-16 md:h-28 flex items-center mb-8 short:h-10"
        style={{ background: 'linear-gradient(90deg, #7427ff, #002aff)' }}
      >
        <div ref={bottomMarqueeRef} className="flex flex-nowrap">
          <div className="flex items-center">{renderMarqueeContent('SIXTH', 'left')}</div>
          <div className="flex items-center">{renderMarqueeContent('SIXTH', 'left')}</div>
        </div>
      </div>
    </section>
  );
};

export default ThirdInteraction;