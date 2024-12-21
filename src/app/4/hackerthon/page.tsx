'use client';

import { Metadata } from 'next';
import CountdownTimer from '@/components/hackerthon/CountdownTimer';
import NovaTimeline from '@/components/hackerthon/NovaTimeline';
import './hackerthon.css';

const HackerthonPage = () => {

  const timelineEvents = [
    {
      title: '접수',
      date: '12.23(월) ~ 12.27(금)',
      isActive: true
    },
    {
      title: '주제/팀 발표',
      date: '12.30(월) 10:00'
    },
    {
      title: '사전작업',
      date: '12.30(월) 10:00 ~ 2025.01.03(금) 18:00',
      description: '* 각 팀 개별 진행'
    },
    {
      title: '해커톤',
      date: '2025.01.03(금) 18:00 ~ 2025.01.04(토) 오전',
      isLast: true
    }
  ];

  return (
    <div className="hackerthon-background min-h-screen">
      <div className="firework-background">
        <div className="supernova"></div>
      </div>
      <div className="cosmic-content flex flex-col items-center min-h-screen p-4 sm:p-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-2">
          <h1 className="text-3xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">Code Nova</span>
          </h1>
        </div>
        <p className="subtitle text-base sm:text-lg mb-2 text-center text-white max-w-2xl">
          When Our <span className="font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">Code</span> Becomes a <span className="font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent">Nova</span>
        </p>
        <p className="text-base sm:text-lg mb-12 text-center text-kuit">
          KUIT 4th hackerthon
        </p>
        
        {/* 카운트다운 타이머 */}
        <div className="w-full max-w-4xl mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CountdownTimer
            targetDate={new Date('2024-12-27T23:59:59+09:00')}
            label={<span className="text-red-300 text-white">접수 마감까지</span>}
          />
          <CountdownTimer
            targetDate={new Date('2025-01-03T18:00:00+09:00')}
            label={<span className="text-red-300 text-white">본 행사 시작까지</span>}
          />
        </div>

        {/* 신청 버튼 섹션 */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 mb-20">
          <a
            href="https://forms.gle/4D6y2xQK7FvnGM8G8"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full px-8 py-3 text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            <span className="relative inline-flex items-center text-lg">
              KUIT 부원 전용 신청
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="https://forms.gle/n86ZHBWRe8QXiHW8A"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full px-8 py-3 text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            <span className="relative inline-flex items-center text-lg">
              KUIT 부원 외 신청
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>

        {/* 설명 섹션 */}
        <div className="w-full max-w-5xl space-y-8">
          {/* 행사 소개와 장소 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <section className="h-full bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  무슨 행사인가요?
                </h2>
                <p className="text-red-200/90 leading-relaxed text-lg space-y-4">
                  <span className="block">건국대학교 기획/개발 동아리 KUIT에서 진행하는 해커톤 행사입니다.</span>
                </p>
              </section>
            </div>
            <div>
              <section className="h-full bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  어디서 열리나요?
                </h2>
                <p className="text-red-200/90">
                  건국대학교 신공학관
                </p>
                <p className="text-red-200/70 text-sm mt-1">
                  스마트팩토리 2층
                </p>
              </section>
            </div>
          </div>

          {/* 참여 자격 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
              누가 참여 가능한가요?
            </h2>
            <p className="text-red-200/90 leading-relaxed text-lg">
            KUIT 소속 부원, KU창업클럽 소속 인원, 건국대학교 재학생이시면 참여 가능합니다!<br/><br/>
            참여 가능 파트<br/>
            - Android(kotlin, xml)<br/>
            - Web(React)<br/>
            - Server(Spring)<br/>
            - 기획/디자인
            </p>
          </section>

          {/* 일정 섹션 */}
          <NovaTimeline events={timelineEvents} />

          {/* 주제 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 
                flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  해커톤 주제는 무엇인가요?
                </h2>
                <p className="text-red-200/90 mt-2">
                  팀 발표 시 함께 공개됩니다.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default HackerthonPage;
