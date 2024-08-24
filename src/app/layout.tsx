import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '@/components/common/background/Background';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'KUIT',
  description:
    'KUIT은 건국대학교 기획/개발 동아리입니다. 현재 4기에는 Android, Web, Server, PM 파트가 있으며, 10주간 스터디가 진행되고 방학에는 팀을 짜 프로젝트가 진행됩니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="relative min-h-screen">
          <Background />
          <div className="relative z-10">
            {/* <Header /> */}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
