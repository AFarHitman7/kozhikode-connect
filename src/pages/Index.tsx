import { Layout } from "@/components/Layout";
import { DiscoveryFilters } from "@/components/DiscoveryFilters";
import { SearchInput } from "@/components/SearchInput";
import { SeasonalBanner } from "@/components/SeasonalBanner";
import { CommunityCard } from "@/components/CommunityCard";
import { allCommunities } from "@/data/communities";
import { useFilters } from "@/hooks/useFilters";

const Index = () => {
  const { filters, setFilters, clearFilters, activeFilterCount, filteredCommunities } = useFilters(allCommunities);

  const anchorFiltered = filteredCommunities.filter((c) => c.tier === "anchor");
  const grassrootsFiltered = filteredCommunities.filter((c) => c.tier === "community");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-10 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            The Social Fabric
          </h2>
          <p className="quote-text text-lg md:text-xl leading-relaxed">
            "SM Street-ലെ ചായക്കടയിൽ നിന്ന് കടൽതീരത്തിന്റെ പ്രഭാതം വരെ  Kozhikode's rhythm is its people."
          </p>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="container pb-6">
        <SeasonalBanner />
      </section>

      {/* Search */}
      <section className="container pb-4">
        <div className="max-w-md">
          <SearchInput
            value={filters.search}
            onChange={(search) => setFilters({ search })}
            placeholder="Search communities, tags..."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="container pb-8">
        <DiscoveryFilters
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
          activeFilterCount={activeFilterCount}
        />
      </section>

      {/* Results count */}
      {activeFilterCount > 0 && (
        <section className="container pb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCommunities.length} of {allCommunities.length} communities
          </p>
        </section>
      )}

      {/* Anchor Communities */}
      {anchorFiltered.length > 0 && (
        <section className="container pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {anchorFiltered.map((community, index) => (
              <div 
                key={community.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CommunityCard community={community} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grassroots Communities */}
      {grassrootsFiltered.length > 0 && (
        <section className="container pb-16">
          <div className="mb-6 pt-8 border-t border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Community-Run
            </h3>
            <p className="text-sm text-muted-foreground">
              Grassroots groups with recurring activity and peer confirmation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grassrootsFiltered.map((community, index) => (
              <div 
                key={community.id}
                className="animate-fade-in"
                style={{ animationDelay: `${(anchorFiltered.length + index) * 50}ms` }}
              >
                <CommunityCard community={community} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredCommunities.length === 0 && (
        <section className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground font-display text-lg italic mb-2">
              No communities match your filters.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your search or clearing some filters to see more results.
            </p>
            <button
              onClick={clearFilters}
              className="text-sm text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        </section>
      )}

      {/* Philosophy Note */}
      <section className="container pb-16">
        <div className="border-t border-border pt-10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              No popularity rankings. No algorithmic feeds. Communities discovered by fit, not hype. 
              <br />
              <span className="italic font-display">"ഒരു ചായക്കടയിലെ notice board പോലെ — simple, honest, local."</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
