import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { EventCard } from "@/components/EventCard";
import { SearchInput } from "@/components/SearchInput";
import {
  events,
  getLiveEvents,
  getUpcomingEvents,
  getPastEvents,
  eventTypes,
} from "@/data/events";
import { domains } from "@/data/communities";
import { Radio, Calendar, Clock, Archive } from "lucide-react";

type EventTab = "upcoming" | "past";

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const liveEvents = useMemo(() => getLiveEvents(), []);
  const upcomingEvents = useMemo(() => getUpcomingEvents(), []);
  const pastEvents = useMemo(() => getPastEvents(), []);

  const filterEvents = (eventList: typeof events) => {
    return eventList.filter((event) => {
      if (domainFilter !== "all" && event.domain !== domainFilter) return false;
      if (typeFilter !== "all" && event.type !== typeFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          event.title.toLowerCase().includes(q) ||
          event.communityName.toLowerCase().includes(q) ||
          event.location.toLowerCase().includes(q) ||
          event.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  };

  const filteredUpcoming = filterEvents(upcomingEvents);
  const filteredPast = filterEvents(pastEvents);
  const filteredLive = filterEvents(liveEvents);

  const displayEvents = activeTab === "upcoming" ? filteredUpcoming : filteredPast;

  return (
    <Layout>
      {/* Page Header */}
      <section className="container py-10 md:py-14">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            Events & Meetups
          </h2>
          <p className="quote-text text-lg leading-relaxed">
            "Events exist to prove continuity, not to market."
          </p>
        </div>
      </section>

      {/* Live Events Section */}
      {filteredLive.length > 0 && (
        <section className="container pb-8">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <h3 className="font-display text-xl font-semibold text-foreground">
              Happening Now
            </h3>
            <span className="event-status-live text-xs ml-2">
              {filteredLive.length} live
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLive.map((event) => (
              <div key={event.id} className="animate-fade-in">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Search & Filters */}
      <section className="container pb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-sm flex-1">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search events, communities..."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Domain filter */}
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="event-filter-select"
            >
              <option value="all">All Domains</option>
              {domains.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>

            {/* Type filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="event-filter-select"
            >
              <option value="all">All Types</option>
              {eventTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="container pb-6">
        <div className="flex items-center gap-1 border-b border-border">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`event-tab ${activeTab === "upcoming" ? "event-tab-active" : ""}`}
          >
            <Calendar className="w-4 h-4" />
            Upcoming
            <span className="event-tab-count">{filteredUpcoming.length}</span>
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`event-tab ${activeTab === "past" ? "event-tab-active" : ""}`}
          >
            <Archive className="w-4 h-4" />
            Past
            <span className="event-tab-count">{filteredPast.length}</span>
          </button>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="container pb-16">
        {displayEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayEvents.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-muted-foreground font-display text-lg italic mb-2">
              No events match your filters.
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or check back soon.
            </p>
          </div>
        )}
      </section>

      {/* Philosophy */}
      <section className="container pb-16">
        <div className="border-t border-border pt-10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Minimal metadata: when, where, who. Attendance proves continuity.
              <br />
              <span className="italic font-display">No hype. No FOMO. Just showing up.</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
