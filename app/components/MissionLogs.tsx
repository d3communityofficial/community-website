import { History } from "lucide-react";

export default function MissionLogs() {
  return (
    <div className="md:col-span-3 lg:col-span-2 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <History className="w-6 h-6 text-dark-secondary" />
        Mission Logs
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Log 1 */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-dark-primary transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-dark-muted">LOG_006</span>
            <span className="text-xs bg-dark-border px-2 py-1 rounded text-white">Completed</span>
          </div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-dark-primary transition-colors">
            System Design & Scale
          </h3>
          <p className="text-sm text-dark-muted">Scaling backend infrastructure for millions of users.</p>
        </div>

        {/* Log 2 */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-dark-primary transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-dark-muted">LOG_005</span>
            <span className="text-xs bg-dark-border px-2 py-1 rounded text-white">Completed</span>
          </div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-dark-primary transition-colors">
            LLMs in Production
          </h3>
          <p className="text-sm text-dark-muted">Real-world deployment strategies for AI models.</p>
        </div>
      </div>
    </div>
  );
}

