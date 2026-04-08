import { getSupabaseClient } from "@/lib/supabase";
import { profiles as mockProfiles } from "@/lib/data";
import type { Profile } from "@/lib/types";
import type {
  ProfileInsert,
  ProfileRow,
  ProfileTagRow,
  RelationshipInsert,
  RelationshipRow,
  SourceInsert,
  SourceRow,
  TimelineEventInsert,
  TimelineEventRow,
  TimelineEventSourceRow,
} from "@/lib/database.types";

function mapProfileRowToBaseProfile(row: ProfileRow): Profile {
  return {
    id: row.id,
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
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export async function getAllProfiles(): Promise<Profile[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockProfiles;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("name", { ascending: true });

  const rows = (data ?? []) as ProfileRow[];

  if (error || rows.length === 0) {
    return mockProfiles;
  }

  return rows.map(mapProfileRowToBaseProfile);
}

export async function getProfileBySlug(slug: string): Promise<Profile | undefined> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return mockProfiles.find((profile) => profile.slug === slug);
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  const profileRow = (data ?? null) as ProfileRow | null;

  if (error || !profileRow) {
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
    supabase
      .from("profile_tags")
      .select("*")
      .eq("profile_id", profileRow.id)
      .order("tag", { ascending: true }),

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

    supabase
      .from("timeline_event_sources")
      .select("*"),
  ]);

  const tags = (tagsResult.data ?? []) as ProfileTagRow[];
  const sources = (sourcesResult.data ?? []) as SourceRow[];
  const timelineEvents = (timelineResult.data ?? []) as TimelineEventRow[];
  const relationships = (relationshipsResult.data ?? []) as RelationshipRow[];
  const timelineEventSources = (timelineEventSourcesResult.data ?? []) as TimelineEventSourceRow[];

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

export async function createProfile(input: ProfileInsert) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase client") };
  }

  return await supabase
    .from("profiles")
    .insert(input)
    .select()
    .single();
}

export async function createSource(input: SourceInsert) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase client") };
  }

  return await supabase
    .from("sources")
    .insert(input)
    .select()
    .single();
}

export async function createTimelineEvent(input: TimelineEventInsert) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase client") };
  }

  return await supabase
    .from("timeline_events")
    .insert(input)
    .select()
    .single();
}

export async function createRelationship(input: RelationshipInsert) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase client") };
  }

  return await supabase
    .from("relationships")
    .insert(input)
    .select()
    .single();
}
