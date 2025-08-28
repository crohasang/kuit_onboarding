// src/app/_constants/staff.ts

export interface StaffMember {
    name: string;
    position: string;
    github?: string;
    imageUrl: string;
  }
  
  export interface StaffData {
    [key: string]: StaffMember[];
  }
  
  export const STAFF_DATA: StaffData = {
    Management: [
      {
        name: '조익성',
        position: '회장',
        github: 'https://github.com/ikseong00',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/jo-ikseong.jpeg',
      },
      {
        name: '이지유',
        position: '부회장',
        github: 'https://jeeyoegu0510.notion.site/',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/lee-jiyoo.jpeg',
      },
      {
        name: '정윤아',
        position: '총무',
        github: 'https://github.com/yuna569',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/jeong-yoona.jpeg',
      },
    ],
    Android: [
      {
        name: '채민지',
        position: 'Android',
        github: 'https://github.com/alswlekk',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/chae-minji.jpeg',
      },
      {
        name: '이성준',
        position: 'Android',
        github: 'https://github.com/protossmanse',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/lee-seongjoon.jpeg',
      },
      {
        name: '조규빈',
        position: 'Android',
        github: 'https://github.com/rbqks529',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/jo-gyubin.jpeg',
      },
    ],
    Web: [
      {
        name: '나윤상',
        position: 'Web',
        github: 'https://github.com/nayounsang',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/na-yoonsang.jpeg',
      },
      {
        name: '박태희',
        position: 'Web',
        github: 'https://github.com/qkrxogmla',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/park-taehee.jpeg',
      },
      {
        name: '최준서',
        position: 'Web',
        github: 'https://github.com/JunSeochoi',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/choi-joonseo.jpeg',
      },
    ],
    Server: [
      {
        name: '김지현',
        position: 'Server',
        github: 'https://github.com/jyun-KIM',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-jihyeon.jpeg',
      },
      {
        name: '조동현',
        position: 'Server',
        github: 'https://github.com/mr8356',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/jo-donghyeon.jpeg',
      },
      {
        name: '김상균',
        position: 'Server',
        github: 'https://github.com/ksg1227',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-sanggyoon.jpeg',
      },
    ],
    PM: [
      {
        name: '김재훈',
        position: 'PM',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-jaehoon.jpeg',
      },
      {
        name: '김효민',
        position: 'PM',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-hyomin.jpeg',
      },
    ],
    Design: [
      {
        name: '김다솜',
        position: 'Design',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-dasom.jpeg',
      },
      {
        name: '김효정',
        position: 'Design',
        imageUrl: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/kim-hyojeong.jpeg',
      },
    ],
  };