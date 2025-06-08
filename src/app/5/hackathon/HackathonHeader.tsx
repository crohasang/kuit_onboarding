const HackathonHeader = () => {
  return (
    <div className="text-center mb-4">
      <h1 className="text-3xl sm:text-5xl mb-2">
        <span className="text-white">git </span>
        <span className="font-bold text-kuit">KU</span>
        <span className="text-white">mm</span>
        <span className="font-bold text-kuit">IT</span>
      </h1>
      <div className="space-y-1">
        <p className="text-base sm:text-lg text-center text-white">
          <span className="text-white">-m</span>{" "}
          <span className="text-white">
            &quot;<span className="text-kuit">KUIT</span> 5th Hackathon&quot;
          </span>
        </p>
      </div>
      <div className="mt-4 font-mono text-sm text-gray-400">
        [main a1b2c3d] feat: add hackathon
      </div>
    </div>
  );
};

export default HackathonHeader;
