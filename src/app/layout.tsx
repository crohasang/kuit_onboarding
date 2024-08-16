import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/common/header/Header';
import Background from '@/components/common/background/Background';
import { getData } from '@/lib/getData';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'KUIT',
  description: 'KUIT Onboarding Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { buildTime } = getData();

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="relative min-h-screen">
          <Background />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <footer className="fixed bottom-2 right-4 text-xs text-white z-50">
              최종 업데이트: {buildTime}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
