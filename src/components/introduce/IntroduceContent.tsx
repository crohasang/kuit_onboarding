import React from 'react';
import Counter from './Counter';

const IntroduceContent = () => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-transparent text-white p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8 space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl mb-2">진행된 프로젝트</div>
            <div className="flex items-baseline">
              <Counter end={14} duration={2000} />
              <span className="text-lg sm:text-xl ml-1">개</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg sm:text-xl mb-2">진행된 스터디</div>
            <div className="flex items-baseline">
              <Counter end={29} duration={2000} />
              <span className="text-lg sm:text-xl ml-1">개</span>
            </div>
          </div>
        </div>
        <div className="text-center max-w-2xl px-4">
          <p className="mb-4 text-sm sm:text-base">
            2023년에 시작된 KUIT은 어느덧 4기를 맞이했습니다.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            KUIT은 학기 중에는 파트별로 스터디를 진행하며,
          </p>
          <p className="mb-4 text-sm sm:text-base">
            방학 중에는 Android, Web, Server 파트와 PM, 디자이너가 협업하여
            프로젝트를 진행합니다.
          </p>
          <p className="mb-4 text-kuit font-bold text-lg sm:text-xl">
            KUIT 4기 모집이 시작됩니다.
          </p>
          <p className="text-kuit font-bold text-lg sm:text-xl">
            한 학기 동안 함께 성장할 여러분의 지원을 기다리고 있습니다!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroduceContent;
