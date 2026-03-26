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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return profiles;

    return profiles.filter((profile) =>
      [
        profile.name,
        profile.role,
        profile.region,
        profile.summary,
        profile.shortBio,
        ...profile.tags,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [profiles, query]);

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

          <div style={{ marginTop: 18 }}>
            <input
              className="input"
              placeholder="Search by name, tag, role, region, or category"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="grid-3">
          {filtered.map((profile) => (
            <ProfileCard key={profile.slug} profile={profile} />
          ))}
        </div>
      </section>
    </main>
  );
}
