import React from 'react';
import Image from 'next/image';

interface BackgroundProps {
  pathname: string;
}

const Background = ({ pathname }: BackgroundProps) => {
  // 해커톤 페이지에서는 렌더링하지 않음
  if (pathname === '/4/hackathon') return null;

  const generation = pathname.startsWith('/5') ? 5 : 4;
  const backgroundImage = generation === 5 ? '/image/background_5.svg' : '/image/background.svg';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      <Image
        src={backgroundImage}
        alt={`Background for KUIT ${generation}기`}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
    </div>
  );
};

export default Background;
