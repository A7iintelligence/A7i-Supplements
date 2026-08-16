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
    tag: P("If you take vitamin D", "إن كنت تتناول فيتامين د"),
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
    tag: P("If supplementing long term", "عند الاستخدام طويل الأمد"),
  },
  calcium: {
    items: [
      { name: "Calcium", slug: "calcium" },
      { name: "Vitamin D3", slug: "vitamin-d3" },
    ],
    tag: P("500 mg or less at a time", "500 ملغ أو أقل في المرة"),
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
      { with: "Vitamin C", slug: "vitamin-c", strength: "plausible", source: null,
        why: P("Vitamin C is required for normal collagen synthesis in the body. Whether pairing them in a supplement improves outcomes is not established.",
               "فيتامين سي لازم لتخليق الكولاجين طبيعياً في الجسم. أما تحسّن النتائج عند جمعهما في مكمل فغير مثبت.") },
    ],
    keepApart: [],
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
