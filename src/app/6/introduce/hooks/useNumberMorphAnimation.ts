// src/hooks/useNumberMorphAnimation.ts

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NUMBER_MORPH_CONFIG } from '../constants/animationConfig.ts';

gsap.registerPlugin(ScrollTrigger);

// 훅이 필요로 하는 모든 ref들의 타입을 정의합니다.
interface AnimationRefs {
  sectionRef: React.RefObject<HTMLElement>;
  projectGroupRef: React.RefObject<HTMLDivElement>;
  studyGroupRef: React.RefObject<HTMLDivElement>;
  projectLinkRef: React.RefObject<HTMLDivElement>;
  curriculumLinkRef: React.RefObject<HTMLDivElement>;
  digit3Ref: React.RefObject<HTMLSpanElement>;
  digit4Ref: React.RefObject<HTMLSpanElement>;
  projectTextRef: React.RefObject<HTMLSpanElement>;
}

export function useNumberMorphAnimation({
  sectionRef,
  projectGroupRef,
  studyGroupRef,
  projectLinkRef,
  curriculumLinkRef,
  digit3Ref,
  digit4Ref,
  projectTextRef,
}: AnimationRefs) {
  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(projectGroupRef.current, { autoAlpha: 1 });
      gsap.set(studyGroupRef.current, { autoAlpha: 0 });
      gsap.set(projectLinkRef.current, { autoAlpha: 0, y: NUMBER_MORPH_CONFIG.link.initialY });
      gsap.set(curriculumLinkRef.current, { autoAlpha: 0, y: NUMBER_MORPH_CONFIG.link.initialY });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: NUMBER_MORPH_CONFIG.scroll.endTrigger,
          scrub: 1,
          pin: true,
        },
      });

      tl
        .to({}, { duration: 0.5 })
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
        .to({}, { duration: 1 })
        .to(curriculumLinkRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
}