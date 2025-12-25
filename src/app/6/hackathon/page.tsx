import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import TimelineItem from "./TimelineItem";

export const metadata: Metadata = {
  title: "KUIT 6th Hackathon",
  description: "건국대학교 기획/개발 동아리 KUIT 6기 해커톤 페이지",
};

export default function HackathonPage() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center bg-black text-white font-pretendard overflow-y-auto overflow-x-hidden overscroll-y-none selection:bg-kuit-green selection:text-black">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="https://d1vuw798i1lfdr.cloudfront.net/sixth-hackathon/sixth-hackathon-background.png"
          alt="KUIT 6th Hackathon Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      </div>

      <section className="relative z-10 w-full min-h-[90vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full border border-kuit-green/30 bg-kuit-green/10 text-kuit-green text-sm md:text-base font-medium backdrop-blur-sm">
            [혁신사업] 2026 KUIT 6기 Hackathon
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-futura tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl">
            KUIT 6th<br />Hackathon
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <Link
              href="https://forms.gle/qjvq4Cj99J8tFJ3E7"
              target="_blank"
              className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-kuit-green/50 hover:text-kuit-green transition-all hover:scale-105"
            >
              <span className="relative z-10">KUIT 부원 지원하기</span>
            </Link>
            <Link
              href="https://forms.gle/TbMM1vGz1vwmjgvD6"
              target="_blank"
              className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-kuit-green/50 hover:text-kuit-green transition-all hover:scale-105"
            >
              외부 참가자 지원하기
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-32 space-y-24">
        <section className="w-full">
          <div className="w-full p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-500">
            <div className="text-lg text-gray-200 leading-relaxed font-light">
              <p>
                <strong className="text-white font-bold">KUIT 6th Hackathon</strong>은 KUIT 부원들이 한 학기 동안 배운 내용을 활용하여 프로젝트를 만들어내는 해커톤입니다.
              </p>
              <p>
                2026년 1월 9일 오후 6시부터 다음날 오전 8시까지 <span className="text-kuit-green font-semibold">밤샘 코딩</span>을 통해 사전작업 기간 동안 기획했던 프로젝트의 구현을 진행하게 됩니다.
              </p>
              <p>
                이후 프로젝트 발표와 평가가 이루어지고, 평가 결과 공개 및 수상이 진행됩니다.
              </p>
              <div className="mt-8 p-5 bg-black/40 rounded-2xl border border-white/5 text-sm text-gray-400 flex gap-3">
                <span className="text-kuit-green font-bold shrink-0">* Hackathon?</span>
                <span>해킹(Hacking)과 마라톤(Marathon)의 합성어로, 마라톤처럼 일정 기간 동안 밤을 새워가며 아이디어를 실현하는 개발 이벤트</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Location", subtitle: "개최 장소", content: "건국대학교 신공학관\n(상세 장소 추후 공지)" },
            { title: "Qualification", subtitle: "참가 자격", content: "개발에 관심을 가지고 있는 누구나" },
            { title: "Positions", subtitle: "참가 가능 파트", content: "기획\n디자인\nAndroid\nWeb Frontend\nServer (Spring)" }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-kuit-green/30 transition-all duration-300 hover:-translate-y-2 shadow-lg">
              <h4 className="text-xs text-kuit-green font-bold tracking-widest uppercase mb-3 opacity-80">{item.title}</h4>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-kuit-green transition-colors">{item.subtitle}</h3>
              <p className="text-gray-300 text-lg font-light whitespace-pre-wrap">{item.content}</p>
            </div>
          ))}
        </section>

        <section className="relative py-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold mb-4">Timeline</h3>
            <p className="text-gray-400 font-light">해커톤 진행 일정</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-kuit-green/50 to-transparent" />
            
            <div className="space-y-12">
              <TimelineItem 
                date="2025.12.26 ~ 01.02" 
                title="접수" 
                desc="12.26(금) ~ 01.02(금) 23:59"
                align="left"
              />
              <TimelineItem 
                date="2026.01.05" 
                title="주제/팀 발표" 
                desc="01.05(월) 12:00"
                align="right"
              />
              <TimelineItem 
                date="2026.01.05 ~ 01.09" 
                title="사전 준비 기간" 
                desc="01.05(월) 12:00 ~ 01.09(금) 18:00"
                align="left"
              />
              <TimelineItem 
                date="2026.01.09" 
                title="해커톤 시작" 
                desc="01.09(금) 18:00"
                align="right"
              />
              <TimelineItem 
                date="2026.01.10" 
                title="개발 완료 및 발표" 
                desc="01.10(토) 08:00"
                align="left"
              />
              <TimelineItem 
                date="2026.01.10" 
                title="시상식" 
                desc="01.10(토) 09:00 평가 결과 발표 및 시상"
                align="right"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
