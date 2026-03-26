import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cachedClient: SupabaseClient<Database> | null = null;

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL and Anon Key must be provided in environment variables"
    );
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    db: { schema: "behindcurtain" },
  });

  return cachedClient;
}

export function getSupabaseBrowserClient(): SupabaseClient<Database> {
  if (typeof window === "undefined") {
    throw new Error("Browser client should only be used in browser context");
  }
  return getSupabaseClient();
}
