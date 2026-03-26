export type ClaimStatus =
  | "verified"
  | "allegation"
  | "charge"
  | "conviction"
  | "settlement"
  | "denial"
  | "disputed"
  | "retracted";

export type SourceType =
  | "article"
  | "court_filing"
  | "interview"
  | "official_statement"
  | "public_record"
  | "archive";

export type TimelineCategory =
  | "legal"
  | "business"
  | "media"
  | "public_statement"
  | "background";

export type RelationshipTargetType =
  | "person"
  | "organization"
  | "case";

export interface ProfileRow {
  id: string;
  slug: string;
  name: string;
  short_bio: string | null;
  role: string | null;
  region: string | null;
  summary: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfileTagRow {
  id: string;
  profile_id: string;
  tag: string;
  created_at: string;
}

export interface SourceRow {
  id: string;
  profile_id: string;
  title: string;
  publisher: string | null;
  source_type: SourceType;
  source_date: string | null;
  href: string | null;
  created_at: string;
}

export interface TimelineEventRow {
  id: string;
  profile_id: string;
  event_date: string;
  title: string;
  summary: string | null;
  status: ClaimStatus;
  category: TimelineCategory;
  created_at: string;
}

export interface TimelineEventSourceRow {
  id: string;
  event_id: string;
  source_id: string;
  created_at: string;
}

export interface RelationshipRow {
  id: string;
  profile_id: string;
  label: string;
  target_name: string;
  target_type: RelationshipTargetType;
  description: string | null;
  created_at: string;
}

export interface Database {
  behindcurtain: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_bio?: string | null;
          role?: string | null;
          region?: string | null;
          summary?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          slug?: string;
          name?: string;
          short_bio?: string | null;
          role?: string | null;
          region?: string | null;
          summary?: string | null;
          updated_at?: string;
        };
      };
      profile_tags: {
        Row: ProfileTagRow;
        Insert: {
          id?: string;
          profile_id: string;
          tag: string;
          created_at?: string;
        };
        Update: {
          profile_id?: string;
          tag?: string;
        };
      };
      sources: {
        Row: SourceRow;
        Insert: {
          id?: string;
          profile_id: string;
          title: string;
          publisher?: string | null;
          source_type: SourceType;
          source_date?: string | null;
          href?: string | null;
          created_at?: string;
        };
        Update: {
          profile_id?: string;
          title?: string;
          publisher?: string | null;
          source_type?: SourceType;
          source_date?: string | null;
          href?: string | null;
        };
      };
      timeline_events: {
        Row: TimelineEventRow;
        Insert: {
          id?: string;
          profile_id: string;
          event_date: string;
          title: string;
          summary?: string | null;
          status: ClaimStatus;
          category: TimelineCategory;
          created_at?: string;
        };
        Update: {
          profile_id?: string;
          event_date?: string;
          title?: string;
          summary?: string | null;
          status?: ClaimStatus;
          category?: TimelineCategory;
        };
      };
      timeline_event_sources: {
        Row: TimelineEventSourceRow;
        Insert: {
          id?: string;
          event_id: string;
          source_id: string;
          created_at?: string;
        };
        Update: {
          event_id?: string;
          source_id?: string;
        };
      };
      relationships: {
        Row: RelationshipRow;
        Insert: {
          id?: string;
          profile_id: string;
          label: string;
          target_name: string;
          target_type: RelationshipTargetType;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          profile_id?: string;
          label?: string;
          target_name?: string;
          target_type?: RelationshipTargetType;
          description?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type AppSchema = Database["behindcurtain"];
export type Tables = AppSchema["Tables"];

export type ProfileInsert = Database["behindcurtain"]["Tables"]["profiles"]["Insert"];
export type ProfileUpdate = Database["behindcurtain"]["Tables"]["profiles"]["Update"];

export type ProfileTagInsert = Database["behindcurtain"]["Tables"]["profile_tags"]["Insert"];
export type ProfileTagUpdate = Database["behindcurtain"]["Tables"]["profile_tags"]["Update"];

export type SourceInsert = Database["behindcurtain"]["Tables"]["sources"]["Insert"];
export type SourceUpdate = Database["behindcurtain"]["Tables"]["sources"]["Update"];

export type TimelineEventInsert = Database["behindcurtain"]["Tables"]["timeline_events"]["Insert"];
export type TimelineEventUpdate = Database["behindcurtain"]["Tables"]["timeline_events"]["Update"];

export type TimelineEventSourceInsert = Database["behindcurtain"]["Tables"]["timeline_event_sources"]["Insert"];
export type TimelineEventSourceUpdate = Database["behindcurtain"]["Tables"]["timeline_event_sources"]["Update"];

export type RelationshipInsert = Database["behindcurtain"]["Tables"]["relationships"]["Insert"];
export type RelationshipUpdate = Database["behindcurtain"]["Tables"]["relationships"]["Update"];
