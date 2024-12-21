import React from 'react';
import Image from 'next/image';

interface BackgroundProps {
  pathname: string;
}

const Background = ({ pathname }: BackgroundProps) => {
  // 해커톤 페이지에서는 렌더링하지 않음
  if (pathname === '/4/hackerthon') return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      <Image
        src="/image/background.svg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
    </div>
  );
};

export default Background;
