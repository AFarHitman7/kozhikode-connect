import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { Community } from "@/data/communities";

export interface Filters {
  rhythm: string;
  domains: string[];
  entryLevels: string[];
  newcomerFriendly: boolean | null;
  languages: string[];
  search: string;
}

const defaultFilters: Filters = {
  rhythm: "all",
  domains: [],
  entryLevels: [],
  newcomerFriendly: null,
  languages: [],
  search: "",
};

export function useFilters(communities: Community[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Parse filters from URL
  const filters: Filters = useMemo(() => ({
    rhythm: searchParams.get("rhythm") || "all",
    domains: searchParams.get("domains")?.split(",").filter(Boolean) || [],
    entryLevels: searchParams.get("entry")?.split(",").filter(Boolean) || [],
    newcomerFriendly: searchParams.get("newcomer") === "true" ? true : searchParams.get("newcomer") === "false" ? false : null,
    languages: searchParams.get("lang")?.split(",").filter(Boolean) || [],
    search: searchParams.get("q") || "",
  }), [searchParams]);

  // Update filters in URL
  const setFilters = useCallback((newFilters: Partial<Filters>) => {
    const merged = { ...filters, ...newFilters };
    const params = new URLSearchParams();
    
    if (merged.rhythm !== "all") params.set("rhythm", merged.rhythm);
    if (merged.domains.length) params.set("domains", merged.domains.join(","));
    if (merged.entryLevels.length) params.set("entry", merged.entryLevels.join(","));
    if (merged.newcomerFriendly !== null) params.set("newcomer", String(merged.newcomerFriendly));
    if (merged.languages.length) params.set("lang", merged.languages.join(","));
    if (merged.search) params.set("q", merged.search);
    
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams(), { replace: true });
  }, [setSearchParams]);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.rhythm !== "all") count++;
    count += filters.domains.length;
    count += filters.entryLevels.length;
    if (filters.newcomerFriendly !== null) count++;
    count += filters.languages.length;
    if (filters.search) count++;
    return count;
  }, [filters]);

  // Filter communities
  const filteredCommunities = useMemo(() => {
    return communities.filter((community) => {
      // Rhythm filter
      if (filters.rhythm !== "all" && !community.rhythm.includes(filters.rhythm as any)) {
        return false;
      }

      // Domain filter
      if (filters.domains.length && !filters.domains.includes(community.domain)) {
        return false;
      }

      // Entry level filter
      if (filters.entryLevels.length && community.entryLevel && !filters.entryLevels.includes(community.entryLevel)) {
        return false;
      }

      // Newcomer friendly filter
      if (filters.newcomerFriendly !== null && community.newcomerFriendly !== filters.newcomerFriendly) {
        return false;
      }

      // Language filter
      if (filters.languages.length && community.language && !filters.languages.includes(community.language)) {
        return false;
      }

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = community.name.toLowerCase().includes(searchLower);
        const matchesDescription = community.description.toLowerCase().includes(searchLower);
        const matchesTags = community.tags?.some(tag => tag.toLowerCase().includes(searchLower));
        if (!matchesName && !matchesDescription && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [communities, filters]);

  return {
    filters,
    setFilters,
    clearFilters,
    activeFilterCount,
    filteredCommunities,
  };
}
