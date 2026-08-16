// Editorial site data for the redesigned experience.
// Indicator labels are editorial classifications of already-verified catalog
// content — they introduce no new claims.

export const indicators = {
  magnesium:          { en:{food:"Realistic from food", intake:"RDA exists", timing:"Flexible", evidence:"Outcome-specific"}, ar:{food:"واقعي من الغذاء", intake:"يوجد مقدار يومي", timing:"مرن", evidence:"حسب النتيجة"} },
  calcium:            { en:{food:"Realistic from food", intake:"RDA exists", timing:"Dose size matters", evidence:"Strong core role"}, ar:{food:"واقعي من الغذاء", intake:"يوجد مقدار يومي", timing:"حجم الجرعة أهم", evidence:"دور أساسي قوي"} },
  iron:               { en:{food:"Food first; clinical if deficient", intake:"RDA + UL exist", timing:"Regimen-led", evidence:"Strong for deficiency"}, ar:{food:"الغذاء أولاً؛ سريري عند النقص", intake:"مقدار يومي وحد أقصى", timing:"حسب الخطة العلاجية", evidence:"قوي عند النقص"} },
  zinc:               { en:{food:"Realistic from food", intake:"RDA + UL exist", timing:"Flexible", evidence:"Indication-specific"}, ar:{food:"واقعي من الغذاء", intake:"مقدار يومي وحد أقصى", timing:"مرن", evidence:"حسب دواعي الاستعمال"} },
  copper:             { en:{food:"Usually from food", intake:"RDA exists", timing:"Flexible", evidence:"Strong core role"}, ar:{food:"عادة من الغذاء", intake:"يوجد مقدار يومي", timing:"مرن", evidence:"دور أساسي قوي"} },
  selenium:           { en:{food:"Easy from food", intake:"RDA exists; dose-aware", timing:"Flexible", evidence:"Strong core role"}, ar:{food:"سهل من الغذاء", intake:"مقدار يومي؛ انتبه للجرعة", timing:"مرن", evidence:"دور أساسي قوي"} },
  "vitamin-d3":       { en:{food:"Partly from food", intake:"RDA exists", timing:"With a fatty meal", evidence:"Strong for bone"}, ar:{food:"جزئياً من الغذاء", intake:"يوجد مقدار يومي", timing:"مع وجبة دسمة", evidence:"قوي لصحة العظام"} },
  "vitamin-c":        { en:{food:"Very easy from food", intake:"RDA exists", timing:"Flexible", evidence:"Strong core role"}, ar:{food:"سهل جداً من الغذاء", intake:"يوجد مقدار يومي", timing:"مرن", evidence:"دور أساسي قوي"} },
  "collagen-peptides":{ en:{food:"Food exists; dose imprecise", intake:"No RDA — research doses", timing:"Flexible", evidence:"Mixed by outcome"}, ar:{food:"موجود غذائياً؛ الجرعة غير دقيقة", intake:"لا مقدار رسمي — جرعات بحثية", timing:"مرن", evidence:"متفاوت حسب النتيجة"} },
  creatine:           { en:{food:"Impractical at research dose", intake:"No RDA — 3–5 g studied", timing:"Consistency matters", evidence:"Strong for performance"}, ar:{food:"غير عملي بالجرعة البحثية", intake:"لا مقدار رسمي — 3–5 غ مدروسة", timing:"الانتظام أهم", evidence:"قوي للأداء"} },
  probiotics:         { en:{food:"Fermented food ≠ studied strain", intake:"Strain + dose specific", timing:"Product-specific", evidence:"Strain-specific"}, ar:{food:"الغذاء المخمر ≠ السلالة المدروسة", intake:"حسب السلالة والجرعة", timing:"حسب المنتج", evidence:"حسب السلالة"} },
};

export const popularQuestions = {
  en: [
    ["Is collagen worth taking?", "collagen-peptides"],
    ["Can food cover my magnesium?", "magnesium"],
    ["Should vitamin D be taken with food?", "vitamin-d3"],
    ["What reduces iron absorption?", "iron"],
    ["Creatine — how much, and when?", "creatine"],
  ],
  ar: [
    ["هل الكولاجين يستحق الشراء؟", "collagen-peptides"],
    ["هل يكفي الغذاء لتغطية المغنيسيوم؟", "magnesium"],
    ["هل يؤخذ فيتامين د مع الطعام؟", "vitamin-d3"],
    ["ما الذي يقلل امتصاص الحديد؟", "iron"],
    ["الكرياتين — كم الجرعة ومتى؟", "creatine"],
  ],
};

export const searchPlaceholders = {
  en: [
    "Is collagen worth taking?",
    "Can I get enough magnesium from food?",
    "Vitamin D3",
    "What helps iron absorption?",
    "Creatine for women",
    "Probiotic vs postbiotic",
  ],
  ar: [
    "هل الكولاجين يستحق الشراء؟",
    "هل يكفي الغذاء للمغنيسيوم؟",
    "فيتامين د3",
    "ما الذي يحسّن امتصاص الحديد؟",
    "الكرياتين للنساء",
    "بروبيوتيك أم بوستبايوتك؟",
  ],
};

export const categorySubtypes = {
  enzymes: {
    en: ["Digestive enzymes", "Plant-derived enzymes", "Endogenous enzyme support / cofactors"],
    ar: ["إنزيمات هضمية", "إنزيمات نباتية المصدر", "دعم الإنزيمات الداخلية / العوامل المساعدة"],
  },
  "herbal-extraction": {
    en: ["Standardised extracts", "Traditional botanicals with modern trials", "Single-compound isolates"],
    ar: ["مستخلصات موحّدة التركيز", "نباتات تقليدية بتجارب حديثة", "مركبات معزولة"],
  },
  "fatty-acid-lipids": {
    en: ["Marine omega-3s", "Plant-derived fatty acids", "Phospholipids & structured lipids"],
    ar: ["أوميغا-3 بحرية", "أحماض دهنية نباتية", "فوسفوليبيدات ودهون بنيوية"],
  },
  postbiotics: {
    en: ["Microbial metabolites", "Inactivated microbial preparations", "Cell-component preparations"],
    ar: ["نواتج أيض ميكروبية", "مستحضرات ميكروبية معطَّلة", "مستحضرات مكونات خلوية"],
  },
  "longevity-cellular-health": {
    en: ["Mitochondrial compounds", "NAD+-related precursors", "Cellular-recycling compounds"],
    ar: ["مركبات الميتوكوندريا", "طلائع مرتبطة بـ NAD+", "مركبات إعادة التدوير الخلوي"],
  },
  "fungi-adaptogens": {
    en: ["Medicinal mushrooms", "Adaptogenic botanicals", "Beta-glucan preparations"],
    ar: ["فطريات طبية", "نباتات متكيفة", "مستحضرات بيتا-غلوكان"],
  },
  minerals: {
    en: ["Macrominerals", "Trace minerals", "Electrolytes"],
    ar: ["معادن كبرى", "معادن نادرة", "إلكتروليتات"],
  },
  vitamins: {
    en: ["Fat-soluble", "Water-soluble", "B-complex"],
    ar: ["ذائبة في الدهون", "ذائبة في الماء", "مجموعة ب"],
  },
  essentials: {
    en: ["Essential amino acids", "Essential fatty acids", "Essential vitamins & minerals"],
    ar: ["أحماض أمينية أساسية", "أحماض دهنية أساسية", "فيتامينات ومعادن أساسية"],
  },
  "amino-acids": {
    en: ["Essential amino acids", "Conditionally essential", "Derivatives & peptides (NAC, creatine, collagen)"],
    ar: ["أحماض أمينية أساسية", "أساسية شرطياً", "مشتقات وببتيدات (NAC، كرياتين، كولاجين)"],
  },
  prebiotic: {
    en: ["Fermentable fibres", "Oligosaccharides", "Resistant starches"],
    ar: ["ألياف قابلة للتخمر", "سكريات قليلة التعدد", "نشويات مقاومة"],
  },
  probiotic: {
    en: ["Bacterial probiotics", "Yeast probiotics", "Spore-forming probiotics"],
    ar: ["بروبيوتيك بكتيري", "بروبيوتيك خمائري", "بروبيوتيك بوغي"],
  },
};
