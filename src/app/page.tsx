import Image from "next/image";
import { getRelationships, getSources } from "@/lib/db";

export default async function Home() {
  const relationships = await getRelationships();
  const sources = await getSources();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-40 px-8 bg-white dark:bg-black sm:items-start sm:px-16">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Source-linked intelligence for understanding people, power, and events.
          </h1>

          <div className="flex flex-col w-full max-w-2xl gap-3 mt-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search profiles..."
                className="w-full px-4 py-3 rounded-full bg-black/[.03] dark:bg-white/[.08] border border-black/[.08] dark:border-white/[.145] text-black dark:text-zinc-50 placeholder-zinc-600 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-zinc-600 dark:text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 mt-2">
              <select className="flex-1 min-w-[120px] px-3 py-2 rounded-full bg-black/[.03] dark:bg-white/[.08] border border-black/[.08] dark:border-white/[.145] text-black dark:text-zinc-50">
                <option value="">All Roles</option>
                <option>Politician</option>
                <option>Business Leader</option>
                <option>Activist</option>
              </select>

              <select className="flex-1 min-w-[120px] px-3 py-2 rounded-full bg-black/[.03] dark:bg-white/[.08] border border-black/[.08] dark:border-white/[.145] text-black dark:text-zinc-50">
                <option value="">All Regions</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>

              <select className="flex-1 min-w-[120px] px-3 py-2 rounded-full bg-black/[.03] dark:bg-white/[.08] border border-black/[.08] dark:border-white/[.145] text-black dark:text-zinc-50">
                <option value="">All Tags</option>
                <option>Government</option>
                <option>Finance</option>
                <option>Technology</option>
              </select>
            </div>
          </div>

          {/* Relationships Section */}
          <div className="w-full mt-12">
            <h2 className="text-2xl font-bold mb-6">Key Relationships</h2>
            <div className="relationship-grid">
              {relationships.map((relationship) => (
                <div key={relationship.id} className="relationship-card">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${
                      relationship.type === 'business' ? 'bg-accent/10' : 'bg-success/10'
                    } flex items-center justify-center`}>
                      <span className={relationship.type === 'business' ? 'text-accent' : 'text-success'}>
                        {relationship.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{relationship.name}</h3>
                      <p className="text-sm text-muted">{relationship.relationship}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted">
                    {relationship.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sources Section */}
          <div className="w-full mt-12">
            <h2 className="text-2xl font-bold mb-6">Verified Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sources.map((source) => (
                <div key={source.id} className="source-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-8 h-8 rounded-full ${
                      source.type === 'article' ? 'bg-accent/10' : 'bg-warning/10'
                    } flex items-center justify-center`}>
                      <span className={source.type === 'article' ? 'text-accent' : 'text-warning'}>
                        {source.initials}
                      </span>
                    </div>
                    <h3 className="font-medium">{source.name}</h3>
                  </div>
                  <p className="text-sm text-muted mb-4">
                    {source.description}
                  </p>
                  <a href="#" className="text-accent text-sm hover:underline">
                    View Source →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-base font-medium mt-12 sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
