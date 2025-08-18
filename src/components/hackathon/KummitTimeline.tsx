import { hackathon5TimelineEvents } from "@/constants/hackathonConstants";

const KummitTimeline = () => {
  return (
    <section
      className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20
      relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0"></div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text">
        <span className="text-kuit">KU</span>mm
        <span className="text-kuit">IT</span> Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent"></div>
        <div className="space-y-8">
          {hackathon5TimelineEvents.map((event, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`w-[12px] h-[12px] rounded-full ${
                  event.isLast ? "bg-cyan-500" : "bg-blue-500"
                } mt-[6px] relative`}
              >
                {(event.isActive || event.isLast) && (
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-1">
                  {event.title}
                </h3>
                <p className="text-blue-200/90">{event.date}</p>
                {/* {event.description && (
                  <p className="text-blue-200/70 text-sm mt-1">
                    {event.description}
                  </p>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KummitTimeline;
