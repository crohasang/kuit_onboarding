'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import staffJson from '@/app/7/introduce/_data/staff.json';

type StaffPart = 'management' | 'android' | 'web' | 'server' | 'pm' | 'design';

type StaffItem = {
  part: StaffPart;
  name: string;
  image: string;
  comment: string;
  role: string;
};

type StaffTab = {
  key: StaffPart;
  label: string;
};

const TABS: StaffTab[] = [
  { key: 'management', label: '운영팀' },
  { key: 'android', label: 'Android' },
  { key: 'web', label: 'Web' },
  { key: 'server', label: 'Server' },
  { key: 'pm', label: 'PM' },
  { key: 'design', label: 'Design' },
];

const staffData = staffJson as StaffItem[];
const STAFF_PLACEHOLDER_SRC = '/images/seventh-staff-placeholder.svg';

function toCardId(item: StaffItem, index: number) {
  return `${item.part}:${item.name}:${index}`;
}

export default function StaffSection() {
  const [activeTab, setActiveTab] = useState<StaffPart>('management');
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  const filteredStaff = useMemo(() => {
    return staffData.filter((item) => item.part === activeTab);
  }, [activeTab]);

  useEffect(() => {
    setFlippedMap({});
  }, [activeTab]);

  const toggleFlip = (id: string) => {
    setFlippedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="flex h-full min-h-0 flex-col">
      <h3 className="text-[18px] font-bold tracking-[0.04em] text-white sm:text-[22px]">7기 운영진</h3>
      <p className="mt-1 text-xs text-white/65 sm:text-sm">카드를 클릭해서 자기소개를 확인해보세요</p>

      <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:grid-cols-6 sm:gap-2">
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-md border px-2 py-1.5 text-[11px] font-semibold transition-colors sm:text-xs ${
                isActive
                  ? 'border-[#45cc63] bg-[#45cc63]/15 text-[#45cc63]'
                  : 'border-white/20 bg-black/25 text-white/75 hover:border-white/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mt-4">
        {filteredStaff.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filteredStaff.map((item, index) => {
              const id = toCardId(item, index);
              const isFlipped = Boolean(flippedMap[id]);

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleFlip(id)}
                  className="h-[220px] w-[48%] min-w-[150px] max-w-[180px] cursor-pointer [perspective:1000px] sm:w-[170px]"
                >
                  <div
                    className="relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d]"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/20 bg-[#2f343b] [backface-visibility:hidden]">
                      <Image
                        src={item.image || STAFF_PLACEHOLDER_SRC}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className={item.image ? 'object-cover object-top' : 'object-cover object-center'}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-2.5 py-2 text-left">
                        <div className="flex items-end justify-between gap-2">
                          <p className="truncate text-[13px] font-bold text-white sm:text-[14px]">{item.name}</p>
                          {item.role ? <p className="shrink-0 text-[10px] font-medium text-white/55 sm:text-[11px]">{item.role}</p> : null}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-lg border border-[#45cc63]/35 bg-[#0b1118] px-3 py-3 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-3.5 sm:py-3.5">
                      <p className="text-[12px] font-semibold text-[#45cc63] sm:text-[13px]">{item.name}</p>
                      <p className="mt-2 line-clamp-8 text-[12px] leading-relaxed text-white/85 sm:text-[13px]">
                        {item.comment || '잘 부탁드립니다!'}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rounded-md border border-white/15 bg-black/25 px-3 py-2 text-[12px] text-white/60">해당 파트 운영진 데이터가 없습니다.</div>
        )}
      </div>
    </section>
  );
}
