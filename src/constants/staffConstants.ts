export interface StaffMember {
  name: string;
  position: string;
  role: string;
  description?: string;
  imageUrl: string;
  githubLink?: string;
}

const STAFF: StaffMember[] = [
  // 운영팀
  {
    name: '조하상',
    position: '운영팀',
    role: '회장',
    description:
      'KUIT 4기 회장을 맡은\n조하상입니다.\n\n웹 프론트엔드 개발자를\n희망하고 있습니다.\n\n잘 부탁드립니다! ',
    imageUrl: '/image/staff/hasang.JPEG',
    githubLink: 'https://github.com/crohasang',
  },
  {
    name: '김민우',
    position: '운영팀',
    role: '부회장',
    description: '저는 부회장입니다.',
    imageUrl: '',
  },
  {
    name: '김윤서',
    position: '운영팀',
    role: '관리부',
    description: '저는 관리부입니다.',
    imageUrl: '',
  },
  {
    name: '이현희',
    position: '운영팀',
    role: '관리부',
    description: '저는 3기 회장이었습니다. 하하',
    imageUrl: '',
  },
  {
    name: '박원희',
    position: '운영팀',
    role: '홍보부',
    description: '저는 홍보부입니다.',
    imageUrl: '',
  },
  {
    name: '김채린',
    position: '운영팀',
    role: '홍보부',
    description: '저는 3기 부회장이었습니다. 하하',
    imageUrl: '',
  },
  // Android
  {
    name: '김나은',
    position: 'Android',
    role: 'Android 파트장',
    description: 'Android 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '조익성',
    position: 'Android',
    role: 'Android 파트장',
    description: 'Android 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '박성현',
    position: 'Android',
    role: 'Android 파트장',
    description: 'Android 개발자입니다.',
    imageUrl: '',
  },
  // Web
  {
    name: '김지환',
    position: 'Web',
    role: 'Web 파트장',
    description: 'Web 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '전진호',
    position: 'Web',
    role: 'Web 파트장',
    description: 'Web 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '지호준',
    position: 'Web',
    role: 'Web 파트장',
    description: 'Web 개발자입니다.',
    imageUrl: '',
  },
  // Server
  {
    name: '이윤정',
    position: 'Server',
    role: 'Server 파트장',
    description: 'Server 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '이영선',
    position: 'Server',
    role: 'Server 파트장',
    description: 'Server 개발자입니다.',
    imageUrl: '',
  },
  {
    name: '함형주',
    position: 'Server',
    role: 'Server 파트장',
    description: 'Server 개발자입니다.',
    imageUrl: '',
  },
  // PM
  {
    name: '송채영',
    position: 'PM',
    role: 'PM 파트장',
    description: 'PM입니다.',
    imageUrl: '',
  },
  {
    name: '이지유',
    position: 'PM',
    role: 'PM 파트장',
    description: 'PM입니다.',
    imageUrl: '',
  },
];

export default STAFF;
