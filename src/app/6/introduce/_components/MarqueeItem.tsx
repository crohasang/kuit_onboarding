const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-12 md:h-12 mx-4 text-white short:w-6 short:h-5"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 md:w-12 md:h-12 mx-4 text-white short:w-6 short:h-5ƒ"
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

const MarqueeItem = ({ text, direction }: { text: string; direction: 'left' | 'right' }) => (
  <div className="flex items-center flex-shrink-0">
    <span className="text-2xl md:text-4xl font-semibold text-white mx-4 short:text-lg">{text}</span>
    {direction === 'right' ? <RightArrow /> : <LeftArrow />}
  </div>
);

export default MarqueeItem;