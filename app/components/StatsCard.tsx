export default function StatsCard() {
  return (
    <div className="bg-dark-card rounded-bento p-6 border border-dark-border bento-card flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
      <h3 className="text-5xl font-bold text-white mb-1 relative z-10">
        500<span className="text-dark-primary">+</span>
      </h3>
      <p className="text-dark-muted font-medium text-sm relative z-10">Engineers Connected</p>
    </div>
  );
}

