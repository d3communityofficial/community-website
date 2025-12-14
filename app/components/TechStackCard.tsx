import { Atom, Server, BrainCircuit } from "lucide-react";

export default function TechStackCard() {
  return (
    <div className="md:col-span-2 bg-dark-card rounded-bento p-8 border border-dark-border bento-card flex items-center justify-between group">
      <div>
        <h3 className="text-xl font-bold mb-2">The Stack</h3>
        <p className="text-dark-muted text-sm">We build with modern tools.</p>
      </div>
      <div className="flex gap-4 grayscale group-hover:grayscale-0 transition-all duration-500">
        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
          <Atom className="w-6 h-6 text-[#61DAFB]" />
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
          <Server className="w-6 h-6 text-[#339933]" />
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
          <BrainCircuit className="w-6 h-6 text-[#FF6F00]" />
        </div>
      </div>
    </div>
  );
}

