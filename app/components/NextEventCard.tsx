"use client";

import { CalendarClock } from "lucide-react";
import { useState, useMemo } from "react";
import eventsData from "../data/events.json";

export default function NextEventCard() {
  const [showRSVP, setShowRSVP] = useState<string | null>(null);

  // Memoize the first 2 upcoming events to prevent array recreation on every render
  const upcomingEvents = useMemo(() => {
    return (eventsData.upcomingEvents || []).slice(0, 2);
  }, []);

  const handleRSVP = (event: typeof upcomingEvents[0]) => {
    if (event.rsvpUrl) {
      window.open(event.rsvpUrl, '_blank', 'noopener,noreferrer');
    } else {
      setShowRSVP(event.id);
    }
  };

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <>
      {upcomingEvents.map((event) => (
        <div key={event.id} className="md:col-span-2 rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group" style={{ background: 'var(--gradient-card)' }}>
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
              <div className="text-dark-secondary font-mono text-sm mb-2">&gt;&gt; {event.formattedDate}</div>
              <h3 className="text-2xl font-bold leading-tight mb-4">{event.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed border-l-2 border-dark-primary pl-3">
                {event.description}
              </p>
            </div>

            <button 
              onClick={() => handleRSVP(event)}
              className="w-full py-3 font-bold rounded-xl mt-auto transition-all hover:shadow-lg hover:scale-105 cursor-pointer" 
              style={{ background: 'var(--gradient-accent)', color: '#000' }}
              aria-label={`RSVP for ${event.title} event`}
            >
              RSVP Now
            </button>
          </div>
        </div>
      ))}
      
      {/* Empty slot if only 1 event - use stable key */}
      {upcomingEvents.length === 1 && (
        <div key="empty-slot" className="md:col-span-2" aria-hidden="true"></div>
      )}

      {showRSVP && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowRSVP(null)}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">RSVP Coming Soon</h3>
            <p className="text-dark-muted mb-4">RSVP functionality will be available soon. For now, please join our community to stay updated!</p>
            <button
              onClick={() => setShowRSVP(null)}
              className="w-full py-2 px-4 rounded-xl font-bold transition-all"
              style={{ background: 'var(--gradient-primary)', color: 'white' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

