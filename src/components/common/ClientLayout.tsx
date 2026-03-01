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
  const isSeventhIntroducePage = pathname === '/7/introduce';
  const isImmersiveIntroducePage = isSixthIntroducePage || isSeventhIntroducePage;

  return (
    <div className="relative min-h-screen">
      {!isImmersiveIntroducePage && <Background pathname={pathname} />}
      <div className={!isImmersiveIntroducePage ? 'relative z-10' : ''}>
        <main>{children}</main>
      </div>
    </div>
  );
}
