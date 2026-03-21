import { ClaimStatus } from "@/lib/types";

const styles: Record<ClaimStatus, React.CSSProperties> = {
  verified: { color: "#b7f0c2", borderColor: "rgba(183,240,194,0.25)" },
  allegation: { color: "#ffe5a8", borderColor: "rgba(255,229,168,0.25)" },
  charge: { color: "#ffd1a8", borderColor: "rgba(255,209,168,0.25)" },
  conviction: { color: "#ffb4b4", borderColor: "rgba(255,180,180,0.25)" },
  settlement: { color: "#cce0ff", borderColor: "rgba(204,224,255,0.25)" },
  denial: { color: "#d6d9ff", borderColor: "rgba(214,217,255,0.25)" },
  disputed: { color: "#f0cdfc", borderColor: "rgba(240,205,252,0.25)" },
  retracted: { color: "#d3d3d3", borderColor: "rgba(211,211,211,0.25)" },
};

export default function StatusBadge({ status }: { status: ClaimStatus }) {
  return (
    <span
      style={{
        ...styles[status],
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 999,
        padding: "6px 10px",
        fontSize: 12,
        textTransform: "capitalize",
        display: "inline-flex",
      }}
    >
      {status.replace("_", " ")}
    </span>
  );
}
import { ClaimStatus } from "@/lib/types";

const statusStyles: Record<ClaimStatus, string> = {
  verified: "text-success border-success/20 bg-success/10",
  allegation: "text-warning border-warning/20 bg-warning/10",  
  charge: "text-danger border-danger/20 bg-danger/10",
  conviction: "text-danger border-danger/30 bg-danger/15",
  settlement: "text-accent border-accent/20 bg-accent/10",
  denial: "text-muted border-line bg-panel",
  disputed: "text-warning border-warning/20 bg-warning/10",
  retracted: "text-danger/80 border-danger/15 bg-danger/5",
};

interface StatusBadgeProps {
  status: ClaimStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${statusStyles[status]} ${className}`}>
      {status.replace(/_/g, ' ')}
    </span>
  );
}
