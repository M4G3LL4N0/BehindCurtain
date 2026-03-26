import Link from "next/link";
import { Search, Shield, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="container" style={{ paddingTop: 24, paddingBottom: 16 }}>
      <div
        className="panel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              background: "linear-gradient(180deg, #aadaff 0%, #79bbff 100%)",
              color: "#07111f",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
            }}
          >
            BC
          </div>

          <div>
            <div style={{ fontWeight: 800, letterSpacing: "-0.03em" }}>BehindCurtain</div>
            <div className="muted" style={{ fontSize: 12 }}>
              Source-linked intelligence
            </div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn btn-secondary" href="/explorer">
            <Search size={16} />
            Explorer
          </Link>

          <a className="btn btn-secondary" href="#trust">
            <Shield size={16} />
            Trust
          </a>

          <a className="btn btn-primary" href="#launch">
            <Sparkles size={16} />
            Launch MVP
          </a>
        </nav>
      </div>
    </header>
  );
}
