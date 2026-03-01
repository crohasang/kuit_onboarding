'use client';

export default function ContactLinks() {
  return (
    <div className="mt-5 space-y-1.5 text-[12px] text-white/85 sm:text-[13px]">
      <p className="font-semibold text-white">✅ 문의 사항</p>
      <p>
        ✔️ 카카오톡 플러스 친구 :
        <a className="ml-1 text-[#9ed7ff] underline-offset-2 hover:underline" href="http://pf.kakao.com/_Dxbgvxj" target="_blank" rel="noreferrer">
          http://pf.kakao.com/_Dxbgvxj
        </a>
      </p>
      <p>
        ✔️ 인스타그램 계정 :
        <a className="ml-1 text-[#9ed7ff] underline-offset-2 hover:underline" href="https://www.instagram.com/kuit.official" target="_blank" rel="noreferrer">
          https://www.instagram.com/kuit.official
        </a>
      </p>
    </div>
  );
}

