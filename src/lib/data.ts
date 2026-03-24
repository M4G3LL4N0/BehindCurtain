import { Profile } from "./types";

export const profiles: Profile[] = [
  {
    slug: "sample-public-figure",
    name: "Sample Public Figure",
    shortBio: "Example profile for BehindCurtain’s MVP structure.",
    role: "Founder / Public Figure",
    region: "United States",
    tags: ["media", "business", "timeline", "research"],
    summary:
      "This is a neutral example profile showing how BehindCurtain organizes source-linked information into a structured timeline, relationships, and evidence cards.",
    sources: [
      {
        id: "src-1",
        title: "Profile Interview on Leadership",
        publisher: "Example News",
        date: "2024-01-17",
        type: "interview",
        href: "#",
      },
      {
        id: "src-2",
        title: "Official Company Statement",
        publisher: "Example Corp",
        date: "2024-03-02",
        type: "official_statement",
        href: "#",
      },
      {
        id: "src-3",
        title: "Public Record Filing",
        publisher: "Public Records",
        date: "2024-06-11",
        type: "public_record",
        href: "#",
      },
    ],
    timeline: [
      {
        id: "evt-1",
        date: "2023-09-05",
        title: "Company launch announced",
        summary: "Public launch of the company and its first product direction.",
        status: "verified",
        sourceIds: ["src-1"],
        category: "business",
      },
      {
        id: "evt-2",
        date: "2024-03-02",
        title: "Company responds to public criticism",
        summary: "An official response was published addressing concerns and clarifying the company’s position.",
        status: "denial",
        sourceIds: ["src-2"],
        category: "public_statement",
      },
      {
        id: "evt-3",
        date: "2024-06-11",
        title: "Filing appears in public records",
        summary: "A relevant filing was added to the public record, providing additional context for researchers.",
        status: "verified",
        sourceIds: ["src-3"],
        category: "legal",
      },
    ],
    relationships: [
      {
        id: "rel-1",
        label: "Founder",
        targetName: "Example Corp",
        targetType: "organization",
        description: "Founded and publicly associated with the organization.",
      },
      {
        id: "rel-2",
        label: "Mentioned In",
        targetName: "Leadership Interview",
        targetType: "case",
        description: "Appears in a notable media interview cited on the profile.",
      },
    ],
  },
  {
    slug: "sample-organization-leader",
    name: "Sample Organization Leader",
    shortBio: "Second seeded profile to make the explorer feel like a real product.",
    role: "Executive",
    region: "Europe",
    tags: ["executive", "research", "organization"],
    summary:
      "A second example profile demonstrating how the product scales across people, organizations, and structured records.",
    sources: [
      {
        id: "src-4",
        title: "Board Appointment Announcement",
        publisher: "Example Journal",
        date: "2022-08-14",
        type: "article",
        href: "#",
      },
    ],
    timeline: [
      {
        id: "evt-4",
        date: "2022-08-14",
        title: "Appointed to board role",
        summary: "Public article reports a new appointment and leadership shift.",
        status: "verified",
        sourceIds: ["src-4"],
        category: "business",
      },
    ],
    relationships: [
      {
        id: "rel-3",
        label: "Board Member",
        targetName: "Example Foundation",
        targetType: "organization",
        description: "Served in a governance role connected to the organization.",
      },
    ],
  },
];

export async function getAllProfiles() {
  return profiles;
}

export async function getProfileBySlug(slug: string) {
  return profiles.find((profile) => profile.slug === slug) || null;
}
