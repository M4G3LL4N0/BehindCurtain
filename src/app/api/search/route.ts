import { NextResponse } from 'next/server';
import { getAllProfiles } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  const profiles = await getAllProfiles();
  
  const results = profiles
    .filter(profile => 
      profile.name.toLowerCase().includes(query) ||
      profile.role?.toLowerCase().includes(query) ||
      profile.region?.toLowerCase().includes(query)
    )
    .map(profile => ({
      name: profile.name,
      slug: profile.slug,
      type: 'Profile'
    }))
    .slice(0, 5);

  return NextResponse.json(results);
}
