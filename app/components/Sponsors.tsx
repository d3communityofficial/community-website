import { Award } from "lucide-react";

export default function Sponsors() {
  const sponsors = [
    {
      name: "CloudScale Systems",
      tier: "Platinum",
      logo: "CS",
      bgColor: "from-slate-700 to-slate-900",
    },
    {
      name: "DataFlow Inc",
      tier: "Gold",
      logo: "DF",
      bgColor: "from-amber-700 to-amber-900",
    },
    {
      name: "AI Ventures",
      tier: "Gold",
      logo: "AI",
      bgColor: "from-amber-700 to-amber-900",
    },
    {
      name: "DevTools Pro",
      tier: "Silver",
      logo: "DT",
      bgColor: "from-gray-600 to-gray-800",
    },
    {
      name: "TechCorp",
      tier: "Silver",
      logo: "TC",
      bgColor: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <div className="bg-dark-card border border-dark-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Award className="w-6 h-6 text-dark-secondary" />
        Sponsors
      </h2>

      <div className="space-y-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex items-center gap-4 p-4 rounded-xl bg-dark-bg border border-dark-border hover:border-dark-primary transition-colors cursor-pointer group"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sponsor.bgColor} flex items-center justify-center font-bold text-white`}>
              {sponsor.logo}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white group-hover:text-dark-primary transition-colors">
                {sponsor.name}
              </h4>
              <span className="text-xs text-dark-muted font-mono">{sponsor.tier} Sponsor</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

