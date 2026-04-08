import Link from "next/link";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import { getAllProfiles } from "@/lib/db";
import {
  ArrowRight,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
  FileSearch,
  Search,
  Clock,
  Star,
} from "lucide-react";

export default async function HomePage() {
  const profiles = await getAllProfiles();

  return (
    <main>
      <Header />

      <section className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <div className="panel" style={{ padding: 16, marginBottom: 24 }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ 
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--muted)'
            }} />
            <input 
              type="text" 
              className="input" 
              placeholder="Search profiles, organizations, events..."
              style={{ paddingLeft: 44 }}
            />
            <div className="search-dropdown">
              <div className="search-dropdown-item">
                <span className="muted">Recent:</span> Elon Musk
              </div>
              <div className="search-dropdown-item">
                <span className="muted">Recent:</span> OpenAI
              </div>
              <div className="search-dropdown-item">
                <span className="muted">Category:</span> Tech CEOs
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div className="grid-3">
            <div className="stat-card">
              <div className="stat-number">{profiles.length}+</div>
              <div className="stat-label">Profiles</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Sources</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Relationships</div>
            </div>
          </div>
        </div>
        <div className="grid-hero">
          <div className="panel" style={{ padding: 30 }}>
            <div className="kicker">Source-linked intelligence platform</div>
            <h1 className="big-title">See what’s behind the story.</h1>
            <p
              className="muted"
              style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 760 }}
            >
              BehindCurtain turns fragmented public information into structured
              timelines, source-backed profiles, and relationship maps for
              understanding people, power, and events.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 24,
              }}
            >
              <Link href="/explorer" className="btn btn-primary">
                Explore profiles <ArrowRight size={16} />
              </Link>
              <a href="#trust" className="btn btn-secondary">
                Review trust layer
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 28,
              }}
            >
              <span className="badge">facts vs allegations</span>
              <span className="badge">source-linked claims</span>
              <span className="badge">relationship mapping</span>
              <span className="badge">timeline intelligence</span>
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div className="card-title" style={{ marginBottom: 14 }}>
              Platform stack
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                ["Profile system", "Structured people and entity records"],
                ["Timeline engine", "Chronology with claim classification"],
                ["Source layer", "Every serious claim tied to evidence"],
                ["Relationship graph", "Understand who connects to what"],
                ["Research mode", "Fast discovery for journalists and creators"],
              ].map(([title, body]) => (
                <div
                  key={title}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 16,
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
                  <div className="muted" style={{ lineHeight: 1.6 }}>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 20 }}>
        <div className="grid-2" style={{ marginBottom: 40 }}>
          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Star size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Featured Profiles</h2>
            </div>
            <div className="featured-grid">
              {profiles.slice(0, 4).map((profile, i) => (
                <div 
                  key={profile.slug} 
                  className={`featured-item featured-${i+1}`}
                >
                  <ProfileCard 
                    profile={profile} 
                    compact 
                    featured={profile.slug === 'elon-musk'}
                  />
                  {i === 0 && (
                    <div className="featured-banner">
                      <span className="featured-badge">Editor's Pick</span>
                      <h3 className="featured-title">{profile.name}</h3>
                      <p className="featured-description">{profile.short_bio || profile.role || ''}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Clock size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Recent Updates</h2>
            </div>
            <div className="timeline">
              {[
                { 
                  date: '2 hours ago', 
                  title: 'New court filing added', 
                  profile: 'Elon Musk',
                  type: 'legal'
                },
                { 
                  date: '5 hours ago', 
                  title: 'Profile updated', 
                  profile: 'Sam Altman',
                  type: 'business'
                },
                { 
                  date: 'Yesterday', 
                  title: '3 new sources added', 
                  profile: 'OpenAI',
                  type: 'media'
                }
              ].map((item, i) => (
                <div key={i} className="timeline-item">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'baseline',
                    gap: 8,
                    marginBottom: 4
                  }}>
                    <span className="muted" style={{ fontSize: 13 }}>{item.date}</span>
                    <span className="relationship-type">{item.type}</span>
                  </div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <Link 
                    href={`/profile/${item.profile.toLowerCase().replace(' ', '-')}`} 
                    className="muted" 
                    style={{ 
                      display: 'inline-block',
                      fontSize: 14,
                      marginTop: 4
                    }}
                  >
                    {item.profile} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid-3">
          <div className="panel" style={{ padding: 22 }}>
            <Database size={22} />
            <h3 className="card-title" style={{ marginTop: 12, marginBottom: 10 }}>
              Structured records
            </h3>
            <div className="muted" style={{ lineHeight: 1.7 }}>
              Transform scattered articles, statements, filings, and records into
              one researchable profile.
            </div>
          </div>

          <div className="panel" style={{ padding: 22 }}>
            <FileSearch size={22} />
            <h3 className="card-title" style={{ marginTop: 12, marginBottom: 10 }}>
              Source-linked claims
            </h3>
            <div className="muted" style={{ lineHeight: 1.7 }}>
              Separate verified facts from allegations, denials, disputes, and
              public claims.
            </div>
          </div>

          <div className="panel" style={{ padding: 22 }}>
            <Network size={22} />
            <h3 className="card-title" style={{ marginTop: 12, marginBottom: 10 }}>
              Relationship intelligence
            </h3>
            <div className="muted" style={{ lineHeight: 1.7 }}>
              Follow the links between people, organizations, cases, statements,
              and events.
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 40 }}>
        <div
          className="panel"
          style={{
            padding: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="kicker">MVP explorer</div>
            <h2 className="section-title">Seed the first profiles now.</h2>
            <p
              className="muted"
              style={{ maxWidth: 760, lineHeight: 1.7 }}
            >
              Start with a controlled dataset, strong sourcing rules, and premium
              profile pages. Then expand into graph intelligence, alerts, and
              research workflows.
            </p>
          </div>
          <Link href="/explorer" className="btn btn-primary">
            Open explorer <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="container" id="trust" style={{ paddingBottom: 40 }}>
        <div className="grid-2">
          <div className="panel" style={{ padding: 24 }}>
            <ShieldCheck size={22} />
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Trust layer
            </h2>
            <div className="muted" style={{ lineHeight: 1.8 }}>
              BehindCurtain should never present rumor as fact. Serious claims
              must be source-linked, statuses must be labeled clearly, and
              profiles must support corrections, denials, and updates.
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }} id="launch">
            <Sparkles size={22} />
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Launch path
            </h2>
            <div className="muted" style={{ lineHeight: 1.8 }}>
              Ship a strong landing page, explorer, and profile system first.
              Then connect Supabase, add admin ingestion, and expand into
              search, graph views, and monitoring.
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 20,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="kicker">Preview profiles</div>
            <h2 className="section-title">What the product feels like</h2>
          </div>
          <Link href="/explorer" className="btn btn-secondary">
            View all
          </Link>
        </div>

        <div className="grid-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.slug} profile={profile} />
          ))}
        </div>
      </section>
    </main>
  );
}
