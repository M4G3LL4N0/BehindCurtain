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
