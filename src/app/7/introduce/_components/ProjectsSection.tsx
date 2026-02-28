'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import projectsJson from '@/app/7/introduce/_data/projects.json';

type ProjectItem = {
  batch: string;
  name: string;
  description: string;
};

const projects = projectsJson as ProjectItem[];
const ROW_BATCH_ORDER = ['1기', '2기', '3기', '4기', '5기', '6기'] as const;
const MIN_BASE_CARDS = 6;

function buildBaseItems(items: ProjectItem[]) {
  if (items.length === 0) return [];
  const copies = Math.ceil(MIN_BASE_CARDS / items.length);
  return Array.from({ length: copies }).flatMap(() => items);
}

export default function ProjectsSection() {
  const rows = useMemo(() => {
    return ROW_BATCH_ORDER.map((batch) => {
      const items = projects.filter((project) => project.batch === batch);
      const baseItems = buildBaseItems(items);
      return {
        batch,
        items: baseItems.length > 0 ? [...baseItems, ...baseItems] : [],
      };
    });
  }, []);
  const hasAnyProject = rows.some((row) => row.items.length > 0);

  return (
    <section className="flex h-full min-h-0 flex-col">
      <h3 className="text-[18px] font-bold tracking-[0.04em] text-white sm:text-[22px]">프로젝트</h3>
      <p className="mt-1 text-xs text-white/65 sm:text-sm">1기부터 6기까지, 총 41개의 프로젝트</p>

      {hasAnyProject ? (
        <div className="mt-3 flex min-h-0 flex-1">
          <div className="w-full overflow-hidden">
            <div className="grid h-full min-h-0 grid-rows-6 gap-1 sm:gap-1.5">
              {rows.map((row, rowIndex) => (
                <div key={row.batch} className="flex min-w-0 items-stretch overflow-hidden">
                  {row.items.length > 0 ? (
                    <motion.div
                      className="flex h-full w-max transform-gpu items-stretch gap-2 will-change-transform sm:gap-2.5"
                      animate={{
                        x: rowIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
                      }}
                      transition={{ duration: 30 + rowIndex * 2, ease: 'linear', repeat: Infinity }}
                    >
                      {row.items.map((project, index) => (
                        <article
                          key={`${row.batch}-${project.name}-${index}`}
                          className="h-full w-[220px] shrink-0 rounded-md border border-white/18 bg-black/35 px-3 py-2 sm:w-[280px] sm:px-3.5 sm:py-2.5"
                        >
                          <h4 className="truncate text-[13px] font-bold text-white sm:text-[14px]">{project.name}</h4>
                          <p className="mt-1 text-[12px] leading-relaxed text-white/75 sm:text-[13px]">{project.description}</p>
                        </article>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="rounded-md border border-white/14 bg-black/25 px-2.5 py-2 text-[11px] text-white/55 sm:text-[12px]">
                      프로젝트 없음
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3 rounded-lg border border-white/15 bg-black/25 px-3 py-2 text-[12px] text-white/60">프로젝트 데이터가 없습니다.</div>
      )}
    </section>
  );
}
