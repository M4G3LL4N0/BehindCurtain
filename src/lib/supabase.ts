import { createClient } from '@supabase/supabase-js';

export type SupabaseClient = ReturnType<typeof createClient>;

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (supabaseClient) return supabaseClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables not configured - using mock data');
    return null;
  }

  supabaseClient = createClient(supabaseUrl, supabaseKey);
  return supabaseClient;
}
