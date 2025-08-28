// src/app/_components/IntroduceAnimationContainer.tsx

'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FirstInteraction from "./FirstInteraction.tsx";
import SecondInteraction from "./SecondInteraction.tsx";
import { NUMBER_MORPH_CONFIG, TEXT_ANIMATION_CONFIG } from '../constants/animationConfig.ts';
import ThirdInteraction from './ThirdInteraction.tsx';

gsap.registerPlugin(ScrollTrigger);

const IntroduceAnimationContainer = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstInteractionRef = useRef<HTMLElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const iLineRef = useRef<HTMLDivElement | null>(null);
  const secondInteractionRef = useRef<HTMLElement | null>(null);
  const projectGroupRef = useRef<HTMLDivElement | null>(null);
  const studyGroupRef = useRef<HTMLDivElement | null>(null);
  const projectLinkRef = useRef<HTMLDivElement | null>(null);
  const curriculumLinkRef = useRef<HTMLDivElement | null>(null);
  const digit3Ref = useRef<HTMLSpanElement | null>(null);
  const digit4Ref = useRef<HTMLSpanElement | null>(null);
  const projectTextRef = useRef<HTMLSpanElement | null>(null);
  const studyDigit4Ref = useRef<HTMLSpanElement | null>(null);
  const digit9Ref = useRef<HTMLSpanElement | null>(null);
  const studyTextRef = useRef<HTMLSpanElement | null>(null);
  const thirdInteractionRef = useRef<HTMLElement | null>(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, { autoAlpha: 0, y: 10 });
      gsap.set(iLineRef.current, { scaleY: 0, transformOrigin: 'top center' });
      gsap.set(secondInteractionRef.current, { autoAlpha: 0 });
      gsap.set(thirdInteractionRef.current, { autoAlpha: 0 }); 

      const introTl = gsap.timeline({
        onComplete: () => {
          setIsIntroFinished(true);
        }
      });

      introTl
        .to(lettersRef.current, {
          autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out',
          stagger: TEXT_ANIMATION_CONFIG.intro.letterStagger,
        })
        .to(iLineRef.current, {
          scaleY: () => {
            if (!iLineRef.current) return 1;
            const rect = iLineRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const distanceToBottom = viewportHeight - rect.top;
            const initialHeight = iLineRef.current.offsetHeight;
            if (initialHeight === 0) return 1;
            return distanceToBottom / initialHeight;
          },
          duration: TEXT_ANIMATION_CONFIG.intro.lineScaleDuration,
          ease: 'expo.inOut',
        });
    }, containerRef);
    return () => ctx.revert();
  }, []); 

  useEffect(() => {
    if (!isIntroFinished) return;

    const ctx = gsap.context(() => {
      gsap.set(projectGroupRef.current, { autoAlpha: 1 });
      gsap.set(studyGroupRef.current, { autoAlpha: 0 });
      gsap.set(projectLinkRef.current, { autoAlpha: 0, y: NUMBER_MORPH_CONFIG.link.initialY });
      gsap.set(curriculumLinkRef.current, { autoAlpha: 0, y: NUMBER_MORPH_CONFIG.link.initialY });

      const scrollTl = gsap.timeline();
      scrollTl
        .to(textContainerRef.current, {
          scale: TEXT_ANIMATION_CONFIG.scroll.containerFinalScale,
          ease: 'power2.in',
        })
        .to(firstInteractionRef.current, {
          autoAlpha: 0,
          duration: 0.5, 
        })
        .to({}, { duration: 0.2 }) 
        .to(secondInteractionRef.current, {
          autoAlpha: 1,
          duration: 0.5,
        })
        .to(projectLinkRef.current, { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' })
        .to({}, { duration: 1 })
        .to([digit3Ref.current, projectTextRef.current, projectLinkRef.current], {
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .to(digit4Ref.current, {
          x: () => -digit3Ref.current!.offsetWidth,
          duration: 1,
          ease: 'power3.inOut',
        }, '<')
        .to(studyGroupRef.current, {
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.7')
        .to(digit4Ref.current, { autoAlpha: 0, duration: 0.1 }, '-=0.7')
        .to(curriculumLinkRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        })
        .to({}, { duration: 1 })
        .to([studyDigit4Ref.current, studyTextRef.current, curriculumLinkRef.current], {
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .to(digit9Ref.current, {
          scale: 50,
          duration: 2,
          ease: 'power2.in',
          transformOrigin: '75% 25%',
        }, '<')
        .to(thirdInteractionRef.current, {
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.in',
        }, '<+=1.5');

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=10000',
        pin: true,
        scrub: 1,
        animation: scrollTl,
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isIntroFinished]);

  return (
    <div ref={containerRef} className="relative h-screen bg-black">
      <FirstInteraction
        refs={{
          mainRef: firstInteractionRef,
          textContainerRef,
          lettersRef,
          iLineRef,
        }}
      />
      <SecondInteraction
        refs={{
          sectionRef: secondInteractionRef,
          projectGroupRef,
          studyGroupRef,
          projectLinkRef,
          curriculumLinkRef,
          digit3Ref,
          digit4Ref,
          projectTextRef,
          studyDigit4Ref,
          digit9Ref,
          studyTextRef,
        }}
      />
      <ThirdInteraction refs={{ sectionRef: thirdInteractionRef }} />
    </div>
  );
};

export default IntroduceAnimationContainer;