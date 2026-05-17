# Local Review — BehindCurtain

**Date:** 2026-05-16  
**Deploy:** Not run (`vercel --prod` forbidden for this pass)

## Start

```bash
cd /Users/joshuadavis/startups/behindcurtain
pnpm install
pnpm build
pnpm dev
```

Open: http://localhost:3000

## Route checklist

- [ ] `/` — source-linked intelligence hero + explorer CTA
- [ ] `/explorer` — search, filters, empty state when no matches
- [ ] `/profiles/{slug}` — timeline, claim status, sources

## Acceptance criteria

- [ ] `pnpm build` exits 0
- [ ] Mobile: header drawer usable on explorer and home
- [ ] Explorer disclaimer visible (seeded demo, verify sources before citing)
- [ ] Profile pages show sourcing/status labels — no defamatory unsourced claims added
- [ ] Checkout/API paths not tested against production keys without `.env.local`

## Known limitations

- Seeded profile dataset for MVP — not live news ingestion
- Supabase optional for some flows — check env before expecting live DB

## After review

- Update `startupjourney.md` §15
- Remote: `https://github.com/M4G3LL4N0/behindcurtain.git` — push only reviewed files
