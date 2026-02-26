'use client';

import { useMemo, useState } from 'react';
import curriculumJson from '@/app/7/introduce/_data/curriculum.json';
import PartLottieStrip from './PartLottieStrip';
import WeekTimeline from './WeekTimeline';
import { CurriculumData, PartKey } from './curriculum.types';
import styles from './CurriculumGlass.module.css';

const curriculumData = curriculumJson as CurriculumData;

export default function CurriculumSection() {
  const [activePart, setActivePart] = useState<PartKey>('android');

  const items = useMemo(() => curriculumData[activePart], [activePart]);

  return (
    <section className={`mx-auto w-full max-w-4xl px-4 sm:px-6 ${styles.sectionBg}`}>
      <div className={styles.noiseLayer} />
      <div className={`p-4 sm:p-6 ${styles.glassPanel}`}>
        <h2 className="text-[20px] font-bold tracking-[0.05em] text-white sm:text-[26px]">
          커리큘럼
        </h2>
        <p className="mt-1 text-xs text-white/70 sm:text-sm">
          다섯 파트에서 진행되는 9주간의 커리큘럼
        </p>

        <div className="mt-4 sm:mt-5">
          <PartLottieStrip activePart={activePart} onChange={setActivePart} />
          <WeekTimeline items={items} />
        </div>
      </div>
    </section>
  );
}
