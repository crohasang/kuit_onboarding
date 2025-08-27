'use client';

import { useRef } from 'react';
import { useNumberMorphAnimation } from '../hooks/useNumberMorphAnimation';

const SecondInteraction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 애니메이션 그룹 참조
  const projectGroupRef = useRef<HTMLDivElement | null>(null);
  const studyGroupRef = useRef<HTMLDivElement | null>(null);
  const projectLinkRef = useRef<HTMLDivElement | null>(null);
  const curriculumLinkRef = useRef<HTMLDivElement | null>(null);

  // 애니메이션 개별 요소 참조
  const digit3Ref = useRef<HTMLSpanElement | null>(null);
  const digit4Ref = useRef<HTMLSpanElement | null>(null);
  const projectTextRef = useRef<HTMLSpanElement | null>(null);

  // 훅을 호출하여 애니메이션 로직을 적용합니다.
  useNumberMorphAnimation({
    sectionRef,
    projectGroupRef,
    studyGroupRef,
    projectLinkRef,
    curriculumLinkRef,
    digit3Ref,
    digit4Ref,
    projectTextRef,
  });

  const numberStyles: React.CSSProperties = {
    fontSize: 'clamp(48px, 15vw, 200px)',
    fontWeight: 600,
    lineHeight: 1,
  };

  const textStyles: React.CSSProperties = {
    fontSize: 'clamp(24px, 5vw, 60px)',
    fontWeight: 500,
    lineHeight: 1,
    marginLeft: '0.2em',
    whiteSpace: 'nowrap',
  };

  const linkTextStyles: React.CSSProperties = {
    fontSize: 'clamp(16px, 2.5vw, 24px)',
    fontWeight: 400,
    padding: '0 20px',
    whiteSpace: 'nowrap',
  };

  return (
    <section ref={sectionRef} className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="flex flex-col items-center text-white">
        <div className="relative flex items-baseline h-[1.2em]" style={{ fontSize: numberStyles.fontSize }}>
          <div ref={projectGroupRef} className="absolute inset-0 flex items-baseline justify-center">
            <span ref={digit3Ref} style={numberStyles}>3</span>
            <span ref={digit4Ref} style={numberStyles}>4</span>
            <span ref={projectTextRef} style={textStyles}>개의 프로젝트</span>
          </div>

          <div ref={studyGroupRef} className="absolute inset-0 flex items-baseline justify-center">
            <span style={numberStyles}>4</span>
            <span style={numberStyles}>9</span>
            <span style={textStyles}>개의 스터디</span>
          </div>
        </div>
        <div className="relative h-12">
          <div ref={projectLinkRef} className="absolute inset-0 flex justify-center">
            <a
              href="https://konkuk-kuit.notion.site/kuit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={linkTextStyles}
            >
              👨‍💻 지금까지의 프로젝트 확인하기 
            </a>
          </div>
          {/* 커리큘럼 링크 */}
          <div ref={curriculumLinkRef} className="absolute inset-0 flex justify-center">
            <a
              href="https://konkuk-kuit.notion.site/6th-curriculum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={linkTextStyles}
            >
            📝 KUIT 6기 커리큘럼 확인하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondInteraction;