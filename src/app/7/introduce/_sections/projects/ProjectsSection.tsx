'use client';

import ProjectMarqueeRow from './ProjectMarqueeRow';
import useProjectRows from './useProjectRows';

type ProjectsSectionProps = {
  isActive?: boolean;
};

export default function ProjectsSection({ isActive = true }: ProjectsSectionProps) {
  const rows = useProjectRows();
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
                  <ProjectMarqueeRow rowIndex={rowIndex} items={row.items} isActive={isActive} />
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
