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
            className="btn-nova group"
          >
            <span className="relative inline-flex items-center">
              4기 해커톤 Code Nova 신청
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
