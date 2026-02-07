import { Link } from "react-router-dom";
import { getLiveEvents, formatTime } from "@/data/events";
import { Radio, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function LiveEventMarquee() {
  const [liveEvents, setLiveEvents] = useState(getLiveEvents());

  // Re-check every minute for live status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveEvents(getLiveEvents());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (liveEvents.length === 0) return null;

  // Duplicate items for seamless infinite scroll
  const marqueeItems = [...liveEvents, ...liveEvents, ...liveEvents];

  return (
    <div className="live-marquee-wrapper">
      <div className="container relative flex items-center">
        {/* Fixed "LIVE" label */}
        <div className="live-marquee-label">
          <Radio className="w-3 h-3 animate-pulse" />
          <span>LIVE</span>
        </div>

        {/* Scrolling content */}
        <div className="live-marquee-track">
          <div className="live-marquee-content">
            {marqueeItems.map((event, i) => (
              <Link
                key={`${event.id}-${i}`}
                to="/events"
                className="live-marquee-item"
              >
                <span className="live-marquee-dot" />
                <span className="font-medium">{event.communityName}</span>
                <span className="text-primary-foreground/60">—</span>
                <span>{event.title}</span>
                <span className="live-marquee-meta">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>
                <span className="live-marquee-meta">
                  until {formatTime(event.endTime)}
                </span>
                <ArrowRight className="w-3 h-3 opacity-50 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
