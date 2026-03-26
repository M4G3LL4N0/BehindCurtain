import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cachedClient: SupabaseClient<Database, "behindcurtain"> | null = null;

/**
 * Returns a typed Supabase client when env vars are present.
 * Returns null instead of throwing so local builds and static exports
 * can safely fall back to mock data.
 */
export function getSupabaseClient(): SupabaseClient<Database, "behindcurtain"> | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = createClient<Database, "behindcurtain">(supabaseUrl, supabaseAnonKey, {
    db: { schema: "behindcurtain" },
  });

  return cachedClient;
}

export const getSupabaseBrowserClient = getSupabaseClient;
