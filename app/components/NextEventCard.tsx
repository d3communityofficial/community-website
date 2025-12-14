import { CalendarClock } from "lucide-react";

export default function NextEventCard() {
  return (
    <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-indigo-900/50 to-dark-card rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-auto">
          <div className="p-3 bg-dark-card border border-dark-border rounded-xl">
            <CalendarClock className="w-6 h-6 text-dark-secondary" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-dark-muted border border-dark-border px-2 py-1 rounded bg-dark-card">
            Incoming
          </span>
        </div>

        <div className="my-8">
          <div className="text-dark-secondary font-mono text-sm mb-2">&gt;&gt; 24 DEC 2024</div>
          <h3 className="text-2xl font-bold leading-tight mb-4">GenAI & Frontend Architecture</h3>
          <p className="text-dark-muted text-sm leading-relaxed border-l-2 border-dark-border pl-3">
            Deep dive into integrating LLMs with React. Production-grade patterns only.
          </p>
        </div>

        <button className="w-full py-3 bg-dark-secondary text-black font-bold rounded-xl mt-auto hover:bg-amber-300 transition-colors shadow-[0_0_20px_rgba(251,191,36,0.2)]">
          RSVP Now
        </button>
      </div>
    </div>
  );
}

