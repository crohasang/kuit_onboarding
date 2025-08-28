'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { DotLottiePlayer as Player } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { STAFF_DATA, StaffMember } from '../_constants/staff.ts';

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
  staff,
}: {
  lottie: string;
  name: string;
  fRef: React.RefObject<HTMLDivElement>;
  staff: StaffMember[];
}) => (
  <div ref={fRef} className="absolute inset-0 flex items-center justify-center p-4">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl">
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
          <Player src={lottie} autoplay loop style={{ width: '100%', height: '100%' }} />
        </div>
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-black ml-2 md:ml-6">{name}</span>
      </div>
      <div
        className={
          name === 'PM & Design'
            ? 'grid grid-cols-2 gap-x-8 gap-y-6 mt-6 md:mt-10'
            : 'flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-10'
        }
      >
        {staff.map(member => (
          <div key={member.name} className="flex flex-col items-center text-center w-24 sm:w-28">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2">
              <Image src={member.imageUrl} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center space-x-1.5">
              <p className="font-bold text-sm sm:text-base text-black whitespace-nowrap">{member.name}</p>
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 hover:text-black" />
                </a>
              )}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              {member.position}
              {name !== 'Management' && ' 파트장'}
            </p>
          </div>
        ))}
      </div>
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