import { getSupabaseClient } from "@/lib/supabase";
import { profiles as mockProfiles } from "@/lib/data";
import type { Profile } from "@/lib/types";
import type {
  ProfileRow,
  ProfileTagRow,
  RelationshipRow,
  SourceRow,
  TimelineEventRow,
  TimelineEventSourceRow,
} from "@/lib/database.types";

function mapProfileRowToBaseProfile(row: ProfileRow): Profile {
  return {
    slug: row.slug,
    name: row.name,
    shortBio: row.short_bio ?? "",
    role: row.role ?? "",
    region: row.region ?? "",
    tags: [],
    summary: row.summary ?? "",
    sources: [],
    timeline: [],
    relationships: [],
  };
}

export async function getAllProfiles(): Promise<Profile[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockProfiles;
  }

  const result = await supabase
    .from("profiles")
    .select("*")
    .order("name", { ascending: true });

  const data = (result.data ?? []) as unknown as ProfileRow[];

  if (result.error || data.length === 0) {
    return mockProfiles;
  }

  return data.map(mapProfileRowToBaseProfile);
}

export async function getProfileBySlug(slug: string): Promise<Profile | undefined> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockProfiles.find((profile) => profile.slug === slug);
  }

  const profileResult = await supabase
    .from("profiles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  const profileRow = (profileResult.data ?? null) as unknown as ProfileRow | null;

  if (profileResult.error || !profileRow) {
    return mockProfiles.find((profile) => profile.slug === slug);
  }

  const profile = mapProfileRowToBaseProfile(profileRow);

  const [
    tagsResult,
    sourcesResult,
    timelineResult,
    relationshipsResult,
    timelineEventSourcesResult,
  ] = await Promise.all([
    supabase.from("profile_tags").select("*").eq("profile_id", profileRow.id).order("tag"),
    supabase
      .from("sources")
      .select("*")
      .eq("profile_id", profileRow.id)
      .order("source_date", { ascending: false }),
    supabase
      .from("timeline_events")
      .select("*")
      .eq("profile_id", profileRow.id)
      .order("event_date", { ascending: false }),
    supabase
      .from("relationships")
      .select("*")
      .eq("profile_id", profileRow.id)
      .order("target_name", { ascending: true }),
    supabase.from("timeline_event_sources").select("*"),
  ]);

  const tags = (tagsResult.data ?? []) as unknown as ProfileTagRow[];
  const sources = (sourcesResult.data ?? []) as unknown as SourceRow[];
  const timelineEvents = (timelineResult.data ?? []) as unknown as TimelineEventRow[];
  const relationships = (relationshipsResult.data ?? []) as unknown as RelationshipRow[];
  const timelineEventSources =
    (timelineEventSourcesResult.data ?? []) as unknown as TimelineEventSourceRow[];

  profile.tags = tags.map((tag) => tag.tag);

  profile.sources = sources.map((source) => ({
    id: source.id,
    title: source.title,
    publisher: source.publisher ?? "",
    date: source.source_date ?? "",
    type: source.source_type,
    href: source.href ?? "#",
  }));

  profile.timeline = timelineEvents.map((event) => ({
    id: event.id,
    date: event.event_date,
    title: event.title,
    summary: event.summary ?? "",
    status: event.status,
    category: event.category,
    sourceIds: timelineEventSources
      .filter((link) => link.event_id === event.id)
      .map((link) => link.source_id),
  }));

  profile.relationships = relationships.map((relationship) => ({
    id: relationship.id,
    label: relationship.label,
    targetName: relationship.target_name,
    targetType: relationship.target_type,
    description: relationship.description ?? "",
  }));

  return profile;
}
