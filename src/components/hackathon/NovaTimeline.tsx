import React from 'react';

interface TimelineEvent {
  title: string;
  date: string;
  description?: string;
  isActive?: boolean;
  isLast?: boolean;
}

interface NovaTimelineProps {
  events: TimelineEvent[];
}

const NovaTimeline = ({ events }: NovaTimelineProps) => {
  return (
    <section className="bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-500/20
      relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0"></div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 text-transparent bg-clip-text">
        Nova Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/50 via-orange-500/50 to-transparent"></div>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-[12px] h-[12px] rounded-full ${event.isLast ? 'bg-orange-500' : 'bg-red-500'} mt-[6px] relative`}>
                {(event.isActive || event.isLast) && (
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-red-300 mb-1">{event.title}</h3>
                <p className="text-red-200/90">{event.date}</p>
                {event.description && (
                  <p className="text-red-200/70 text-sm mt-1">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NovaTimeline;
