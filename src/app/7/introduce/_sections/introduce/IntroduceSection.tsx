'use client';

import introduceJson from '@/app/7/introduce/_data/introduce.json';

type IntroduceData = {
  headline: string;
  projectCta: {
    title: string;
    url: string;
  };
  whoWeWant: string[];
  about: {
    title: string;
    lines: string[];
  };
  meaning: {
    title: string;
    items: string[];
  };
};

const introduceData = introduceJson as IntroduceData;

export default function IntroduceSection() {
  return (
    <section className="flex h-full min-h-0 flex-col">
      <h2 className="text-[20px] font-bold tracking-[0.03em] text-white sm:text-[26px]">{introduceData.headline}</h2>

      <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="space-y-4 text-[13px] leading-relaxed text-white/90 sm:text-[14px]">
          <div className="space-y-1.5">
            <p>{introduceData.projectCta.title}</p>
            <a
              href={introduceData.projectCta.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[#9ed7ff] underline-offset-2 hover:underline"
            >
              🔗 {introduceData.projectCta.url}
            </a>
          </div>

          <div className="space-y-1.5">
            {introduceData.whoWeWant.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="space-y-1">
            <p>{introduceData.about.title}</p>
            {introduceData.about.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="space-y-1.5 pb-1">
            <p>{introduceData.meaning.title}</p>
            {introduceData.meaning.items.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
