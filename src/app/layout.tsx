// 1. 'use client'를 추가하여 클라이언트 컴포넌트로 전환합니다.
'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from '@/components/common/ClientLayout';
import Script from 'next/script';

import { usePathname } from 'next/navigation';


// export const metadata: Metadata = {
//   title: 'KUIT',
//   description:
//     'KUIT은 건국대학교 기획/개발 동아리입니다. 현재 5기에는 Android, Web, Server, PM, 디자이너 파트가 있으며, 9주간 스터디가 진행되고 방학에는 팀을 매칭하여 프로젝트가 진행됩니다.',
// };

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSixthIntroducePage = pathname === '/6/introduce';
  const isSeventhIntroducePage = pathname === '/7/introduce';
  const isImmersiveIntroducePage = isSixthIntroducePage || isSeventhIntroducePage;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.className} ${
          isImmersiveIntroducePage
          ? isSixthIntroducePage
            ? 'sixth-introduce-page'
            : 'seventh-introduce-page'
          : ''
        }`}
      >
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}');
          `}
            </Script>
          </>
        )}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';