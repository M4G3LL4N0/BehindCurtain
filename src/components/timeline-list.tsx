import { TimelineEvent, SourceItem } from "@/lib/types";
import StatusBadge from "./status-badge";

function getSources(sourceIds: string[], sources: SourceItem[]) {
  return sources.filter((source) => sourceIds.includes(source.id));
}

export default function TimelineList({
  events,
  sources,
}: {
  events: TimelineEvent[];
  sources: SourceItem[];
}) {
  return (
    <div className="timeline">
      {events.map((event) => {
        const linkedSources = getSources(event.sourceIds, sources);
        return (
          <div key={event.id} className="timeline-item">
            <div
              className="panel"
              style={{
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: 10,
                }}
              >
                <div className="muted" style={{ fontSize: 13 }}>
                  {event.date} · {event.category.replace("_", " ")}
                </div>
                <StatusBadge status={event.status} />
              </div>
              <div className="card-title" style={{ marginBottom: 10 }}>
                {event.title}
              </div>
              <div className="muted" style={{ lineHeight: 1.7, marginBottom: 14 }}>
                {event.summary}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {linkedSources.map((source) => (
                  <a
                    key={source.id}
                    href={source.href}
                    className="badge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.type.replace("_", " ")} · {source.publisher}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
