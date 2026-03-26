import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="panel" style={{ padding: 28, maxWidth: 720 }}>
        <div className="kicker">Not found</div>
        <h1 className="section-title">That profile does not exist yet.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          Return to the explorer and continue building out the BehindCurtain dataset.
        </p>
        <div style={{ marginTop: 18 }}>
          <Link href="/explorer" className="btn btn-primary">
            Go to explorer
          </Link>
        </div>
      </div>
    </main>
  );
}
