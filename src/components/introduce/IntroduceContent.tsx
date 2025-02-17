'use client';

import React from 'react';
import Counter from './Counter';
import { INTRODUCE_CONTENT } from '@/constants/introduceConstants';

interface IntroduceContentProps {
  generation?: 4 | 5;
}

const IntroduceContent = ({ generation = 4 }: IntroduceContentProps) => {
  const content = INTRODUCE_CONTENT[generation];

  const renderContent = () => {
    return (
      <>
        {content.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`mb-4 ${
              index >= 3 ? 'text-kuit font-bold text-lg sm:text-xl' : 'text-sm sm:text-base'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-transparent text-white p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8 space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl mb-2">진행된 프로젝트</div>
            <div className="flex items-baseline">
              <Counter end={content.statistics.projects} duration={2000} />
              <span className="text-lg sm:text-xl ml-1">개</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl mb-2">진행된 스터디</div>
            <div className="flex items-baseline">
              <Counter end={content.statistics.studies} duration={2000} />
              <span className="text-lg sm:text-xl ml-1">개</span>
            </div>
          </div>
        </div>
        <div className="text-center max-w-2xl px-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default IntroduceContent;
