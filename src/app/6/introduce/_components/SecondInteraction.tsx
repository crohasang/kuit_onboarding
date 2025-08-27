'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecondInteraction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 애니메이션 그룹 참조
  const projectGroupRef = useRef<HTMLDivElement | null>(null);
  const studyGroupRef = useRef<HTMLDivElement | null>(null);
  const projectLinkRef = useRef<HTMLDivElement | null>(null); // div로 변경
  const curriculumLinkRef = useRef<HTMLDivElement | null>(null); // div로 변경

  // 애니메이션 개별 요소 참조
  const digit3Ref = useRef<HTMLSpanElement | null>(null);
  const digit4Ref = useRef<HTMLSpanElement | null>(null);
  const projectTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 초기 상태 설정
      gsap.set(projectGroupRef.current, { autoAlpha: 1 });
      gsap.set(studyGroupRef.current, { autoAlpha: 0 });
      gsap.set(projectLinkRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(curriculumLinkRef.current, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=4000',
          scrub: 1,
          pin: true,
        },
      });

      tl
        .to({}, { duration: 0.5 })
        .to(projectLinkRef.current, { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' })
        .to({}, { duration: 1 })
        .to([digit3Ref.current, projectTextRef.current, projectLinkRef.current], {
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .to(digit4Ref.current, {
          x: () => -digit3Ref.current!.offsetWidth,
          duration: 1,
          ease: 'power3.inOut',
        }, '<')
        .to(studyGroupRef.current, {
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.7')
        .to(digit4Ref.current, { autoAlpha: 0, duration: 0.1 }, '-=0.7')
        .to({}, { duration: 1 })
        .to(curriculumLinkRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          {/* "34개의 프로젝트" 그룹 */}
          <div ref={projectGroupRef} className="absolute inset-0 flex items-baseline justify-center">
            <span ref={digit3Ref} style={numberStyles}>3</span>
            <span ref={digit4Ref} style={numberStyles}>4</span>
            <span ref={projectTextRef} style={textStyles}>개의 프로젝트</span>
          </div>

          {/* "49개의 스터디" 그룹 (겹쳐서 배치) */}
          <div ref={studyGroupRef} className="absolute inset-0 flex items-baseline justify-center">
            <span style={numberStyles}>4</span>
            <span style={numberStyles}>9</span>
            <span style={textStyles}>개의 스터디</span>
          </div>
        </div>
        {/* 하단 링크 컨테이너 */}
        <div className="relative h-12">
          {/* 프로젝트 링크 */}
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