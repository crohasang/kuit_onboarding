'use client';

import Link from 'next/link';
import KuitAnimation from './KuitAnimation';

const HomeContent = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        <KuitAnimation />
        <div className="w-full px-4 sm:px-0 sm:w-auto">
          <Link 
            href="/4/hackerthon" 
            className="btn-nova"
          >
            4기 해커톤 Code Nova 신청
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
