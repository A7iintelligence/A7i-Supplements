// PAIRINGS
// The supplied Mineral Fix summary was used to decide WHICH relationships are
// worth surfacing. Every published entry below is stated at the strength the
// wider evidence supports, not the strength the book asserts.
//
// strength:
//   established — well documented, safe to state plainly
//   plausible   — sound mechanism, clinical benefit less settled
//   caution     — an interaction to actively avoid or separate
//
// Book-only claims that are NOT published here (kept in data/research.js):
//   copper / vitamin C 75-minute window, selenium 300-400 mcg "optimal",
//   magnesium 400-600 mg "optimal", zinc 20-80 mg "optimal".

export const strengthMeta = {
  established: { en: "Well documented", ar: "موثّق جيداً", tone: "good" },
  plausible:   { en: "Plausible, unsettled", ar: "معقول، غير محسوم", tone: "info" },
  caution:     { en: "Separate these", ar: "افصل بينهما", tone: "warn" },
};

const P = (en, ar) => ({ en, ar });
const S = (label, url) => ({ label, url });

const NIH = {
  mg:  S("NIH ODS — Magnesium", "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"),
  ca:  S("NIH ODS — Calcium", "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"),
  fe:  S("NIH ODS — Iron", "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"),
  zn:  S("NIH ODS — Zinc", "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/"),
  cu:  S("NIH ODS — Copper", "https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/"),
  se:  S("NIH ODS — Selenium", "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/"),
  d:   S("NIH ODS — Vitamin D", "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"),
  c:   S("NIH ODS — Vitamin C", "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"),
  pro: S("NIH ODS — Probiotics", "https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/"),
};

// A stack is only defined where a real combination exists. Ingredients without
// one fall back to the two-column layout. `dim` marks a component that is
// included on mechanism rather than outcome.
export const stacks = {
  "vitamin-d3": {
    items: [
      { name: "Vitamin D3", slug: "vitamin-d3" },
      { name: "Magnesium", slug: "magnesium" },
      { name: "K2", slug: null, dim: true },
    ],
    tag: P("K2 optional", "ك2 اختياري"),
  },
  magnesium: {
    items: [
      { name: "Magnesium", slug: "magnesium" },
      { name: "Vitamin D3", slug: "vitamin-d3", dim: true },
    ],
    tag: P("If you take vitamin D", "إذا كنت تأخذ فيتامين د"),
  },
  iron: {
    items: [
      { name: "Iron", slug: "iron" },
      { name: "Vitamin C", slug: "vitamin-c" },
    ],
    tag: P("Away from calcium and tea", "بعيداً عن الكالسيوم والشاي"),
  },
  zinc: {
    items: [
      { name: "Zinc", slug: "zinc" },
      { name: "Copper", slug: "copper" },
    ],
    tag: P("If supplementing long term", "إذا كنت تأخذه لفترة طويلة"),
  },
  calcium: {
    items: [
      { name: "Calcium", slug: "calcium" },
      { name: "Vitamin D3", slug: "vitamin-d3" },
      { name: "K2", slug: "vitamin-k2", dim: true },
    ],
    tag: P("500 mg or less at a time", "500 ملغ أو أقل في المرة"),
  },
  "vitamin-c": {
    items: [
      { name: "Vitamin C", slug: "vitamin-c" },
      { name: "Plant iron", slug: "iron" },
    ],
    tag: P("Improves iron from plants", "يرفع امتصاص الحديد النباتي"),
  },
  "collagen-peptides": {
    items: [
      { name: "Collagen peptides", slug: "collagen-peptides" },
      { name: "Vitamin C", slug: "vitamin-c", dim: true },
      { name: "Copper", slug: "copper", dim: true },
    ],
    tag: P("Both on mechanism only", "الاثنان على أساس الآلية فقط"),
  },
  copper: {
    items: [{ name: "Copper", slug: "copper" }],
    tag: P("Food usually covers it", "الغذاء يغطيه عادة"),
  },
  selenium: {
    items: [{ name: "Selenium", slug: "selenium" }],
    tag: P("Dose matters more than pairing", "الجرعة أهم من الاقتران"),
  },
  creatine: {
    items: [{ name: "Creatine monohydrate", slug: "creatine" }],
    tag: P("Nothing to pair it with", "لا شيء يُقرن به"),
  },
  potassium: { items:[{name:"Potassium",slug:"potassium"},{name:"Magnesium",slug:"magnesium"}], tag:P("Fix magnesium too","صحّح المغنيسيوم أيضاً") },
  iodine: { items:[{name:"Iodine",slug:"iodine"},{name:"Selenium",slug:"selenium"}], tag:P("Both needed for thyroid","الاثنان لازمان للغدة") },
  phosphorus: { items:[{name:"Phosphorus",slug:"phosphorus"}], tag:P("Food covers it","الغذاء يغطيه") },
  manganese: { items:[{name:"Manganese",slug:"manganese"}], tag:P("Watch total, not intake","راقب المجموع لا المدخول") },
  chromium: { items:[{name:"Chromium",slug:"chromium"},{name:"Vitamin C",slug:"vitamin-c",dim:true}], tag:P("C may aid uptake","فيتامين سي قد يساعد") },
  molybdenum: { items:[{name:"Molybdenum",slug:"molybdenum"}], tag:P("Food covers it","الغذاء يغطيه") },
  boron: { items:[{name:"Boron",slug:"boron"}], tag:P("Food only","من الغذاء فقط") },
  glycine: { items:[{name:"Glycine",slug:"glycine"},{name:"Collagen peptides",slug:"collagen-peptides",dim:true}], tag:P("Overlapping sources","مصادر متداخلة") },
  taurine: { items:[{name:"Taurine",slug:"taurine"}], tag:P("Nothing to pair it with","لا شيء يُقرن به") },
  nac: { items:[{name:"NAC",slug:"nac"}], tag:P("Treat as a medicine","تعامل معه كدواء") },
  coq10: { items:[{name:"CoQ10",slug:"coq10"},{name:"A fatty meal",slug:null}], tag:P("Fat-soluble","ذائب في الدهون") },
  "omega-3": { items:[{name:"Omega-3",slug:"omega-3"},{name:"A fatty meal",slug:null}], tag:P("Fat-soluble","ذائب في الدهون") },
  "vitamin-b12": { items:[{name:"Vitamin B12",slug:"vitamin-b12"}], tag:P("Test, do not guess","افحص ولا تخمّن") },
  sodium: { items:[{name:"Sodium",slug:"sodium"},{name:"Potassium",slug:"potassium"}], tag:P("The ratio matters","النسبة هي المهمة") },
  msm: { items:[{name:"MSM",slug:"msm"}], tag:P("Nothing to pair it with","لا شيء يُقرن به") },
  "alpha-lipoic-acid": { items:[{name:"Alpha lipoic acid",slug:"alpha-lipoic-acid"}], tag:P("Often taken away from food","يؤخذ غالباً بعيداً عن الطعام") },
  "vitamin-k2": { items:[{name:"Vitamin K2",slug:"vitamin-k2"},{name:"Vitamin D3",slug:"vitamin-d3",dim:true}], tag:P("Often sold together","يُباعان معاً غالباً") },
  glucosamine: { items:[{name:"Glucosamine",slug:"glucosamine"},{name:"Chondroitin",slug:null,dim:true}], tag:P("Usually sold together","يُباعان معاً عادة") },
  probiotics: {
    items: [
      { name: "A named strain", slug: "probiotics" },
      { name: "Fibre", slug: null, dim: true },
    ],
    tag: P("Strain decides everything", "السلالة هي الفيصل"),
  },
};
export const pairings = {
  "vitamin-d3": {
    pairWith: [
      { with: "Magnesium", slug: "magnesium", strength: "established", source: NIH.mg,
        why: P("Magnesium is a required cofactor for the enzymes that convert vitamin D into its active form. Adequate magnesium status matters for vitamin D to work normally.",
               "المغنيسيوم عامل مساعد لازم للإنزيمات التي تحوّل فيتامين د إلى صورته الفعالة. كفاية المغنيسيوم مهمة لعمل فيتامين د بشكل طبيعي.") },
      { with: "Dietary fat", slug: null, strength: "established", source: NIH.d,
        why: P("Vitamin D is fat-soluble. Taking it with a meal containing some fat improves absorption.",
               "فيتامين د ذائب في الدهون. تناوله مع وجبة تحتوي بعض الدهن يحسّن الامتصاص.") },
      { with: "Vitamin K2", slug: null, strength: "plausible", source: null,
        why: P("K2 is involved in directing calcium into bone. The pairing is mechanistically reasonable, but human outcome evidence for taking them together is not settled.",
               "يشارك ك2 في توجيه الكالسيوم إلى العظم. الاقتران معقول آلياً، لكن الدليل البشري على تناولهما معاً غير محسوم.") },
    ],
    keepApart: [
      { from: "Very high doses without monitoring", slug: null, source: NIH.d, strength: "caution",
        why: P("High-dose vitamin D increases calcium absorption and should be monitored by a clinician rather than self-escalated.",
               "الجرعات العالية ترفع امتصاص الكالسيوم وينبغي أن يتابعها طبيب بدل رفعها ذاتياً.") },
    ],
  },

  magnesium: {
    pairWith: [
      { with: "Divided doses", slug: null, strength: "established", source: NIH.mg,
        why: P("Smaller amounts spread through the day are generally better tolerated than one large dose.",
               "الكميات الأصغر الموزعة على اليوم أفضل تحملاً عادة من جرعة واحدة كبيرة.") },
      { with: "Vitamin D3, if you take it", slug: "vitamin-d3", strength: "established", source: NIH.d,
        why: P("The dependency runs one way: vitamin D needs magnesium to be metabolised, not the reverse. So if you supplement vitamin D, magnesium status is worth attending to.",
               "الاعتماد باتجاه واحد: فيتامين د يحتاج المغنيسيوم لأيضه، وليس العكس. لذا إن كنت تتناول فيتامين د، فحالة المغنيسيوم تستحق الانتباه.") },
    ],
    keepApart: [
      { from: "Quinolone and tetracycline antibiotics", slug: null, source: NIH.mg, strength: "caution",
        why: P("Magnesium binds these antibiotics and reduces their absorption. Follow the medicine label for spacing.",
               "المغنيسيوم يرتبط بهذه المضادات ويقلل امتصاصها. اتبع نشرة الدواء في الفصل بينهما.") },
      { from: "Bisphosphonates", slug: null, source: NIH.mg, strength: "caution",
        why: P("Take well apart from bone medicines, which are absorbed poorly in the presence of minerals.",
               "افصله جيداً عن أدوية العظام، فامتصاصها ضعيف بوجود المعادن.") },
    ],
  },

  iron: {
    pairWith: [
      { with: "Vitamin C", slug: "vitamin-c", strength: "established", source: NIH.fe,
        why: P("Vitamin C markedly improves absorption of non-haem iron from plant foods. A citrus source with a bean or lentil meal is the practical version.",
               "فيتامين سي يحسّن بوضوح امتصاص الحديد غير الهيمي من النبات. الصورة العملية: مصدر حمضي مع وجبة بقوليات.") },
      { with: "Meat, poultry or seafood", slug: null, strength: "established", source: NIH.fe,
        why: P("Animal protein in the same meal improves absorption of non-haem iron.",
               "البروتين الحيواني في الوجبة نفسها يحسّن امتصاص الحديد غير الهيمي.") },
    ],
    keepApart: [
      { from: "Calcium", slug: "calcium", source: NIH.fe, strength: "caution",
        why: P("Calcium can reduce iron bioavailability in the same meal. Separate a calcium supplement from an iron one.",
               "الكالسيوم قد يقلل توافر الحديد في الوجبة نفسها. افصل مكمل الكالسيوم عن مكمل الحديد.") },
      { from: "Tea and coffee", slug: null, source: NIH.fe, strength: "caution",
        why: P("Polyphenols bind iron. Drinking them with an iron-rich meal reduces how much you absorb.",
               "البوليفينولات ترتبط بالحديد. شربها مع وجبة غنية بالحديد يقلل الامتصاص.") },
      { from: "Zinc supplements", slug: "zinc", source: NIH.fe, strength: "caution",
        why: P("High-dose iron can reduce zinc absorption when taken together.",
               "جرعات الحديد العالية قد تقلل امتصاص الزنك عند تناولهما معاً.") },
    ],
  },

  zinc: {
    pairWith: [
      { with: "Animal-protein foods", slug: null, strength: "established", source: NIH.zn,
        why: P("Zinc from meat and seafood is more bioavailable than zinc from high-phytate plant foods.",
               "الزنك من اللحوم والمأكولات البحرية أعلى توافراً من الزنك في الأطعمة النباتية عالية الفيتات.") },
      { with: "Copper, if supplementing long term", slug: "copper", strength: "established", source: NIH.zn,
        why: P("Sustained high-dose zinc lowers copper status. Long-term regimens are usually designed with copper in mind.",
               "الزنك العالي المستمر يخفض حالة النحاس. الأنظمة طويلة الأمد تُصمم عادة مع مراعاة النحاس.") },
    ],
    keepApart: [
      { from: "Quinolone and tetracycline antibiotics", slug: null, source: NIH.zn, strength: "caution",
        why: P("Take these antibiotics at least 2 hours before, or 4 to 6 hours after, zinc.",
               "تناول هذه المضادات قبل الزنك بساعتين على الأقل أو بعده بأربع إلى ست ساعات.") },
      { from: "Iron supplements", slug: "iron", source: NIH.zn, strength: "caution",
        why: P("High-dose iron taken at the same time reduces zinc absorption. Separate them rather than taking both with one meal.",
               "جرعات الحديد العالية في الوقت نفسه تقلل امتصاص الزنك. افصل بينهما بدل تناولهما مع وجبة واحدة.") },
      { from: "Calcium supplements and high-phytate meals", slug: "calcium", source: NIH.zn, strength: "caution",
        why: P("Both reduce how much zinc you take up from that meal.",
               "كلاهما يقلل ما تمتصه من الزنك في تلك الوجبة.") },
    ],
  },

  calcium: {
    pairWith: [
      { with: "Vitamin D3", slug: "vitamin-d3", strength: "established", source: NIH.d,
        why: P("Vitamin D is required for normal calcium absorption.",
               "فيتامين د لازم لامتصاص الكالسيوم الطبيعي.") },
      { with: "Vitamin K2", slug: "vitamin-k2", strength: "plausible", source: null,
        why: P("K2 activates the proteins that direct calcium into bone rather than soft tissue. The mechanism is sound. Trials showing that adding K2 to calcium changes fracture or artery outcomes are not there.",
               "ك2 ينشّط البروتينات التي توجّه الكالسيوم إلى العظم بدل الأنسجة الرخوة. الآلية سليمة، لكن التجارب التي تُظهر أن إضافة ك2 للكالسيوم تغيّر نتائج الكسور أو الشرايين غير متوفرة.") },
      { with: "Doses of 500 mg or less", slug: null, strength: "established", source: NIH.ca,
        why: P("Absorption efficiency is highest at smaller single doses. Splitting a large daily amount is more effective than one sitting.",
               "كفاءة الامتصاص أعلى في الجرعات المفردة الأصغر. تقسيم الكمية اليومية أفضل من جرعة واحدة.") },
    ],
    keepApart: [
      { from: "Levothyroxine", slug: null, source: NIH.ca, strength: "caution",
        why: P("Calcium interferes with thyroid hormone absorption. Separate calcium carbonate from levothyroxine by at least four hours.",
               "الكالسيوم يعيق امتصاص هرمون الغدة. افصل كربونات الكالسيوم عن الليفوثيروكسين أربع ساعات على الأقل.") },
      { from: "Iron and zinc supplements", slug: "iron", source: NIH.ca, strength: "caution",
        why: P("Calcium reduces uptake of both when taken in the same meal.",
               "الكالسيوم يقلل امتصاص الاثنين عند تناولهما في الوجبة نفسها.") },
      { from: "Quinolone and tetracycline antibiotics", slug: null, source: NIH.ca, strength: "caution",
        why: P("Calcium binds these antibiotics. Follow the spacing on the medicine label.",
               "الكالسيوم يرتبط بهذه المضادات. اتبع الفصل الزمني في نشرة الدواء.") },
    ],
  },

  copper: {
    pairWith: [
      { with: "A varied diet", slug: null, strength: "established", source: NIH.cu,
        why: P("Shellfish, organ meats, seeds, nuts and cocoa cover copper without a dedicated supplement for most people.",
               "المحاريات واللحوم العضوية والبذور والمكسرات والكاكاو تغطي النحاس دون مكمل مخصص لمعظم الناس.") },
    ],
    keepApart: [
      { from: "High-dose zinc", slug: "zinc", source: NIH.cu, strength: "caution",
        why: P("Zinc is the main antagonist of copper absorption and sustained high intake is a recognised cause of copper deficiency.",
               "الزنك المضاد الرئيس لامتصاص النحاس، والتناول العالي المستمر سبب معروف لنقص النحاس.") },
    ],
  },

  "vitamin-c": {
    pairWith: [
      { with: "Plant iron sources", slug: "iron", strength: "established", source: NIH.c,
        why: P("Pairing vitamin C with beans, lentils or leafy greens improves how much iron you absorb from them.",
               "اقتران فيتامين سي بالبقوليات أو الورقيات يحسّن امتصاص الحديد منها.") },
    ],
    keepApart: [
      { from: "Very large single doses", slug: null, source: NIH.c, strength: "caution",
        why: P("Fractional absorption falls as the dose rises, so very high single amounts return less than they suggest.",
               "نسبة الامتصاص تنخفض كلما ارتفعت الجرعة، فالكميات المفردة الكبيرة تعطي أقل مما توحي.") },
    ],
  },

  selenium: {
    pairWith: [
      { with: "Seafood twice a week", slug: null, strength: "established", source: NIH.se,
        why: P("A practical food route that also supplies iodine and omega-3s.",
               "طريق غذائي عملي يوفر أيضاً اليود وأوميغا-3.") },
    ],
    keepApart: [
      { from: "Stacking multiple selenium sources", slug: null, source: NIH.se, strength: "caution",
        why: P("Brazil nuts are extremely rich and highly variable. Combining them with a supplement makes excess easy, and selenium has a narrow safe range.",
               "جوز البرازيل شديد الغنى وشديد التباين. جمعه مع مكمل يسهّل الزيادة، ونطاق أمان السيلينيوم ضيق.") },
    ],
  },

  creatine: {
    pairWith: [
      { with: "Daily consistency", slug: null, strength: "established", source: null,
        why: P("Saturating muscle stores depends on taking it regularly rather than timing it around a session.",
               "تشبّع مخازن العضلات يعتمد على الانتظام اليومي لا على توقيته حول التمرين.") },
    ],
    keepApart: [],
  },

  "collagen-peptides": {
    pairWith: [
      { with: "Adequate total protein", slug: null, strength: "established", source: null,
        why: P("Collagen peptides are not a complete protein. They work alongside sufficient overall protein intake, not instead of it.",
               "ببتيدات الكولاجين ليست بروتيناً كاملاً. تعمل إلى جانب بروتين كافٍ إجمالاً لا بديلاً عنه.") },
      { with: "Copper", slug: "copper", strength: "plausible", source: NIH.cu,
        why: P("Copper is required by lysyl oxidase, the enzyme that cross-links collagen and elastin. Adequate copper matters for normal collagen formation. Whether adding copper to a collagen supplement changes any outcome has not been shown.",
               "النحاس لازم لإنزيم ليسيل أوكسيديز الذي يربط الكولاجين والإيلاستين. كفاية النحاس مهمة لتكوين الكولاجين الطبيعي. أما أن إضافة النحاس إلى مكمل الكولاجين تغيّر أي نتيجة فلم يثبت.") },
      { with: "Vitamin C", slug: "vitamin-c", strength: "plausible", source: null,
        why: P("Vitamin C is required for normal collagen synthesis in the body. Whether pairing them in a supplement improves outcomes is not established.",
               "فيتامين سي لازم لتخليق الكولاجين طبيعياً في الجسم. أما تحسّن النتائج عند جمعهما في مكمل فغير مثبت.") },
    ],
    keepApart: [],
  },

  potassium: {
    pairWith: [
      { with: "Magnesium", slug: "magnesium", strength: "established", source: NIH.mg,
        why: P("Low magnesium makes it hard to correct low potassium. Clinically the two are usually addressed together.",
               "انخفاض المغنيسيوم يصعّب تصحيح انخفاض البوتاسيوم، وسريرياً يُعالجان معاً عادة.") },
    ],
    keepApart: [
      { from: "Potassium-sparing diuretics and ACE inhibitors", slug: null, source: null, strength: "caution",
        why: P("These raise blood potassium. Adding a supplement on top can push it dangerously high. This needs medical supervision.",
               "ترفع بوتاسيوم الدم، وإضافة مكمل فوقها قد ترفعه لمستوى خطر. يحتاج إشرافاً طبياً.") },
    ],
  },

  iodine: {
    pairWith: [
      { with: "Selenium", slug: "selenium", strength: "established", source: NIH.se,
        why: P("The enzymes that convert thyroid hormone are selenium-dependent, so thyroid function needs both.",
               "الإنزيمات التي تحوّل هرمون الغدة تعتمد على السيلينيوم، فوظيفة الغدة تحتاج الاثنين.") },
    ],
    keepApart: [
      { from: "Guesswork in thyroid disease", slug: null, source: null, strength: "caution",
        why: P("Both too little and too much iodine disturb the thyroid. If you have thyroid disease or take levothyroxine, changes belong with your prescriber.",
               "القليل والكثير من اليود كلاهما يربك الغدة. إذا كان لديك مرض بالغدة أو تأخذ ليفوثيروكسين، فالتغييرات تكون مع طبيبك.") },
    ],
  },

  phosphorus: {
    pairWith: [
      { with: "Calcium, as food", slug: "calcium", strength: "established", source: NIH.ca,
        why: P("The two form the mineral structure of bone together. Ordinary diets supply both.",
               "الاثنان يشكلان البنية المعدنية للعظم معاً، والوجبات الاعتيادية توفرهما.") },
    ],
    keepApart: [
      { from: "Phosphate additives", slug: null, source: null, strength: "caution",
        why: P("Additive phosphate in processed food and cola is absorbed more completely than the natural form, and is the usual source of excess.",
               "فوسفات الإضافات في الأطعمة المصنعة والكولا تُمتص أكثر من الشكل الطبيعي، وهي المصدر المعتاد للزيادة.") },
    ],
  },

  manganese: {
    pairWith: [],
    keepApart: [
      { from: "Stacking multivitamins", slug: null, source: null, strength: "caution",
        why: P("Manganese appears in many products at once. The upper limit is reached by accumulation, not by any single dose.",
               "المنغنيز موجود في منتجات كثيرة معاً، والحد الأعلى يُبلغ بالتراكم لا بجرعة واحدة.") },
    ],
  },

  chromium: {
    pairWith: [
      { with: "Vitamin C", slug: "vitamin-c", strength: "plausible", source: NIH.c,
        why: P("Vitamin C taken alongside can raise chromium absorption. Whether that changes any outcome is a separate question.",
               "فيتامين سي معه قد يرفع امتصاص الكروم. أما هل يغيّر ذلك أي نتيجة فسؤال منفصل.") },
    ],
    keepApart: [
      { from: "Insulin and metformin", slug: null, source: null, strength: "caution",
        why: P("Chromium can affect blood glucose. Combining it with glucose-lowering medicines risks hypoglycaemia and needs clinical advice.",
               "الكروم قد يؤثر على سكر الدم، وجمعه مع أدوية خفض السكر يخاطر بهبوط السكر ويحتاج مشورة طبية.") },
      { from: "Levothyroxine", slug: null, source: null, strength: "caution",
        why: P("Chromium picolinate can reduce levothyroxine absorption. Separate them.",
               "بيكولينات الكروم قد تقلل امتصاص الليفوثيروكسين. افصل بينهما.") },
    ],
  },

  molybdenum: {
    pairWith: [],
    keepApart: [
      { from: "High supplemental doses", slug: "copper", source: NIH.cu, strength: "caution",
        why: P("At supplemental extremes molybdenum interferes with copper. Dietary amounts do not.",
               "عند الجرعات المكملة القصوى يتعارض الموليبدينوم مع النحاس، أما الكميات الغذائية فلا.") },
    ],
  },

  boron: {
    pairWith: [],
    keepApart: [
      { from: "High-dose products", slug: null, source: null, strength: "caution",
        why: P("High boron intake can interfere with iodine absorption. There is no established requirement to justify pushing intake up.",
               "المدخول العالي من البورون قد يتعارض مع امتصاص اليود، ولا يوجد احتياج ثابت يبرر رفعه.") },
    ],
  },

  glycine: {
    pairWith: [
      { with: "Collagen peptides", slug: "collagen-peptides", strength: "established", source: null,
        why: P("Collagen is the richest dietary source of glycine, so the two overlap. Taking both is duplication rather than synergy.",
               "الكولاجين أغنى مصدر غذائي بالغلايسين، فالاثنان متداخلان. أخذهما معاً تكرار لا تآزر.") },
    ],
    keepApart: [],
  },

  taurine: { pairWith: [], keepApart: [] },

  nac: {
    pairWith: [],
    keepApart: [
      { from: "Self-directed daily use", slug: null, source: null, strength: "caution",
        why: P("NAC has defined clinical uses and its regulatory status varies by country. Anyone with asthma or on regular medicines should ask a clinician first.",
               "لـ NAC استخدامات سريرية محددة ووضعه التنظيمي يختلف بين الدول. من لديه ربو أو يأخذ أدوية منتظمة يراجع طبيبه أولاً.") },
    ],
  },

  coq10: {
    pairWith: [
      { with: "A meal containing fat", slug: null, strength: "established", source: null,
        why: P("CoQ10 is fat-soluble and absorbed poorly on its own. Food with fat improves it.",
               "كو إنزيم Q10 ذائب في الدهون وامتصاصه ضعيف وحده، والطعام الدهني يحسّنه.") },
    ],
    keepApart: [
      { from: "Warfarin", slug: null, source: null, strength: "caution",
        why: P("CoQ10 may interact with warfarin. Anyone on anticoagulants should ask a clinician before starting it.",
               "قد يتفاعل مع الوارفارين. من يأخذ مميعات الدم يراجع طبيبه قبل البدء.") },
    ],
  },

  "omega-3": {
    pairWith: [
      { with: "A meal containing fat", slug: null, strength: "established", source: null,
        why: P("Absorption improves with a fatty meal, and reflux is less likely.",
               "الامتصاص يتحسن مع وجبة دهنية، ويقل احتمال الارتجاع.") },
    ],
    keepApart: [
      { from: "Anticoagulants and upcoming surgery", slug: null, source: null, strength: "caution",
        why: P("High doses may affect bleeding time. Discuss with a clinician before surgery or alongside blood thinners.",
               "الجرعات العالية قد تؤثر على زمن النزف. ناقش الأمر مع طبيبك قبل الجراحة أو مع مميعات الدم.") },
    ],
  },

  "vitamin-b12": {
    pairWith: [],
    keepApart: [
      { from: "Assuming you need it", slug: null, source: null, strength: "caution",
        why: P("B12 supplements only help people who are low. If you eat animal foods and absorb normally, they do nothing. A blood test settles it.",
               "مكملات ب12 تفيد فقط من مستواه منخفض. إذا كنت تأكل منتجات حيوانية وامتصاصك طبيعي فلن تفيدك. تحليل الدم يحسم الأمر.") },
    ],
  },

  sodium: {
    pairWith: [
      { with: "Potassium", slug: "potassium", strength: "established", source: null,
        why: P("The balance between the two matters more for blood pressure than sodium alone. Most people would benefit from more potassium rather than less salt alone.",
               "التوازن بين الاثنين أهم لضغط الدم من الصوديوم وحده. أكثر الناس يستفيدون من رفع البوتاسيوم لا من خفض الملح فقط.") },
    ],
    keepApart: [
      { from: "Electrolyte products used out of context", slug: null, source: null, strength: "caution",
        why: P("These are designed for endurance sport and heavy heat. Used casually they add sodium most people already have too much of.",
               "صُممت لرياضات التحمل والحرارة الشديدة. استخدامها اعتباطاً يضيف صوديوماً يفيض عن حاجة أكثر الناس.") },
    ],
  },

  msm: { pairWith: [], keepApart: [] },

  "alpha-lipoic-acid": {
    pairWith: [],
    keepApart: [
      { from: "Diabetes medicines", slug: null, source: null, strength: "caution",
        why: P("Alpha lipoic acid can lower blood glucose. Combined with insulin or other glucose-lowering drugs it risks hypoglycaemia.",
               "قد يخفض حمض ألفا ليبويك سكر الدم، وجمعه مع الإنسولين أو أدوية خفض السكر يخاطر بهبوط السكر.") },
    ],
  },

  "vitamin-k2": {
    pairWith: [
      { with: "Vitamin D3", slug: "vitamin-d3", strength: "plausible", source: null,
        why: P("D3 raises calcium absorption and K2 is involved in where that calcium ends up. The pairing is reasonable in theory and commonly sold. Human outcome evidence for the combination is not settled.",
               "د3 يرفع امتصاص الكالسيوم، وك2 يشارك في تحديد وجهته. الاقتران معقول نظرياً ويُباع كثيراً، لكن الدليل البشري على التركيبة غير محسوم.") },
      { with: "A meal containing fat", slug: null, strength: "established", source: null,
        why: P("K2 is fat-soluble, so absorption improves alongside dietary fat.",
               "ك2 ذائب في الدهون، فامتصاصه يتحسن مع دهون الطعام.") },
    ],
    keepApart: [
      { from: "Warfarin", slug: null, source: null, strength: "caution",
        why: P("Vitamin K directly opposes warfarin and alters INR. Anyone on warfarin must not change vitamin K intake without their prescriber. This is the most important thing on this page.",
               "فيتامين ك يعاكس الوارفارين مباشرة ويغيّر INR. من يأخذ الوارفارين يجب ألا يغيّر مدخوله من فيتامين ك دون طبيبه. هذه أهم نقطة في الصفحة.") },
    ],
  },

  glucosamine: {
    pairWith: [
      { with: "Chondroitin", slug: null, strength: "plausible", source: null,
        why: P("The two are usually sold and studied together. Whether the combination outperforms either alone is not settled.",
               "يُباعان ويُدرسان معاً عادة. أما هل تتفوق التركيبة على أي منهما وحده فغير محسوم.") },
    ],
    keepApart: [
      { from: "Warfarin, and shellfish allergy", slug: null, source: null, strength: "caution",
        why: P("Glucosamine may interact with warfarin. Most products are made from shellfish shells, which matters if you have a shellfish allergy.",
               "قد يتفاعل مع الوارفارين. ومعظم المنتجات تُصنع من أصداف المحار، وهذا مهم لمن لديه حساسية من المحار.") },
    ],
  },

  probiotics: {
    pairWith: [
      { with: "Dietary fibre", slug: null, strength: "plausible", source: NIH.pro,
        why: P("Fermentable fibre feeds resident microbes. Reasonable as a general dietary approach, though not a substitute for strain-specific evidence.",
               "الألياف القابلة للتخمر تغذي الميكروبات المقيمة. نهج غذائي معقول، لكنه ليس بديلاً عن دليل خاص بالسلالة.") },
    ],
    keepApart: [
      { from: "Assuming strains are interchangeable", slug: null, source: NIH.pro, strength: "caution",
        why: P("Evidence for one strain does not transfer to another. Match the strain to the outcome studied.",
               "الدليل على سلالة لا ينتقل إلى أخرى. طابق السلالة مع النتيجة المدروسة.") },
    ],
  },
};

export function getStack(slug) {
  return stacks[slug] || null;
}

export function getPairings(slug) {
  return pairings[slug] || null;
}
