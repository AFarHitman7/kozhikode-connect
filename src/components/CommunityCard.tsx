import { Link, MapPin, ArrowRight, Anchor } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { DomainBadge } from "./DomainBadge";
import { HealthBadge } from "./HealthBadge";
import { ContactLinks } from "./ContactLinks";
import type { Community } from "@/data/communities";

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <RouterLink to={`/community/${community.id}`}>
      <article className="community-card p-5 md:p-6 group cursor-pointer animate-fade-in h-full flex flex-col">
        {/* Header with badges and year */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {community.tier === "anchor" && (
              <span className="badge-anchor">
                <Anchor className="w-3 h-3" />
                Anchor
              </span>
            )}
            {community.tier === "community" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium uppercase tracking-wider bg-secondary text-secondary-foreground">
                Community
              </span>
            )}
            <DomainBadge domain={community.domain} />
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {community.healthScore && (
              <HealthBadge healthScore={community.healthScore} />
            )}
            <span className="text-sm text-timestamp font-medium">
              {community.established}
            </span>
          </div>
        </div>

        {/* Community name */}
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {community.name}
        </h3>

        {/* Description with left border */}
        <div className="border-l-2 border-muted-foreground/30 pl-4 mb-5 flex-grow">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {community.description}
          </p>
        </div>

        {/* Cadence if available */}
        {community.cadence && (
          <p className="text-xs text-muted-foreground italic mb-4">
            {community.cadence}
          </p>
        )}

        {/* Footer with location, platforms, and arrow */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-location uppercase tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              <span>{community.location}</span>
            </div>
            {community.linkedPlatforms && (
              <ContactLinks platforms={community.linkedPlatforms.slice(0, 2)} variant="compact" />
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </article>
    </RouterLink>
  );
}

export type { Community };
