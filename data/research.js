/*
A7i internal research layer.
This file is NOT the public dosing authority.

Source note:
- "The Mineral Fix: Complete Nutrient Reference" summary supplied by A7i.
- Book-derived notes are kept here to guide what A7i should verify.
- A claim should move into publicGuidance only after independent source review.
*/

export const researchSource = {
  id: "mineral-fix-summary",
  title: "The Mineral Fix: Complete Nutrient Reference",
  authors: "James DiNicolantonio & Siim Land",
  sourceType: "book-summary",
  status: "secondary-source-needs-independent-verification",
};

export const bookResearchNotes = {
  magnesium: {
    improves: [
      "ATP / enzyme function",
      "Nerve and muscle function",
      "Magnesium status is discussed in relation to vitamin D and B6 metabolism",
    ],
    inhibitedOrDepletedBy: [
      "Certain medicines including some antibiotics, diuretics and proton-pump inhibitors",
      "The book also discusses alcohol, sweating/exercise, low stomach acid and other factors",
    ],
    pairWith: [
      "The book highlights vitamin B6 and dietary protein",
      "It also discusses prebiotic fructo-oligosaccharides",
    ],
    timing: [
      "Book preference: smaller divided doses rather than one large bolus",
      "Separate magnesium from interacting antibiotics",
      "Separate from bisphosphonates",
    ],
    forms: [
      "L-threonate",
      "glycinate",
      "malate",
      "chloride",
      "citrate",
      "taurate",
      "orotate",
      "oxide",
    ],
    internalNote:
      "Do not publish the book's '400–600 mg optimal' or '600 mg deficiency fix' as A7i guidance without independent clinical verification.",
  },

  calcium: {
    improves: [
      "Bone physiology",
      "Muscle contraction",
    ],
    inhibitedOrDepletedBy: [
      "Oxalates and phytates are discussed as reducing calcium availability",
    ],
    pairWith: [
      "Vitamin D",
      "The book discusses protein and citric acid / lemon juice in specific food contexts",
    ],
    timing: [
      "Book recommends no more than 500 mg supplemental calcium at one sitting",
      "Keep away from thyroid medication and interacting antibiotics",
    ],
    internalNote:
      "Use official calcium RDA/UL values publicly, not the book's 'optimal' label.",
  },

  iron: {
    improves: [
      "Haemoglobin and oxygen transport",
      "Iron-dependent enzymes and neurotransmitter pathways",
    ],
    inhibitedOrDepletedBy: [
      "Phytates",
      "Coffee and tea / polyphenols",
      "Calcium can reduce iron bioavailability",
    ],
    pairWith: [
      "Vitamin C can improve non-haem iron absorption",
      "Meat / seafood can improve non-haem iron absorption",
    ],
    timing: [
      "The book prefers iron supplements away from meals",
      "However food can improve GI tolerability; final public guidance must be indication-specific",
    ],
    internalNote:
      "Never tell users to self-treat suspected iron deficiency. Public page should push testing/clinical context.",
  },

  zinc: {
    improves: [
      "Normal enzyme, immune and protein/DNA functions",
    ],
    inhibitedOrDepletedBy: [
      "Phytate-rich foods can reduce zinc bioavailability",
      "Some antibiotics interact with zinc",
      "High-dose long-term zinc can impair copper status",
    ],
    pairWith: [
      "The book emphasises copper balance",
      "Animal-protein foods tend to provide more bioavailable zinc than high-phytate plant foods",
    ],
    timing: [
      "Separate from interacting quinolone/tetracycline antibiotics",
      "The book favours smaller doses over a large bolus",
    ],
    internalNote:
      "Do not publish 20–80 mg/day as an A7i 'optimal' target. Use official RDA/UL and outcome-specific clinical evidence.",
  },

  copper: {
    improves: [
      "Iron metabolism",
      "Copper-dependent enzymes",
      "Connective-tissue cross-linking",
    ],
    inhibitedOrDepletedBy: [
      "High zinc intake is the key interaction worth verifying and showing publicly",
      "The book also discusses low stomach acid and several dietary factors",
    ],
    pairWith: [
      "The book emphasises balancing high-zinc patterns with copper-containing foods",
    ],
    timing: [
      "Book recommendation: separate supplemental copper from supplemental zinc",
    ],
    internalNote:
      "The book's vitamin-C timing claim around copper should remain internal until independently reviewed.",
  },

  selenium: {
    improves: [
      "Selenoproteins including glutathione peroxidases",
      "Thyroid-related selenium enzymes",
    ],
    inhibitedOrDepletedBy: [],
    pairWith: [],
    timing: [
      "The book uses Brazil nuts and seafood as food-first examples",
    ],
    internalNote:
      "Do not publish the book's '300–400 mcg optimal' as general guidance. Adult RDA is much lower and excess selenium is a real safety issue.",
  },

  iodine: {
    improves: [
      "Thyroid hormone production",
    ],
    inhibitedOrDepletedBy: [
      "The book discusses goitrogenic foods in the context of low iodine status",
    ],
    pairWith: [
      "The book discusses selenium, zinc, magnesium, copper and iron as thyroid-relevant nutrients",
    ],
    timing: [
      "Thyroid medication timing is medically important and should be sourced from drug/clinical guidance, not inferred from supplement folklore",
    ],
    internalNote:
      "Avoid simplistic 'pair all thyroid nutrients together' advice.",
  },

  vitaminD3: {
    improves: [
      "Calcium/phosphate physiology and bone health",
    ],
    inhibitedOrDepletedBy: [],
    pairWith: [
      "The book highlights magnesium as relevant to vitamin-D metabolism",
      "Vitamin K is discussed in calcium/bone physiology",
    ],
    timing: [
      "Public A7i guidance should emphasise taking vitamin D with a meal containing fat rather than claiming a universal morning/night rule",
    ],
    internalNote:
      "Do not publish 'vitamin D is useless without magnesium' as a literal A7i statement. It overstates the evidence.",
  },

  vitaminC: {
    improves: [
      "Vitamin C improves non-haem iron absorption",
    ],
    inhibitedOrDepletedBy: [],
    pairWith: [
      "Iron-rich plant foods when improved non-haem iron absorption is relevant",
    ],
    timing: [
      "The book proposes specific copper/vitamin-C separation timing; keep this as an internal research question until verified",
    ],
    internalNote:
      "Food-first is usually practical because common fruit/vegetables can meet the adult RDA.",
  },

  glycine: {
    improves: [
      "The book discusses glycine as part of glutathione synthesis and methionine balance",
    ],
    inhibitedOrDepletedBy: [],
    pairWith: [
      "Methionine-rich meals is a book-derived pairing concept",
    ],
    timing: [
      "Book suggestion: 3–5 g with methionine-heavy meals",
    ],
    internalNote:
      "This dose/pairing must be independently verified before becoming a public recommendation.",
  },

  methionine: {
    improves: [
      "Protein synthesis and methylation pathways",
    ],
    inhibitedOrDepletedBy: [],
    pairWith: [
      "The book emphasises glycine, folate and B12 in methionine/homocysteine context",
    ],
    timing: [],
    internalNote:
      "Do not translate mechanistic nutrient relationships into a supplement stack without outcome-specific evidence.",
  },
};

export function getBookResearchNote(key) {
  return bookResearchNotes[key] || null;
}
