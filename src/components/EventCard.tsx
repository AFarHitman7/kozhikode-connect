import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  Users, 
  Radio,
  Repeat,
  ArrowRight
} from "lucide-react";
import { DomainBadge } from "./DomainBadge";
import type { CommunityEvent } from "@/data/events";
import { formatEventDate, formatTime, getEventStatus } from "@/data/events";

interface EventCardProps {
  event: CommunityEvent;
}

const typeLabels: Record<string, string> = {
  meetup: "Meetup",
  walk: "Walk",
  workshop: "Workshop",
  run: "Run",
  "food-walk": "Food Walk",
  discussion: "Discussion",
  hackathon: "Hackathon",
  ride: "Ride",
};

const rhythmEmoji: Record<string, string> = {
  dawn: "🌅",
  day: "☀️",
  magrib: "🌇",
  night: "🌙",
};

export function EventCard({ event }: EventCardProps) {
  const status = getEventStatus(event);
  const isLive = status === "live";
  const isPast = status === "past";

  return (
    <article
      className={`community-card p-5 flex flex-col h-full transition-all duration-200 ${
        isLive ? "event-card-live" : ""
      } ${isPast ? "opacity-70" : ""}`}
    >
      {/* Top row: status + domain + date */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-2">
          {isLive && (
            <span className="event-status-live">
              <Radio className="w-3 h-3 animate-pulse" />
              Happening Now
            </span>
          )}
          <DomainBadge domain={event.domain} />
        </div>
        <span className="text-xs text-timestamp font-medium">
          {formatEventDate(event.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-foreground mb-1.5 leading-snug">
        {event.title}
      </h3>

      {/* Community link */}
      <Link
        to={`/community/${event.communityId}`}
        className="text-sm text-primary hover:underline mb-3 inline-block"
        onClick={(e) => e.stopPropagation()}
      >
        {event.communityName}
      </Link>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-2">
        {event.description}
      </p>

      {/* Schedule row */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {formatTime(event.startTime)} – {formatTime(event.endTime)}
          </span>
        </div>
        <span>{rhythmEmoji[event.rhythm]}</span>
        <span className="uppercase tracking-wider font-medium text-primary/80">
          {typeLabels[event.type]}
        </span>
      </div>

      {/* Footer: location, capacity, recurrence */}
      <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[140px]">{event.location}</span>
          </div>
          {event.attendees !== undefined && (
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>
                {event.attendees}
                {event.maxAttendees ? `/${event.maxAttendees}` : ""}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {event.recurring && (
            <span title={event.recurringLabel || "Recurring"}>
              <Repeat className="w-3.5 h-3.5 text-primary/60" />
            </span>
          )}
          {event.entryLevel !== "open" && (
            <span className="uppercase tracking-wider font-medium">
              {event.entryLevel === "invite" ? "Invite" : "RSVP"}
            </span>
          )}
        </div>
      </div>

      {/* Past event notes */}
      {isPast && event.notes && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs italic text-muted-foreground">
            📝 {event.notes}
          </p>
        </div>
      )}
    </article>
  );
}
