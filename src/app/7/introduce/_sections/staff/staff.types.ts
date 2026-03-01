export type StaffPart = 'management' | 'android' | 'web' | 'server' | 'pm' | 'design';

export type StaffItem = {
  part: StaffPart;
  name: string;
  image: string;
  comment: string;
  role: string;
};

export type StaffTab = {
  key: StaffPart;
  label: string;
};

