// A7i ARCHITECTURE
//
// Three independent dimensions. A record carries all three and is never
// duplicated across them:
//
//   CATEGORY  what the compound is scientifically      (mineral, enzyme…)
//   LEVEL     how specific the intervention is         (foundation…)
//   GOAL      what a person is trying to improve       (sleep, muscle…)
//
// Levels are not stages. Nobody has to "graduate" through them. They
// describe increasing specificity and formulation complexity, nothing more.

export const LEVELS = [
  {
    id: "foundation",
    num: "01",
    en: {
      name: "Foundation",
      lead: "The things that decide whether a supplement is worth taking at all: what you eat, how you sleep, how you move, and whether any nutrient is genuinely short.",
      inside: "Health basics · Single ingredient library · Common shortfalls · Food first · Baseline assessment",
      cta: "Explore Foundation",
    },
    ar: {
      name: "الأساسيات",
      lead: "الأمور التي تحدد ما إذا كان المكمّل يستحق أصلاً: ما تأكله، وكيف تنام، وكيف تتحرك، وهل هناك نقص فعلي في أي مغذٍ.",
      inside: "أساسيات الصحة · مكتبة المكوّنات المفردة · النقص الشائع · الغذاء أولاً · التقييم المبدئي",
      cta: "استكشف الأساسيات",
    },
    groups: [
      { id: "health-basics", en: "Health basics", ar: "أساسيات الصحة",
        items: ["Nutrition quality","Protein adequacy","Fibre","Hydration","Electrolyte balance","Sleep","Movement","Resistance exercise","Cardiorespiratory activity","Recovery","Light exposure"] },
      { id: "assessment", en: "Baseline assessment", ar: "التقييم المبدئي",
        items: ["Routine physician care","Routine blood work","Deficiency assessment","Medication review"] },
      { id: "library", en: "Single ingredient library", ar: "مكتبة المكوّنات المفردة", isLibrary: true },
    ],
  },
  {
    id: "advanced-nutrition",
    num: "02",
    en: {
      name: "Advanced Nutrition",
      lead: "Ingredients and formulations that do more than close a simple nutrient gap. Sometimes a well-designed combination is easier to execute than assembling the same thing yourself.",
      inside: "Functional ingredients · Formulation classes · Performance · Recovery · Adaptogens · Multinutrient approaches",
      cta: "Explore Advanced Nutrition",
    },
    ar: {
      name: "التغذية المتقدمة",
      lead: "مكوّنات وتركيبات تتجاوز سدّ نقص غذائي بسيط. أحياناً تكون التركيبة المصممة جيداً أسهل تنفيذاً من تجميع الشيء نفسه بنفسك.",
      inside: "مكوّنات وظيفية · فئات التركيبات · الأداء · التعافي · النباتات المتكيفة · المقاربات متعددة المغذيات",
      cta: "استكشف التغذية المتقدمة",
    },
    groups: [
      { id: "functional", en: "Functional ingredients", ar: "مكوّنات وظيفية",
        items: ["Collagen peptides","Creatine","Ashwagandha","Rhodiola rosea","Curcumin","Functional mushroom extracts","NAC","Taurine","Citrulline","Glycine","Berberine","Green tea extract"] },
      { id: "formulations", en: "Formulation classes", ar: "فئات التركيبات",
        items: ["Multivitamins","Multiminerals","Electrolyte formulas","Protein formulations","Essential amino acid formulas","Hydration products","Prebiotic combinations","Probiotic combinations","Synbiotics","Collagen formulations","Joint-support formulations","Sleep formulations","Adaptogen formulations","Cognitive-support formulations","Performance formulations","Recovery formulations","Women's nutrition formulations","Men's nutrition formulations"] },
    ],
  },
  {
    id: "precision-biology",
    num: "03",
    en: {
      name: "Precision Biology",
      lead: "Molecules, strains and formulations aimed at defined biological pathways. This is where the evidence is newest, the claims are largest, and the gap between the two matters most.",
      inside: "Mitochondria · Metabolic health · Cognition · Healthy ageing · Gut barrier · Defined strains · Emerging molecules",
      cta: "Explore Precision Biology",
    },
    ar: {
      name: "البيولوجيا الدقيقة",
      lead: "جزيئات وسلالات وتركيبات تستهدف مسارات بيولوجية محددة. هنا يكون الدليل أحدث والادعاءات أكبر، والفجوة بينهما هي الأهم.",
      inside: "الميتوكوندريا · الصحة الأيضية · الإدراك · الشيخوخة الصحية · حاجز الأمعاء · سلالات محددة · جزيئات ناشئة",
      cta: "استكشف البيولوجيا الدقيقة",
    },
    groups: [
      { id: "molecules", en: "Targeted molecules", ar: "جزيئات مستهدفة",
        items: ["Urolithin A","Spermidine","Ergothioneine","CoQ10 / ubiquinol","Nicotinamide riboside","NMN","PQQ","Alpha-lipoic acid"] },
      { id: "microbial", en: "Defined microbial preparations", ar: "مستحضرات ميكروبية محددة",
        items: ["Defined probiotic strains","Targeted postbiotics","Microbial metabolites","Fermentation-derived compounds"] },
      { id: "systems", en: "System-targeted formulations", ar: "تركيبات موجهة للأجهزة",
        items: ["Mitochondrial formulations","Metabolic formulations","Cognitive formulations","Healthy-ageing formulations","Targeted lipid formulations"] },
      { id: "research", en: "Research molecules", ar: "جزيئات بحثية", restricted: true,
        items: ["BPC-157","Other research peptides"] },
    ],
  },
];

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id);
}

// ── HEALTH GOALS ────────────────────────────────────────────────────────
// A separate dimension. Goals cut across all three levels and are never
// owned by one of them.

export const GOALS = [
  { id: "brain-mood",       en: "Brain & Mood",              ar: "الدماغ والمزاج" },
  { id: "metabolic",        en: "Metabolic Health",          ar: "الصحة الأيضية" },
  { id: "energy",           en: "Energy & Mitochondria",     ar: "الطاقة والميتوكوندريا" },
  { id: "muscle",           en: "Muscle & Performance",      ar: "العضلات والأداء" },
  { id: "sleep",            en: "Sleep & Recovery",          ar: "النوم والتعافي" },
  { id: "skin-ageing",      en: "Skin & Healthy Ageing",     ar: "البشرة والشيخوخة الصحية" },
  { id: "joint",            en: "Joint & Connective Tissue", ar: "المفاصل والنسيج الضام" },
  { id: "gut",              en: "Gut & Barrier Health",      ar: "الأمعاء وصحة الحاجز" },
  { id: "immune",           en: "Immune Function",           ar: "وظيفة المناعة" },
  { id: "cardiovascular",   en: "Cardiovascular Health",     ar: "صحة القلب والأوعية" },
  { id: "bone",             en: "Bone Health",               ar: "صحة العظام" },
  { id: "thyroid",          en: "Thyroid & Hormones",        ar: "الغدة الدرقية والهرمونات" },
  { id: "womens",           en: "Women's Health",            ar: "صحة المرأة" },
  { id: "mens",             en: "Men's Health",              ar: "صحة الرجل" },
  { id: "longevity",        en: "Healthy Ageing",            ar: "الشيخوخة الصحية" },
];

export function getGoal(id) {
  return GOALS.find((g) => g.id === id);
}

// ── EXTENDED SCIENTIFIC TAXONOMY ────────────────────────────────────────
// The twelve original categories plus areas that were genuinely missing.
// Nothing added purely to lengthen the list.

export const EXTENDED_CATEGORIES = [
  { slug: "protein-peptides",   en: "Protein / peptides",         ar: "البروتينات والببتيدات",
    definition: "Whole proteins, hydrolysates and defined peptide preparations." },
  { slug: "carbohydrate",       en: "Carbohydrate-derived",       ar: "مشتقات الكربوهيدرات",
    definition: "Sugars, polysaccharides and derived compounds used nutritionally." },
  { slug: "fibre",              en: "Fibre",                      ar: "الألياف",
    definition: "Non-digestible carbohydrates, separated from prebiotics where the prebiotic definition is not met." },
  { slug: "electrolytes",       en: "Electrolytes",               ar: "الإلكتروليتات",
    definition: "Minerals carrying charge in body fluids, grouped by function rather than by element." },
  { slug: "polyphenols",        en: "Phytonutrients / polyphenols", ar: "المغذيات النباتية والبوليفينولات",
    definition: "Plant secondary metabolites studied for physiological effects." },
  { slug: "carotenoids",        en: "Carotenoids",                ar: "الكاروتينات",
    definition: "Fat-soluble plant pigments, several with provitamin A activity." },
  { slug: "nucleotides",        en: "Nucleotides & related",      ar: "النيوكليوتيدات وما يتصل بها",
    definition: "Nucleotide and nucleoside compounds used nutritionally." },
  { slug: "metabolites",        en: "Metabolites",                ar: "نواتج الأيض",
    definition: "Endogenous or microbial metabolic products taken as supplements." },
  { slug: "fermentation",       en: "Fermentation-derived",       ar: "مشتقات التخمير",
    definition: "Compounds produced by microbial fermentation, distinct from postbiotics." },
  { slug: "performance",        en: "Performance compounds",      ar: "مركبات الأداء",
    definition: "Compounds studied primarily for exercise performance rather than nutritional sufficiency." },
];

// ── EDITORIAL STATE ─────────────────────────────────────────────────────
// Only PUBLISHED records get an indexable public page. These states are
// never shown to ordinary users and never appear in public HTML.

export const EDITORIAL_STATES = ["indexed", "researching", "reviewed", "published"];

// ── CANONICAL RECORD SCHEMA ─────────────────────────────────────────────
// Documentation of the shape every ingredient record must eventually fill.
// Kept in code so the schema and the build cannot drift apart.

export const INGREDIENT_SCHEMA = {
  identity: ["id","slug","canonicalName","scientificName","arabicName","aliases"],
  taxonomy: ["category","subcategory","primaryLevel","secondaryLevels","goals","compoundType","essentialStatus","regulatoryStatus"],
  availability: ["foodOccurrence","supplementAvailability"],
  explanation: ["whatItIs","whatItDoes","whyPeopleUseIt","establishedRole"],
  evidence: ["outcomes[]{outcome,grade,population,form,doseRange,conclusion,limitations,sources[]}"],
  food: ["foodSources[]{food,serving,amount,unit,sourceDb,preparation,confidence}","foodFeasibility","foodCanReachTarget"],
  intake: ["rda","ai","ul","researchDose","therapeuticDose","noEstablishedRequirement"],
  forms: ["forms[]{name,chemicalForm,bioavailability,evidence,notes}"],
  absorption: ["improvedBy[]","reducedBy[]","nutrientInteractions[]","foodInteractions[]","medicineInteractions[]"],
  timing: ["withFood","awayFromFood","timeOfDay","exerciseTiming","dividedDosing","confidence"],
  safety: ["adverseEffects","contraindications","pregnancy","breastfeeding","kidney","liver","children","olderAdults","medicineWarnings"],
  testing: ["biomarkers[]","deficiencyAssessment"],
  graph: ["relatedNutrients[]","synergistic[]","competitive[]","mechanisms[]"],
  studies: ["systematicReviews[]","metaAnalyses[]","rcts[]","guidelines[]","officialSources[]"],
  editorial: ["state","lastReviewed","reviewer","arabicReviewStatus","nextReview"],
  private: ["internalResearchNotes"],
};

export const FORMULATION_SCHEMA = {
  identity: ["id","slug","name","arabicName","purpose"],
  taxonomy: ["level","goals","formulationClass"],
  composition: ["ingredients[]{slug,dose,unit,form,rationale}"],
  evidence: ["perIngredientEvidence[]","combinationEvidence","combinationGrade"],
  analysis: ["duplicationRisk","interactions[]","comparisonWithSingles","convenienceAdvantage","foodAlternatives"],
  safety: ["whoShouldAvoid","medicineWarnings","upperLimitRisk"],
  editorial: ["state","lastReviewed","reviewer"],
};

export const PROBIOTIC_SCHEMA = {
  taxonomy: ["genus","species","strain","strainDesignation"],
  product: ["dose","cfu","formulation","viabilityThroughShelfLife"],
  evidence: ["outcome","population","grade","studies[]"],
  rule: "Evidence never transfers between strains.",
};
