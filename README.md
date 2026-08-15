# A7i Supplements — V5 Next.js SEO foundation

This is the first A7i version designed for **scale + bilingual SEO**, not just a one-file visual prototype.

## Why this architecture
The visible UX stays small:
1. Pick a scientific category (optional)
2. Search
3. Read a 60-second answer
4. Open deeper evidence only if wanted

Underneath, every *reviewed* ingredient gets a real server-rendered crawlable URL.

Examples:
- `/en/ingredient/collagen-peptides`
- `/en/ingredient/vitamin-d3`
- `/ar/ingredient/vitamin-d3`
- `/en/category/vitamins`
- `/ar/category/vitamins`

## SEO built in
- Separate English and Arabic URLs
- `hreflang` alternates through Next Metadata
- Canonical URLs
- Dynamic metadata for each reviewed ingredient
- Category landing pages
- Server-rendered content
- XML sitemap via `/sitemap.xml`
- robots file via `/robots.txt`
- Article + Breadcrumb structured data
- No thin SEO pages for unreviewed supplements

The hidden search index can contain many names, but an ingredient only receives an indexable full page when A7i has reviewed its content.

## The exact 60-second guide categories
- Enzymes
- Herbal extraction
- Fatty acid/lipids
- Postbiotics
- Longevity/cellular health
- Fungi/adaptogens
- Minerals
- Vitamins
- Essentials
- Amino acids
- Prebiotic
- Probiotic

The categories act as optional search filters. They do NOT dump giant lists onto the homepage.

## Signature feature: Food vs supplement
Each reviewed ingredient answers:
- Can food provide it?
- Can food realistically reach the relevant amount?
- Is that amount an RDA/AI, or merely a studied supplement dose?
- What does buying a supplement actually add?
- When is food the more sensible choice?
- What forms/absorption/timing issues matter?

This prevents the site from assuming that a supplement is automatically needed.

## BPC-157
BPC-157 is searchable for educational discoverability but is flagged:
**Research peptide — not a conventional dietary supplement.**

It deliberately does not have a normal supplement page in this prototype.

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Deploy to Vercel
Push this folder to your GitHub repository, then import the repo into Vercel.

The expected public domain remains:
`https://supplements.a7iintelligence.com`

## Next data layer
Move `data/catalog.js` into a proper database/CMS when the reviewed library grows.
A production content record should include:
- English + Arabic title
- aliases
- scientific category
- food sources + quantities
- RDA / AI / studied dose classification
- food feasibility
- off-the-shelf advantage
- formulation / forms
- absorption
- timing
- interactions
- safety
- evidence by outcome
- source URLs / DOI / PubMed IDs
- date reviewed
- named scientific/clinical reviewer
- regulatory status
- SEO title/description

## Important SEO rule
Do not auto-create thousands of empty or AI-thin pages just because the search index knows the ingredient name.
Only reviewed, unique, useful pages should be indexable.
