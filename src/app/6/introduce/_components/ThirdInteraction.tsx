'use client';

interface ThirdInteractionProps {
  refs: {
    sectionRef: React.RefObject<HTMLElement>;
  };
}

const ThirdInteraction = ({ refs }: ThirdInteractionProps) => {
  const { sectionRef } = refs;

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 w-screen h-screen bg-white"
      style={{ visibility: 'hidden' }}
    />
  );
};

export default ThirdInteraction;