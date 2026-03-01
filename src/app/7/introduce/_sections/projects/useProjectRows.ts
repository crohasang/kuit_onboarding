'use client';

import { useMemo } from 'react';
import projectsJson from '@/app/7/introduce/_data/projects.json';
import { ProjectItem, ProjectRow } from './project.types';

const ROW_BATCH_ORDER = ['1기', '2기', '3기', '4기', '5기', '6기'] as const;
const MIN_BASE_CARDS = 4;
const projects = projectsJson as ProjectItem[];

function buildBaseItems(items: ProjectItem[]) {
  if (items.length === 0) return [];
  const copies = Math.ceil(MIN_BASE_CARDS / items.length);
  return Array.from({ length: copies }).flatMap(() => items);
}

export default function useProjectRows() {
  return useMemo<ProjectRow[]>(() => {
    return ROW_BATCH_ORDER.map((batch) => {
      const items = projects.filter((project) => project.batch === batch);
      const baseItems = buildBaseItems(items);
      return {
        batch,
        items: baseItems.length > 0 ? [...baseItems, ...baseItems] : [],
      };
    });
  }, []);
}
