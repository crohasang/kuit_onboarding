export type ProjectItem = {
  batch: string;
  name: string;
  description: string;
};

export type ProjectRow = {
  batch: string;
  items: ProjectItem[];
};

