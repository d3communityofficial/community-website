import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-dark-card rounded-bento p-8 md:p-12 border border-dark-border bento-card relative overflow-hidden group flex flex-col justify-between">
      {/* Glowing Orb Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          BUILDING THE FUTURE
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Dreamers <br />
          <span className="text-gradient">Ship Code.</span>
        </h2>

        <p className="text-lg text-dark-muted mb-8 max-w-md leading-relaxed">
          The definitive community for AI Engineers & Full-Stack Developers. Less talk, more shipping.
        </p>

        <div className="flex gap-4">
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
          >
            Explore Events <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://bento.me/d3community"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border text-white rounded-xl font-bold hover:border-dark-primary transition-colors"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}

