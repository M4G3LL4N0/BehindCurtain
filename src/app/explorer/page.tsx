"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import type { Profile } from "@/lib/types";
import { getAllProfiles } from "@/lib/db";

export default function ExplorerPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    let isMounted = true;

    async function loadProfiles() {
      const results = await getAllProfiles();
      if (isMounted) {
        setProfiles(results);
      }
    }

    loadProfiles();

    return () => {
      isMounted = false;
    };
  }, []);

  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const tags = useMemo(
    () => Array.from(new Set(profiles.flatMap((profile) => profile.tags))).sort(),
    [profiles],
  );

  const regions = useMemo(
    () => Array.from(new Set(profiles.map((profile) => profile.region).filter(Boolean))).sort(),
    [profiles],
  );

  const statuses = useMemo(
    () =>
      Array.from(
        new Set(profiles.flatMap((profile) => profile.timeline.map((event) => event.status))),
      ).sort(),
    [profiles],
  );

  const filtered = useMemo(() => {
    return profiles.filter((profile) => {
      const basicFields = [
        profile.name,
        profile.role,
        profile.region,
        profile.summary,
        profile.shortBio,
        ...profile.tags,
      ].join(" ").toLowerCase();

      // Search timeline events
      const timelineMatches = profile.timeline.some(event => 
        event.title.toLowerCase().includes(debouncedQuery)
      );

      // Search sources
      const sourceMatches = profile.sources.some(source =>
        source.title.toLowerCase().includes(debouncedQuery)
      );

      const matchesQuery =
        !debouncedQuery ||
        basicFields.includes(debouncedQuery) ||
        timelineMatches ||
        sourceMatches;
      const matchesTag = selectedTag === "all" || profile.tags.includes(selectedTag);
      const matchesRegion = selectedRegion === "all" || profile.region === selectedRegion;
      const matchesStatus =
        selectedStatus === "all" ||
        profile.timeline.some((event) => event.status === selectedStatus);

      return matchesQuery && matchesTag && matchesRegion && matchesStatus;
    });
  }, [profiles, debouncedQuery, selectedTag, selectedRegion, selectedStatus]);

  const hasActiveFilters =
    Boolean(debouncedQuery) ||
    selectedTag !== "all" ||
    selectedRegion !== "all" ||
    selectedStatus !== "all";
  const isSearching = query.trim().toLowerCase() !== debouncedQuery;

  return (
    <main>
      <Header />

      <section className="container" style={{ paddingTop: 20, paddingBottom: 30 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div className="kicker">Explorer</div>
          <h1 className="section-title">Search profiles and research records</h1>
          <p className="muted" style={{ lineHeight: 1.7, maxWidth: 820 }}>
            This MVP explorer is the first layer of BehindCurtain: premium profile pages,
            source-backed timelines, and relationship context.
          </p>
          <p className="muted" style={{ lineHeight: 1.6, maxWidth: 820, marginTop: 10, fontSize: 13 }}>
            Seeded demo profiles for local review — not a live news wire. Claim statuses are
            illustrative; verify sources on each profile before citing publicly.
          </p>

          <div style={{ marginTop: 18, position: "relative" }}>
            <input
              className="input"
              placeholder="Search profiles, events, sources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ paddingRight: isSearching ? 100 : 16 }}
            />
            {isSearching && (
              <div style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 14,
                color: '#666'
              }}>
              Searching...
              </div>
            )}
          </div>

          <div className="filter-grid" style={{ marginTop: 14 }}>
            <select
              aria-label="Filter by tag"
              value={selectedTag}
              onChange={(event) => setSelectedTag(event.target.value)}
            >
              <option value="all">All tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <select
              aria-label="Filter by region"
              value={selectedRegion}
              onChange={(event) => setSelectedRegion(event.target.value)}
            >
              <option value="all">All regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <select
              aria-label="Filter by claim status"
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              <option value="all">All claim statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <div style={{ marginTop: 12, fontSize: 14, color: '#666' }}>
              Found {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </div>
          )}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        {filtered.length > 0 ? (
          <div className="grid-3">
            {filtered.map((profile) => (
              <ProfileCard key={profile.slug} profile={profile} />
            ))}
          </div>
        ) : hasActiveFilters ? (
          <div className="panel" style={{ padding: 40, textAlign: 'center' }}>
            <h3>No results found</h3>
            <p style={{ marginTop: 8 }}>
              Try different search terms or check your spelling
            </p>
          </div>
        ) : (
          <div className="grid-3">
            {profiles.map((profile) => (
              <ProfileCard key={profile.slug} profile={profile} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
