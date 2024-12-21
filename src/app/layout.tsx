import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from '@/components/common/ClientLayout';

export const metadata: Metadata = {
  title: 'KUIT',
  description:
    'KUIT은 건국대학교 기획/개발 동아리입니다. 현재 4기에는 Android, Web, Server, PM, 디자이너 파트가 있으며, 10주간 스터디가 진행되고 방학에는 팀을 짜 프로젝트가 진행됩니다.',
};

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
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
