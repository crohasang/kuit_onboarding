'use client';

import { useCallback } from 'react';

interface FirstInteractionProps {
  refs: {
    mainRef: React.RefObject<HTMLElement>;
    textContainerRef: React.RefObject<HTMLDivElement>;
    lettersRef: React.RefObject<HTMLSpanElement[]>;
    iLineRef: React.RefObject<HTMLDivElement>;
  };
}

const FirstInteraction = ({ refs }: FirstInteractionProps) => {
  const { mainRef, textContainerRef, lettersRef, iLineRef } = refs;

  const addToLettersRef = useCallback((el: HTMLSpanElement | null) => {
    if (el && lettersRef.current && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  }, [lettersRef]);

  return (
      <main ref={mainRef} className="absolute inset-0 w-screen h-screen bg-black flex items-center justify-center">
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
  );
};

export default FirstInteraction;