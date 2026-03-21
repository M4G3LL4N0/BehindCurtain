import Image from "next/image";
import { getRelationships, getSources } from "@/lib/db";

export default async function Home() {
  const relationships = await getRelationships();
  const sources = await getSources();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-48 px-6 bg-white dark:bg-black sm:items-start sm:px-12">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={24}
                priority
              />
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">BehindCurtain Intelligence</span>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
                Source-linked intelligence<br />for understanding power,<br />people, and events.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                BehindCurtain provides trusted intelligence on the relationships and networks shaping global affairs. 
                Our platform connects verified sources to deliver actionable insights.
              </p>
            </div>
          </div>

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
          <div className="w-full mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Key Relationships</h2>
              <a href="#" className="text-sm font-medium text-accent hover:underline">
                Explore All →
              </a>
            </div>
            <div className="relationship-grid">
              {relationships.map((relationship) => (
                <div key={relationship.id} className="relationship-card hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${
                      relationship.type === 'business' ? 'bg-accent/10' : 'bg-success/10'
                    } flex items-center justify-center`}>
                      <span className={relationship.type === 'business' ? 'text-accent' : 'text-success'}>
                        {relationship.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{relationship.name}</h3>
                      <p className="text-sm text-muted">{relationship.relationship}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted mt-3 leading-relaxed">
                    {relationship.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sources Section */}
          <div className="w-full mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Verified Sources</h2>
              <a href="#" className="text-sm font-medium text-accent hover:underline">
                View All →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sources.map((source) => (
                <div key={source.id} className="source-card hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full ${
                      source.type === 'article' ? 'bg-accent/10' : 'bg-warning/10'
                    } flex items-center justify-center`}>
                      <span className={source.type === 'article' ? 'text-accent' : 'text-warning'}>
                        {source.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{source.name}</h3>
                      <p className="text-sm text-muted">{source.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {source.description}
                  </p>
                  <a href="#" className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                    View Source <span className="text-xs">→</span>
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
