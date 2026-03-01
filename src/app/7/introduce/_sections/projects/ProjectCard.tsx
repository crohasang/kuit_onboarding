'use client';

import { ProjectItem } from './project.types';

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full w-[220px] shrink-0 rounded-md border border-white/18 bg-black/35 px-3.5 py-2.5 sm:w-[280px] sm:px-4 sm:py-3">
      <h4 className="truncate text-[13px] font-bold text-white sm:text-[14px]">{project.name}</h4>
      <p className="mt-1 line-clamp-2 text-[12px] leading-[1.4] text-white/75 sm:text-[13px]">{project.description}</p>
    </article>
  );
}
