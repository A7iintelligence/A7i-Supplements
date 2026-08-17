// LEVEL + GOAL ASSIGNMENT for the existing canonical records.
// One record, many routes. Nothing is duplicated: these are pointers.

export const assignment = {
  // ── Foundation: nutritional sufficiency, routine deficiency ──
  magnesium:          { level: "foundation", goals: ["sleep","muscle","metabolic","bone"] },
  calcium:            { level: "foundation", goals: ["bone","muscle"] },
  iron:               { level: "foundation", goals: ["energy","womens","brain-mood"] },
  zinc:               { level: "foundation", goals: ["immune","skin-ageing","thyroid"] },
  copper:             { level: "foundation", goals: ["energy","skin-ageing"] },
  selenium:           { level: "foundation", goals: ["thyroid","immune"] },
  "vitamin-d3":       { level: "foundation", goals: ["bone","immune","womens"] },
  "vitamin-c":        { level: "foundation", goals: ["immune","skin-ageing"] },
  potassium:          { level: "foundation", goals: ["cardiovascular","metabolic"] },
  sodium:             { level: "foundation", goals: ["cardiovascular","muscle"] },
  iodine:             { level: "foundation", goals: ["thyroid","womens"] },
  phosphorus:         { level: "foundation", goals: ["bone"] },
  manganese:          { level: "foundation", goals: ["bone"] },
  molybdenum:         { level: "foundation", goals: [] },
  chromium:           { level: "foundation", goals: ["metabolic"] },
  boron:              { level: "foundation", goals: ["bone"] },
  "vitamin-b12":      { level: "foundation", goals: ["energy","brain-mood"] },
  "vitamin-k2":       { level: "foundation", goals: ["bone","cardiovascular"] },
  "omega-3":          { level: "foundation", goals: ["cardiovascular","brain-mood","womens"] },

  // ── Advanced Nutrition: beyond closing a nutrient gap ──
  "collagen-peptides":{ level: "advanced-nutrition", goals: ["skin-ageing","joint"] },
  creatine:           { level: "advanced-nutrition", goals: ["muscle","brain-mood"] },
  glycine:            { level: "advanced-nutrition", goals: ["sleep","longevity"] },
  nac:                { level: "advanced-nutrition", goals: ["immune"] },
  msm:                { level: "advanced-nutrition", goals: ["joint"] },
  probiotics:         { level: "advanced-nutrition", goals: ["gut","immune"] },
  glucosamine:        { level: "advanced-nutrition", goals: ["joint"] },

  // ── Precision Biology: defined pathways ──
  coq10:                { level: "precision-biology", goals: ["energy","cardiovascular","longevity"] },
  taurine:              { level: "precision-biology", goals: ["cardiovascular","longevity"] },
  "alpha-lipoic-acid":  { level: "precision-biology", goals: ["metabolic","energy"] },
};

export function levelOf(slug) {
  return assignment[slug]?.level || null;
}
export function goalsOf(slug) {
  return assignment[slug]?.goals || [];
}
export function slugsForLevel(level) {
  return Object.keys(assignment).filter((s) => assignment[s].level === level);
}
export function slugsForGoal(goal) {
  return Object.keys(assignment).filter((s) => assignment[s].goals.includes(goal));
}

// ── MEDICINES & CLINICAL INTERVENTIONS ──────────────────────────────────
// A separate knowledge area, not a fourth level. Indexed now, researched
// later. Exists so A7i can answer interaction questions, never to advise
// starting, stopping or changing a medicine.

export const MEDICINE_CLASSES = [
  { slug: "analgesics", en: "Analgesics & anti-inflammatories", ar: "المسكنات ومضادات الالتهاب",
    members: ["Aspirin","Ibuprofen","Naproxen","Paracetamol / acetaminophen","Other NSAIDs"] },
  { slug: "acid-suppression", en: "Acid-suppressing medicines", ar: "أدوية تثبيط الحموضة",
    members: ["Proton-pump inhibitors","H2 receptor antagonists","Antacids"] },
  { slug: "thyroid", en: "Thyroid medicines", ar: "أدوية الغدة الدرقية",
    members: ["Levothyroxine","Liothyronine","Antithyroid medicines"] },
  { slug: "metabolic", en: "Metabolic & glucose-lowering", ar: "أدوية الأيض وخفض السكر",
    members: ["Metformin","Sulfonylureas","SGLT2 inhibitors","GLP-1 receptor agonists","Insulin"] },
  { slug: "lipid", en: "Lipid-lowering medicines", ar: "أدوية خفض الدهون",
    members: ["Statins","Ezetimibe","Fibrates"] },
  { slug: "antibiotics", en: "Antibiotics", ar: "المضادات الحيوية",
    members: ["Quinolones","Tetracyclines","Penicillins","Macrolides"] },
  { slug: "anticoagulants", en: "Anticoagulants & antiplatelets", ar: "مميعات الدم ومضادات الصفيحات",
    members: ["Warfarin","Direct oral anticoagulants","Clopidogrel","Low-dose aspirin"] },
  { slug: "cardiovascular", en: "Cardiovascular medicines", ar: "أدوية القلب والأوعية",
    members: ["ACE inhibitors","Angiotensin receptor blockers","Beta blockers","Calcium channel blockers","Thiazide diuretics","Loop diuretics","Potassium-sparing diuretics"] },
  { slug: "psychiatric", en: "Psychiatric medicines", ar: "الأدوية النفسية",
    members: ["SSRIs","SNRIs","Tricyclic antidepressants","Lithium","Benzodiazepines"] },
  { slug: "bone", en: "Bone medicines", ar: "أدوية العظام",
    members: ["Bisphosphonates","Denosumab"] },
  { slug: "hormonal", en: "Hormonal medicines", ar: "الأدوية الهرمونية",
    members: ["Combined hormonal contraception","Hormone replacement therapy"] },
  { slug: "other", en: "Other commonly used", ar: "أدوية شائعة أخرى",
    members: ["Antihistamines","Corticosteroids","Immunosuppressants","Anticonvulsants"] },
];

export const MEDICINE_SCHEMA = {
  identity: ["slug","name","arabicName","aliases","class","atcCode"],
  clinical: ["whatItIsFor","howItIsUsuallyTaken"],
  nutrition: ["affectsNutrientStatus[]","depletes[]","absorptionEffects[]"],
  interactions: ["supplementInteractions[]{slug,direction,severity,separation,source}"],
  guidance: ["separationGuidance","foodEffects","professionalReferral"],
  editorial: ["state","lastReviewed","reviewer"],
  rule: "Educational and interaction-focused only. Never advises starting, stopping or changing a medicine.",
};

// ── BIOMARKERS ──────────────────────────────────────────────────────────
// Educational links only. Never interpreted as diagnosis.

export const BIOMARKERS = [
  { slug: "ferritin",   en: "Ferritin",              ar: "الفيريتين",        relatedTo: ["iron"] },
  { slug: "hb",         en: "Haemoglobin",           ar: "الهيموغلوبين",     relatedTo: ["iron","vitamin-b12"] },
  { slug: "25ohd",      en: "25-hydroxyvitamin D",   ar: "25-هيدروكسي فيتامين د", relatedTo: ["vitamin-d3"] },
  { slug: "b12-serum",  en: "Serum B12",             ar: "ب12 في المصل",     relatedTo: ["vitamin-b12"] },
  { slug: "tsh",        en: "TSH",                   ar: "هرمون TSH",        relatedTo: ["iodine","selenium"] },
  { slug: "hba1c",      en: "HbA1c",                 ar: "السكر التراكمي",    relatedTo: ["chromium"] },
  { slug: "lipids",     en: "Lipid panel",           ar: "صورة الدهون",      relatedTo: ["omega-3","coq10"] },
  { slug: "calcium-s",  en: "Serum calcium",         ar: "كالسيوم المصل",    relatedTo: ["calcium","vitamin-d3"] },
];
