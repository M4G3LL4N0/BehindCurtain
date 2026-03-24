import { getSupabaseClient } from './supabase';
import { Profile } from './types';

// Mock data fallback
const mockRelationships = [
  {
    id: 1,
    initials: 'JD',
    name: 'John Doe',
    relationship: 'Business Partner',
    description: 'Co-founder at Acme Corp since 2020',
    type: 'business'
  },
  {
    id: 2,
    initials: 'AS',
    name: 'Alice Smith',
    relationship: 'Political Ally',
    description: 'Senator since 2018, frequent collaborator',
    type: 'political'
  }
];

const mockSources = [
  {
    id: 1,
    initials: 'N',
    name: 'New York Times',
    description: 'Article published on March 15, 2026 detailing recent business dealings.',
    type: 'article'
  },
  {
    id: 2,
    initials: 'F',
    name: 'Forbes',
    description: 'Profile piece from February 2026 covering recent achievements.',
    type: 'profile'
  }
];

export async function getRelationships() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from('relationships')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) return data;
  }
  return mockRelationships;
}

export async function getSources() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from('sources')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) return data;
  }
  return mockSources;
}

export async function getProfiles(): Promise<Profile[]> {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) return data;
  }
  return []; // Actual profiles will come from data.ts
}

export async function getProfileBySlug(slug: string): Promise<Profile | null> {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (!error) return data;
    return null;
  }
  return null; // Fallback to data.ts will be handled by pages
}
