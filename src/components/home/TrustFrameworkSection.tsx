export function TrustFrameworkSection() {
  return (
    <section className="container" id="trust" style={{ paddingBottom: 40 }}>
      <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
        <div className="grid-2" style={{ gap: 24 }}>
          <div>
            <div className="kicker">Trust & Provenance</div>
            <h2 className="section-title">Verified Intelligence</h2>
            <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
              BehindCurtain distinguishes between facts, allegations, and statements with clear sourcing and verification. 
              Every claim is tied to its evidence with timestamped verification records.
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

      <VerificationWorkflowSection />
    </section>
  );
}

function VerificationWorkflowSection() {
  return (
    <div className="grid-2" style={{ gap: 24 }}>
      <div className="panel" style={{ padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <ShieldCheck size={20} />
          <h2 className="section-title" style={{ margin: 0 }}>Trust Framework</h2>
        </div>
        <VerificationItems />
      </div>

      <div className="panel" style={{ padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Sparkles size={20} />
          <h2 className="section-title" style={{ margin: 0 }}>Research Workflows</h2>
        </div>
        <WorkflowItems />
      </div>
    </div>
  );
}

function VerificationItems() {
  const items = [
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
  ];

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 12 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
            <div className="muted" style={{ lineHeight: 1.6 }}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkflowItems() {
  const items = [
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
  ];

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 12 }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
            <div className="muted" style={{ lineHeight: 1.6 }}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
