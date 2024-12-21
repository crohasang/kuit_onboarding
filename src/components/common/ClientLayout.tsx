'use client';

import { usePathname } from 'next/navigation';
import Background from './background/Background';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      <Background pathname={pathname} />
      <div className="relative z-10">
        <main>{children}</main>
      </div>
    </div>
  );
}
