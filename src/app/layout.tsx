'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '@/components/common/background/Background';
import { usePathname } from 'next/navigation';
import metadata from './metadata';

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

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="relative min-h-screen">
          <Background pathname={pathname} />
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
