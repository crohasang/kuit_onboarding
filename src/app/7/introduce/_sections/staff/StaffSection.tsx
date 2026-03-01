'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';
import staffJson from '@/app/7/introduce/_data/staff.json';
import StaffCardSkeleton from './StaffCardSkeleton';
import StaffSkeletonGrid from './StaffSkeletonGrid';
import StaffSectionTemplate from './StaffSectionTemplate';
import { StaffItem, StaffPart, StaffTab } from './staff.types';

const TABS: StaffTab[] = [
  { key: 'management', label: '운영팀' },
  { key: 'android', label: 'Android' },
  { key: 'web', label: 'Web' },
  { key: 'server', label: 'Server' },
  { key: 'pm', label: 'PM' },
  { key: 'design', label: 'Design' },
];

const staffData = staffJson as StaffItem[];
const StaffCard = dynamic(() => import('./StaffCard'), {
  ssr: false,
  loading: () => <StaffCardSkeleton />,
});

function toCardId(item: StaffItem, index: number) {
  return `${item.part}:${item.name}:${index}`;
}

type StaffSectionProps = {
  isActive?: boolean;
};

export default function StaffSection({ isActive = true }: StaffSectionProps) {
  const [activeTab, setActiveTab] = useState<StaffPart>('management');
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});

  const filteredStaff = useMemo(() => {
    return staffData.filter((item) => item.part === activeTab);
  }, [activeTab]);
  const skeletonCount = Math.max(filteredStaff.length, 1);

  useEffect(() => {
    setFlippedMap({});
    setLoadedMap({});
  }, [activeTab]);

  const toggleFlip = useCallback((id: string) => {
    setFlippedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const markLoaded = useCallback((id: string) => {
    setLoadedMap((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  }, []);

  return (
    <StaffSectionTemplate
      tabs={TABS}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
    >
      {!isActive ? (
        <StaffSkeletonGrid count={skeletonCount} />
      ) : filteredStaff.length > 0 ? (
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {filteredStaff.map((item, index) => {
            const id = toCardId(item, index);
            const isFlipped = Boolean(flippedMap[id]);
            const isLoaded = Boolean(loadedMap[id]);

            return (
              <StaffCard
                key={id}
                id={id}
                item={item}
                isFlipped={isFlipped}
                isLoaded={isLoaded}
                onToggle={toggleFlip}
                onLoad={markLoaded}
              />
            );
          })}
        </div>
      ) : (
        <div className="rounded-md border border-white/15 bg-black/25 px-3 py-2 text-[12px] text-white/60">해당 파트 운영진 데이터가 없습니다.</div>
      )}
    </StaffSectionTemplate>
  );
}
