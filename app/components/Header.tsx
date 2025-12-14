import { Github, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-dark-primary to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg border border-white/10">
          D3
        </div>
        <div>
          <h1 className="font-bold text-xl leading-none tracking-tight">Digital Dreamers Den</h1>
          <span className="text-xs text-dark-primary font-mono mt-1 block">/// EST. 2024</span>
        </div>
      </div>
      <div className="flex gap-3">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-dark-primary transition-all"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}

