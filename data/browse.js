// Verdict = A7i's single readable call on an ingredient for routine use.
// It is an editorial summary of the verified catalog record, not a new claim.

export const verdictMeta = {
  "food-first":       { en:"Food first",       ar:"الغذاء أولاً",     tone:"good" },
  "supplement-helps": { en:"Supplement helps", ar:"المكمل يفيد",      tone:"info" },
  "clinician":        { en:"Ask a clinician",  ar:"استشر طبيباً",     tone:"warn" },
  "thin":             { en:"Evidence thin",    ar:"الدليل ضعيف",      tone:"muted" },
};

export const verdicts = {
  magnesium: "food-first",
  calcium: "food-first",
  iron: "clinician",
  zinc: "food-first",
  copper: "food-first",
  selenium: "food-first",
  "vitamin-d3": "supplement-helps",
  "vitamin-c": "food-first",
  "collagen-peptides": "supplement-helps",
  creatine: "supplement-helps",
  probiotics: "supplement-helps",
  potassium: "food-first",
  iodine: "food-first",
  phosphorus: "food-first",
  manganese: "food-first",
  chromium: "thin",
  molybdenum: "food-first",
  boron: "thin",
  glycine: "supplement-helps",
  taurine: "supplement-helps",
  nac: "clinician",
  coq10: "supplement-helps",
  "omega-3": "supplement-helps",
  "vitamin-b12": "supplement-helps",
  sodium: "food-first",
  msm: "thin",
  "alpha-lipoic-acid": "supplement-helps",
  glucosamine: "thin",
  "vitamin-k2": "supplement-helps",
};

// The browsable library. `slug` present = reviewed guide exists.
// Items without a slug are part of the library and searchable, listed plainly.
const L = (name, symbol = null, slug = null) => ({ name, symbol, slug });

export const browseIndex = {
  minerals: [
    { group:{en:"Macrominerals", ar:"معادن كبرى"}, items:[
      L("Magnesium","Mg","magnesium"), L("Calcium","Ca","calcium"), L("Phosphorus","P","phosphorus"),
    ]},
    { group:{en:"Trace minerals", ar:"معادن نادرة"}, items:[
      L("Iron","Fe","iron"), L("Zinc","Zn","zinc"), L("Copper","Cu","copper"),
      L("Selenium","Se","selenium"), L("Iodine","I","iodine"), L("Manganese","Mn","manganese"),
      L("Chromium","Cr","chromium"), L("Molybdenum","Mo","molybdenum"), L("Boron","B","boron"),
    ]},
    { group:{en:"Electrolytes", ar:"إلكتروليتات"}, items:[
      L("Potassium","K","potassium"), L("Sodium","Na","sodium"),
    ]},
  ],
  vitamins: [
    { group:{en:"Fat-soluble", ar:"ذائبة في الدهون"}, items:[
      L("Vitamin A"), L("Vitamin D3",null,"vitamin-d3"), L("Vitamin D2"),
      L("Vitamin E"), L("Vitamin K1"), L("Vitamin K2",null,"vitamin-k2"),
    ]},
    { group:{en:"Water-soluble", ar:"ذائبة في الماء"}, items:[
      L("Vitamin C",null,"vitamin-c"),
    ]},
    { group:{en:"B-complex", ar:"مجموعة ب"}, items:[
      L("Vitamin B1","Thiamine"), L("Vitamin B2","Riboflavin"), L("Vitamin B3","Niacin"),
      L("Vitamin B5","Pantothenic acid"), L("Vitamin B6"), L("Biotin","B7"),
      L("Folate","B9"), L("Vitamin B12",null,"vitamin-b12"),
    ]},
  ],
  "amino-acids": [
    { group:{en:"Essential amino acids", ar:"أحماض أمينية أساسية"}, items:[
      L("Leucine"), L("Isoleucine"), L("Valine"), L("Lysine"), L("Methionine"),
      L("Threonine"), L("Tryptophan"), L("Histidine"), L("Phenylalanine"),
    ]},
    { group:{en:"Conditionally essential", ar:"أساسية شرطياً"}, items:[
      L("Glycine",null,"glycine"), L("Arginine"), L("Glutamine"), L("Tyrosine"), L("Cysteine"),
    ]},
    { group:{en:"Derivatives and peptides", ar:"مشتقات وببتيدات"}, items:[
      L("Creatine",null,"creatine"), L("Collagen peptides",null,"collagen-peptides"),
      L("NAC","Cysteine derivative","nac"), L("Citrulline"), L("BPC-157","Research peptide"),
    ]},
  ],
  probiotic: [
    { group:{en:"Bacterial probiotics", ar:"بروبيوتيك بكتيري"}, items:[
      L("Probiotics","Overview","probiotics"),
      L("Lacticaseibacillus rhamnosus GG"), L("Bifidobacterium animalis BB-12"),
      L("Limosilactobacillus reuteri DSM 17938"), L("Bifidobacterium longum 35624"),
      L("Akkermansia muciniphila"),
    ]},
    { group:{en:"Yeast probiotics", ar:"بروبيوتيك خمائري"}, items:[
      L("Saccharomyces boulardii CNCM I-745"),
    ]},
    { group:{en:"Spore-forming", ar:"بوغي"}, items:[
      L("Bacillus coagulans"), L("Bacillus subtilis"),
    ]},
  ],
  "longevity-cellular-health": [
    { group:{en:"Mitochondrial", ar:"الميتوكوندريا"}, items:[
      L("CoQ10",null,"coq10"), L("Ubiquinol"), L("PQQ"), L("Alpha-lipoic acid",null,"alpha-lipoic-acid"),
    ]},
    { group:{en:"NAD+ precursors", ar:"طلائع NAD+"}, items:[
      L("Nicotinamide riboside","NR"), L("NMN"),
    ]},
    { group:{en:"Cellular cleanup", ar:"التنظيف الخلوي"}, items:[
      L("Urolithin A"), L("Spermidine"), L("Ergothioneine"), L("Taurine",null,"taurine"),
    ]},
  ],
  "fatty-acid-lipids": [
    { group:{en:"Marine omega-3", ar:"أوميغا-3 بحرية"}, items:[
      L("Omega-3",null,"omega-3"), L("EPA"), L("DHA"), L("Fish oil"), L("Krill oil"),
    ]},
    { group:{en:"Plant-derived", ar:"نباتية المصدر"}, items:[
      L("ALA"), L("GLA"), L("Evening primrose oil"),
    ]},
    { group:{en:"Other lipids", ar:"دهون أخرى"}, items:[
      L("MCT oil"), L("Phosphatidylserine"), L("CLA"),
    ]},
  ],
  "herbal-extraction": [
    { group:{en:"Standardised extracts", ar:"مستخلصات موحّدة"}, items:[
      L("Curcumin"), L("Berberine"), L("Green tea extract"), L("Milk thistle","Silymarin"),
      L("Boswellia"), L("Artichoke extract"),
    ]},
    { group:{en:"Traditional botanicals", ar:"نباتات تقليدية"}, items:[
      L("Ashwagandha"), L("Rhodiola rosea"), L("Panax ginseng"), L("Saffron"),
      L("Ginger"), L("Garlic extract"),
    ]},
  ],
  "fungi-adaptogens": [
    { group:{en:"Medicinal mushrooms", ar:"فطريات طبية"}, items:[
      L("Lion's mane"), L("Reishi"), L("Cordyceps"), L("Chaga"),
      L("Turkey tail"), L("Shiitake extract"),
    ]},
    { group:{en:"Preparations", ar:"مستحضرات"}, items:[
      L("Mushroom beta-glucans"),
    ]},
  ],
  prebiotic: [
    { group:{en:"Fermentable fibres", ar:"ألياف قابلة للتخمر"}, items:[
      L("Inulin"), L("PHGG"), L("Acacia fibre"), L("Beta-glucan"),
    ]},
    { group:{en:"Oligosaccharides", ar:"سكريات قليلة التعدد"}, items:[
      L("FOS"), L("GOS"),
    ]},
    { group:{en:"Resistant starch", ar:"نشا مقاوم"}, items:[
      L("Resistant starch"),
    ]},
  ],
  postbiotics: [
    { group:{en:"Microbial metabolites", ar:"نواتج أيض ميكروبية"}, items:[
      L("Butyrate"), L("Tributyrin"),
    ]},
    { group:{en:"Inactivated preparations", ar:"مستحضرات معطَّلة"}, items:[
      L("Heat-killed preparations"), L("Microbial lysates"), L("Yeast fermentates"),
    ]},
  ],
  enzymes: [
    { group:{en:"Digestive enzymes", ar:"إنزيمات هضمية"}, items:[
      L("Lactase"), L("Protease"), L("Lipase"), L("Amylase"), L("Alpha-galactosidase"),
    ]},
    { group:{en:"Plant-derived", ar:"نباتية المصدر"}, items:[
      L("Bromelain"), L("Papain"),
    ]},
  ],
  essentials: [
    { group:{en:"Essential fats", ar:"دهون أساسية"}, items:[
      L("ALA"), L("Linoleic acid"),
    ]},
    { group:{en:"Essential amino acids", ar:"أحماض أمينية أساسية"}, items:[
      L("Leucine"), L("Lysine"), L("Methionine"), L("Tryptophan"),
    ]},
    { group:{en:"Other essentials", ar:"عناصر أساسية أخرى"}, items:[
      L("Choline"), L("Vitamin D3",null,"vitamin-d3"), L("Iodine"),
    ]},
  ],
};

// Extra search aliases: abbreviations, misspellings, Arabic, chemical names.
export const aliases = {
  magnesium: ["mg","magnez","magnesio","magnesuim","magnesiam","mag"],
  calcium: ["ca","calsium","kalsium"],
  iron: ["fe","ferritin","anemia","anaemia","iorn"],
  zinc: ["zn","zink"],
  copper: ["cu"],
  selenium: ["se","selenuim"],
  "vitamin-d3": ["vit d","vitd","d3","vitamin d","cholecalciferol","sunshine vitamin","vitamin dee"],
  "vitamin-c": ["vit c","vitc","ascorbic","ascorbic acid","vitamine c"],
  "collagen-peptides": ["colagen","collagin","collgen","peptides","bone broth"],
  creatine: ["creatin","kreatine","creapure","monohydrate"],
  potassium: ["k","potasium"],
  iodine: ["i","iodide","thyroid"],
  chromium: ["cr","picolinate"],
  manganese: ["mn"],
  molybdenum: ["mo"],
  boron: ["b"],
  glycine: ["glycin"],
  taurine: ["taurin"],
  nac: ["n-acetylcysteine","acetylcysteine","cysteine"],
  coq10: ["coq 10","q10","ubiquinol","ubiquinone","coenzyme q"],
  "vitamin-b12": ["b12","cobalamin","cyanocobalamin","methylcobalamin","b 12"],
  sodium: ["na","salt"],
  msm: ["methylsulfonylmethane","sulfur","sulphur"],
  "alpha-lipoic-acid": ["ala","lipoic","alpha lipoic"],
  glucosamine: ["chondroitin","joint"],
  "vitamin-k2": ["k2","menaquinone","mk-7","mk7","mk-4","vitamin k"],
  "omega-3": ["omega3","omega 3","fish oil","epa","dha","krill"],
  probiotics: ["probiotic","pro biotic","good bacteria","gut bacteria","flora"],
};
