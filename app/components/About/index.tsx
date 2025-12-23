'use client';

import { Info } from 'lucide-react';
import NarrativeBlock from './NarrativeBlock';
import TerminalBlock from './TerminalBlock';
import { aboutData } from '../../data/aboutData';

export default function About() {
  return (
    // CHANGE HERE: Changed 'col-span-1' to 'col-span-full'
    // This ensures it takes the full width on mobile screens.
    <section className="col-span-full md:col-span-4 w-full">
      {/* Standardized Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <Info className="w-6 h-6 text-dark-secondary" />
        <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
          About Us
        </h2>
      </div>

      {/* Main Content Card */}
      <div className="bento-card w-full overflow-hidden rounded-bento bg-dark-card border border-dark-border p-6 md:p-10 relative group">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* LEFT COLUMN: Narrative */}
          <NarrativeBlock data={aboutData} />

          {/* RIGHT COLUMN: Interactive Terminal */}
          <TerminalBlock script={aboutData.terminalScript} />
        </div>
      </div>
    </section>
  );
}
