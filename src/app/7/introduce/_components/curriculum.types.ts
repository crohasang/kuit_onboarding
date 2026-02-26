export type PartKey = 'web' | 'android' | 'server' | 'pm' | 'designer';

export type CurriculumItem = {
  week: number;
  title: string;
};

export type CurriculumData = Record<PartKey, CurriculumItem[]>;
