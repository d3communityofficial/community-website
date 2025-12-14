import { Map } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="bg-dark-card rounded-bento p-6 border border-dark-border bento-card flex flex-col justify-between group overflow-hidden">
      <div>
        <div className="flex items-center gap-2 mb-2 text-green-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider">Hub Active</span>
        </div>
        <h4 className="font-bold text-xl">Chennai, IN</h4>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-dark-muted text-xs">T-Hub & Offline</span>
        <Map className="w-8 h-8 text-dark-border group-hover:text-dark-primary transition-colors" />
      </div>
    </div>
  );
}

