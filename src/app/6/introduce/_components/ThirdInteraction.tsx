'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { DotLottiePlayer as Player } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface ThirdInteractionProps {
  refs: {
    sectionRef: React.RefObject<HTMLElement>;
    managementGroupRef: React.RefObject<HTMLDivElement>;
    androidGroupRef: React.RefObject<HTMLDivElement>;
    webGroupRef: React.RefObject<HTMLDivElement>;
    serverGroupRef: React.RefObject<HTMLDivElement>;
    designGroupRef: React.RefObject<HTMLDivElement>;
  };
}

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-12 md:h-12 mx-4 text-white"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-12 md:h-12 mx-4 text-white"
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

const MarqueeItem = ({ text, direction }: { text: string; direction: 'left' | 'right' }) => (
  <div className="flex items-center flex-shrink-0">
    <span className="text-2xl md:text-4xl font-semibold text-white mx-4">{text}</span>
    {direction === 'right' ? <RightArrow /> : <LeftArrow />}
  </div>
);

const TechStack = ({
  lottie,
  name,
  fRef,
}: {
  lottie: string;
  name: string;
  fRef: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={fRef}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="flex items-center justify-center">
      <Player src={lottie} autoplay loop style={{ width: '250px', height: '250px' }} />
      <span className="text-5xl md:text-7xl font-bold text-black ml-4 md:ml-8">{name}</span>
    </div>
  </div>
);

const ThirdInteraction = ({ refs }: ThirdInteractionProps) => {
  const { sectionRef, managementGroupRef, androidGroupRef, webGroupRef, serverGroupRef, designGroupRef } = refs;
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
        className="w-full h-16 md:h-28 flex items-center mt-8"
        style={{ background: 'linear-gradient(270deg, #7427ff, #002aff)' }}
      >
        <div ref={topMarqueeRef} className="flex flex-nowrap">
          <div className="flex items-center">{renderMarqueeContent('KUIT', 'right')}</div>
          <div className="flex items-center">{renderMarqueeContent('KUIT', 'right')}</div>
        </div>
      </div>

      <div className="flex-grow relative">
        <TechStack
            lottie="/lottie/sixth-introduce/management.lottie"
            name="Management"
            fRef={managementGroupRef}
        />
        <TechStack
          lottie="/lottie/sixth-introduce/android.lottie"
          name="Android"
          fRef={androidGroupRef}
        />
        <TechStack lottie="/lottie/sixth-introduce/web.lottie" name="Web" fRef={webGroupRef} />
        <TechStack
          lottie="/lottie/sixth-introduce/server.lottie"
          name="Server"
          fRef={serverGroupRef}
        />
        <TechStack
          lottie="/lottie/sixth-introduce/design.lottie"
          name="PM & Design"
          fRef={designGroupRef}
        />
      </div>

      <div
        className="w-full h-16 md:h-28 flex items-center mb-8"
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