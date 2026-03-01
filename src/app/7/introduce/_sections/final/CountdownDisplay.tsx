'use client';

type CountdownDisplayProps = {
  value: string;
};

export default function CountdownDisplay({ value }: CountdownDisplayProps) {
  return (
    <div className="mt-2 flex items-center justify-center py-2 sm:py-3">
      <div>
        <p className="mb-1 text-center text-[11px] font-semibold tracking-[0.08em] text-white/65 sm:text-xs">서류 지원 마감까지</p>
        <p className="text-center text-[38px] font-black tracking-[0.06em] text-white sm:text-[56px]">{value}</p>
      </div>
    </div>
  );
}

