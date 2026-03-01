'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectItem } from './project.types';

type ProjectMarqueeRowProps = {
  rowIndex: number;
  items: ProjectItem[];
  isActive: boolean;
};

export default function ProjectMarqueeRow({ rowIndex, items, isActive }: ProjectMarqueeRowProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-white/14 bg-black/25 px-2.5 py-2 text-[11px] text-white/55 sm:text-[12px]">
        프로젝트 없음
      </div>
    );
  }

  return (
    <motion.div
      className="flex h-full w-max transform-gpu items-stretch gap-2 will-change-transform sm:gap-2.5"
      animate={
        isActive
          ? { x: rowIndex % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }
          : { x: rowIndex % 2 === 0 ? '0%' : '-50%' }
      }
      transition={isActive ? { duration: 30 + rowIndex * 2, ease: 'linear', repeat: Infinity } : { duration: 0 }}
    >
      {items.map((project, index) => (
        <ProjectCard key={`${project.batch}-${project.name}-${index}`} project={project} />
      ))}
    </motion.div>
  );
}

