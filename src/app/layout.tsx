import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/common/header/Header';
import Background from '@/components/common/background/Background';

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
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="relative min-h-screen">
          <Background />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export const dynamic = 'force-static';
