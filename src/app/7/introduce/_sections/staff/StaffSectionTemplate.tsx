'use client';

import { ReactNode } from 'react';
import { StaffTab } from './staff.types';

type StaffSectionTemplateProps = {
  tabs: StaffTab[];
  activeTab: StaffTab['key'];
  onChangeTab: (tab: StaffTab['key']) => void;
  children: ReactNode;
};

export default function StaffSectionTemplate({ tabs, activeTab, onChangeTab, children }: StaffSectionTemplateProps) {
  return (
    <section className="flex h-full min-h-0 flex-col">
      <h3 className="text-[18px] font-bold tracking-[0.04em] text-white sm:text-[22px]">7기 운영진</h3>
      <p className="mt-1 text-xs text-white/65 sm:text-sm">카드를 클릭해서 자기소개를 확인해보세요</p>

      <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:grid-cols-6 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChangeTab(tab.key)}
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
        {children}
      </div>
    </section>
  );
}
