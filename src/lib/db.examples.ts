import { getSupabaseBrowserClient } from "@/lib/supabase";
import type {
  ProfileInsert,
  TimelineEventInsert,
  TimelineEventSourceInsert,
} from "@/lib/database.types";

export async function getAllProfilesExample() {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase.from("profiles").select("*").order("name", { ascending: true });
}

export async function getProfileBySlugExample(slug: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase.from("profiles").select("*").eq("slug", slug).maybeSingle();
}

export async function getProfileTagsExample(profileId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase
    .from("profile_tags")
    .select("*")
    .eq("profile_id", profileId)
    .order("tag", { ascending: true });
}

export async function getProfileSourcesExample(profileId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase
    .from("sources")
    .select("*")
    .eq("profile_id", profileId)
    .order("source_date", { ascending: false });
}

export async function getProfileTimelineExample(profileId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase
    .from("timeline_events")
    .select("*")
    .eq("profile_id", profileId)
    .order("event_date", { ascending: false });
}

export async function getProfileRelationshipsExample(profileId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  return await supabase
    .from("relationships")
    .select("*")
    .eq("profile_id", profileId)
    .order("target_name", { ascending: true });
}

export async function insertProfileExample() {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  const payload: ProfileInsert = {
    slug: "sample-public-figure",
    name: "Sample Public Figure",
    short_bio: "Example profile",
    role: "Founder / Public Figure",
    region: "United States",
    summary: "Structured sample profile",
  };

  return await supabase
    .from("profiles")
    .insert(payload as never)
    .select()
    .single();
}

export async function insertTimelineEventExample(profileId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  const payload: TimelineEventInsert = {
    profile_id: profileId,
    event_date: "2024-06-11",
    title: "Filing appears in public records",
    summary: "A relevant filing was added to the public record.",
    status: "verified",
    category: "legal",
  };

  return await supabase
    .from("timeline_events")
    .insert(payload as never)
    .select()
    .single();
}

export async function insertTimelineEventSourceExample(eventId: string, sourceId: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { data: null, error: new Error("Missing Supabase env vars") };
  }

  const payload: TimelineEventSourceInsert = {
    event_id: eventId,
    source_id: sourceId,
  };

  return await supabase
    .from("timeline_event_sources")
    .insert(payload as never);
}
