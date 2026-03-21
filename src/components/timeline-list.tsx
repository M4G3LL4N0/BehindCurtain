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
import { TimelineEvent } from "@/lib/types";
import { StatusBadge } from "./status-badge";

interface TimelineListProps {
  events: TimelineEvent[];
  className?: string;
}

export function TimelineList({ events, className = "" }: TimelineListProps) {
  const categoryIcons: Record<string, string> = {
    legal: "⚖️",
    business: "💼", 
    media: "📰",
    public_statement: "🗣️",
    background: "📅"
  };

  return (
    <div className={`timeline ${className}`}>
      {events.map((event) => (
        <div key={event.id} className="timeline-item mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-1">
              <span className="text-muted text-xs font-medium">{event.date}</span>
              <StatusBadge status={event.status} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold leading-tight">{event.title}</h3>
                <span className="badge">
                  {categoryIcons[event.category]} {event.category.replace(/_/g, ' ')}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">{event.summary}</p>
              {event.sourceIds.length > 0 && (
                <div className="text-xs text-muted flex items-center gap-2">
                  <span>Source{event.sourceIds.length > 1 ? 's' : ''}:</span>
                  <span className="text-accent">
                    {event.sourceIds.length} referenced
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
