import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/common/header/Header';
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
        <Header />
        {children}
        <footer className="absolute bottom-4 right-4 text-sm text-white">
          Built at: {buildTime}
        </footer>
      </body>
    </html>
  );
}
