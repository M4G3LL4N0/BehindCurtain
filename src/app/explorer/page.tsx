"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import type { Profile } from "@/lib/types";
import { getAllProfiles } from "@/lib/db";

export default function ExplorerPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [query, setQuery] = useState("");

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
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search input
  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const filtered = useMemo(() => {
    if (!debouncedQuery) return profiles;

    return profiles.filter((profile) => {
      // Basic fields to search
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

      return (
        basicFields.includes(debouncedQuery) ||
        timelineMatches ||
        sourceMatches
      );
    });
  }, [profiles, debouncedQuery]);

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

          <div style={{ marginTop: 18, position: 'relative' }}>
            <input
              className="input"
              placeholder="Search profiles, events, sources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {isSearching && (
              <div style={{
                position: 'absolute',
                right: 12,
                top: 12,
                fontSize: 14,
                color: '#666'
              }}>
                Searching...
              </div>
            )}
          </div>

          {debouncedQuery && (
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
        ) : debouncedQuery ? (
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
