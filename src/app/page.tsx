import Link from "next/link";
import Header from "@/components/header";
import ProfileCard from "@/components/profile-card";
import { getAllProfiles } from "@/lib/db";
import { Suspense } from "react";
import Loading from "@/components/loading";
import {
  ArrowRight,
  Database,
  Network,
  ShieldCheck,
  FileSearch,
  Search,
  Clock,
  Star,
  Gavel,
  FileText,
  BookOpen,
  Mic,
  Landmark,
  Check,
  Scale,
  Layers,
  BadgeCheck,
  AlertCircle,
  Bookmark,
  FileCheck,
  Sparkles,
  File,
  Users,
} from "lucide-react";

export default async function HomePage() {
  const profiles = await getAllProfiles();
  const recentProfiles = profiles.slice(0, 3);
  const profileCount = profiles.length;

  return (
    <main>
      <Header />

        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Search size={20} />
              <h2 className="section-title" style={{ margin: 0 }}>Discover Profiles & Sources</h2>
            </div>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ 
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)'
              }} />
              <input 
                type="search"
                className="input"
                placeholder="Search verified profiles, sources, and events..."
                style={{ paddingLeft: 44 }}
                aria-label="Search verified profiles, sources, and events"
                enterKeyHint="search"
                disabled
              />
              <p className="muted" style={{ marginTop: 8, marginBottom: 0, fontSize: 13 }}>
                Search is not live yet. The directory below is the working surface.
              </p>
              <div className="search-dropdown">
                {recentProfiles.length > 0 ? (
                  <>
                    <div className="search-dropdown-header">
                      <span className="muted">Recent Profiles</span>
                    </div>
                    {recentProfiles.map((profile) => (
                      <Link 
                        key={profile.slug}
                        href={`/profiles/${profile.slug}`}
                        className="search-dropdown-item"
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontWeight: 600 }}>{profile.name}</span>
                          {profile.role && (
                            <span className="muted" style={{ fontSize: 13 }}>{profile.role}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                    <div className="search-dropdown-footer">
                      <Link href="/explorer" className="btn btn-secondary" style={{ width: '100%' }}>
                        View all profiles
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="search-dropdown-item">
                    <span className="muted">No recent profiles found</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div className="grid-3">
            <Suspense fallback={<Loading />}>
              <div className="stat-card">
                <div className="stat-number">{profileCount}</div>
                <div className="stat-label">Verified Profiles</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  People & organizations
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {profiles.reduce((sum, p) => sum + (p.sources?.length || 0), 0)}
                </div>
                <div className="stat-label">Cited Sources</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Documents & records
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {profiles.reduce((sum, p) => sum + (p.timeline?.length || 0), 0)}
                </div>
                <div className="stat-label">Tracked Events</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  With status labels
                </div>
              </div>
            </Suspense>
          </div>
        </div>
        <div className="grid-hero">
          <div className="panel" style={{ padding: 30 }}>
            <div className="kicker">Source-linked intelligence platform</div>
            <h1 className="big-title">Understand the full picture.</h1>
            <p
              className="muted"
              style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 760 }}
            >
              BehindCurtain structures public information about prominent people,
              institutions, records, controversies, relationships, and timelines
              into neutral dossiers with clear source and claim-status labeling.
              Workspace counts below are from this local catalog, not a live
              subscriber or customer metric.
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
            <div className="source-card" style={{ marginTop: 22 }}>
              <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
                Sample dossier excerpt · not a real investigation
              </div>
              <h3 className="card-title" style={{ marginBottom: 8 }}>
                Sample Public Figure · 2024-03-02
              </h3>
              <p className="muted" style={{ lineHeight: 1.6, margin: 0 }}>
                Event: company responds to public criticism. Label: denial.
                Source: official company statement — not treated as verified fact.
                A later public-record filing in the same file is labeled verified.
                The workspace keeps those statuses apart on purpose.
              </p>
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div className="card-title" style={{ marginBottom: 14 }}>
              Platform stack
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                {
                  icon: <File size={18} />,
                  title: "Verified Profiles",
                  description: "Structured records with source-linked details and verification status"
                },
                {
                  icon: <Clock size={18} />,
                  title: "Event Timelines",
                  description: "Chronological sequences with claim status indicators and source citations"
                },
                {
                  icon: <Network size={18} />,
                  title: "Source Verification",
                  description: "Every claim requires at least one public record, statement, or verified source"
                },
                {
                  icon: <Users size={18} />,
                  title: "Relationship Mapping",
                  description: "Visualize connections with labeled relationship types and evidence"
                },
                {
                  icon: <Search size={18} />,
                  title: "Cross-Profile Search",
                  description: "Find connections across people, organizations, and events"
                },
                {
                  icon: <BadgeCheck size={18} />,
                  title: "Claim Classification",
                  description: "Clear status labels: verified facts, allegations, disputes, and denials"
                },
                {
                  icon: <ShieldCheck size={18} />,
                  title: "Trust Framework",
                  description: "Multi-step verification process with source quality ratings"
                },
                {
                  icon: <Layers size={18} />,
                  title: "Evidence Stack",
                  description: "View all supporting materials in context with metadata"
                }
              ].map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 16,
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    {item.icon}
                    <div style={{ fontWeight: 700 }}>{item.title}</div>
                  </div>
                  <div className="muted" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Platform Stack Section */}
      <section className="container" style={{ paddingBottom: 40 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div className="kicker">Core Features</div>
          <h2 className="section-title">Platform Stack</h2>
          <p className="muted" style={{ marginBottom: 24, lineHeight: 1.7 }}>
            BehindCurtain combines structured data, source verification, and relationship mapping into a unified intelligence platform.
          </p>

          <div className="grid-3" style={{ gap: 16 }}>
            {[
              {
                icon: <File size={18} />,
                title: "Verified Profiles",
                description: "Structured records with source-linked details and verification status"
              },
              {
                icon: <Clock size={18} />,
                title: "Event Timelines",
                description: "Chronological sequences with claim status indicators and source citations"
              },
              {
                icon: <Network size={18} />,
                title: "Source Verification",
                description: "Every claim requires at least one public record, statement, or verified source"
              },
              {
                icon: <Users size={18} />,
                title: "Relationship Mapping",
                description: "Visualize connections with labeled relationship types and evidence"
              },
              {
                icon: <Search size={18} />,
                title: "Cross-Profile Search",
                description: "Find connections across people, organizations, and events"
              },
              {
                icon: <BadgeCheck size={18} />,
                title: "Claim Classification",
                description: "Clear status labels: verified facts, allegations, disputes, and denials"
              },
              {
                icon: <ShieldCheck size={18} />,
                title: "Trust Framework",
                description: "Multi-step verification process with source quality ratings"
              },
              {
                icon: <Layers size={18} />,
                title: "Evidence Stack",
                description: "View all supporting materials in context with metadata"
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="panel"
                style={{
                  padding: 20,
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.025)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  {item.icon}
                  <div style={{ fontWeight: 700 }}>{item.title}</div>
                </div>
                <div className="muted" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 20 }}>
        <div className="grid-2" style={{ marginBottom: 40, gap: 24 }}>
          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Star size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Featured Profiles</h2>
            </div>
            <div className="featured-grid">
              {profiles.slice(0, 4).map((profile, i) => {
                const featured = i === 0;
                const sourceCount = profile.sources?.length || 0;
                const eventCount = profile.timeline?.length || 0;
                const tags = profile.tags?.slice(0, 3) || [];
                
                return (
                  <div 
                    key={profile.slug} 
                    className={`featured-item ${featured ? 'featured-1' : ''}`}
                  >
                    <ProfileCard 
                      profile={profile} 
                      compact 
                      featured={featured}
                    />
                    {featured && (
                      <div className="featured-banner">
                        <span className="featured-badge">Editor's Pick</span>
                        <h3 className="featured-title">{profile.name}</h3>
                        <p className="featured-description">
                          {profile.shortBio || profile.role || 'Featured profile'}
                        </p>
                        <div className="featured-stats">
                          <div className="featured-stat">
                            <FileText size={14} />
                            <span>{sourceCount} sources</span>
                          </div>
                          <div className="featured-stat">
                            <Clock size={14} />
                            <span>{eventCount} events</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {tags.map((tag) => (
                            <span 
                              key={tag}
                              className="badge"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {!featured && (
                      <div className="featured-summary">
                        <h4 className="featured-name">{profile.name}</h4>
                        <div className="featured-meta">
                          {profile.role && (
                            <span className="featured-role">{profile.role}</span>
                          )}
                          <div className="featured-stats">
                            <FileText size={12} />
                            <span>{sourceCount}</span>
                            <Clock size={12} />
                            <span>{eventCount}</span>
                          </div>
                        </div>
                        {tags.length > 0 && (
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {tags.map((tag) => (
                              <span 
                                key={tag}
                                className="badge"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Clock size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Recent Updates</h2>
            </div>
            <div className="timeline">
              {profiles.flatMap((profile) =>
                (profile.timeline || []).map((event) => ({ profile, event })),
              ).slice(0, 5).map(({ profile, event }) => (
                <div key={event.id} className="timeline-item">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 4
                  }}>
                    <span className="muted" style={{ fontSize: 13 }}>{event.date}</span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      <FileText size={14} />
                      <span className="relationship-type">{event.status}</span>
                    </div>
                  </div>
                  <div style={{ fontWeight: 600 }}>{event.title}</div>
                  <Link
                    href={`/profiles/${profile.slug}`}
                    className="muted"
                    style={{
                      display: 'inline-block',
                      fontSize: 14,
                      marginTop: 4
                    }}
                  >
                    {profile.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: 40, gap: 24 }}>
          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <FileSearch size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Featured Sources</h2>
            </div>
            <div className="featured-grid">
              {profiles.flatMap((p) =>
                (p.sources || []).map((source) => ({ source, profile: p })),
              ).slice(0, 4).map(({ source, profile }, i) => (
                <div key={i} className="source-card">
                  <div className="meta-row" style={{ marginBottom: 8 }}>
                    <span className="badge">{String(source.type || "source").replace('_', ' ')}</span>
                    <span className="muted">{source.date}</span>
                  </div>
                  <h3 className="card-title" style={{ marginBottom: 8 }}>
                    {source.title}
                  </h3>
                  <Link
                    href={`/profiles/${profile.slug}`}
                    className="muted"
                  >
                    {profile.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <BadgeCheck size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Claim Classification</h2>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  icon: <BadgeCheck size={16} />,
                  title: 'Verified Facts',
                  description: 'Claims supported by multiple independent, credible sources'
                },
                {
                  icon: <AlertCircle size={16} />,
                  title: 'Allegations',
                  description: 'Unproven claims requiring further investigation'
                },
                {
                  icon: <Bookmark size={16} />,
                  title: 'Public Statements',
                  description: 'Official statements from individuals or organizations'
                },
                {
                  icon: <FileCheck size={16} />,
                  title: 'Legal Records',
                  description: 'Court filings, government documents, and official records'
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                    <div className="muted" style={{ lineHeight: 1.6 }}>{item.description}</div>
                  </div>
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
        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div className="grid-2" style={{ gap: 24 }}>
            <div>
              <div className="kicker">Verification Methodology</div>
              <h2 className="section-title">How We Verify Information</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain describes how a profile should be checked. The public site is not a live verification engine.
              </p>
              <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <FileSearch size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Source Evaluation</div>
                    <div className="muted">Assessing source credibility and proximity to information</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Scale size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Cross-Verification</div>
                    <div className="muted">Requiring multiple independent sources for facts</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <BadgeCheck size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Status Labeling</div>
                    <div className="muted">Clear indicators for verified facts vs allegations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-2" style={{ gap: 16 }}>
              <div className="stat-card">
                <div className="stat-number">Method</div>
                <div className="stat-label">Not a live count</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  The page describes the checks. It does not prove every fact has three sources.
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Linked</div>
                <div className="stat-label">When a source is shown</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  This site does not claim that every statement is already source-linked.
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div className="grid-2" style={{ gap: 24 }}>
            <div>
              <div className="kicker">Trust Framework</div>
              <h2 className="section-title">Verified Intelligence</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain uses a rigorous trust framework to distinguish between:
              </p>
              <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <BadgeCheck size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Verified Facts</div>
                    <div className="muted">Supported by multiple independent sources</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <AlertCircle size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Allegations</div>
                    <div className="muted">Unproven claims requiring investigation</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <FileText size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Public Statements</div>
                    <div className="muted">Official positions from individuals/organizations</div>
                  </div>
                </div>
              </div>
              <Link href="/explorer" className="btn btn-primary">
                Explore Verified Profiles
              </Link>
            </div>
            <div className="grid-2" style={{ gap: 16 }}>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Source-Linked</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Every claim has evidence
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3x</div>
                <div className="stat-label">Verified</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Cross-checked sources
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 24 }}>
          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <ShieldCheck size={20} />
              <h2 className="section-title" style={{ margin: 0 }}>Trust Framework</h2>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  icon: <Check size={16} />,
                  title: 'Source-Linked Claims',
                  description: 'Every serious claim must be tied to at least one public record, statement, or verified source.'
                },
                {
                  icon: <Scale size={16} />,
                  title: 'Status Labeling',
                  description: 'Clear indicators for verified facts, allegations, disputes, and denials.'
                },
                {
                  icon: <Layers size={16} />,
                  title: 'Correction System',
                  description: 'Profiles support updates, corrections, and contextual notes from primary sources.'
                },
                {
                  icon: <BadgeCheck size={16} />,
                  title: 'Verification Process',
                  description: 'Multi-step verification for sources and claims, including cross-referencing and expert review.'
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                    <div className="muted" style={{ lineHeight: 1.6 }}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Sparkles size={20} />
              <h2 className="section-title" style={{ margin: 0 }}>Research Workflows</h2>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  icon: <FileSearch size={16} />,
                  title: 'Timeline Analysis',
                  description: 'Reconstruct sequences of events with source-backed claims and status indicators.'
                },
                {
                  icon: <Network size={16} />,
                  title: 'Relationship Mapping',
                  description: 'Visualize connections between people, organizations, and events.'
                },
                {
                  icon: <Database size={16} />,
                  title: 'Evidence Library',
                  description: 'Centralized access to all source materials with metadata and context.'
                },
                {
                  icon: <FileCheck size={16} />,
                  title: 'Source Verification',
                  description: 'Track the verification status of each source and claim.'
                }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                    <div className="muted" style={{ lineHeight: 1.6 }}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Trust Framework Section */}
      <section className="container" id="trust" style={{ paddingBottom: 80 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div className="grid-2" style={{ gap: 24 }}>
            <div>
              <div className="kicker">Trust Framework</div>
              <h2 className="section-title">Verified Intelligence</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain uses a rigorous trust framework to ensure information quality:
              </p>
              <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <BadgeCheck size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Source-Linked Claims</div>
                    <div className="muted">Every claim requires at least one public record, statement, or verified source</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Scale size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Status Labeling</div>
                    <div className="muted">Clear indicators for verified facts, allegations, disputes, and denials</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Layers size={18} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Evidence Stack</div>
                    <div className="muted">View all supporting materials in context with metadata</div>
                  </div>
                </div>
              </div>
              <Link href="/explorer" className="btn btn-primary">
                Explore Verified Profiles
              </Link>
            </div>
            <div className="grid-2" style={{ gap: 16 }}>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Source-Linked</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Every claim has evidence
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3x</div>
                <div className="stat-label">Verified</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Cross-checked sources
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div className="grid-2" style={{ gap: 24 }}>
            <div>
              <div className="kicker">Start Exploring</div>
              <h2 className="section-title">Understand the Full Picture</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain helps you navigate complex public information through:
              </p>
              <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <BadgeCheck size={16} />
                  <span>Verified profiles with source-linked details</span>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Clock size={16} />
                  <span>Chronological event timelines</span>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Network size={16} />
                  <span>Clear source citations for every claim</span>
                </div>
              </div>
              <Link href="/explorer" className="btn btn-primary">
                Explore Profiles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid-2" style={{ gap: 16 }}>
              <div className="stat-card">
                <div className="stat-number">{profileCount}</div>
                <div className="stat-label">Verified Profiles</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  {profiles.reduce((sum, p) => sum + (p.sources?.length || 0), 0)}
                </div>
                <div className="stat-label">Cited Sources</div>
              </div>
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

        <Suspense fallback={<Loading />}>
          <div className="grid-3">
            {profiles.map((profile) => (
              <ProfileCard key={profile.slug} profile={profile} />
            ))}
          </div>
        </Suspense>
      </section>


      <section className="container" style={{ paddingBottom: 40 }}>
        <div className="panel" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Bookmark size={20} />
            <h2 className="section-title" style={{ margin: 0 }}>Methodology</h2>
          </div>
          <div style={{ display: 'grid', gap: 24 }}>
            <div>
              <h3 className="card-title" style={{ marginBottom: 12 }}>Source Classification</h3>
              <div className="muted" style={{ lineHeight: 1.7 }}>
                We categorize sources into primary, secondary, and tertiary levels based on their proximity to the information and reliability. Primary sources include official records and direct statements, while secondary sources include verified reporting and expert analysis.
              </div>
            </div>
            <div>
              <h3 className="card-title" style={{ marginBottom: 12 }}>Claim Verification</h3>
              <div className="muted" style={{ lineHeight: 1.7 }}>
                Each claim undergoes a multi-step verification process including source evaluation, cross-referencing, and expert review. Claims are labeled with their verification status and supporting evidence.
              </div>
            </div>
            <div>
              <h3 className="card-title" style={{ marginBottom: 12 }}>Fact vs Allegation</h3>
              <div className="muted" style={{ lineHeight: 1.7 }}>
                We clearly distinguish between verified facts and allegations. Facts require multiple independent sources, while allegations are labeled as unproven claims requiring further investigation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
