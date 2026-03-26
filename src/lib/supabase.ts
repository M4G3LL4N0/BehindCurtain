import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cachedClient: SupabaseClient<Database> | null = null;

export function getSupabaseClient(): SupabaseClient<Database> | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    db: { schema: "behindcurtain" },
  });

  return cachedClient;
}

export const getSupabaseBrowserClient = getSupabaseClient;
