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
      'KUIT 4기 회장을 맡은\n조하상입니다.\n\n웹 프론트엔드 개발자를\n희망하고 있습니다.\n\n잘 부탁드립니다!',
    imageUrl: '/image/staff/hasang.JPEG',
    githubLink: 'https://github.com/crohasang',
  },
  {
    name: '김민우',
    position: '운영팀',
    role: '부회장',
    description: '',
    imageUrl: '',
    githubLink: 'https://github.com/kmw10693',
  },
  {
    name: '김윤서',
    position: '운영팀',
    role: '관리부',
    description:
      '안녕하세요, KUIT 4기 관리부장을 맡은 김윤서입니다.\n저는 KUIT을 하면서 개발에 대한 열정과 흥미를 많이 키울 수 있었습니다.\n\nKUIT과 함께 하여 좋은 추억과 프로젝트 경험을 쌓고 가셨으면 좋겠습니다!',
    imageUrl: '/image/staff/kim_yoonseo.jpg',
    githubLink: 'https://github.com/yskim6772',
  },
  {
    name: '이현희',
    position: '운영팀',
    role: '관리부',
    description: '',
    imageUrl: '',
    githubLink: 'https://github.com/nonaninona',
  },
  {
    name: '박원희',
    position: '운영팀',
    role: '홍보부',
    description: '안녕하세요!\n운영팀 박원희 입니다.',
    imageUrl: '/image/staff/park_wonhee.jpg',
    githubLink: 'https://github.com/parkwonhee1219',
  },
  {
    name: '김채린',
    position: '운영팀',
    role: '홍보부',
    description: '',
    imageUrl: '',
    githubLink: 'https://github.com/chrin05',
  },
  // Android
  {
    name: '김나은',
    position: 'Android',
    role: 'Android 파트장',
    description: '안드 빠샤 👊🔥',
    imageUrl: '/image/staff/kim_naeun.jpg',
    githubLink: 'https://github.com/Nico1eKim',
  },
  {
    name: '조익성',
    position: 'Android',
    role: 'Android 파트장',
    description: '궁금한 것 있으면\n뭐든 물어봐주세요~',
    imageUrl: '/image/staff/jo_ikseong.png',
    githubLink: 'https://github.com/ikseong00',
  },
  {
    name: '박성현',
    position: 'Android',
    role: 'Android 파트장',
    description: '아직 많이 부족하니,\n잘 부탁드려요!🫡',
    imageUrl: '/image/staff/park_seonghyun.png',
    githubLink: 'https://github.com/sh1220',
  },
  // Web
  {
    name: '김지환',
    position: 'Web',
    role: 'Web 파트장',
    description: "Even if it's slow,\nkeep going like a turtle.",
    imageUrl: '/image/staff/kim_jihwan.png',
    githubLink: 'https://github.com/Turtle-Hwan',
  },
  {
    name: '전진호',
    position: 'Web',
    role: 'Web 파트장',
    description: '',
    imageUrl: '',
    githubLink: 'https://github.com/jinho1011',
  },
  {
    name: '지호준',
    position: 'Web',
    role: 'Web 파트장',
    description: '안녕하세요!\n\n소통하는 개발자\n지호준입니다.',
    imageUrl: '/image/staff/ji_hojun.jpg',
    githubLink: 'https://github.com/ho0010',
  },
  // Server
  {
    name: '이윤정',
    position: 'Server',
    role: 'Server 파트장',
    description: '한 학기 같이\n재밌게 개발해요😁😁\n\n잘 부탁드립니다!',
    imageUrl: '/image/staff/lee_yoonjeong.jpg',
    githubLink: 'https://github.com/yunjeongiya',
  },
  {
    name: '이영선',
    position: 'Server',
    role: 'Server 파트장',
    description: '',
    imageUrl: '/image/staff/lee_youngsun.jpg',
    githubLink: 'https://github.com/lyouxsun',
  },
  {
    name: '함형주',
    position: 'Server',
    role: 'Server 파트장',
    description: '',
    imageUrl: '',
    githubLink: 'https://github.com/hamhyeongju',
  },
  // PM
  {
    name: '송채영',
    position: 'PM',
    role: 'PM 파트장',
    description:
      "안녕하세요!\n\nKUIT 3기에 \n'아워메뉴'를 기획하고\n\n4기에 운영진을 맡게 된\nPM 송채영입니다.",
    imageUrl: '/image/staff/song_chaeyoung.jpg',
    // githubLink: 'https://github.com/JerrySong23',
  },
  {
    name: '이지유',
    position: 'PM',
    role: 'PM 파트장',
    description: '',
    imageUrl: '',
    // githubLink: 'https://github.com/scrtzuzdoyou',
  },
];

export default STAFF;
