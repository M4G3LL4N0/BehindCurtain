import { createClient } from '@supabase/supabase-js';

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

// Initialize Supabase client if env vars are present
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey ? 
  createClient(supabaseUrl, supabaseKey) : null;

export async function getRelationships() {
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
  if (supabase) {
    const { data, error } = await supabase
      .from('sources')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error) return data;
  }
  return mockSources;
}
