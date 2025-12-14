import { Handshake, ExternalLink } from "lucide-react";

export default function CommunityPartners() {
  const partners = [
    {
      name: "TechHub Alliance",
      description: "Global tech community network",
      logo: "THA",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "CodeCraft Collective",
      description: "Developer skills platform",
      logo: "CCC",
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Innovation Labs",
      description: "Startup incubator & accelerator",
      logo: "IL",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Handshake className="w-6 h-6 text-dark-secondary" />
        Community Partners
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-dark-primary transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center font-bold text-white text-sm`}>
                {partner.logo}
              </div>
              <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-dark-primary transition-colors">
              {partner.name}
            </h3>
            <p className="text-sm text-dark-muted">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

