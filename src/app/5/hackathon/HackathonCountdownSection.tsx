import CountdownTimer from "@/components/hackathon/CountdownTimer";

const HackathonCountdownSection = () => {
  return (
    <div className="w-full max-w-4xl mb-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
      <CountdownTimer
        targetDate={new Date("2025-06-18T00:00:00+09:00")}
        label={<span className="text-white">모집 접수 마감까지</span>}
        isFifth={true}
      />
      <CountdownTimer
        targetDate={new Date("2025-06-28T18:00:00+09:00")}
        label={<span className="text-white">본 행사 시작까지</span>}
        isFifth={true}
      />
    </div>
  );
};

export default HackathonCountdownSection;
