'use client';

import { usePathname } from 'next/navigation';
import Background from './background/Background';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSixthIntroducePage = pathname === '/6/introduce';

  return (
    <div className="relative min-h-screen">
      {!isSixthIntroducePage && <Background pathname={pathname} />}
      <div className={!isSixthIntroducePage ? 'relative z-10' : ''}>
        <main>{children}</main>
      </div>
    </div>
  );
}