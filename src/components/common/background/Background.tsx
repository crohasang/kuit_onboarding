import React from 'react';
import Image from 'next/image';

const Background: React.FC = () => {
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
