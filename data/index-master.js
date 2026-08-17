// MASTER INGREDIENT INDEX
//
// Market discovery, not evidence. An entry here means the ingredient exists
// and is sold; it says nothing about whether it works. Entries carry
// status "indexed" until a record is researched, reviewed and published.
// Only published entries link to a page. Nothing here is indexable by
// search engines on its own.
//
// [ name, category, level, slug|null, aliases[] ]
//   slug present  → published, links to the canonical record
//   slug null     → indexed only, appears in A–Z and search, no page

const I = (name, category, level, slug = null, aliases = []) =>
  ({ name, category, level, slug, aliases, status: slug ? "published" : "indexed" });

const F = "foundation";
const A = "advanced-nutrition";
const P = "precision-biology";

export const masterIndex = [
  // ── VITAMINS ─────────────────────────────────────────────────────────
  I("Vitamin A", "vitamins", F, null, ["retinol","retinyl palmitate","retinyl acetate"]),
  I("Vitamin B1", "vitamins", F, null, ["thiamine","thiamin"]),
  I("Vitamin B2", "vitamins", F, null, ["riboflavin"]),
  I("Vitamin B3", "vitamins", F, null, ["niacin","niacinamide","nicotinamide"]),
  I("Vitamin B5", "vitamins", F, null, ["pantothenic acid"]),
  I("Vitamin B6", "vitamins", F, null, ["pyridoxine","P5P","pyridoxal-5-phosphate"]),
  I("Vitamin B7", "vitamins", F, null, ["biotin"]),
  I("Vitamin B9", "vitamins", F, null, ["folate","folic acid","5-MTHF","methylfolate"]),
  I("Vitamin B12", "vitamins", F, "vitamin-b12", ["cobalamin","cyanocobalamin","methylcobalamin","adenosylcobalamin"]),
  I("Vitamin C", "vitamins", F, "vitamin-c", ["ascorbic acid","ascorbate"]),
  I("Vitamin D", "vitamins", F, "vitamin-d3", ["vitamin d3","cholecalciferol","vitamin d2","ergocalciferol","D3","D2"]),
  I("Vitamin E", "vitamins", F, null, ["tocopherol","tocotrienol","alpha-tocopherol"]),
  I("Vitamin K", "vitamins", F, "vitamin-k2", ["K1","K2","phylloquinone","menaquinone","MK-4","MK-7"]),
  I("Choline", "vitamin-like", F, null, ["citicoline","alpha-GPC"]),
  I("Inositol", "vitamin-like", A, null, ["myo-inositol","D-chiro-inositol"]),

  // ── MINERALS & TRACE ELEMENTS ────────────────────────────────────────
  I("Magnesium", "minerals", F, "magnesium", ["Mg","glycinate","citrate","oxide","malate","threonate","taurate"]),
  I("Calcium", "minerals", F, "calcium", ["Ca","carbonate","citrate"]),
  I("Iron", "minerals", F, "iron", ["Fe","ferrous sulfate","ferrous bisglycinate","fumarate"]),
  I("Zinc", "minerals", F, "zinc", ["Zn","picolinate","gluconate","acetate"]),
  I("Copper", "minerals", F, "copper", ["Cu","bisglycinate"]),
  I("Selenium", "minerals", F, "selenium", ["Se","selenomethionine"]),
  I("Iodine", "minerals", F, "iodine", ["I","potassium iodide","kelp"]),
  I("Potassium", "electrolytes", F, "potassium", ["K","potassium citrate"]),
  I("Sodium", "electrolytes", F, "sodium", ["Na","salt"]),
  I("Chloride", "electrolytes", F, null, ["Cl"]),
  I("Phosphorus", "minerals", F, "phosphorus", ["P","phosphate"]),
  I("Manganese", "minerals", F, "manganese", ["Mn"]),
  I("Chromium", "minerals", F, "chromium", ["Cr","chromium picolinate"]),
  I("Molybdenum", "minerals", F, "molybdenum", ["Mo"]),
  I("Boron", "minerals", F, "boron", ["B"]),
  I("Silicon", "minerals", F, null, ["silica","orthosilicic acid"]),
  I("Vanadium", "minerals", F, null),
  I("Lithium", "minerals", F, null, ["lithium orotate"]),
  I("Nickel", "minerals", F, null),
  I("Fluoride", "minerals", F, null),
  I("Cobalt", "minerals", F, null),

  // ── PROTEIN ──────────────────────────────────────────────────────────
  I("Whey protein", "protein", A, null, ["WPI","WPC","whey isolate","whey concentrate","whey hydrolysate"]),
  I("Casein", "protein", A, null, ["micellar casein"]),
  I("Milk protein", "protein", A, null, ["MPC","MPI"]),
  I("Egg protein", "protein", A, null, ["egg white protein"]),
  I("Soy protein", "protein", A, null, ["soy isolate"]),
  I("Pea protein", "protein", A, null),
  I("Rice protein", "protein", A, null, ["brown rice protein"]),
  I("Hemp protein", "protein", A, null),
  I("Fava bean protein", "protein", A, null),
  I("Potato protein", "protein", A, null),
  I("Plant protein blends", "protein", A, null),
  I("Collagen peptides", "peptides", A, "collagen-peptides", ["hydrolysed collagen","collagen","types I and III"]),
  I("Gelatin", "peptides", A, null),
  I("Colostrum", "protein", A, null, ["bovine colostrum"]),
  I("Lactoferrin", "protein", A, null),

  // ── AMINO ACIDS ──────────────────────────────────────────────────────
  I("Leucine", "amino-acids", A, null, ["BCAA"]),
  I("Isoleucine", "amino-acids", A, null, ["BCAA"]),
  I("Valine", "amino-acids", A, null, ["BCAA"]),
  I("Lysine", "amino-acids", F, null, ["L-lysine"]),
  I("Methionine", "amino-acids", F, null),
  I("Threonine", "amino-acids", F, null),
  I("Tryptophan", "amino-acids", A, null, ["L-tryptophan"]),
  I("Phenylalanine", "amino-acids", F, null),
  I("Histidine", "amino-acids", F, null),
  I("Arginine", "amino-acids", A, null, ["L-arginine","AAKG"]),
  I("Citrulline", "amino-acids", A, null, ["citrulline malate","L-citrulline"]),
  I("Glycine", "amino-acids", A, "glycine", null),
  I("Glutamine", "amino-acids", A, null, ["L-glutamine"]),
  I("Tyrosine", "amino-acids", A, null, ["L-tyrosine","N-acetyl-tyrosine"]),
  I("Cysteine", "amino-acids", A, null, ["L-cysteine"]),
  I("Serine", "amino-acids", A, null, ["phosphatidylserine precursor"]),
  I("Alanine", "amino-acids", A, null),
  I("Proline", "amino-acids", A, null),
  I("Ornithine", "amino-acids", A, null),
  I("Essential amino acid formulas", "amino-acids", A, null, ["EAA"]),

  // ── AMINO-ACID DERIVATIVES ───────────────────────────────────────────
  I("Creatine", "amino-acid-derivatives", A, "creatine", ["creatine monohydrate","creapure"]),
  I("Taurine", "amino-acid-derivatives", P, "taurine", null),
  I("NAC", "amino-acid-derivatives", A, "nac", ["N-acetylcysteine","acetylcysteine"]),
  I("Carnitine", "amino-acid-derivatives", A, null, ["L-carnitine","tartrate"]),
  I("Acetyl-L-carnitine", "amino-acid-derivatives", P, null, ["ALCAR"]),
  I("Beta-alanine", "amino-acid-derivatives", A, null),
  I("HMB", "amino-acid-derivatives", A, null, ["beta-hydroxy beta-methylbutyrate"]),
  I("5-HTP", "amino-acid-derivatives", A, null, ["5-hydroxytryptophan"]),
  I("Betaine", "methylation", A, null, ["TMG","trimethylglycine"]),
  I("SAMe", "methylation", A, null, ["S-adenosylmethionine"]),
  I("Glutathione", "antioxidants", P, null, ["reduced glutathione","liposomal glutathione"]),

  // ── FATTY ACIDS, LIPIDS, OILS ────────────────────────────────────────
  I("Omega-3", "lipids", F, "omega-3", ["EPA","DHA","fish oil","omega 3"]),
  I("EPA", "lipids", F, null, ["eicosapentaenoic acid"]),
  I("DHA", "lipids", F, null, ["docosahexaenoic acid"]),
  I("ALA", "lipids", F, null, ["alpha-linolenic acid","flaxseed oil"]),
  I("Fish oil", "lipids", F, null),
  I("Krill oil", "lipids", A, null),
  I("Algal oil", "lipids", A, null, ["algae DHA","vegan omega-3"]),
  I("Cod liver oil", "lipids", F, null),
  I("GLA", "lipids", A, null, ["gamma-linolenic acid","evening primrose oil","borage oil"]),
  I("CLA", "lipids", A, null, ["conjugated linoleic acid"]),
  I("MCT oil", "lipids", A, null, ["C8","caprylic acid","C10"]),
  I("Phosphatidylserine", "lipids", P, null, ["PS"]),
  I("Phosphatidylcholine", "lipids", A, null, ["lecithin"]),

  // ── FIBRE & PREBIOTICS ───────────────────────────────────────────────
  I("Psyllium", "fibre", F, null, ["psyllium husk","ispaghula"]),
  I("Inulin", "prebiotics", F, null, ["chicory root fibre"]),
  I("FOS", "prebiotics", F, null, ["fructo-oligosaccharides"]),
  I("GOS", "prebiotics", F, null, ["galacto-oligosaccharides"]),
  I("XOS", "prebiotics", A, null, ["xylo-oligosaccharides"]),
  I("PHGG", "fibre", A, null, ["partially hydrolysed guar gum"]),
  I("Acacia fibre", "fibre", F, null, ["gum arabic"]),
  I("Resistant starch", "fibre", F, null),
  I("Beta-glucan", "fibre", F, null, ["oat beta-glucan"]),
  I("Pectin", "fibre", F, null),
  I("Glucomannan", "fibre", A, null, ["konjac"]),

  // ── PROBIOTICS ───────────────────────────────────────────────────────
  I("Probiotics", "probiotics", A, "probiotics", ["probiotic"]),
  I("Lacticaseibacillus rhamnosus GG", "probiotics", A, null, ["LGG"]),
  I("Bifidobacterium animalis BB-12", "probiotics", A, null, ["BB-12"]),
  I("Saccharomyces boulardii CNCM I-745", "probiotics", A, null, ["S. boulardii"]),
  I("Limosilactobacillus reuteri DSM 17938", "probiotics", A, null, ["L. reuteri"]),
  I("Bifidobacterium longum 35624", "probiotics", A, null),
  I("Lactobacillus acidophilus", "probiotics", A, null),
  I("Lactiplantibacillus plantarum", "probiotics", A, null),
  I("Bacillus coagulans", "probiotics", A, null),
  I("Bacillus subtilis", "probiotics", A, null),
  I("Akkermansia muciniphila", "probiotics", P, null),
  I("Synbiotics", "probiotics", A, null),

  // ── POSTBIOTICS & MICROBIAL METABOLITES ──────────────────────────────
  I("Butyrate", "microbial-metabolites", P, null, ["sodium butyrate","tributyrin"]),
  I("Heat-killed preparations", "postbiotics", P, null, ["paraprobiotic","tyndallised"]),
  I("Microbial lysates", "postbiotics", P, null),
  I("Yeast fermentates", "fermentation", A, null, ["EpiCor"]),
  I("Urolithin A", "microbial-metabolites", P, null, ["Mitopure"]),

  // ── ENZYMES ──────────────────────────────────────────────────────────
  I("Lactase", "enzymes", F, null),
  I("Protease", "enzymes", F, null, ["proteolytic enzymes"]),
  I("Lipase", "enzymes", F, null),
  I("Amylase", "enzymes", F, null),
  I("Alpha-galactosidase", "enzymes", F, null),
  I("Bromelain", "enzymes", A, null),
  I("Papain", "enzymes", A, null),
  I("Serrapeptase", "enzymes", A, null),
  I("Nattokinase", "enzymes", A, null),
  I("Digestive enzyme blends", "enzymes", A, null),

  // ── BOTANICALS ───────────────────────────────────────────────────────
  I("Ashwagandha", "botanicals", A, null, ["Withania somnifera","KSM-66","Sensoril"]),
  I("Rhodiola rosea", "botanicals", A, null, ["golden root"]),
  I("Saffron", "botanicals", A, null, ["Crocus sativus","affron"]),
  I("Turmeric", "botanicals", A, null, ["Curcuma longa"]),
  I("Curcumin", "polyphenols", A, null, ["curcuminoids","Meriva","BCM-95"]),
  I("Ginger", "botanicals", A, null, ["Zingiber officinale"]),
  I("Garlic", "botanicals", A, null, ["aged garlic extract","allicin"]),
  I("Panax ginseng", "botanicals", A, null, ["Korean ginseng","red ginseng"]),
  I("American ginseng", "botanicals", A, null, ["Panax quinquefolius"]),
  I("Green tea extract", "botanicals", A, null, ["EGCG","camellia sinensis"]),
  I("Milk thistle", "botanicals", A, null, ["silymarin","Silybum marianum"]),
  I("Boswellia", "botanicals", A, null, ["frankincense","AKBA"]),
  I("Bacopa monnieri", "botanicals", A, null, ["brahmi"]),
  I("Valerian", "botanicals", A, null, ["Valeriana officinalis"]),
  I("Lemon balm", "botanicals", A, null, ["Melissa officinalis"]),
  I("Passionflower", "botanicals", A, null, ["Passiflora incarnata"]),
  I("Chamomile", "botanicals", A, null, ["Matricaria"]),
  I("Maca", "botanicals", A, null, ["Lepidium meyenii"]),
  I("Fenugreek", "botanicals", A, null, ["Trigonella"]),
  I("Tongkat ali", "botanicals", A, null, ["Eurycoma longifolia","longjack"]),
  I("Saw palmetto", "botanicals", A, null, ["Serenoa repens"]),
  I("Black cohosh", "botanicals", A, null, ["Actaea racemosa"]),
  I("Vitex", "botanicals", A, null, ["chaste tree","chasteberry"]),
  I("St John's wort", "botanicals", A, null, ["Hypericum perforatum"]),
  I("Cinnamon", "botanicals", A, null, ["Cinnamomum"]),
  I("Berberine", "botanicals", A, null, ["berberine HCl"]),
  I("Grape seed extract", "polyphenols", A, null, ["OPC","proanthocyanidins"]),
  I("Pine bark extract", "polyphenols", A, null, ["Pycnogenol"]),
  I("Bilberry", "botanicals", A, null, ["Vaccinium myrtillus"]),
  I("Cranberry", "botanicals", A, null, ["PACs"]),
  I("Tart cherry", "botanicals", A, null, ["Montmorency"]),
  I("Pomegranate", "botanicals", A, null, ["punicalagin"]),
  I("Elderberry", "botanicals", A, null, ["Sambucus"]),
  I("Echinacea", "botanicals", A, null),
  I("Ginkgo biloba", "botanicals", A, null),
  I("Horny goat weed", "botanicals", A, null, ["Epimedium","icariin"]),
  I("Shilajit", "botanicals", A, null, ["fulvic acid"]),
  I("Nigella sativa", "botanicals", A, null, ["black seed","thymoquinone","حبة البركة"]),

  // ── MUSHROOMS ────────────────────────────────────────────────────────
  I("Lion's mane", "fungi", A, null, ["Hericium erinaceus"]),
  I("Reishi", "fungi", A, null, ["Ganoderma lucidum"]),
  I("Cordyceps", "fungi", A, null, ["Cordyceps militaris"]),
  I("Turkey tail", "fungi", A, null, ["Trametes versicolor","PSK"]),
  I("Chaga", "fungi", A, null, ["Inonotus obliquus"]),
  I("Maitake", "fungi", A, null, ["Grifola frondosa"]),
  I("Shiitake", "fungi", A, null, ["Lentinula edodes","AHCC"]),
  I("Mushroom beta-glucans", "fungi", A, null),

  // ── PHYTONUTRIENTS ───────────────────────────────────────────────────
  I("Quercetin", "polyphenols", A, null),
  I("Resveratrol", "polyphenols", P, null, ["trans-resveratrol"]),
  I("Lutein", "carotenoids", A, null),
  I("Zeaxanthin", "carotenoids", A, null),
  I("Lycopene", "carotenoids", A, null),
  I("Astaxanthin", "carotenoids", A, null),
  I("Beta-carotene", "carotenoids", F, null),
  I("Anthocyanins", "polyphenols", A, null),
  I("Sulforaphane", "phytonutrients", A, null, ["broccoli sprout extract","glucoraphanin"]),
  I("Catechins", "polyphenols", A, null),
  I("Hesperidin", "polyphenols", A, null),
  I("Apigenin", "polyphenols", A, null),

  // ── CELLULAR / PRECISION ─────────────────────────────────────────────
  I("CoQ10", "mitochondrial", P, "coq10", ["coenzyme Q10","ubiquinone"]),
  I("Ubiquinol", "mitochondrial", P, null, ["reduced CoQ10"]),
  I("Alpha-lipoic acid", "antioxidants", P, "alpha-lipoic-acid", ["ALA","R-lipoic acid"]),
  I("PQQ", "mitochondrial", P, null, ["pyrroloquinoline quinone"]),
  I("Nicotinamide riboside", "nad", P, null, ["NR","Niagen"]),
  I("NMN", "nad", P, null, ["nicotinamide mononucleotide"]),
  I("NAD+", "nad", P, null),
  I("Spermidine", "longevity", P, null),
  I("Ergothioneine", "antioxidants", P, null),
  I("Alpha-GPC", "vitamin-like", P, null, ["choline alfoscerate"]),
  I("Citicoline", "vitamin-like", P, null, ["CDP-choline","Cognizin"]),

  // ── PERFORMANCE & OTHER MARKET CATEGORIES ────────────────────────────
  I("Caffeine", "performance", A, null, ["anhydrous caffeine"]),
  I("L-theanine", "amino-acid-derivatives", A, null, ["theanine"]),
  I("Beetroot", "performance", A, null, ["dietary nitrate","beet juice"]),
  I("Sodium bicarbonate", "performance", A, null, ["baking soda"]),
  I("Exogenous ketones", "performance", P, null, ["ketone esters","BHB"]),
  I("Electrolyte formulas", "electrolytes", A, null, ["hydration powder","ORS"]),
  I("Greens powders", "food-bioactives", A, null, ["superfood powder"]),
  I("Spirulina", "algae", A, null),
  I("Chlorella", "algae", A, null),
  I("Melatonin", "specialty", A, null, ["regulatory status varies by country"]),
  I("DHEA", "specialty", P, null, ["regulatory status varies by country"]),
  I("Glucosamine", "structural", A, "glucosamine", ["glucosamine sulfate","glucosamine HCl"]),
  I("Chondroitin", "structural", A, null, ["chondroitin sulfate"]),
  I("MSM", "structural", A, "msm", ["methylsulfonylmethane"]),
  I("Hyaluronic acid", "structural", A, null, ["HA","sodium hyaluronate"]),
  I("Royal jelly", "bee-derived", A, null),
  I("Propolis", "bee-derived", A, null),
  I("Bee pollen", "bee-derived", A, null),
  I("Multivitamins", "formulations", A, null, ["multivitamin","MVM"]),
  I("Multiminerals", "formulations", A, null),
  I("B-complex", "formulations", F, null, ["vitamin B complex"]),
  I("Prenatal formulations", "formulations", A, null, ["prenatal vitamin"]),
  I("BPC-157", "research-molecules", P, null, ["research peptide, not a dietary supplement"]),
];

// Category labels for the A–Z filter
export const indexCategories = [
  ["vitamins","Vitamins","الفيتامينات"],
  ["minerals","Minerals & trace elements","المعادن والعناصر النادرة"],
  ["electrolytes","Electrolytes","الإلكتروليتات"],
  ["protein","Protein","البروتينات"],
  ["peptides","Peptides & collagen","الببتيدات والكولاجين"],
  ["amino-acids","Amino acids","الأحماض الأمينية"],
  ["amino-acid-derivatives","Amino-acid derivatives","مشتقات الأحماض الأمينية"],
  ["lipids","Fatty acids & lipids","الأحماض الدهنية والدهون"],
  ["fibre","Fibre","الألياف"],
  ["prebiotics","Prebiotics","البريبايوتك"],
  ["probiotics","Probiotics","البروبيوتيك"],
  ["postbiotics","Postbiotics","البوستبايوتك"],
  ["microbial-metabolites","Microbial metabolites","نواتج الأيض الميكروبية"],
  ["fermentation","Fermentation-derived","مشتقات التخمير"],
  ["enzymes","Enzymes","الإنزيمات"],
  ["botanicals","Botanicals","النباتات"],
  ["fungi","Mushrooms & fungi","الفطريات"],
  ["polyphenols","Polyphenols","البوليفينولات"],
  ["carotenoids","Carotenoids","الكاروتينات"],
  ["phytonutrients","Phytonutrients","المغذيات النباتية"],
  ["antioxidants","Antioxidant & redox","مضادات الأكسدة"],
  ["mitochondrial","Mitochondrial compounds","مركبات الميتوكوندريا"],
  ["nad","NAD-related","مركبات NAD"],
  ["longevity","Longevity compounds","مركبات طول العمر"],
  ["methylation","Methylation compounds","مركبات المثيلة"],
  ["vitamin-like","Vitamin-like compounds","مركبات شبه فيتامينية"],
  ["performance","Performance compounds","مركبات الأداء"],
  ["structural","Joint & structural","المفاصل والبنية"],
  ["algae","Algae","الطحالب"],
  ["bee-derived","Bee-derived","منتجات النحل"],
  ["food-bioactives","Food bioactives","مركبات غذائية نشطة"],
  ["specialty","Specialty bioactives","مركبات متخصصة"],
  ["formulations","Formulations","التركيبات"],
  ["research-molecules","Research molecules","جزيئات بحثية"],
];

export function indexByLetter() {
  const map = {};
  for (const e of masterIndex) {
    const L = e.name[0].toUpperCase();
    (map[L] = map[L] || []).push(e);
  }
  Object.values(map).forEach((a) => a.sort((x, y) => x.name.localeCompare(y.name)));
  return map;
}

export const publishedCount = masterIndex.filter((e) => e.slug).length;
export const indexedCount = masterIndex.length;
