import { Metadata } from 'next';
import { IntroduceAnimationContainer } from './_animation';
import { BodyClassManager } from './_layout';

export const metadata: Metadata = {
  title: 'KUIT 7th Landing Page',
  description: '건국대학교 기획/개발 동아리 KUIT 7기 랜딩 페이지입니다.',
  openGraph: {
    title: 'KUIT 7th Landing Page',
    description: '건국대학교 기획/개발 동아리 KUIT 7기 랜딩 페이지입니다.',
    images: [
      {
        url: '/image/kuit_logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SeventhIntroducePage() {
  return (
    <>
      <BodyClassManager />
      <IntroduceAnimationContainer />
    </>
  );
}
