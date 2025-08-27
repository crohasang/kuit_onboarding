'use client';

import { useRef, useCallback } from 'react';
import { useTextIntroAndZoom } from '../hooks/useTextIntroAndZoom.ts';

const FirstInteraction = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<Array<HTMLSpanElement>>([]);
  const iLineRef = useRef<HTMLDivElement | null>(null);

  useTextIntroAndZoom({ mainRef, textContainerRef, lettersRef, iLineRef });

  const addToLettersRef = useCallback((el: HTMLSpanElement | null) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  }, []);

  return (
    <>
      <main ref={mainRef} className="w-screen h-screen bg-black flex items-center justify-center">
        <div
          ref={textContainerRef}
          className="grid grid-cols-[auto_auto_1ch_auto] font-semibold text-white items-start"
          style={{ fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 1.2 }}
        >
          <span ref={addToLettersRef} className="col-start-1">K</span>
          <span ref={addToLettersRef} className="col-start-2">U</span>
          <span ref={addToLettersRef} className="col-start-4 justify-self-start">T</span>
          <div ref={iLineRef} className="col-start-3 row-start-1 justify-self-center w-[0.15em] h-[1em] bg-white relative top-[0.25em]"></div>
          <span ref={addToLettersRef} className="col-start-2 justify-self-start">S</span>
          <div className="col-start-4 justify-self-start flex">
            <span ref={addToLettersRef}>X</span>
            <span ref={addToLettersRef}>T</span>
            <span ref={addToLettersRef}>H</span>
          </div>
        </div>
      </main>
      <div style={{ height: '3000px', background: 'black' }}></div>
    </>
  );
}

export default FirstInteraction;