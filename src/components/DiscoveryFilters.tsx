import { ChevronDown, X, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { domains, entryLevels, languages } from "@/data/communities";
import type { Filters } from "@/hooks/useFilters";

interface DiscoveryFiltersProps {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  clearFilters: () => void;
  activeFilterCount: number;
}

const rhythms = [
  { id: "all", label: "All Cycles" },
  { id: "dawn", label: "Dawn" },
  { id: "day", label: "Day" },
  { id: "magrib", label: "Magrib" },
  { id: "night", label: "Night" },
];

export function DiscoveryFilters({ filters, setFilters, clearFilters, activeFilterCount }: DiscoveryFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleArrayFilter = (key: "domains" | "entryLevels" | "languages", value: string) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFilters({ [key]: updated });
  };

  return (
    <div className="space-y-4">
      {/* Rhythm pills - always visible */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <span className="text-sm text-muted-foreground italic font-display mr-2">
          Filter by Rhythm:
        </span>
        {rhythms.map((rhythm) => (
          <button
            key={rhythm.id}
            onClick={() => setFilters({ rhythm: rhythm.id })}
            className={`rhythm-pill rounded-sm ${
              filters.rhythm === rhythm.id
                ? "rhythm-pill-active"
                : "rhythm-pill-inactive"
            }`}
          >
            {rhythm.label}
          </button>
        ))}
      </div>

      {/* Expandable advanced filters */}
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        <div className="flex items-center gap-3">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              More Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-sm">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </CollapsibleTrigger>
          
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="gap-1 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
              Clear all
            </Button>
          )}
        </div>

        <CollapsibleContent className="pt-4 space-y-4">
          {/* Domain filter */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
              Domain
            </label>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => toggleArrayFilter("domains", domain.id)}
                  className={`px-3 py-1.5 text-sm border-2 rounded-sm transition-all ${
                    filters.domains.includes(domain.id)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent border-border hover:border-primary/50"
                  }`}
                >
                  {domain.label}
                </button>
              ))}
            </div>
          </div>

          {/* Entry level filter */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
              Entry Level
            </label>
            <div className="flex flex-wrap gap-2">
              {entryLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => toggleArrayFilter("entryLevels", level.id)}
                  className={`px-3 py-1.5 text-sm border-2 rounded-sm transition-all ${
                    filters.entryLevels.includes(level.id)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent border-border hover:border-primary/50"
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language filter */}
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
              Language
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => toggleArrayFilter("languages", lang.id)}
                  className={`px-3 py-1.5 text-sm border-2 rounded-sm transition-all ${
                    filters.languages.includes(lang.id)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent border-border hover:border-primary/50"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Newcomer friendly toggle */}
          <div>
            <button
              onClick={() => setFilters({ 
                newcomerFriendly: filters.newcomerFriendly === true ? null : true 
              })}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm border-2 rounded-sm transition-all ${
                filters.newcomerFriendly === true
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border hover:border-primary/50"
              }`}
            >
              <Users className="w-4 h-4" />
              Newcomer Friendly
            </button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
