'use client';

import CountdownTimer from '@/components/hackathon/CountdownTimer';
import NovaTimeline from '@/components/hackathon/NovaTimeline';
import Footer from '@/components/staff/Footer';
import './hackathon.css';

const HackathonPage = () => {

  const timelineEvents = [
    {
      title: '접수',
      date: '12.22(일) ~ 12.27(금)',
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
      title: '해커톤 시작',
      date: '2025.01.03(금) 18:00'
    },
    {
      title: '개발 완료 및 발표',
      date: '2025.01.04(토) 08:00'
    },
    {
      title: '평가 결과 발표 및 시상 (상금 제공)',
      date: '2025.01.04(일) 09:00',
      isLast: true
    }
  ];

  return (
    <div className="hackathon-background min-h-screen">
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
        <p className="text-base sm:text-lg font-bold mb-12 text-center">
          <span className="text-kuit">KUIT</span> 4th Hackathon
        </p>
        
        {/* 카운트다운 타이머 */}
        <div className="w-full max-w-4xl mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CountdownTimer
            targetDate={new Date('2024-12-28T00:00:00+09:00')}
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
            className="group w-full px-8 py-3 text-white font-medium rounded-lg bg-red-500/50 hover:bg-white hover:text-black transition-all duration-300 text-center"
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
            className="group w-full px-8 py-3 text-white font-medium rounded-lg bg-red-500/50 hover:bg-white hover:text-black transition-all duration-300 text-center"
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
                      행사 설명
                    </h2>
                <p className="text-red-200/90 leading-relaxed text-lg space-y-4">
                      Code Nova는 KUIT 부원들이 한 학기 동안 배운 내용을 활용하여 프로젝트를 만들어내는 해커톤입니다.
                      <br /><br />
                      2025년 1월 3일 오후 6시부터 다음날 오전 8시까지 밤샘 코딩을 통해 사전작업 기간 동안 기획했던 프로젝트의 구현을 진행하게 됩니다.
                      <br /><br />
                      이후 프로젝트 발표와 평가가 이루어지고, 평가 결과 공개 및 수상이 진행됩니다.
                      <span className="block text-sm font-light text-red-200/70 italic">
                        * 해커톤(Hackathon)이란? 해킹(Hacking)과 마라톤(Marathon)의 합성어로, 마라톤처럼 일정 기간 동안 밤을 새워가며 아이디어를 실현하는 개발 이벤트를 의미합니다.
                      </span>
                    </p>
              </section>
            </div>
            <div>
              <section className="h-full bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                      개최 장소
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

          {/* 참가 자격 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  참가 자격
                </h2>
            <p className="text-red-200/90 leading-relaxed text-lg">
                - KUIT 부원 (유령부원 포함)<br/>
                - KU창업클럽 회원<br/>
                - 건국대학교 학생 (휴학생, 졸업생 포함)
                </p>
          </section>
          <section className="h-full bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  참가 가능 파트
                </h2>
            <p className="text-red-200/90 leading-relaxed text-lg">
                - Android(xml 또는 Jetpack Compose)<br/>
                - Web(React)<br/>
                - Server(Spring)<br/>
                - 기획/디자인
                </p>
          </section>

          {/* 일정 섹션 */}
          <NovaTimeline events={timelineEvents} />

          {/* 해커톤 주제 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 
                flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  해커톤 주제
                </h2>
                <p className="text-red-200/90 mt-2">
                팀 발표와 동시에 공개됩니다.
                </p>
              </div>
            </div>
          </section>

          {/* 참가비 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 
                flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  참가비
                </h2>
                <p className="text-red-200/90 mt-2">
                  - KUIT 4기 부원의 경우 5,000원입니다.<br/>
                  - 그 외의 경우(유령부원 포함) 10,000원입니다.
                </p>
              </div>
            </div>
          </section>

          {/* 식사 제공 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 
                flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3zm14 10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v6z M7 8h8M7 12h8" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  식사 제공 여부
                </h2>
                <p className="text-red-200/90 mt-2">
                  석식과 야식이 제공될 예정입니다.
                </p>
              </div>
            </div>
          </section>

          {/* 튜토리얼 제공 섹션 */}
          <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 
                flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
                  튜토리얼 제공 여부
                </h2>
                <p className="text-red-200/90 mt-2">
                  협업이 처음이신 참여자 분들을 위한 기획/디자인/협업 관련 튜토리얼 및 예시 템플릿이 팀 매칭 직후 제공될 예정입니다.
                </p>
              </div>
            </div>
          </section>

          {/* 후원 섹션 */}
          <div className="w-full max-w-4xl mx-auto px-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm">
              <p className="text-white text-lg">후원:</p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-white text-lg text-center sm:text-left whitespace-nowrap">건국대학교 창업지원본부</span>
                <img 
                  src="/image/startup_konkuk.png" 
                  alt="건국대학교 창업지원본부" 
                  className="h-12 w-auto mt-2 sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HackathonPage;
