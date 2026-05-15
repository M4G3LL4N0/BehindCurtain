# Startup Journey: BehindCurtain

## 1. Current Snapshot

- **Project name:** BehindCurtain
- **Local folder:** `/Users/joshuadavis/startups/behindcurtain`
- **Live URL:** https://behindcurtain.noaerth.com
- **Live site status:** HTTP **200** (checked 2026-05-14)
- **Framework:** Next.js 16 App Router (`src/app`), TypeScript, Tailwind 4, Supabase client
- **Package manager:** pnpm
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (clean install 2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/behindcurtain.git
- **GitHub push status:** Not run this loop — local changes ready for review
- **Deployment:** **Not run** (local review first)
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | Source-linked intelligence positioning is clear on live site |
| MVP reality | 7 | Explorer + profile dossiers work; admin/checkout paths exist but are thin |
| Visual quality | 7 | Panel layout and lucide icons feel credible; header still mixes inline styles |
| Build health | 8 | `pnpm build` PASS after clean reinstall |
| Customer urgency | 6 | Researchers/journalists care, but habit loop not yet daily |
| Market potential | 7 | Accountability / public-record tooling has room if trust is earned |
| Monetization potential | 6 | Checkout API present; pricing story not yet front-and-center |
| Growth potential | 7 | Explorer SEO + shareable profile URLs are natural hooks |
| Investor story | 7 | Wedge is clear; needs proof of usage and sourcing policy depth |
| Local review readiness | 8 | Dev server + three core routes easy to smoke-test |

- **Total score:** **72 / 100**
- **Classification:** **Promising MVP** — real routes, live 200, needs compounding on data depth and mobile polish
- **Best next loop type:** **Clarity + mobile** (homepage copy tightening, explorer empty states)

## 3. 10-Second Startup Explanation

- **What this startup is:** Source-linked intelligence on public figures — profiles, timelines, claim status, and explorer search.
- **Who it is for:** Researchers, journalists, analysts, and curious citizens who need structured context, not gossip feeds.
- **What pain it solves:** Fragmented claims without chronology, sourcing, or status labeling.
- **What the user can do:** Browse home, search the explorer, open a profile dossier by slug.
- **Why it matters:** Accountability improves when claims are structured, sourced, and time-ordered.
- **Primary CTA:** Open Explorer (`/explorer`)

## 4. Founder Thesis

- **Core belief:** Public accountability improves when claims are structured, sourced, and time-ordered.
- **Why this should exist:** Social feeds optimize for engagement, not traceability.
- **Why now:** AI-generated noise increases demand for structured, source-linked dossiers.
- **Market wedge:** Profile + timeline + claim-status taxonomy on public figures.
- **Expansion path:** Alerts, relationship graphs, newsroom API (strict sourcing rules).
- **What this can become:** The default “open dossier” layer for public-record research.
- **1000x opportunity:** Opt-in newsroom integrations + anonymized claim-status benchmarks.
- **Biggest strategic risk:** Defamation / misinformation — status labels, sources, and dispute flows must stay central.
- **Next founder decision:** Ship explorer empty/search states before adding new entity types.

## 5. Live Website Diagnosis

Based on https://behindcurtain.noaerth.com:

- **Status code or load status:** **200**
- **What visitors currently see:** “Source-linked intelligence” hero, trust framework, explorer CTA, profile cards.
- **Current headline:** Source-linked intelligence positioning (see live hero).
- **Current CTA:** Explorer / profile exploration paths.
- **What works:** Clear category, explorer CTA, profile cards, trust section, live availability.
- **What feels weak:** Mobile nav was cramped before drawer; copy could sharpen “claim status” value faster.
- **What feels generic:** Dark panel SaaS pattern — acceptable if sourcing story stays unique.
- **What feels confusing:** Difference between “Launch MVP” anchor and paid checkout (minor).
- **What feels unfinished:** Explorer empty state when no query; deeper profile sourcing UI.
- **What feels premium:** Panel layout, lucide icons, structured claim statuses on profiles.
- **What is missing:** Dispute/retraction workflow surfaced in UI; OG images for profile shares.
- **Highest leverage live-site fix:** Explorer search/empty states + one-line “how sourcing works” above fold.

## 6. Local Codebase Diagnosis

- **Framework:** Next.js 16 App Router under `src/app/`
- **App structure:** Marketing home, explorer, dynamic profiles, admin, API routes
- **Current routes:** `/`, `/explorer`, `/profiles/[slug]`, `/admin`, `/api/search`, `/api/checkout`
- **Current pages:** `src/app/page.tsx`, `explorer/page.tsx`, `profiles/[slug]/page.tsx`, `admin/page.tsx`
- **Current components:** `src/components/header.tsx` (client drawer), profile/explorer UI, lucide icons
- **Current data files:** `lib/db.ts`, mock/seed profiles, Supabase types
- **Current styling system:** Tailwind 4 + substantial inline styles on header/panels
- **Current dependencies:** next, react 19, supabase-js, lucide-react, clsx
- **Technical risks:** Inline styles on header — harder to maintain than Tailwind-only; clean install required when `node_modules` corrupt
- **Missing dependencies:** None critical for marketing MVP
- **Build risks:** Low after clean `pnpm install`
- **Env var risks:** Supabase — public pages should not hard-crash if keys missing (audit next loop)
- **Supabase/API risks:** Search/checkout depend on env — verify demo fallback
- **Mobile risks:** Mitigated this loop via client `Header` drawer + body scroll lock
- **GitHub risks:** Remote configured; ensure no `.env` in commits
- **Local review risks:** Low — test `/`, `/explorer`, one known profile slug

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Accountability requires traceable, structured public record views.
- **Wedge:** Profile + timeline + claim-status taxonomy.
- **Biggest opportunity:** Become the research layer newsrooms trust for structured dossiers.
- **Biggest risk:** Publishing without rigorous sourcing and dispute flows.
- **Next decision:** Prioritize explorer UX over new profile types.

### Chief Product Officer

- **MVP:** Home → explorer search → profile dossier with sourced claims.
- **Primary workflow:** Find figure → read timeline → verify sources.
- **Dashboard:** Admin route exists; not primary user surface yet.
- **Onboarding:** Self-serve via explorer; add “how to read claim status” hint.
- **Retention loop:** Saved searches / follow figure (backlog).

### Customer Researcher

- **Buyer:** Research desks, independent journalists (future team seats).
- **User:** Analysts needing quick structured context.
- **Pain:** Fragmented Twitter/ Wikipedia / scattered articles.
- **Alternatives:** Google, Wikipedia, manual spreadsheets.
- **Objections:** “Is this biased?” — counter with sourcing + status labels.
- **Trust builders:** Trust section, claim statuses, no unsourced allegation UI policy.

### JTBD Strategist

- **Job-to-be-done:** “Give me a sourced timeline I can cite or challenge.”
- **Trigger:** Breaking story on a public figure.
- **Desired outcome:** Chronology + sources + status in one view.
- **Old way:** Tab archaeology across search and social.
- **New way:** Explorer → profile dossier.

### UX Designer

- **UX issue:** Mobile nav was wrapping awkwardly (addressed with drawer).
- **Homepage flow:** Hero → trust → profiles → CTA — good.
- **App flow:** Explorer → profile — clear.
- **Mobile flow:** Hamburger → full link list → scroll lock.
- **Friction removed:** Hidden nav links on small screens.

### Visual Design Director

- **Visual identity:** Investigative / dossier — dark panels, structured data.
- **Type:** System fonts via layout; readable hierarchy on cards.
- **Color:** Dark panels, accent on primary CTA.
- **Motion:** Minimal — hover states only; no invalid motion JSX.
- **Component style:** Panel + lucide; migrate header inline styles to Tailwind over time.

### Brand Strategist

- **Category:** Source-linked public intelligence.
- **Enemy:** Engagement-first gossip feeds.
- **Memorable phrase:** “Behind the curtain, with sources.”
- **Voice:** Precise, neutral, evidence-first — never sensational.

### Copy Chief

- **Headline:** Source-linked intelligence (live).
- **Subheadline:** Emphasize chronology + claim status, not drama.
- **CTA:** “Open Explorer” / “View dossier”.
- **Copy rules:** No unsourced allegations; label disputed claims.

### Staff Engineer

- **Architecture:** Next 16 App Router, Supabase-ready APIs.
- **Build risks:** Corrupt `node_modules` — document clean reinstall.
- **Env strategy:** Public pages resilient without secrets; API routes gated.
- **Dependency plan:** Stay lean; avoid motion libraries until needed.

### Frontend Engineer

- **Pages:** Home, explorer, profile slug.
- **Components:** `header.tsx` upgraded to client drawer.
- **Interactions:** Menu open/close, body scroll lock, link close on navigate.
- **Mobile fixes:** Drawer panel for nav links.

### Full-Stack Architect

- **Local-first data:** Mock/seed profiles in repo.
- **Future database:** Supabase for profiles, search index.
- **Future auth:** Admin-only routes behind auth.
- **Future API:** Search + checkout hardened with RLS.
- **Future billing:** Stripe via existing checkout route pattern.

### AI Product Architect

- **AI use:** None required for MVP; optional summarization later with strict sourcing.
- **Mock AI behavior:** N/A this loop.
- **Safe boundaries:** No generative claims without citations.
- **Future API plan:** Summarize public sources only with links.

### Data Moat Strategist

- **Data loop:** Structured claim statuses + timelines per figure.
- **Feedback loop:** User flags disputed claims (backlog).
- **Benchmark:** Count of profiles with full sourcing.
- **Analytics events:** Explorer searches, profile views (privacy-safe).

### Growth Marketer

- **Hook:** “Every claim has a source and a status.”
- **SEO:** Public figure dossiers, claim status glossary.
- **Distribution:** Journalist newsletters, research communities.
- **Share loop:** Profile URL with OG metadata (backlog).
- **Conversion:** Explorer → signup for alerts (future).

### Sales Operator

- **Buyer pain:** Research teams waste hours reconstructing timelines.
- **Proof:** Live profiles + explorer on production domain.
- **Pricing:** TBD — team/researcher tier hypothesis.
- **Objections:** Liability — counter with sourcing + dispute workflow roadmap.

### Pricing Strategist

- **Model:** Seat + API access for newsrooms (hypothesis).
- **Free tier:** Public explorer with rate limits.
- **Paid tier:** Saved dossiers, exports, alerts.
- **Upgrade trigger:** Team needs shared workspace.

### Investor Analyst

- **Venture thesis:** Structured public-record layer as AI noise grows.
- **Market:** Media, compliance, civic tech adjacency.
- **Expansion:** API + alerts + relationship graph.
- **Moat:** Largest library of structured claim statuses with sources.
- **Metrics:** Profiles indexed, weekly active researchers, dispute resolution time.

### Competitive Intelligence Analyst

- **Category pattern:** People-search and news aggregators lack claim taxonomy.
- **Competitor gaps:** No consistent “disputed / retracted / supported” layer.
- **Differentiation:** Source-linked timelines, not engagement ranking.

### Experiment Designer

- **Tests:** Explorer empty state copy A/B; CTA placement on mobile.
- **Success metric:** Profile views per explorer session.
- **Feedback loop:** Short on-page “was this useful?” on profile exit.

### QA Engineer

- **Build:** PASS (`pnpm build`)
- **Errors:** None blocking after clean install.
- **Routes to test:** `/`, `/explorer`, `/profiles/[slug]`.
- **Local review:** `pnpm dev` — mobile drawer, scroll lock, link targets.

### Security / Trust Reviewer

- **Risks:** User-generated claims without moderation pipeline.
- **Safety framing:** Informational dossiers; not legal advice or accusations.
- **Disclaimers:** Status labels + link to sourcing policy.
- **Data handling:** No PII collection on public marketing paths.

### Legal / Policy Framing Reviewer

- **Risk category:** Defamation, misinformation.
- **Safe framing:** “Public record view” with sources; dispute path.
- **Forbidden features:** Anonymous allegation submission without review.
- **Required disclaimers:** Not a court finding; statuses are editorial labels with citations.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/behindcurtain.git
- **Branch:** main (assumed)
- **Commit:** Not run this loop
- **Push:** Not run this loop

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/behindcurtain && pnpm dev`
- **URL:** http://localhost:3000
- **First route:** `/`
- **Test flow:** Home → open mobile menu → Explorer → open a profile slug

### Speed / Token Efficiency Operator

- **Efficient scope:** Header mobile + journey doc + build verify.
- **Files inspected:** `header.tsx`, `app` routes, `package.json`.
- **Files skipped:** Full Supabase schema audit (next loop).
- **Blockers:** None.

### Taste Reviewer

- **Quality diagnosis:** Credible investigative aesthetic; header inline styles feel slightly dated.
- **What feels cheap:** Wrapped nav on mobile (fixed).
- **Premium fix:** Tailwind-only header; explorer loading skeleton.

### Contrarian Strategist

- **Non-obvious angle:** Sell to compliance teams tracking executive statements, not just media.
- **Sharper wedge:** “Claim status” as the product, profiles as containers.
- **Unique product move:** Export dossier PDF with footnotes (sourced).

### Community / Ecosystem Builder

- **Community loop:** Methodology blog for researchers.
- **Template loop:** Shareable “how we label claims” guide.
- **Public artifact:** Open glossary of claim statuses.

### Automation Architect

- **Safe automation:** CI build on push; no auto-publish claims.
- **Human approval:** Required for any new profile allegation.
- **Logs:** Build artifacts only.
- **Future agent workflow:** Ingest public sources → human review → publish.

## 8. Product Strategy

- **MVP definition:** Explorer search + profile dossier with sourced timeline and claim statuses.
- **Primary workflow:** Search figure → open dossier → verify sources.
- **Input:** Search query or profile slug.
- **Output:** Structured profile view with timeline.
- **First aha moment:** Seeing claim status + source link on one card.
- **Dashboard purpose:** Admin/ops (secondary for now).
- **Demo purpose:** Live profiles on home as proof.
- **Saved state:** Backlog — saved figures and searches.
- **Export/share opportunity:** Shareable profile URL; PDF export later.
- **Retention loop:** Alerts on claim status changes (future).
- **Monetization path:** Research team seats + API (hypothesis).

## 9. Roadmap

### Loop 1: Make It Understandable

- Homepage + trust framing — **strong baseline**.

### Loop 2: Make It Real

- Explorer empty/search states; seed more profiles with full sources.

### Loop 3: Make It Premium

- Tailwind-only header; loading skeletons on explorer.

### Loop 4: Make It Useful

- Saved searches; dispute flag on claims.

### Loop 5: Make It Monetizable

- Pricing page tied to team/API tier.

### Loop 6: Make It Fundable

- Metrics: profiles indexed, dispute SLA, newsroom pilots.

### Loop 7: Make It Compound

- Relationship graph between figures.

### Loop 8: Make It Defensible

- Claim-status taxonomy as standard + API.

### Loop 9: Make It Distributable

- SEO for figure names; share OG cards.

### Loop 10: Make It Operationally Scalable

- Moderation queue + sourcing checklist tooling.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Clarity + mobile
- **Loop goal:** Mobile header drawer + stable local build
- **Changes made:** `Header` converted to client component with hamburger drawer, body scroll lock, mobile link panel; desktop nav preserved.
- **Files changed:** `src/components/header.tsx`
- **Routes added:** none
- **Routes improved:** All pages using `Header` inherit mobile nav
- **Components added:** none (upgraded in place)
- **Components improved:** `Header`
- **MVP interactions added:** Mobile menu open/close
- **Demo data added:** none
- **Copy improved:** none this loop (clarity backlog)
- **Design improved:** Mobile IA
- **Mobile improved:** Drawer + scroll lock
- **Engineering fixed:** Build stabilization via clean reinstall when needed
- **Build result:** **PASS**
- **GitHub commit:** Not run
- **GitHub push result:** Not run
- **Deployment:** Not run
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile navigation to Explorer, Trust, Launch MVP
- **What still needs work:** Explorer empty states; header Tailwind migration; Supabase env fallbacks

## 11. Next Loop Plan

- **Highest leverage next move:** Explorer empty state + search feedback when no results.
- **Product:** Clarify claim-status legend on profile pages.
- **Design:** Move header inline styles to Tailwind utilities.
- **Engineering:** Audit `/api/search` for missing-env graceful response.
- **Growth:** Add concise FAQ on sourcing methodology.
- **Sales:** One-pager for research desk pilot (informational framing).
- **Monetization:** Draft team pricing copy (no fake checkout).
- **Investor story:** Count indexed profiles + sourcing coverage %.
- **Trust/safety:** Surface dispute/retraction CTA on profile template.
- **GitHub:** Commit header + journey after user review.
- **Biggest risk:** Publishing claims without rigorous source pipeline.
- **Suggested next command:** `cd /Users/joshuadavis/startups/behindcurtain && pnpm dev`

## 12. 1000x Backlog

### Product

- Relationship graph view; export dossier PDF with footnotes

### Design

- Tailwind-only header; explorer loading skeleton

### Engineering

- Supabase RLS for profiles; search index

### Growth

- SEO templates per public figure; OG images

### Sales

- Newsroom pilot package (sourced exports only)

### Monetization

- Team seats + read-only API tier

### Investor Narrative

- “Claim status layer for public accountability”

### Data Moat

- Structured claim-status corpus with dispute history

### Automation

- Source ingest queue with human approval (no auto-publish)

### Partnerships

- Archive.org / public record APIs (licensed)

### SEO / Content

- Glossary: supported, disputed, retracted, unverified

### User Retention

- Email alerts on status changes (opt-in)

### Demo Quality

- Hero profile with full timeline exemplar

### Mobile Experience

- Explorer filters usable one-handed

### Trust and Safety

- Prominent dispute workflow; no unsourced allegations UI

### Real API Integrations

- Licensed news feeds with citation requirements

### Enterprise Features

- SSO, audit log, role-based publishing

### Future AI Features

- Summarize cited passages only — never invent claims

### Community

- Researcher office hours / methodology office hours

### Distribution

- Embed widget for newsrooms (read-only)

### Templates

- Profile page template for new entities

### Analytics

- Privacy-safe search and profile view metrics

### Internal Tools

- Moderation dashboard for claim status changes

### Public Artifacts

- Open claim-status taxonomy spec
