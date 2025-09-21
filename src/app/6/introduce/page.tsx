import { Metadata } from "next";
import BodyClassManager from "./_components/BodyClassManager.tsx";
import IntroduceAnimationContainer from "./_components/IntroduceAnimationContainer.tsx";

export const metadata: Metadata = {
  title: "KUIT 6th Landing Page",
  description: "건국대학교 기획/개발 동아리 KUIT 6기 랜딩 페이지입니다. 학기 중에는 스터디가, 방학 중에는 팀 프로젝트를 진행됩니다.",
  openGraph: {
    title: "KUIT 6th Landing Page",
    description: "건국대학교 기획/개발 동아리 KUIT 6기 랜딩 페이지입니다. 학기 중에는 스터디가, 방학 중에는 팀 프로젝트를 진행됩니다.",
    images: [
      {
        url: "/image/kuit_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const SixthIntroducePage = () => {
  return (
    <>
      <BodyClassManager />
      <IntroduceAnimationContainer />
    </>
  );
}

export default SixthIntroducePage;