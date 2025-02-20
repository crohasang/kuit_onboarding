'use client';

import React from 'react';
import MainContent from '@/components/MainContent';
import styles from './page.module.css';

export default function IntroducePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainContent initialPage={1} generation={5} />
      </div>
    </div>
  );
}
