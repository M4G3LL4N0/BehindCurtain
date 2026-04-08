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

export interface SourceItem {
  id: string;
  title: string;
  publisher: string;
  date: string;
  type: SourceType;
  href: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  summary: string;
  status: ClaimStatus;
  sourceIds: string[];
  category: "legal" | "business" | "media" | "public_statement" | "background";
}

export interface Relationship {
  id: string;
  label: string;
  targetName: string;
  targetType: "person" | "organization" | "case";
  description: string;
}

export interface Profile {
  id?: string;  // Add optional id for database operations
  slug: string;
  name: string;
  shortBio: string;
  role: string;
  region: string;
  tags: string[];
  summary: string;
  sources: SourceItem[];
  timeline: TimelineEvent[];
  relationships: Relationship[];
  createdAt?: string;  // Optional for database records
  updatedAt?: string;  // Optional for database records
}
