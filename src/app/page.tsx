import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileCheck,
  FileSearch,
  Network,
  Scale,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import { getAllProfiles } from "@/lib/db";

const claimStatuses = [
  "verified",
  "allegation",
  "charge",
  "conviction",
  "settlement",
  "denial",
  "disputed",
  "retracted",
];

const platformStack = [
  {
    icon: FileSearch,
    title: "Profile dossiers",
    description:
      "Structured identity, role, region, summary, tags, sources, relationships, and chronology in one research surface.",
  },
  {
    icon: Clock3,
    title: "Timeline intelligence",
    description:
      "Events are arranged chronologically and labeled by category, claim status, and supporting source material.",
  },
  {
    icon: Network,
    title: "Relationship context",
    description:
      "Connections between people, organizations, cases, media events, and public statements stay explicit and sourced.",
  },
];

export default async function HomePage() {
  const profiles = await getAllProfiles();
  const sourceCount = profiles.reduce((sum, profile) => sum + profile.sources.length, 0);
  const eventCount = profiles.reduce((sum, profile) => sum + profile.timeline.length, 0);
  const relationshipCount = profiles.reduce(
    (sum, profile) => sum + profile.relationships.length,
    0,
  );

  return (
    <div>
      <Header />

      <section className="container" style={{ paddingTop: 18, paddingBottom: 42 }}>
        <div className="grid-hero">
          <div className="panel hero-panel">
            <div className="kicker">Prototype · Source-linked intelligence</div>
            <h1 className="big-title">See what is behind the story.</h1>
            <p className="muted hero-copy">
              BehindCurtain structures public information about prominent people,
              institutions, records, controversies, relationships, and timelines
              into neutral dossiers with clear source and claim-status labeling.
            </p>

            <div className="hero-actions">
              <Link href="/explorer" className="btn btn-primary" aria-label="Primary action">
                Explore profiles <ArrowRight size={16} />
              </Link>
              <Link href="/profiles/sample-public-figure" className="btn btn-secondary">
                Open sample dossier
              </Link>
            </div>

            <div className="status-strip" aria-label="Supported claim status labels">
              {claimStatuses.map((status) => (
                <span key={status} className="badge">
                  {status}
                </span>
              ))}
            </div>
          </div>

          <aside className="panel evidence-panel" aria-label="Catalog counts from this workspace">
            <div className="kicker">Workspace catalog</div>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-number">{profiles.length}</div>
                <div className="stat-label">Profiles</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{sourceCount}</div>
                <div className="stat-label">Sources</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{eventCount}</div>
                <div className="stat-label">Events</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{relationshipCount}</div>
                <div className="stat-label">Links</div>
              </div>
            </div>
            <div className="source-card">
              <div className="meta-row">
                <ShieldCheck size={16} />
                Sample dossier excerpt
              </div>
              <h2 className="card-title">Sample Public Figure · 2024-03-02</h2>
              <p className="muted">
                Event: company responds to public criticism. Label: denial.
                Source: official company statement — not treated as verified fact.
              </p>
              <p className="muted" style={{ marginTop: 10 }}>
                A second row in the same file is a public-record filing labeled
                verified. The workspace keeps those statuses apart on purpose.
                Uncertainty stays visible — that is the product, not a gossip feed.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 44 }}>
        <div className="section-heading">
          <div>
            <div className="kicker">Platform stack</div>
            <h2 className="section-title">A case-file interface for public records</h2>
          </div>
          <Link href="/admin" className="btn btn-secondary">
            Admin shell
          </Link>
        </div>

        <div className="grid-3">
          {platformStack.map((item) => (
            <div key={item.title} className="panel feature-card">
              <item.icon size={22} />
              <h3 className="card-title">{item.title}</h3>
              <p className="muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="trust" style={{ paddingBottom: 44 }}>
        <div className="panel trust-panel">
          <div>
            <div className="kicker">Trust framework</div>
            <h2 className="section-title">Neutral, sourced, and explicit about uncertainty</h2>
            <p className="muted hero-copy">
              BehindCurtain is not a gossip product. It is a research workspace
              for separating what is documented, claimed, denied, disputed, or
              legally resolved.
            </p>
          </div>
          <div className="trust-grid">
            {[
              ["Source library", "Articles, filings, interviews, official statements, public records, and archives."],
              ["Claim labels", "Calm visual badges distinguish verified facts from open or contested records."],
              ["Local fallback", "The workspace stays usable with bundled sample dossiers when live data is not configured."],
            ].map(([title, description]) => (
              <div key={title} className="source-card">
                <div className="meta-row">
                  <FileCheck size={16} />
                  {title}
                </div>
                <p className="muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="launch" style={{ paddingBottom: 80 }}>
        <div className="section-heading">
          <div>
            <div className="kicker">Preview profiles</div>
            <h2 className="section-title">Start with source-linked dossiers</h2>
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

      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="panel launch-panel">
          <div>
            <div className="kicker">Workspace notes</div>
            <h2 className="section-title">Built as a sourced research shell</h2>
            <p className="muted hero-copy">
              The app keeps a dedicated data boundary, preserves sample dossiers,
              and stays deployable as a prototype research surface.
            </p>
          </div>
          <div className="launch-points">
            <div>
              <Database size={18} />
              Schema: behindcurtain
            </div>
            <div>
              <Scale size={18} />
              Claim status discipline
            </div>
            <div>
              <ShieldCheck size={18} />
              No service role exposure
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
