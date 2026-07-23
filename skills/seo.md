---
name: seo-technical-nextjs
description: Audits and fixes technical SEO for Next.js/React projects — meta tags, Open Graph, JSON-LD structured data, sitemap.xml, robots.txt, canonical URLs, Core Web Vitals, image optimization, and internal linking. Use this skill whenever the user mentions SEO, meta tags, sitemap, robots.txt, structured data, schema markup, Google indexing, Core Web Vitals, PageSpeed, canonical URL, Open Graph, or asks to "optimize for search engines" — even if they don't say "technical SEO" explicitly. Also trigger before shipping/deploying a Next.js site, or when the user asks for an SEO audit of a page or the whole app.
---

# Technical SEO for Next.js

A workflow for auditing and implementing technical SEO on Next.js (App Router) projects. Covers everything a crawler and a rich-result parser check before content quality ever comes into play.

## When to go deep vs. quick fix

- **Single ask** ("add meta tags to this page") → jump straight to the relevant section below and implement it.
- **"Audit my SEO" / "is my site SEO-ready?"** → run the full workflow: Discover → Audit → Fix → Verify.
- **Pre-deploy check** → run `scripts/audit_seo.mjs` against the `app/` directory, then walk through any flagged items.

## Workflow

### 1. Discover the project shape

Before touching anything, check:
- App Router (`app/`) or Pages Router (`pages/`)? This skill assumes **App Router** — for Pages Router, metadata goes in `next/head` and `getStaticProps`/`getServerSideProps` instead of the Metadata API described below; ask the user to confirm if unsure.
- Is there already a `sitemap.ts`/`sitemap.xml`, `robots.ts`/`robots.txt`, or a root `layout.tsx` with a `metadata` export? Read what exists before writing new ones — don't duplicate or overwrite silently.
- What's the production domain? Needed for canonical URLs, sitemap entries, and Open Graph `url`. Ask if it's not obvious from env vars or config.

### 2. Run the audit script

```bash
node scripts/audit_seo.mjs <path-to-app-directory>
```

This scans the project and reports, per route:
- Missing or default `title`/`description` in `metadata` exports or `generateMetadata`
- Missing `alt` text on `<img>` / `next/image` usage
- Missing `sitemap.ts`/`sitemap.xml` and `robots.ts`/`robots.txt` at the project root
- Missing canonical URL configuration
- Missing Open Graph / Twitter card fields
- Pages using `<img>` instead of `next/image` (perf/CWV impact)

Treat the script's output as a checklist, not a final verdict — always eyeball the flagged files, since the script does static pattern-matching and can miss dynamically-generated metadata.

### 3. Fix, in priority order

Implement in this order — earlier items block indexing entirely, later ones are ranking/UX refinements:

1. **Indexability** — `robots.ts`, no accidental `noindex`, no blocked crawl paths
2. **Sitemap** — `sitemap.ts` lists all real routes with correct `lastModified`
3. **Metadata per page** — unique `title` + `description` for every route (see `references/checklist.md` for the full field list and code patterns)
4. **Canonical URLs** — every page declares its own canonical, especially for anything reachable via query params or trailing slashes
5. **Open Graph + Twitter cards** — so shared links render properly
6. **Structured data (JSON-LD)** — match schema type to content (Article, Product, FAQPage, BreadcrumbList, Organization, etc.)
7. **Core Web Vitals** — `next/image` everywhere, `priority` on the LCP image, font optimization via `next/font`, avoid layout shift
8. **Internal linking** — use `next/link`, avoid orphan pages, sensible heading hierarchy (one `h1` per page)

Read `references/checklist.md` for exact code patterns for each of these (Metadata API syntax, JSON-LD component pattern, sitemap.ts template, robots.ts template).

### 4. Verify

After changes:
- Confirm `sitemap.xml` and `robots.txt` resolve correctly on `next build && next start` (metadata routes only render in a real server, not always in dev).
- Spot-check 2-3 pages' rendered `<head>` for duplicate or missing tags.
- If the user has Google Search Console or PageSpeed Insights access, suggest they validate there — this skill can't hit external validators itself.

## Guardrails

- Never invent a production domain, business name, or social handles for Open Graph/JSON-LD — ask if not present in the codebase.
- Don't mark pages `noindex` or exclude them from the sitemap without the user confirming that's intended.
- Keep one `<h1>` per page — don't "fix SEO" by injecting extra headings that break document structure.
- Structured data must match visible page content (no schema for content that isn't actually there — that's a Google spam violation, not an SEO win).