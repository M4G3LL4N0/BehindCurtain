import Link from "next/link";
import { Profile } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link
      href={`/profiles/${profile.slug}`}
      className="panel"
      style={{ padding: 20, display: "block" }}
    >
      <div className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
        {profile.role} · {profile.region}
      </div>
      <div className="card-title" style={{ marginBottom: 10 }}>
        {profile.name}
      </div>
      <div className="muted" style={{ lineHeight: 1.6, marginBottom: 16 }}>
        {profile.shortBio}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {profile.tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}>
        Open profile <ArrowRight size={16} />
      </div>
    </Link>
  );
}
