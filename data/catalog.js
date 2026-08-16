import { aliases } from "./browse";

// NOTE: data/research.js is INTERNAL ONLY. Never import it here or in any
// public page/component — it must not reach the build output or client bundle.

export const categories = [
  { slug:"enzymes", label:"Enzymes", ar:"الإنزيمات", definition:"Proteins that speed up specific biochemical reactions.", definitionAr:"بروتينات تسرّع تفاعلات كيميائية حيوية محددة." },
  { slug:"herbal-extraction", label:"Herbal extraction", ar:"المستخلصات العشبية", definition:"Concentrated plant-derived ingredients prepared to deliver particular compounds.", definitionAr:"مكونات نباتية مركزة تُحضّر لتوفير مركبات محددة." },
  { slug:"fatty-acid-lipids", label:"Fatty acid/lipids", ar:"الأحماض الدهنية والدهون", definition:"Fats and fat-like compounds involved in membranes, signalling and energy.", definitionAr:"دهون ومركبات شبيهة بالدهون تدخل في الأغشية والإشارات والطاقة." },
  { slug:"postbiotics", label:"Postbiotics", ar:"البوستبايوتك", definition:"Preparations of inanimate microorganisms and/or their components studied for health effects.", definitionAr:"مستحضرات من كائنات دقيقة غير حية أو مكوناتها تُدرس لتأثيرات صحية." },
  { slug:"longevity-cellular-health", label:"Longevity/cellular health", ar:"طول العمر وصحة الخلايا", definition:"Compounds studied around mitochondria, cellular pathways and healthy ageing.", definitionAr:"مركبات تُدرس في الميتوكوندريا ومسارات الخلايا والشيخوخة الصحية." },
  { slug:"fungi-adaptogens", label:"Fungi/adaptogens", ar:"الفطريات والمواد المتكيفة", definition:"Fungal and botanical ingredients studied around stress adaptation and specific outcomes.", definitionAr:"مكونات فطرية ونباتية تُدرس للتكيف مع الضغط ونتائج محددة." },
  { slug:"minerals", label:"Minerals", ar:"المعادن", definition:"Inorganic elements used in structure, signalling, fluid balance and metabolism.", definitionAr:"عناصر غير عضوية تدخل في البنية والإشارات وتوازن السوائل والأيض." },
  { slug:"vitamins", label:"Vitamins", ar:"الفيتامينات", definition:"Organic micronutrients required in small amounts for normal physiological functions.", definitionAr:"مغذيات عضوية دقيقة يحتاجها الجسم بكميات صغيرة لوظائفه الطبيعية." },
  { slug:"essentials", label:"Essentials", ar:"العناصر الأساسية", definition:"A practical cross-category collection of nutrients the body cannot make, or cannot make in sufficient amounts.", definitionAr:"مجموعة عملية من العناصر التي لا يستطيع الجسم تصنيعها أو لا يصنع منها كمية كافية." },
  { slug:"amino-acids", label:"Amino acids", ar:"الأحماض الأمينية", definition:"Building blocks of proteins plus closely related compounds; peptides must be classified separately.", definitionAr:"وحدات بناء البروتينات مع مركبات مرتبطة، مع تصنيف الببتيدات بشكل منفصل." },
  { slug:"prebiotic", label:"Prebiotic", ar:"البريبايوتك", definition:"Substrates selectively used by host microorganisms that can confer a health benefit.", definitionAr:"مواد تستخدمها كائنات المضيف الدقيقة بشكل انتقائي ويمكن أن تمنح فائدة صحية." },
  { slug:"probiotic", label:"Probiotic", ar:"البروبيوتيك", definition:"Live microorganisms that can confer a health benefit when administered in adequate amounts; strain matters.", definitionAr:"كائنات دقيقة حية قد تمنح فائدة صحية عند إعطائها بكمية كافية، والسلالة مهمة." },
];

const source = (label, url, type="primary/authoritative") => ({label,url,type});

export const reviewed = [
  {
    slug:"magnesium",
    researchKey:"magnesium",
    category:"minerals",
    names:["magnesium","mg","magnesium glycinate","magnesium citrate","مغنيسيوم","المغنيسيوم"],
    en:{
      name:"Magnesium",
      strap:"Often obtainable from food. Supplements mainly add a measured elemental dose, convenience or a specific clinical/formulation use.",
      what:"An essential mineral and enzyme cofactor involved in energy metabolism, muscle and nerve function and many other normal processes.",
      why:"The body needs magnesium. That does not mean extra magnesium improves every symptom associated with it.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is generally 310–420 mg/day depending on sex and life stage. That is total intake from food + supplements, not a default supplement dose.",
      food:[["Pumpkin seeds · 28 g","156 mg"],["Chia seeds · 28 g","111 mg"],["Almonds · 28 g","80 mg"]],
      foodVsShelf:{
        canFood:"Yes — often realistically.",
        reality:"A small serving of seeds or nuts can provide a meaningful fraction of the daily requirement before the rest of the diet is counted.",
        shelf:"A supplement gives a known elemental-magnesium dose and can be useful when food intake is inadequate or a clinician recommends supplementation.",
        verdict:"Strong food-first candidate for routine nutrition."
      },
      absorption:{
        helps:["Choosing a form with good bioavailability and tolerability matters more than a marketing claim."],
        reduces:["Long-term proton-pump inhibitor use can cause low magnesium in some people."],
        separate:["Magnesium can interfere with some antibiotics and bisphosphonates. Follow the medicine label / clinician instructions."],
        meal:"No universal requirement to take with or without food; tolerability and product directions matter.",
        clock:"No clearly proven best clock time for general supplementation."
      },
      forms:"Citrate, glycinate, chloride, lactate, oxide and other forms differ in elemental content, solubility and tolerability.",
      evidence:"Strong for essential nutritional role; supplement outcomes are claim-specific."
    },
    sources:[
      source("NIH ODS — Magnesium","https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/")
    ]
  },

  {
    slug:"calcium",
    researchKey:"calcium",
    category:"minerals",
    names:["calcium","calcium citrate","calcium carbonate","كالسيوم","الكالسيوم"],
    en:{
      name:"Calcium",
      strap:"Very achievable from food for many people. Supplements are mainly useful when dietary intake is inadequate or clinically indicated.",
      what:"An essential mineral central to bone structure, muscle contraction, nerve signalling and other normal functions.",
      why:"Calcium needs are real, but total dietary intake should be considered before adding a supplement.",
      targetLabel:"Dietary reference intake",
      target:"Most adults need 1,000–1,200 mg/day depending on age and sex.",
      food:[["Milk · 1 cup","~300 mg"],["Yoghurt","Varies; often rich"],["Sardines/salmon with bones","Rich source"]],
      foodVsShelf:{
        canFood:"Yes — frequently.",
        reality:"Dairy, fortified alternatives and fish with edible bones can contribute large amounts.",
        shelf:"A supplement makes intake measurable when diet does not cover the gap.",
        verdict:"Food-first unless there is a clear intake gap or clinical reason."
      },
      absorption:{
        helps:["Calcium supplement absorption is highest at doses of 500 mg or less at one time."],
        reduces:["Very large single doses are absorbed less efficiently."],
        separate:["Calcium can interfere with levothyroxine and some medicines, including quinolone antibiotics."],
        meal:"Calcium carbonate is generally taken with food; calcium citrate is less dependent on stomach acid.",
        clock:"Total intake and dose size matter more than morning vs night."
      },
      forms:"Carbonate and citrate are common. Citrate can be useful when stomach acid is low.",
      evidence:"Strong for essential nutritional role."
    },
    sources:[
      source("NIH ODS — Calcium","https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/")
    ]
  },

  {
    slug:"iron",
    researchKey:"iron",
    category:"minerals",
    names:["iron","ferrous iron","ferrous sulfate","حديد","الحديد"],
    en:{
      name:"Iron",
      strap:"Food supplies iron; treatment of deficiency is a clinical question, not a generic wellness decision.",
      what:"An essential mineral required for haemoglobin, oxygen transport and many enzymes.",
      why:"Iron supplementation is valuable when there is a defined need, but unnecessary iron can cause harm.",
      targetLabel:"Dietary reference intake",
      target:"Adult requirements vary substantially by sex and life stage. The adult UL is 45 mg/day for healthy people; therapeutic regimens can differ under medical care.",
      food:[["Red meat","Haem iron"],["Shellfish","Rich source"],["Beans/lentils","Non-haem iron"]],
      foodVsShelf:{
        canFood:"Yes for routine nutrition; not always enough to correct established deficiency.",
        reality:"Iron status depends on intake, blood loss, absorption, sex and life stage.",
        shelf:"Supplemental iron can deliver a treatment-level dose, which is why clinical context matters.",
        verdict:"Food first for routine nutrition; clinician-led when deficiency is suspected or diagnosed."
      },
      absorption:{
        helps:["Vitamin C, meat, poultry and seafood can improve non-haem iron absorption."],
        reduces:["Phytate and some polyphenols reduce non-haem iron absorption; calcium can reduce iron bioavailability."],
        separate:["High-dose iron supplements can reduce zinc absorption. Medicine interactions should be checked individually."],
        meal:"Empty-stomach dosing may maximise absorption for some iron products, but taking iron with food can reduce gastrointestinal side effects. Follow the indication/product/clinician advice.",
        clock:"Timing should be chosen around absorption, tolerability and the prescribed regimen rather than a universal clock rule."
      },
      forms:"Ferrous salts and other formulations differ in elemental iron and tolerability.",
      evidence:"Strong for treating true iron deficiency; clinical oversight important."
    },
    sources:[
      source("NIH ODS — Iron","https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/")
    ]
  },

  {
    slug:"zinc",
    researchKey:"zinc",
    category:"minerals",
    names:["zinc","zinc picolinate","zinc citrate","زنك","الزنك"],
    en:{
      name:"Zinc",
      strap:"Often obtainable from food. Supplements add a measured dose but chronic high intake can disturb copper balance.",
      what:"An essential mineral required for hundreds of enzymes and for normal immune, growth, DNA/protein and wound-healing functions.",
      why:"Adequacy matters; more is not automatically better.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is 11 mg/day for men and 8 mg/day for women. Adult UL is 40 mg/day from all sources unless higher intakes are medically supervised.",
      food:[["Oysters","Very rich source"],["Beef","Rich source"],["Beans/nuts/whole grains","Contain zinc; phytate lowers bioavailability"]],
      foodVsShelf:{
        canFood:"Yes — often.",
        reality:"Animal foods can provide highly bioavailable zinc; plant foods contribute too but phytate can reduce absorption.",
        shelf:"A supplement is convenient and measurable, but repeated high doses create a copper-deficiency risk.",
        verdict:"Food-first for most routine nutrition questions."
      },
      absorption:{
        helps:["Animal-food zinc is generally more bioavailable than zinc from high-phytate foods."],
        reduces:["Phytate reduces zinc bioavailability."],
        separate:["Quinolone/tetracycline antibiotics should be taken at least 2 hours before or 4–6 hours after zinc. Penicillamine should be separated by at least 1 hour."],
        meal:"Food may improve stomach tolerance; high-phytate meals can reduce absorption.",
        clock:"No universal morning/night advantage."
      },
      forms:"Different zinc salts exist; elemental zinc dose and evidence for the use matter more than fashionable form names.",
      evidence:"Strong for essential nutritional role; indication-specific for supplementation."
    },
    sources:[
      source("NIH ODS — Zinc","https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/")
    ]
  },

  {
    slug:"copper",
    researchKey:"copper",
    category:"minerals",
    names:["copper","copper gluconate","copper bisglycinate","نحاس","النحاس"],
    en:{
      name:"Copper",
      strap:"Usually a food-first mineral. High-dose zinc is one of the clearest reasons to think about copper balance.",
      what:"An essential trace mineral used in iron metabolism, energy-related enzymes, connective-tissue enzymes and antioxidant systems.",
      why:"Deficiency is uncommon in healthy people but can occur in specific contexts, including excessive zinc exposure.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is 900 mcg/day.",
      food:[["Shellfish","Rich source"],["Organ meats","Rich source"],["Seeds, nuts and chocolate","Useful sources"]],
      foodVsShelf:{
        canFood:"Yes — usually.",
        reality:"A varied diet can provide copper without a dedicated supplement.",
        shelf:"Supplementation may be relevant in diagnosed deficiency or specific high-risk contexts.",
        verdict:"Food first; avoid self-correcting zinc/copper balance with high doses."
      },
      absorption:{
        helps:["Adequate dietary intake is usually sufficient."],
        reduces:["High zinc intake can interfere with copper absorption."],
        separate:["If using medically advised zinc and copper supplements, dose design should account for the zinc–copper interaction."],
        meal:"No simple universal food/empty-stomach rule is appropriate.",
        clock:"No meaningful morning/night rule."
      },
      forms:"Food sources are usually preferred; supplement forms vary.",
      evidence:"Strong for essential nutritional role."
    },
    sources:[
      source("NIH ODS — Copper","https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/")
    ]
  },

  {
    slug:"selenium",
    researchKey:"selenium",
    category:"minerals",
    names:["selenium","selenomethionine","سيلينيوم","السيلينيوم"],
    en:{
      name:"Selenium",
      strap:"A trace nutrient where 'more' can quickly become a bad idea.",
      what:"An essential trace element incorporated into selenoproteins involved in antioxidant and thyroid-related functions.",
      why:"Adequate selenium is important, but high chronic intake can cause selenosis.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is 55 mcg/day. Do not treat high-dose selenium as a generic longevity strategy.",
      food:[["Brazil nuts","Extremely rich but highly variable"],["Seafood","Good source"],["Meat/eggs","Contribute"]],
      foodVsShelf:{
        canFood:"Yes — often very easily.",
        reality:"Brazil nuts can contain very high and variable selenium, so 'more nuts' is not a precise dosing strategy.",
        shelf:"A supplement provides a measured dose but also makes overconsumption easier.",
        verdict:"Food-first and dose-aware."
      },
      absorption:{
        helps:["Selenium is generally well absorbed from food; form affects metabolism."],
        reduces:["No simple meal inhibitor is important enough for a universal A7i rule here."],
        separate:["Medication/clinical contexts should be reviewed individually."],
        meal:"Flexible for routine nutritional use.",
        clock:"No proven morning/night advantage."
      },
      forms:"Selenomethionine and inorganic selenium forms differ; dose matters more than marketing.",
      evidence:"Strong for essential nutritional role."
    },
    sources:[
      source("NIH ODS — Selenium","https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/")
    ]
  },

  {
    slug:"vitamin-d3",
    researchKey:"vitaminD3",
    category:"vitamins",
    names:["vitamin d","vitamin d3","d3","cholecalciferol","فيتامين د","فيتامين د3"],
    en:{
      name:"Vitamin D3",
      strap:"Food contributes, but supplementation can be useful when intake/status is inadequate. Meal context matters more than a morning/night ritual.",
      what:"A fat-soluble vitamin involved in calcium and phosphate regulation and normal bone physiology.",
      why:"Vitamin D is essential, but supplementation decisions should reflect diet, sun exposure, life stage and clinical context.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is 15 mcg (600 IU)/day through age 70 and 20 mcg (800 IU)/day after age 70.",
      food:[["Fatty fish","Best natural source"],["Egg yolk","Small amount"],["Fortified milk/alternatives","Often important dietary source"]],
      foodVsShelf:{
        canFood:"Sometimes — but consistently reaching intake from food alone can be difficult.",
        reality:"Few foods naturally contain much vitamin D; fortified foods often contribute substantially.",
        shelf:"A supplement gives a precise dose when supplementation is actually appropriate.",
        verdict:"Food + sun exposure + status determine the real answer."
      },
      absorption:{
        helps:["Because vitamin D is fat-soluble, taking it with a meal containing fat can improve absorption."],
        reduces:["Fat-malabsorption conditions can reduce vitamin-D absorption."],
        separate:["Medication interactions exist; regular medicine users should check with a healthcare professional."],
        meal:"Take with a meal containing some fat.",
        clock:"No established universal morning-versus-night winner."
      },
      forms:"D3 (cholecalciferol) and D2 (ergocalciferol) are the main forms; D3 often raises 25(OH)D more effectively.",
      evidence:"Strong for bone/calcium physiology; other outcomes are outcome-specific."
    },
    sources:[
      source("NIH ODS — Vitamin D","https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/")
    ]
  },

  {
    slug:"vitamin-c",
    researchKey:"vitaminC",
    category:"vitamins",
    names:["vitamin c","ascorbic acid","فيتامين سي","فيتامين ج"],
    en:{
      name:"Vitamin C",
      strap:"One of the easiest nutrients to obtain from food for many people.",
      what:"A water-soluble vitamin required for collagen synthesis and other normal biochemical functions.",
      why:"Deficiency prevention and essential physiology are well established; high-dose claims require separate evidence.",
      targetLabel:"Dietary reference intake",
      target:"Adult RDA is 75 mg/day for women and 90 mg/day for men, with additional requirements in some circumstances.",
      food:[["Red sweet pepper · ½ cup","~95 mg"],["Orange · 1 medium","~70 mg"],["Kiwifruit · 1 medium","~64 mg"]],
      foodVsShelf:{
        canFood:"Yes — very often.",
        reality:"A modest serving of common fruit/vegetables can meet most or all of the adult RDA.",
        shelf:"A tablet is convenient and measured, but many people do not need a supplement simply to reach the RDA.",
        verdict:"Strong food-first example."
      },
      absorption:{
        helps:["Vitamin C can enhance non-haem iron absorption."],
        reduces:["Fractional vitamin-C absorption falls as oral doses become very large."],
        separate:["No universal supplement-separation rule is appropriate for healthy users; clinical situations can differ."],
        meal:"Flexible. Pairing vitamin-C-rich food with plant iron can be useful when iron absorption is the goal.",
        clock:"No meaningful morning/night requirement."
      },
      forms:"Ascorbic acid is the standard form; most people do not need a premium form.",
      evidence:"Strong for essential nutritional role."
    },
    sources:[
      source("NIH ODS — Vitamin C","https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/")
    ]
  },

  {
    slug:"collagen-peptides",
    researchKey:null,
    category:"amino-acids",
    names:["collagen","collagen peptides","hydrolysed collagen","hydrolyzed collagen","gelatin","كولاجين"],
    en:{
      name:"Collagen peptides",
      strap:"Food can supply collagen proteins. Supplements mainly buy a standardised peptide dose and convenience.",
      what:"Collagen is a structural protein. Hydrolysed collagen supplements contain smaller collagen-derived peptides.",
      why:"Trials have studied collagen peptides for skin, joint and exercise-related outcomes, but evidence quality differs by outcome.",
      targetLabel:"Research dose — not RDA",
      target:"There is no official daily collagen requirement. Trials commonly use defined gram-level doses that depend on product and outcome.",
      food:[["Bone broth","Collagen/gelatin content varies"],["Chicken/fish skin","Natural collagen source"],["Gelatin","Collagen-derived protein"]],
      foodVsShelf:{
        canFood:"Yes — but not with a precise peptide dose.",
        reality:"Home recipes vary by cut, cooking method, dilution and serving size.",
        shelf:"Hydrolysed collagen makes it easy to reproduce a measured gram-level amount used in research.",
        verdict:"Food works as food; a supplement is mainly a precision + convenience tool."
      },
      absorption:{
        helps:["Adequate overall protein and vitamin C are relevant to normal collagen synthesis."],
        reduces:["There is no useful universal 'absorption blocker' rule to show consumers."],
        separate:["No standard medication-separation rule for collagen peptides."],
        meal:"Can be taken with or without meals for most users.",
        clock:"No established universal morning/night advantage."
      },
      forms:"Hydrolysed collagen peptides, gelatin and collagen-rich foods are not identical formats.",
      evidence:"Mixed / outcome-specific."
    },
    sources:[
      source("Systematic review — oral collagen and skin","https://pubmed.ncbi.nlm.nih.gov/30681787/","peer-reviewed"),
      source("Systematic review — collagen + exercise","https://pubmed.ncbi.nlm.nih.gov/34491424/","peer-reviewed")
    ]
  },

  {
    slug:"creatine",
    researchKey:null,
    category:"amino-acids",
    names:["creatine","creatine monohydrate","كرياتين","الكرياتين"],
    en:{
      name:"Creatine",
      strap:"Food contains creatine, but reaching common research intakes through food alone can be impractical.",
      what:"A naturally occurring compound involved in rapid cellular energy recycling. It is synthesised from amino acids but is not itself an amino acid.",
      why:"Creatine monohydrate has a large evidence base for high-intensity exercise performance and training adaptation.",
      targetLabel:"Common research intake — not RDA",
      target:"There is no RDA. Many research protocols use 3–5 g/day after muscle stores are saturated.",
      food:[["Beef / salmon · ~450 g","~1–2 g creatine"],["Mixed omnivorous diet","Often ~1–2 g/day"],["Plant foods","Trace amounts"]],
      foodVsShelf:{
        canFood:"Yes — but the research dose can require a large amount of meat/fish.",
        reality:"Reproducing 3–5 g/day from food can be cumbersome.",
        shelf:"Creatine monohydrate powder provides a precise amount without a very large food volume.",
        verdict:"Clear example where supplement format can be more practical than food for a studied dose."
      },
      absorption:{
        helps:["Creatine monohydrate is the reference form because it has the deepest evidence base."],
        reduces:["No important everyday food inhibitor requires a universal warning."],
        separate:["No universal supplement-separation rule for healthy adults."],
        meal:"Flexible.",
        clock:"Pre- versus post-workout superiority is not established; consistency matters more."
      },
      forms:"Monohydrate is the most researched. Novel forms have not consistently shown superior outcomes.",
      evidence:"Strong for defined exercise/performance outcomes."
    },
    sources:[
      source("ISSN position stand — creatine","https://pmc.ncbi.nlm.nih.gov/articles/PMC5469049/","peer-reviewed"),
      source("Creatine timing review","https://pubmed.ncbi.nlm.nih.gov/34445003/","peer-reviewed")
    ]
  },

  {
    slug:"probiotics",
    researchKey:null,
    category:"probiotic",
    names:["probiotic","probiotics","بروبيوتيك","البروبيوتيك"],
    en:{
      name:"Probiotics",
      strap:"Fermented food and a clinically studied probiotic product are not automatically interchangeable.",
      what:"Live microorganisms that can confer a health benefit when administered in adequate amounts. Strain identity matters.",
      why:"Evidence for one strain cannot automatically be transferred to a different strain or blend.",
      targetLabel:"No universal daily dose",
      target:"CFU count alone is not enough. Strain, dose, viability, formulation and the outcome studied all matter.",
      food:[["Yoghurt with live cultures","Organisms vary"],["Kefir","Community varies"],["Other fermented foods","Not automatically a probiotic"]],
      foodVsShelf:{
        canFood:"Food can provide live microbes — but not necessarily the strain and dose studied in a trial.",
        reality:"Fermented foods are valuable foods, but microbial composition may be variable or clinically uncharacterised.",
        shelf:"A good product can specify strain identity, CFU through shelf life and the formulation used in research.",
        verdict:"The supplement advantage is standardisation, not proof that fermented food is inferior."
      },
      absorption:{
        helps:["Survival depends on organism, strain, matrix and delivery system."],
        reduces:["There is no single food interaction rule across all probiotics."],
        separate:["Medication/immunocompromised contexts need individual advice."],
        meal:"Product-specific. Some formulations may perform differently with meals.",
        clock:"No universal morning/night rule."
      },
      forms:"Single-strain, multi-strain, spores and probiotic yeasts should be treated separately.",
      evidence:"Strain + outcome specific."
    },
    sources:[
      source("NIH ODS — Probiotics","https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/")
    ]
  },
];

export const hiddenIndex = [
  ["enzymes",["Lactase","Protease","Lipase","Amylase","Alpha-galactosidase","Bromelain","Papain"]],
  ["herbal-extraction",["Ashwagandha","Curcumin","Rhodiola rosea","Panax ginseng","Saffron extract","Boswellia","Milk thistle / silymarin","Berberine","Ginger extract","Green tea extract"]],
  ["fatty-acid-lipids",["Omega-3","EPA","DHA","ALA","Fish oil","Krill oil","Phosphatidylserine","MCT oil","GLA"]],
  ["postbiotics",["Butyrate","Tributyrin","Heat-killed probiotic preparations","Microbial lysates","Yeast fermentates"]],
  ["longevity-cellular-health",["CoQ10","Ubiquinol","Alpha-lipoic acid","Urolithin A","Spermidine","Ergothioneine","PQQ","Nicotinamide riboside","NMN","Taurine"]],
  ["fungi-adaptogens",["Lion's mane","Reishi","Cordyceps","Chaga","Turkey tail","Shiitake extract","Mushroom beta-glucans"]],
  ["minerals",["Magnesium","Calcium","Iron","Zinc","Copper","Selenium","Iodine","Potassium","Sodium","Phosphorus","Manganese","Chromium","Molybdenum","Boron"]],
  ["vitamins",["Vitamin A","Vitamin C","Vitamin D2","Vitamin D3","Vitamin E","Vitamin K1","Vitamin K2","Vitamin B1","Vitamin B2","Vitamin B3","Vitamin B5","Vitamin B6","Biotin","Folate","Vitamin B12"]],
  ["essentials",["Essential amino acids (EAA)","Leucine","Isoleucine","Valine","Lysine","Methionine","Threonine","Tryptophan","Phenylalanine","Histidine","Choline","ALA","Linoleic acid"]],
  ["amino-acids",["Leucine","Isoleucine","Valine","Glycine","Lysine","Methionine","Threonine","Tryptophan","Histidine","Phenylalanine","Arginine","Citrulline","Glutamine","Tyrosine","Cysteine","NAC","Collagen peptides","Creatine","BPC-157"]],
  ["prebiotic",["Inulin","FOS","GOS","Resistant starch","PHGG","Acacia fibre","Beta-glucan"]],
  ["probiotic",["Lacticaseibacillus rhamnosus GG","Bifidobacterium animalis BB-12","Saccharomyces boulardii CNCM I-745","Limosilactobacillus reuteri DSM 17938","Bifidobacterium longum 35624","Akkermansia muciniphila","Bacillus coagulans","Bacillus subtilis"]],
].flatMap(([category,items])=>items.map(name=>({
  name,
  category,
  status:name==="BPC-157"?"research-only":"indexed",
  note:name==="BPC-157"?"Research peptide; not a conventional dietary supplement.":null
})));

export function getCategory(slug){return categories.find(c=>c.slug===slug)}
export function getReviewed(slug){return reviewed.find(i=>i.slug===slug)}

export function searchKnowledge(query,category){
  const q=(query||"").trim().toLowerCase();
  if(!q)return [];
  const all=[
    ...reviewed.map(r=>({name:r.en.name,category:r.category,slug:r.slug,status:"reviewed",aliases:[...r.names,...(aliases[r.slug]||[])]})),
    ...hiddenIndex
  ];
  const seen=new Set();
  const out=[];
  const push=(item,score)=>{
    const key=`${item.category}:${item.name.toLowerCase()}`;
    if(seen.has(key))return;
    seen.add(key);out.push({...item,score});
  };
  for(const item of all){
    if(category&&item.category!==category)continue;
    const hay=[item.name,...(item.aliases||[])].map(x=>x.toLowerCase());
    if(hay.some(h=>h===q))push(item,0);
    else if(hay.some(h=>h.startsWith(q)))push(item,1);
    else if(hay.some(h=>h.includes(q)))push(item,2);
  }
  if(out.length===0&&q.length>=3){
    for(const item of all){
      if(category&&item.category!==category)continue;
      const hay=[item.name,...(item.aliases||[])].map(x=>x.toLowerCase());
      const best=Math.min(...hay.map(h=>editDistance(q,h.slice(0,q.length+2))));
      if(best<=Math.max(1,Math.floor(q.length/4)))push(item,3+best);
    }
  }
  return out.sort((a,b)=>a.score-b.score||(a.status==="reviewed"?-1:1)).slice(0,10);
}

export function editDistance(a,b){
  const m=a.length,n=b.length;
  if(!m)return n;if(!n)return m;
  let prev=Array.from({length:n+1},(_,i)=>i);
  for(let i=1;i<=m;i++){
    const cur=[i];
    for(let j=1;j<=n;j++){
      cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
    }
    prev=cur;
  }
  return prev[n];
}
