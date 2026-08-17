# A7i — deferred work

What is built, and what is not. Kept in the repo so it stays current.

Last updated: 17 August 2026

---

## 1. Population with verified research — the largest block

The architecture supports an exhaustive database. The database is not
exhaustive. **29 ingredients are published. The name index and taxonomy
anticipate several hundred.**

Every record below needs the full canonical schema populated against Tier 1–3
sources before it gets a public page. Nothing should be published from
mechanism or from a single secondary source.

**Minerals and trace elements still unpublished**
Chloride, sulfur, cobalt, fluoride, lithium, silicon, vanadium, nickel.
Note: several of these should be indexed and explained but never presented as
things to take. Cobalt is only meaningful as vitamin B12.

**Vitamins still unpublished**
A, E, K1, B1, B2, B3, B5, B6, biotin, folate, D2.

**Amino acids, derivatives, sulfur compounds**
Leucine, isoleucine, valine, lysine, methionine, threonine, tryptophan,
histidine, phenylalanine, arginine, citrulline, glutamine, tyrosine, cysteine,
glutathione, SAMe, betaine.

**Lipids**
EPA and DHA as separate records, ALA, krill oil, MCT, phosphatidylserine, GLA,
evening primrose, CLA.

**Botanicals and fungi**
Ashwagandha, rhodiola, curcumin, berberine, green tea extract, milk thistle,
boswellia, ginger, garlic, saffron, panax ginseng, artichoke, lion's mane,
reishi, cordyceps, chaga, turkey tail, shiitake, beta-glucans.

**Longevity and cellular**
Urolithin A, spermidine, ergothioneine, PQQ, nicotinamide riboside, NMN,
ubiquinol as distinct from CoQ10.

**Prebiotics, probiotics, postbiotics**
Inulin, FOS, GOS, resistant starch, PHGG, acacia fibre, beta-glucan.
Probiotics must be **strain-level records**: LGG, BB-12, S. boulardii
CNCM I-745, L. reuteri DSM 17938, B. longum 35624, Bacillus coagulans and
subtilis strains, Akkermansia preparations. Evidence never transfers between
strains. Postbiotics must separate butyrate, tributyrin, heat-killed
preparations, lysates and fermentates rather than treating them as one class.

**Enzymes**
Lactase, proteases, lipases, amylases, alpha-galactosidase, bromelain, papain,
plus additional classes identified during taxonomy research.

**Formulation classes**
All eighteen listed in `data/architecture.js`. These need the formulation
schema, not the ingredient schema: per-ingredient evidence, combination
evidence, duplication risk, comparison against buying the singles.

**Medicines**
Twelve classes and roughly forty-five members indexed in `data/levels.js`.
Each needs the medicine schema populated, focused on interactions and nutrient
status. Never prescribing guidance.

**Foods**
The food layer has a schema but no records. Needed for reverse questions such
as "what food has the most magnesium".

**Biomarkers**
Eight indexed. Each needs educational context on when the marker is used and
why interpretation belongs with a professional.

---

## 2. Verification debt on what is already published

**Food composition figures are approximate.** Every quantity across the 29
published records came from general knowledge, not a database lookup. They are
labelled approximate on the page. Before promoting the site anywhere, check all
of them against USDA FoodData Central and attach a per-figure source. This is
the single largest credibility risk currently live.

**Arabic has not been reviewed by a native editor.** All Arabic content was
written in this build. The register split is deliberate — Gulf dialect in
conversational copy, clear MSA in clinical and safety text — but that judgment
needs a Saudi reader to confirm.

**Evidence grades need study-level backing.** Outcome grades exist for all 29
records. They do not yet carry the study counts, populations, dose ranges and
limitations the schema provides for.

---

## 3. Design and UX not yet built

**Photography.** The largest remaining lever and the biggest visible gap. The
brief calls for macro food, mineral surfaces, food-equivalence visuals. Needs
assets. The creatine steak-versus-scoop image would carry more argument than
any paragraph on the site.

**Food Reality scale.** The dot-on-a-line device from VERY EASY to NOT
PRACTICAL, Signal Blue as the marker. Data exists; the component does not.

**Evidence drawer.** Per-outcome expansion showing population, form, dose,
study type, limitations and sources. Currently outcomes have a grade and a
sentence.

**Search overlay.** Focus should open a command surface with results grouped
into answers, ingredients, goals, medicines, formulations, foods. Currently
search filters inline.

**Question answering.** Natural-language questions should return a 2–4 sentence
answer, then pathways, then records. Currently search matches names and aliases
only.

**Goal pages on the three-level model.** Four goal pages exist and predate the
levels. They should show Foundation, Advanced Nutrition and Precision Biology
options for each goal.

**Category pages as reference indexes.** Currently definition, subtypes and a
search. Should carry A–Z, goal and level filters.

**Context preservation.** Back from an ingredient should restore the previous
chapter expansion and scroll position.

**Level and goal routes.** `/[lang]/level/[id]` and `/[lang]/goal/[id]` as full
pages rather than homepage expansion only.

---

## 4. Trust and editorial pages

Footer currently lists these as plain text, not links. They need to exist:

- `/about`
- `/methodology` — source hierarchy, how verdicts are decided, how uncertainty
  is handled, how corrections work
- `/evidence-grading`
- `/editorial-policy`
- `/sources`
- `/corrections`
- `/privacy`

Alongside these: a byline, a named scientific reviewer and a last-reviewed date
on every published record. This is simultaneously the largest SEO gap and the
largest trust gap on the site.

---

## 5. Technical debt

**CSS is layered, not consolidated.** `globals.css` is ~1,300 lines across 28
versioned blocks, several of which override earlier ones rather than replacing
them. It works and it is verified, but it should be flattened into a single
token-driven system before it grows further.

**Fonts load via CSS import, not `next/font`.** Done because the build sandbox
blocked Google Fonts at build time. Switch to `next/font` on any machine with
open network access.

**Logo is PNG.** The mark should be professionally vectorised — traced exactly
from the approved artwork, not redrawn. That sharpens it at every size, cuts
payload, and is the prerequisite for animating the Seven Signals with the real
geometry.

**EntityLink exists but is not yet used everywhere.** Pairing, best-for and
enzyme links still build their own `Link` elements. Migrate them so route
correctness is guaranteed in one place.

**Analytics is page views only.** Vercel Web Analytics is live. Zero-result
search logging needs a serverless route and a database. That table will be the
most commercially valuable thing on the site.

---

## 6. Standing rules

- Internal research (`data/research.js`) never reaches public HTML, metadata,
  structured data or the client bundle. Verified after every build.
- Only reviewed and published records get an indexable page. No empty pages,
  no "coming soon", no thin SEO copy.
- Book-derived figures that exceed official reference values are not published.
- One canonical record per entity. Levels, goals and categories link to it.
- Evidence is graded per outcome, never per ingredient.
- Mood content requires the clinician gate and hard-coded interaction warnings
  before it ships.
