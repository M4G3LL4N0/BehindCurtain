import { NextResponse } from "next/server"

type Profile = {
  id?: string
  name: string
  role?: string | null
  region?: string | null
  short_bio?: string | null
  long_bio?: string | null
  category?: string | null
  status?: string | null
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Sample Profile",
    role: "Research Subject",
    region: "Global",
    short_bio: "Placeholder profile for search results.",
    category: "General",
    status: "active",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = (searchParams.get("q") || "").trim().toLowerCase()

  if (!query) {
    return NextResponse.json({ results: profiles })
  }

  const results = profiles.filter((profile: Profile) => {
    return (
      profile.name.toLowerCase().includes(query) ||
      profile.role?.toLowerCase().includes(query) ||
      profile.region?.toLowerCase().includes(query) ||
      profile.short_bio?.toLowerCase().includes(query) ||
      profile.long_bio?.toLowerCase().includes(query) ||
      profile.category?.toLowerCase().includes(query) ||
      profile.status?.toLowerCase().includes(query)
    )
  })

  return NextResponse.json({ results })
}
