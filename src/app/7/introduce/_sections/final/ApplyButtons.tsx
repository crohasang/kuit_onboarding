'use client';

export default function ApplyButtons() {
  return (
    <div className="mt-4 -mx-1 overflow-x-auto px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max min-w-full flex-nowrap justify-center gap-2">
        <a
          href="https://forms.gle/nzwVP9fqamhRYvUh8"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-[#45cc63]/75 bg-gradient-to-r from-[#2db54a] to-[#45cc63] px-3 py-2 text-[11px] font-bold text-[#041206] shadow-[0_0_20px_rgba(69,204,99,0.35)] transition-transform duration-150 hover:scale-[1.01] hover:from-[#35c454] hover:to-[#58da75] active:scale-[0.99] sm:px-4 sm:text-[13px]"
        >
          개발자/PM 지원
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeVYHZRFcJy6dP1nnAJvhr77GVQIpXanr0hudc5tSpsTrl-nA/viewform"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-white/55 bg-gradient-to-r from-[#e4e9ef] to-[#ffffff] px-3 py-2 text-[11px] font-bold text-[#101522] shadow-[0_0_16px_rgba(255,255,255,0.26)] transition-transform duration-150 hover:scale-[1.01] hover:from-[#edf2f7] hover:to-[#ffffff] active:scale-[0.99] sm:px-4 sm:text-[13px]"
        >
          디자이너 내부 지원
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf0rO5KS3EyW0l4maa-xY11I9P1ZK-1gfReLsDvKh7Ka00n-A/viewform"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-white/55 bg-gradient-to-r from-[#e4e9ef] to-[#ffffff] px-3 py-2 text-[11px] font-bold text-[#101522] shadow-[0_0_16px_rgba(255,255,255,0.26)] transition-transform duration-150 hover:scale-[1.01] hover:from-[#edf2f7] hover:to-[#ffffff] active:scale-[0.99] sm:px-4 sm:text-[13px]"
        >
          디자이너 외부 지원
        </a>
      </div>
    </div>
  );
}
