import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  desc: string;
  align: 'left' | 'right';
  highlight?: boolean;
}

export default function TimelineItem({ date, title, desc, align, highlight = false }: TimelineItemProps) {
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${align === 'left' ? 'md:flex-row-reverse' : ''}`}>
      
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${align === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
        <div className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${highlight 
            ? 'bg-kuit-green/10 border-kuit-green/50 shadow-[0_0_30px_rgba(0,255,0,0.1)]' 
            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}>
            <span className={`inline-block text-sm font-bold mb-2 ${highlight ? 'text-kuit-green' : 'text-gray-400'}`}>{date}</span>
            <h4 className={`text-xl font-bold mb-1 ${highlight ? 'text-white' : 'text-gray-200'}`}>{title}</h4>
            <p className="text-sm text-gray-400 font-light">{desc}</p>
        </div>
      </div>

      <div className={`absolute left-8 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full z-10 transition-all duration-500 ${highlight ? 'bg-kuit-green shadow-[0_0_15px_#00FF00] scale-125' : 'bg-gray-600 group-hover:bg-white group-hover:scale-125'}`} />

      <div className="hidden md:block w-1/2" />
    </div>
  );
}
