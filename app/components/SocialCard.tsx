"use client";

import { Users, ArrowUpRight } from "lucide-react";

export default function SocialCard() {
  return (
    <div
      className="md:col-span-2 bg-gradient-to-r from-indigo-900/40 to-dark-card rounded-bento p-8 border border-dark-border bento-card flex items-center justify-between cursor-pointer group"
      onClick={() => window.open('https://bento.me/d3community', '_blank')}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-dark-primary/20 rounded-full text-dark-primary">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-white group-hover:text-dark-primary transition-colors">
            Join the Collective
          </h3>
          <p className="text-dark-muted text-sm">Mentorship • Networking • Growth</p>
        </div>
      </div>
      <ArrowUpRight className="w-6 h-6 text-dark-muted group-hover:text-white transition-colors" />
    </div>
  );
}

