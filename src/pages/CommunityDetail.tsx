import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButton } from "@/components/ShareButton";
import { DomainBadge } from "@/components/DomainBadge";
import { HealthBadge } from "@/components/HealthBadge";
import { ContactLinks } from "@/components/ContactLinks";
import { allCommunities } from "@/data/communities";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Anchor, 
  ArrowRight, 
  CheckCircle2,
  Coffee
} from "lucide-react";

const rhythmLabels: Record<string, string> = {
  dawn: "Dawn",
  day: "Day",
  magrib: "Magrib",
  night: "Night",
};

export default function CommunityDetail() {
  const { id } = useParams<{ id: string }>();
  const community = allCommunities.find((c) => c.id === id);

  if (!community) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Community Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            This community doesn't exist or may have been removed.
          </p>
          <Link to="/" className="text-primary hover:underline">
            ← Back to Communities
          </Link>
        </div>
      </Layout>
    );
  }

  // Find related communities (same domain)
  const relatedCommunities = allCommunities
    .filter((c) => c.domain === community.domain && c.id !== community.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="container py-4">
        <Breadcrumbs items={[{ label: "Communities", href: "/" }, { label: community.name }]} />
      </div>

      {/* Hero Section */}
      <section className="container pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
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
              <DomainBadge domain={community.domain} size="md" />
              {community.healthScore && (
                <HealthBadge 
                  healthScore={community.healthScore} 
                  lastActive={community.lastActive}
                  showLabel 
                />
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              {community.name}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{community.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Est. {community.established}</span>
              </div>
              {community.language && (
                <div className="flex items-center gap-1.5">
                  <span className="uppercase text-xs tracking-wider">{community.language}</span>
                </div>
              )}
            </div>
          </div>

          <ShareButton title={community.name} text={community.description} />
        </div>
      </section>

      {/* Main Content */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission & Ethos */}
            {community.mission && (
              <div className="community-card p-6">
                <h2 className="font-display text-xl font-semibold mb-4">Mission & Ethos</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground font-display text-lg leading-relaxed">
                  {community.mission}
                </blockquote>
              </div>
            )}

            {/* Description */}
            <div className="community-card p-6">
              <h2 className="font-display text-xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{community.description}</p>
              
              {community.tags && community.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {community.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Entry Rules */}
            {community.entryRules && community.entryRules.length > 0 && (
              <div className="community-card p-6">
                <h2 className="font-display text-xl font-semibold mb-4">How to Join</h2>
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium uppercase tracking-wider ${
                    community.entryLevel === "open" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                      : community.entryLevel === "invite"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {community.entryLevel === "open" && "Open to All"}
                    {community.entryLevel === "invite" && "Invite Only"}
                    {community.entryLevel === "application" && "Application Required"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {community.entryRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Post-Meetup Rituals */}
            {community.postMeetupSpots && community.postMeetupSpots.length > 0 && (
              <div className="community-card p-6">
                <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  Post-Meetup Rituals
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Where this community typically gathers after activities:
                </p>
                <div className="space-y-3">
                  {community.postMeetupSpots.map((spot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-sm"
                    >
                      <span className="font-medium">{spot.name}</span>
                      {spot.order && (
                        <span className="text-sm text-muted-foreground italic">
                          "{spot.order}"
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            {/* Activity Cadence */}
            {community.cadence && (
              <div className="community-card p-5">
                <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Activity Cadence
                </h3>
                <p className="text-muted-foreground">{community.cadence}</p>
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                  {community.rhythm.map((r) => (
                    <span
                      key={r}
                      className="px-2 py-1 text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary rounded-sm"
                    >
                      {rhythmLabels[r]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Admins */}
            {community.admins && community.admins.length > 0 && (
              <div className="community-card p-5">
                <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Admins
                </h3>
                <div className="space-y-3">
                  {community.admins.map((admin, index) => (
                    <div key={index}>
                      <p className="font-medium">{admin.name}</p>
                      <p className="text-sm text-muted-foreground">{admin.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact & Platforms */}
            {community.linkedPlatforms && community.linkedPlatforms.length > 0 && (
              <div className="community-card p-5">
                <h3 className="font-display text-lg font-semibold mb-3">Connect</h3>
                <ContactLinks platforms={community.linkedPlatforms} />
              </div>
            )}

            {/* Newcomer Badge */}
            {community.newcomerFriendly && (
              <div className="p-4 bg-primary/5 border-2 border-primary/20 rounded-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Newcomer Friendly</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  This community actively welcomes new members
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Communities */}
      {relatedCommunities.length > 0 && (
        <section className="container pb-16">
          <div className="border-t border-border pt-10">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Related Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCommunities.map((related) => (
                <Link
                  key={related.id}
                  to={`/community/${related.id}`}
                  className="community-card p-4 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <DomainBadge domain={related.domain} />
                    <span className="text-xs text-timestamp">{related.established}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {related.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{related.location}</span>
                    <ArrowRight className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
