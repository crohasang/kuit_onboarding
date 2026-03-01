'use client';

import { ProjectItem } from './project.types';

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full w-[220px] shrink-0 rounded-md border border-white/18 bg-black/35 px-3 py-2 sm:w-[280px] sm:px-3.5 sm:py-2.5">
      <h4 className="truncate text-[13px] font-bold text-white sm:text-[14px]">{project.name}</h4>
      <p className="mt-1 text-[12px] leading-relaxed text-white/75 sm:text-[13px]">{project.description}</p>
    </article>
  );
}

