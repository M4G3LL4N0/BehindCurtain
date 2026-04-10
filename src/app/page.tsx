import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustFrameworkSection } from "@/components/home/TrustFrameworkSection";
import { FeaturedProfilesSection } from "@/components/home/FeaturedProfilesSection";
import { RecentUpdatesSection } from "@/components/home/RecentUpdatesSection"; 
import { MethodologySection } from "@/components/home/MethodologySection";
import { ProfilePreviewSection } from "@/components/home/ProfilePreviewSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";
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
  Verified,
  AlertCircle,
  Bookmark,
  FileCheck,
  Sparkles 
} from "lucide-react";

export default async function HomePage() {
  const profiles = await getAllProfiles();
  const recentProfiles = profiles.slice(0, 3);
  const profileCount = profiles.length;

  return (
    <main>
      <Header />

      <section className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
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
              />
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
              BehindCurtain structures public information into verified profiles, 
              source-backed timelines, and relationship maps - with clear 
              distinctions between facts, allegations, and public statements.
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
              {[
                { 
                  date: '2 hours ago', 
                  title: 'New court filing added', 
                  profile: 'Elon Musk',
                  type: 'legal',
                  icon: <Gavel size={14} />
                },
                { 
                  date: '5 hours ago', 
                  title: 'Profile updated', 
                  profile: 'Sam Altman',
                  type: 'business',
                  icon: <FileText size={14} />
                },
                { 
                  date: 'Yesterday', 
                  title: '3 new sources added', 
                  profile: 'OpenAI',
                  type: 'media',
                  icon: <BookOpen size={14} />
                },
                { 
                  date: 'Yesterday', 
                  title: 'New interview published', 
                  profile: 'Satya Nadella',
                  type: 'interview',
                  icon: <Mic size={14} />
                },
                { 
                  date: '2 days ago', 
                  title: 'Government record added', 
                  profile: 'Nvidia',
                  type: 'public_record',
                  icon: <Landmark size={14} />
                }
              ].map((item, i) => (
                <div key={i} className="timeline-item">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 4
                  }}>
                    <span className="muted" style={{ fontSize: 13 }}>{item.date}</span>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      {item.icon}
                      <span className="relationship-type">{item.type}</span>
                    </div>
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

        <div className="grid-2" style={{ marginBottom: 40, gap: 24 }}>
          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <FileSearch size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Featured Sources</h2>
            </div>
            <div className="featured-grid">
              {profiles.flatMap(p => p.sources).slice(0, 4).map((source, i) => (
                <div key={i} className="source-card">
                  <div className="meta-row" style={{ marginBottom: 8 }}>
                    <span className="badge">{source.type.replace('_', ' ')}</span>
                    <span className="muted">{source.date}</span>
                  </div>
                  <h3 className="card-title" style={{ marginBottom: 8 }}>
                    {source.title}
                  </h3>
                  <Link 
                    href={`/profile/${source.profile.toLowerCase().replace(' ', '-')}`}
                    className="muted"
                  >
                    {source.profile} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Verified size={18} />
              <h2 className="section-title" style={{ margin: 0 }}>Claim Classification</h2>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                {
                  icon: <Verified size={16} />,
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
              <div className="kicker">Trust & Provenance</div>
              <h2 className="section-title">Verified Intelligence</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain distinguishes between facts, allegations, and statements with clear sourcing and verification. Every claim is tied to its evidence.
              </p>
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
                  icon: <Verified size={16} />,
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

      <section className="container" id="trust" style={{ paddingBottom: 40 }}>
        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div className="grid-2" style={{ gap: 24 }}>
            <div>
              <div className="kicker">Trust & Provenance</div>
              <h2 className="section-title">Verified Intelligence</h2>
              <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
                BehindCurtain distinguishes between facts, allegations, and statements with clear sourcing and verification. Every claim is tied to its evidence.
              </p>
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
                  icon: <Verified size={16} />,
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

  return (
    <main>
      <Header />

      <HeroSection 
        profileCount={profileCount}
        profiles={profiles}
        recentProfiles={recentProfiles} 
      />

      <TrustFrameworkSection />

      <FeaturedProfilesSection profiles={profiles} />
      
      <RecentUpdatesSection />

      <MethodologySection />

      <ProfilePreviewSection profiles={profiles} />

      <CallToActionSection />
    </main>
  );
}
