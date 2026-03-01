'use client';

import { ReactNode } from 'react';
import styles from './CurriculumGlass.module.css';

type SlidePanelProps = {
  children: ReactNode;
};

export default function SlidePanel({ children }: SlidePanelProps) {
  return (
    <div className="flex h-full min-h-0 w-full shrink-0 snap-start">
      <div className={`h-full w-full p-4 sm:p-6 ${styles.glassPanel}`}>{children}</div>
    </div>
  );
}

