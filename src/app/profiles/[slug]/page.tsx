import { notFound } from "next/navigation";
import Header from "@/components/header";
import { getProfileBySlug } from "@/lib/data";
import { getProfileBySlug as getProfileFromDb } from "@/lib/db";
import TimelineList from "@/components/timeline-list";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Try DB first, fall back to mock data
  let profile = await getProfileFromDb(slug);
  if (!profile) {
    profile = await getProfileBySlug(slug);
  }

  if (!profile) notFound();

  return (
    <main>
      <Header />

      <section className="container" style={{ paddingTop: 22, paddingBottom: 26 }}>
        <div className="grid-hero">
          <div className="panel" style={{ padding: 28 }}>
            <div className="muted" style={{ marginBottom: 10 }}>
              {profile.role} · {profile.region}
            </div>
            <h1 className="section-title">{profile.name}</h1>
            <p className="muted" style={{ lineHeight: 1.8, fontSize: 17 }}>
              {profile.summary}
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
              {profile.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div className="card-title" style={{ marginBottom: 12 }}>
              Relationship summary
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {profile.relationships.map((relationship) => (
                <div
                  key={relationship.id}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 16,
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>
                    {relationship.label} → {relationship.targetName}
                  </div>
                  <div className="muted" style={{ lineHeight: 1.6 }}>
                    {relationship.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 30 }}>
        <div className="grid-2">
          <div className="panel" style={{ padding: 24 }}>
            <div className="card-title" style={{ marginBottom: 18 }}>
              Timeline
            </div>
            <TimelineList events={profile.timeline} sources={profile.sources} />
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div className="card-title" style={{ marginBottom: 18 }}>
              Source library
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {profile.sources.map((source) => (
                <a
                  key={source.id}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 16,
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                    {source.type.replace("_", " ")} · {source.publisher} · {source.date}
                  </div>
                  <div style={{ fontWeight: 700 }}>{source.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
