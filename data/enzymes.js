// HOW MINERALS WORK — enzyme dependencies.
// This is established biochemistry, published as education. It explains why
// minerals matter; it is NOT a reason to supplement, and the page says so.

export const enzymeIntro = {
  en: {
    title: "How minerals actually work",
    lead: "Minerals rarely do anything by themselves. Almost all of their work happens through enzymes that cannot function without a specific metal at their centre.",
    caution:
      "This page explains mechanism, not dosing. Knowing that an enzyme needs copper is not evidence that taking copper improves health. Mechanism is where research starts, not where it finishes.",
  },
  ar: {
    title: "كيف تشتغل المعادن فعلياً",
    lead: "المعادن نادراً ما تعمل وحدها. معظم عملها يتم عبر إنزيمات لا تشتغل بدون معدن محدد في مركزها.",
    caution:
      "هذه الصفحة تشرح الآلية، لا الجرعات. معرفة أن إنزيماً يحتاج النحاس ليست دليلاً على أن تناول النحاس يحسّن الصحة. الآلية بداية البحث لا نهايته.",
  },
};

const E = (name, dependsOn, slugs, roleEn, roleAr, deficitEn, deficitAr) => ({
  name, dependsOn, slugs, role: { en: roleEn, ar: roleAr }, deficit: { en: deficitEn, ar: deficitAr },
});

export const enzymeGroups = [
  {
    group: { en: "Energy and cellular power", ar: "الطاقة وقدرة الخلية" },
    items: [
      E("Cytochrome c oxidase", "Copper", ["copper"],
        "The final step of the electron transport chain, where most cellular energy is produced.",
        "الخطوة الأخيرة في سلسلة نقل الإلكترون، حيث تُنتج معظم طاقة الخلية.",
        "Impaired energy production and poor use of iron.",
        "ضعف إنتاج الطاقة وسوء استخدام الحديد."),
      E("Na⁺/K⁺-ATPase", "Magnesium, potassium", ["magnesium"],
        "Maintains the electrical gradient across every cell membrane. Underlies nerve signalling and blood pressure control.",
        "يحافظ على الفرق الكهربائي عبر غشاء كل خلية، وعليه يقوم النقل العصبي وضبط ضغط الدم.",
        "Sodium and calcium overload inside cells.",
        "تراكم الصوديوم والكالسيوم داخل الخلايا."),
      E("Pyruvate kinase", "Potassium", [],
        "The final step of glycolysis, converting sugar into usable energy.",
        "الخطوة الأخيرة في تحلل السكر، وتحويله إلى طاقة قابلة للاستخدام.",
        "Loss of ATP yield from glucose.",
        "فقدان إنتاج الطاقة من الغلوكوز."),
    ],
  },
  {
    group: { en: "Iron handling", ar: "التعامل مع الحديد" },
    items: [
      E("Ceruloplasmin", "Copper", ["copper", "iron"],
        "Releases stored iron so the body can use it. This is why copper status affects iron status.",
        "يطلق الحديد المخزّن ليستفيد منه الجسم. ولهذا تؤثر حالة النحاس على حالة الحديد.",
        "Iron can accumulate in tissue while the blood still looks anaemic.",
        "قد يتراكم الحديد في الأنسجة بينما يبدو الدم مصاباً بفقر الدم."),
      E("Hephaestin", "Copper", ["copper", "iron"],
        "Moves dietary iron out of the gut lining and into the body.",
        "ينقل الحديد الغذائي من بطانة الأمعاء إلى الجسم.",
        "Iron-deficiency anaemia despite adequate iron intake.",
        "فقر دم بنقص الحديد رغم كفاية المدخول."),
      E("Catalase", "Iron", ["iron"],
        "Breaks down hydrogen peroxide before it damages tissue.",
        "يفكك بيروكسيد الهيدروجين قبل أن يضر الأنسجة.",
        "Higher oxidative stress.",
        "ارتفاع الإجهاد التأكسدي."),
    ],
  },
  {
    group: { en: "Antioxidant defence", ar: "الدفاع المضاد للأكسدة" },
    items: [
      E("Cu/Zn superoxide dismutase", "Copper and zinc", ["copper", "zinc"],
        "Clears superoxide radicals in the cell body. Needs both metals together.",
        "يزيل جذور الأكسيد الفائق في جسم الخلية، ويحتاج المعدنين معاً.",
        "Oxidative damage to tissue.",
        "تلف تأكسدي في الأنسجة."),
      E("MnSOD", "Manganese", [],
        "The same job, but inside mitochondria where most radicals are generated.",
        "المهمة نفسها لكن داخل الميتوكوندريا حيث تتولد معظم الجذور.",
        "Mitochondrial oxidative stress.",
        "إجهاد تأكسدي في الميتوكوندريا."),
      E("Glutathione peroxidase", "Selenium", ["selenium"],
        "Neutralises peroxides using glutathione. This is the main reason selenium matters.",
        "يعادل البيروكسيدات باستخدام الغلوتاثيون، وهذا السبب الرئيس لأهمية السيلينيوم.",
        "Reduced antioxidant capacity.",
        "انخفاض القدرة المضادة للأكسدة."),
    ],
  },
  {
    group: { en: "Mood, sleep and neurotransmitters", ar: "المزاج والنوم والنواقل العصبية" },
    items: [
      E("Tyrosine and tryptophan hydroxylase", "Iron", ["iron"],
        "The rate-limiting steps in making dopamine and serotonin. Both enzymes are iron-dependent.",
        "الخطوتان المحددتان لسرعة تصنيع الدوبامين والسيروتونين، وكلا الإنزيمين يعتمد على الحديد.",
        "Part of why iron deficiency presents as low mood and fatigue, not only as anaemia.",
        "جزء من سبب ظهور نقص الحديد كخمول ومزاج منخفض، لا كفقر دم فقط."),
      E("Dopa decarboxylase", "Magnesium, zinc, B6, vitamin C", ["magnesium", "zinc", "vitamin-c"],
        "Converts 5-HTP to serotonin and L-dopa to dopamine. Needs four cofactors at once.",
        "يحوّل 5-HTP إلى سيروتونين و L-dopa إلى دوبامين، ويحتاج أربعة عوامل مساعدة في آن واحد.",
        "Low mood and poor sleep quality.",
        "انخفاض المزاج وسوء جودة النوم."),
      E("AANAT", "Zinc and magnesium", ["zinc", "magnesium"],
        "The step that turns serotonin into melatonin at night.",
        "الخطوة التي تحوّل السيروتونين إلى ميلاتونين ليلاً.",
        "Disrupted sleep signalling.",
        "اضطراب إشارات النوم."),
    ],
  },
  {
    group: { en: "Structure and connective tissue", ar: "البنية والنسيج الضام" },
    items: [
      E("Lysyl oxidase", "Copper", ["copper", "collagen-peptides"],
        "Cross-links collagen and elastin so they hold tension. Skin, blood vessels and ligaments depend on it.",
        "يربط الكولاجين والإيلاستين ليتحملا الشد، وعليه تعتمد البشرة والأوعية والأربطة.",
        "Weak vascular and connective tissue.",
        "ضعف الأوعية والنسيج الضام."),
      E("Sulfite and xanthine oxidase", "Molybdenum", [],
        "Processes sulfur compounds and purines for safe disposal.",
        "يعالج مركبات الكبريت والبيورينات للتخلص منها بأمان.",
        "Sulfite build-up.",
        "تراكم السلفيت."),
    ],
  },
  {
    group: { en: "Food-side enzymes", ar: "إنزيمات من جهة الغذاء" },
    items: [
      E("Phytase", "Fermentation", [],
        "Breaks down phytate, the compound in grains and legumes that binds zinc and iron. This is why sourdough and soaking change mineral availability.",
        "يفكك الفيتات، وهو المركب في الحبوب والبقوليات الذي يرتبط بالزنك والحديد. ولهذا يغيّر الخمير والنقع توافر المعادن.",
        "More mineral binding in the gut.",
        "ارتباط أكبر للمعادن في الأمعاء."),
      E("Myrosinase", "Plant enzyme", [],
        "Creates sulforaphane from cruciferous vegetables. Light cooking preserves far more of it than heavy cooking.",
        "ينتج السلفورافان من الخضار الصليبية. الطهي الخفيف يحافظ عليه أكثر بكثير من الطهي الطويل.",
        "Less sulforaphane formed.",
        "تكوّن أقل للسلفورافان."),
    ],
  },
];
