import { Metadata } from 'next';
import { IntroduceAnimationContainer } from './_animation';
import { BodyClassManager } from './_layout';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'KUIT 7기 모집 | 기획·개발 동아리';
  const description = '기획/개발 동아리 KUIT 7기 모집 안내 페이지.';
  const ogImage = '/image/kuit_logo.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function SeventhIntroducePage() {
  return (
    <>
      <BodyClassManager />
      <IntroduceAnimationContainer />
    </>
  );
}
