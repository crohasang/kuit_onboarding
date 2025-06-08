import Footer from "@/components/staff/Footer";
import "./hackathon.css";
import GitGraph from "@/components/hackathon/GitGraph";
import HackathonHeader from "./HackathonHeader";
import HackathonCountdownSection from "./HackathonCountdownSection";
import HackathonButtonSection from "./HackathonButtonSection";
import HackathonInformationSection from "./HackathonInformationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUIT 5th Hackathon: KUmmIT",
  description: "건국대학교 기획/개발 동아리 KUIT 5기 해커톤 KUmmIT 페이지",
  openGraph: {
    title: "KUmmIT 5th Hackathon",
    description: "건국대학교 기획/개발 동아리 KUIT 5기 해커톤 KummIT 페이지",
    images: [
      {
        url: "/image/kuit_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const HackathonPage = () => {
  return (
    <div className="hackathon-background min-h-screen overflow-hidden">
      <div className="gitgraph-background">
        <GitGraph />
      </div>
      <div className="content flex flex-col items-center min-h-screen p-4 sm:p-8">
        {/* 헤더 섹션 */}
        <HackathonHeader />

        {/* 카운트다운 타이머 */}
        <HackathonCountdownSection />

        {/* 신청 버튼 섹션 */}
        <HackathonButtonSection />

        {/* 설명 섹션 */}
        <HackathonInformationSection />

        <Footer />
      </div>
    </div>
  );
};

export default HackathonPage;
