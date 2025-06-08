const HackathonButtonSection = () => {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 mb-20">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full px-8 py-3 text-white font-medium rounded-lg bg-blue-500/50 hover:bg-white hover:text-black transition-all duration-300 text-center"
      >
        <span className="relative inline-flex items-center text-lg">
          KUIT 부원 전용 신청
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </a>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full px-8 py-3 text-white font-medium rounded-lg bg-blue-500/50 hover:bg-white hover:text-black transition-all duration-300 text-center"
      >
        <span className="relative inline-flex items-center text-lg">
          KUIT 부원 외 신청
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default HackathonButtonSection;
