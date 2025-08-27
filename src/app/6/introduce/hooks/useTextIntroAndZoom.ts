import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TEXT_ANIMATION_CONFIG } from '../constants/animationConfig.ts';

gsap.registerPlugin(ScrollTrigger);

interface AnimationRefs {
  mainRef: React.RefObject<HTMLElement>;
  textContainerRef: React.RefObject<HTMLDivElement>;
  lettersRef: React.RefObject<Array<HTMLSpanElement>>;
  iLineRef: React.RefObject<HTMLDivElement>;
}

export function useTextIntroAndZoom({
  mainRef,
  textContainerRef,
  lettersRef,
  iLineRef,
}: AnimationRefs) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, { autoAlpha: 0, y: 10 });
      gsap.set(iLineRef.current, { scaleY: 0, transformOrigin: 'top center' });

      gsap.timeline()
        .to(lettersRef.current, {
          autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out',
          stagger: TEXT_ANIMATION_CONFIG.intro.letterStagger,
        })
        .to(iLineRef.current, {
          scaleY: TEXT_ANIMATION_CONFIG.intro.lineFinalScaleY,
          duration: TEXT_ANIMATION_CONFIG.intro.lineScaleDuration,
          ease: 'expo.inOut',
        });

      gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current, pin: textContainerRef.current, scrub: 1,
          start: 'top top', end: TEXT_ANIMATION_CONFIG.scroll.endTrigger,
        },
      })
      .to(textContainerRef.current, {
        scale: TEXT_ANIMATION_CONFIG.scroll.containerFinalScale,
        ease: 'power2.in',
      })
      .to(mainRef.current, {
        backgroundColor: 'white', ease: 'power2.in',
      }, '<');
    }, mainRef);

    return () => ctx.revert();
  }, []); 
}