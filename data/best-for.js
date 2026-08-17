// BEST FOR — outcome-specific. Each entry states what the compound is
// genuinely good for and at what evidence strength, plus what it is widely
// bought for where the evidence does not support it.
//
// grade: strong | moderate | emerging | insufficient

const B = (o, oa, g, w, wa) => ({ outcome: o, outcomeAr: oa, grade: g, why: w, whyAr: wa });
const N = (o, oa, w, wa) => ({ outcome: o, outcomeAr: oa, why: w, whyAr: wa });

export const bestFor = {
  magnesium: {
    best: [
      B("Correcting a low dietary intake", "تصحيح مدخول غذائي منخفض", "strong",
        "Where intake falls short, magnesium does exactly what a nutrient should. This is its clearest use.",
        "حين يقل المدخول، يؤدي المغنيسيوم ما يُفترض بمغذٍ أن يؤديه. وهذا أوضح استخداماته."),
      B("Constipation, from the citrate and oxide forms", "الإمساك، من شكلي السترات والأكسيد", "moderate",
        "An osmotic effect in the bowel. Reliable, and the reason these forms appear in laxatives.",
        "أثر تناضحي في الأمعاء. موثوق، وهو سبب وجود هذين الشكلين في الملينات."),
    ],
    not: [
      N("Sleep", "النوم",
        "The most common reason people buy it, and the trials are small and low quality.",
        "أشيع سبب لشرائه، والتجارب صغيرة وضعيفة الجودة."),
    ],
  },
  calcium: {
    best: [
      B("Bone health where dietary intake is low", "صحة العظام عند انخفاض المدخول", "strong",
        "Particularly alongside vitamin D in older adults. The evidence is strongest in people who were short to begin with.",
        "خصوصاً مع فيتامين د لدى كبار السن. والدليل أقوى لدى من كان مدخولهم ناقصاً أصلاً."),
    ],
    not: [
      N("Extra bone protection when intake is already adequate", "حماية إضافية للعظم عند كفاية المدخول",
        "Going above the requirement does not add benefit, and very high intakes carry their own questions.",
        "تجاوز الاحتياج لا يضيف فائدة، والمدخول العالي جداً يثير أسئلته الخاصة."),
    ],
  },
  iron: {
    best: [
      B("Diagnosed iron deficiency and iron-deficiency anaemia", "نقص الحديد المشخّص وفقر الدم الناتج عنه", "strong",
        "One of the most effective interventions in nutrition, when the deficiency is confirmed by a blood test.",
        "من أنجع التدخلات في التغذية، حين يؤكد تحليل الدم النقص."),
    ],
    not: [
      N("Tiredness without a blood test", "الإرهاق دون تحليل دم",
        "Fatigue has many causes. Taking iron without confirmed deficiency gives no benefit and carries real risk.",
        "للإرهاق أسباب كثيرة. وتناول الحديد دون نقص مؤكد لا يفيد ويحمل خطراً حقيقياً."),
    ],
  },
  zinc: {
    best: [
      B("Shortening a cold, started within about 24 hours", "تقصير نزلة البرد، إذا بدأت خلال نحو 24 ساعة", "moderate",
        "As a lozenge, begun very early. Timing is the whole trick; started late it does nothing.",
        "كأقراص استحلاب تبدأ مبكراً جداً. التوقيت هو كل الحيلة؛ والبدء المتأخر لا يفعل شيئاً."),
      B("Correcting deficiency", "تصحيح النقص", "strong",
        "Relevant in high-phytate diets, malabsorption and pregnancy.",
        "مهم في الأنظمة عالية الفيتات وسوء الامتصاص والحمل."),
    ],
    not: [
      N("Daily immune insurance", "تأمين مناعي يومي",
        "Continuous high-dose zinc does not prevent illness and depletes copper over time.",
        "الزنك العالي المستمر لا يمنع المرض ويستنزف النحاس مع الوقت."),
    ],
  },
  copper: {
    best: [
      B("Balancing long-term high-dose zinc", "موازنة الزنك العالي طويل الأمد", "strong",
        "The clearest reason anyone needs supplemental copper: preventing the deficiency that sustained zinc causes.",
        "أوضح سبب لاحتياج أحدهم مكمّل نحاس: منع النقص الذي يسببه الزنك المستمر."),
    ],
    not: [
      N("General energy or antioxidant support", "دعم الطاقة أو مضادات الأكسدة عموماً",
        "Copper enzymes matter, but taking copper when you are not deficient does not improve energy.",
        "إنزيمات النحاس مهمة، لكن تناوله دون نقص لا يحسّن الطاقة."),
    ],
  },
  selenium: {
    best: [
      B("Correcting deficiency in low-selenium regions", "تصحيح النقص في مناطق التربة الفقيرة", "strong",
        "Soil selenium varies enormously by geography, and that variation reaches the food supply.",
        "سيلينيوم التربة يتفاوت جغرافياً بشكل كبير، وينعكس ذلك على الغذاء."),
    ],
    not: [
      N("Cancer prevention or longevity", "الوقاية من السرطان أو طول العمر",
        "Large trials did not support this, and one found higher risk of type 2 diabetes at supplemental doses.",
        "لم تدعم التجارب الكبيرة ذلك، وأظهرت إحداها ارتفاع خطر السكري من النوع الثاني عند الجرعات المكملة."),
    ],
  },
  "vitamin-d3": {
    best: [
      B("Raising a low blood level", "رفع مستوى منخفض في الدم", "strong",
        "The core use, and the one worth testing for rather than assuming.",
        "الاستخدام الجوهري، ويستحق الفحص بدل الافتراض."),
      B("Bone health with calcium in older adults", "صحة العظام مع الكالسيوم لدى كبار السن", "moderate",
        "Fracture reduction evidence is strongest in this group and alongside adequate calcium.",
        "دليل خفض الكسور أقوى في هذه الفئة ومع كالسيوم كافٍ."),
    ],
    not: [
      N("Mood, weight or general prevention at high doses", "المزاج أو الوزن أو الوقاية العامة بجرعات عالية",
        "Large trials in people who were already replete have repeatedly come back negative.",
        "التجارب الكبيرة على من مستواهم كافٍ أصلاً عادت سلبية مراراً."),
    ],
  },
  "vitamin-c": {
    best: [
      B("Improving iron absorption from plant foods", "رفع امتصاص الحديد من الأطعمة النباتية", "strong",
        "Its most useful practical role, and it works at ordinary food amounts.",
        "أنفع أدواره عملياً، ويعمل بكميات الغذاء الاعتيادية."),
    ],
    not: [
      N("Preventing colds", "منع نزلات البرد",
        "Regular supplementation does not prevent colds in the general population. Effects on duration are small at best.",
        "التناول المنتظم لا يمنع نزلات البرد لدى عامة الناس، والأثر على المدة صغير في أفضل الأحوال."),
    ],
  },
  "collagen-peptides": {
    best: [
      B("Skin elasticity and hydration", "مرونة البشرة وترطيبها", "moderate",
        "Several trials report measurable change over 8 to 12 weeks. Effects are modest and reverse when you stop.",
        "تسجّل عدة تجارب تغيراً قابلاً للقياس خلال 8–12 أسبوعاً. والأثر متواضع ويزول عند التوقف."),
      B("Joint discomfort in active people", "انزعاج المفاصل لدى النشطين", "emerging",
        "Promising in athletes and in exercise-related joint pain, but the trials are small.",
        "واعد لدى الرياضيين وفي ألم المفاصل المرتبط بالتمرين، لكن التجارب صغيرة."),
    ],
    not: [
      N("Replacing protein intake", "تعويض البروتين",
        "Collagen is not a complete protein. It lacks tryptophan and is a poor choice as your main protein source.",
        "الكولاجين ليس بروتيناً كاملاً. يفتقر إلى التربتوفان وهو خيار رديء كمصدر بروتين رئيس."),
    ],
  },
  creatine: {
    best: [
      B("Strength and high-intensity performance", "القوة والأداء عالي الشدة", "strong",
        "One of the most reliably supported supplements in existence for this outcome.",
        "من أكثر المكمّلات دعماً موثوقاً على الإطلاق لهذه النتيجة."),
      B("Lean mass gain alongside resistance training", "زيادة الكتلة الصافية مع تمارين المقاومة", "strong",
        "Consistent across many trials, and only in combination with training.",
        "ثابت عبر تجارب كثيرة، وفقط مع التدريب."),
      B("Cognition under sleep deprivation or stress", "الإدراك تحت الحرمان من النوم أو الضغط", "emerging",
        "Early and interesting, not established.",
        "مبكر ومثير للاهتمام، وغير راسخ."),
    ],
    not: [
      N("Fat loss", "خسارة الدهون",
        "It does not burn fat. Early weight gain is water drawn into muscle.",
        "لا يحرق الدهون. والزيادة المبكرة في الوزن ماء يُسحب إلى العضلات."),
    ],
  },
  probiotics: {
    best: [
      B("Antibiotic-associated diarrhoea, with specific strains", "الإسهال المصاحب للمضادات الحيوية، بسلالات محددة", "moderate",
        "S. boulardii and L. rhamnosus GG have the most support here. The strain is the medicine.",
        "لـ S. boulardii و L. rhamnosus GG أكبر دعم هنا. والسلالة هي الدواء."),
    ],
    not: [
      N("General gut health from any product", "صحة الأمعاء عموماً من أي منتج",
        "Evidence belongs to specific strains for specific conditions. An unnamed blend inherits none of it.",
        "الدليل يخص سلالات محددة لحالات محددة. والخلطة غير المسمّاة لا ترث منه شيئاً."),
    ],
  },
  potassium: {
    best: [
      B("Blood pressure, from dietary intake", "ضغط الدم، من المدخول الغذائي", "strong",
        "Raising potassium from food lowers blood pressure, particularly when sodium intake is high.",
        "رفع البوتاسيوم من الغذاء يخفض ضغط الدم، خصوصاً مع ارتفاع الصوديوم."),
    ],
    not: [
      N("Muscle cramps", "تقلصات العضلات",
        "A persistent belief with weak evidence. Cramps are usually not a potassium problem.",
        "اعتقاد شائع بدليل ضعيف. والتقلصات عادة ليست مشكلة بوتاسيوم."),
    ],
  },
  iodine: {
    best: [
      B("Thyroid function and pregnancy", "وظيفة الغدة الدرقية والحمل", "strong",
        "Adequate iodine in pregnancy affects fetal brain development. This is one of the highest-stakes nutrients there is.",
        "كفاية اليود في الحمل تؤثر على نمو دماغ الجنين. وهذا من أعلى المغذيات مخاطرةً."),
    ],
    not: [
      N("Boosting metabolism when thyroid function is normal", "تسريع الأيض مع غدة طبيعية",
        "Extra iodine does not speed up a normal thyroid, and excess can disturb it.",
        "اليود الزائد لا يسرّع غدة طبيعية، والزيادة قد تربكها."),
    ],
  },
  phosphorus: {
    best: [
      B("Nothing you need to buy", "لا شيء يستدعي الشراء", "strong",
        "Deficiency is rare on any normal diet. This page exists to explain excess, not to sell a supplement.",
        "النقص نادر على أي نظام غذائي طبيعي. وهذه الصفحة لشرح الزيادة لا لبيع مكمّل."),
    ],
    not: [
      N("Bone or energy support", "دعم العظام أو الطاقة",
        "You already have enough. Additive phosphate in processed food is the actual issue.",
        "لديك ما يكفي أصلاً. وفوسفات الإضافات في الأطعمة المصنّعة هي المشكلة الفعلية."),
    ],
  },
  manganese: {
    best: [
      B("Nothing you need to buy", "لا شيء يستدعي الشراء", "strong",
        "Plant foods cover it easily. The practical risk is accumulating too much across multiple products.",
        "الأطعمة النباتية تغطيه بسهولة. والخطر العملي تراكم الزيادة عبر منتجات متعددة."),
    ],
    not: [
      N("Bone or antioxidant supplements", "مكمّلات العظام أو مضادات الأكسدة",
        "It is added to many formulas without a deficiency to correct.",
        "يُضاف إلى تركيبات كثيرة دون نقص يستدعي التصحيح."),
    ],
  },
  chromium: {
    best: [
      B("No use is well established", "لا استخدام راسخ", "insufficient",
        "Trials in glucose control have been inconsistent, and healthy people gain little.",
        "تجارب ضبط الغلوكوز متضاربة، والأصحاء لا يكسبون منه كثيراً."),
    ],
    not: [
      N("Blood sugar control and weight loss", "ضبط سكر الدم وإنقاص الوزن",
        "The two things it is overwhelmingly sold for, and the two the evidence does not support.",
        "الشيئان اللذان يُباع لأجلهما أساساً، وهما ما لا يدعمه الدليل."),
    ],
  },
  molybdenum: {
    best: [
      B("Nothing you need to buy", "لا شيء يستدعي الشراء", "strong",
        "A single serving of beans can meet or exceed the daily requirement.",
        "حصة واحدة من البقوليات قد تبلغ الاحتياج اليومي أو تتجاوزه."),
    ],
    not: [
      N("Detox formulas", "تركيبات التخلص من السموم",
        "It appears in these products without a deficiency to justify it.",
        "يظهر في هذه المنتجات دون نقص يبرره."),
    ],
  },
  boron: {
    best: [
      B("No use is established", "لا استخدام راسخ", "insufficient",
        "No reference intake has been set, and the trials behind the marketed claims are very small.",
        "لم يُحدد مدخول مرجعي، والتجارب خلف الادعاءات المسوَّقة صغيرة جداً."),
    ],
    not: [
      N("Testosterone and hormone optimisation", "تحسين التستوستيرون والهرمونات",
        "Built on a study of eight men over one week. See the claim check below.",
        "مبني على دراسة على ثمانية رجال لمدة أسبوع. انظر فحص الادعاء أدناه."),
    ],
  },
  glycine: {
    best: [
      B("Sleep quality", "جودة النوم", "emerging",
        "Around 3 g before bed improved subjective sleep quality in small trials. Cheap, and low risk.",
        "نحو 3 غ قبل النوم حسّنت جودة النوم الذاتية في تجارب صغيرة. رخيص ومنخفض الخطورة."),
    ],
    not: [
      N("Longevity", "طول العمر",
        "The life-extension work is in animals. It has not transferred to people.",
        "أبحاث إطالة العمر على الحيوانات، ولم تنتقل إلى الإنسان."),
    ],
  },
  taurine: {
    best: [
      B("Congestive heart failure, as an adjunct", "قصور القلب الاحتقاني، كعلاج مساند", "moderate",
        "Small trials at 1.5 to 3 g/day. A clinical use, not a wellness one.",
        "تجارب صغيرة عند 1.5–3 غ يومياً. استخدام سريري لا استخدام عافية."),
    ],
    not: [
      N("Anti-ageing", "مقاومة الشيخوخة",
        "The attention came from a mouse study. Human outcome evidence does not exist yet.",
        "جاء الاهتمام من دراسة على الفئران. ولا يوجد دليل نتائج بشري بعد."),
    ],
  },
  nac: {
    best: [
      B("Paracetamol overdose, in hospital", "جرعة الباراسيتامول الزائدة، في المستشفى", "strong",
        "A genuine antidote with a defined protocol. This is medicine, not supplementation.",
        "ترياق حقيقي ببروتوكول محدد. هذا دواء لا تكميل."),
      B("Chronic bronchitis, reducing exacerbations", "التهاب القصبات المزمن، تقليل النوبات", "moderate",
        "Reasonable evidence as a mucolytic in chronic respiratory disease.",
        "دليل معقول كحالّ للمخاط في أمراض التنفس المزمنة."),
    ],
    not: [
      N("Daily antioxidant or detox use", "الاستخدام اليومي كمضاد أكسدة أو للتخلص من السموم",
        "The broad consumer claims sit far from the clinical evidence base.",
        "ادعاءات المستهلك الواسعة بعيدة عن قاعدة الأدلة السريرية."),
    ],
  },
  coq10: {
    best: [
      B("Statin-associated muscle symptoms", "أعراض العضلات المصاحبة للستاتينات", "moderate",
        "The most common real-world reason to take it. Results are mixed but this is where the case is strongest.",
        "أشيع سبب واقعي لتناوله. النتائج متباينة، لكن هنا تكون الحجة أقوى."),
      B("Heart failure, as an adjunct", "قصور القلب، كعلاج مساند", "moderate",
        "Trial evidence exists alongside standard treatment, not instead of it.",
        "يوجد دليل تجارب إلى جانب العلاج القياسي لا بديلاً عنه."),
    ],
    not: [
      N("Energy in healthy people", "الطاقة لدى الأصحاء",
        "The reason most people buy it, and there is no good evidence it works for that.",
        "السبب الذي يشتريه لأجله معظم الناس، ولا دليل جيد على نفعه فيه."),
    ],
  },
  "omega-3": {
    best: [
      B("Lowering high triglycerides", "خفض الدهون الثلاثية المرتفعة", "strong",
        "Dose-dependent and well established, at prescription-level doses.",
        "معتمد على الجرعة وراسخ، عند الجرعات بمستوى الوصفة الطبية."),
      B("Pregnancy, for fetal brain and eye development", "الحمل، لنمو دماغ الجنين وعينيه", "moderate",
        "DHA specifically. One of the clearer cases for supplementing when fish intake is low.",
        "DHA تحديداً. من أوضح حالات التكميل حين يقل تناول السمك."),
    ],
    not: [
      N("Preventing heart attacks in healthy people", "منع النوبات القلبية لدى الأصحاء",
        "Large trials in general populations have largely come back neutral.",
        "التجارب الكبيرة على عموم الناس عادت محايدة إلى حد كبير."),
    ],
  },
  "vitamin-b12": {
    best: [
      B("Vegan and vegetarian diets", "الأنظمة النباتية", "strong",
        "Not optional. Plant foods contain essentially none, and deficiency causes irreversible nerve damage.",
        "ليس اختيارياً. الأطعمة النباتية لا تحتويه تقريباً، والنقص يسبب تلفاً عصبياً لا يُعكس."),
      B("Long-term metformin or acid-reducing medicines", "الاستخدام المطوّل للميتفورمين أو مثبطات الحموضة", "strong",
        "Both reduce absorption. Worth testing rather than assuming.",
        "كلاهما يقلل الامتصاص. يستحق الفحص بدل الافتراض."),
    ],
    not: [
      N("Energy, if your level is normal", "الطاقة، إذا كان مستواك طبيعياً",
        "B12 shots and high-dose tablets do nothing for people who are already replete.",
        "حقن ب12 والأقراص عالية الجرعة لا تفعل شيئاً لمن مستواه كافٍ."),
    ],
  },
  sodium: {
    best: [
      B("Endurance sport and heavy heat exposure", "رياضات التحمل والتعرّض للحرارة الشديدة", "moderate",
        "Real losses through sweat, and the one context where replacing sodium matters.",
        "فقد حقيقي عبر العرق، وهو السياق الوحيد الذي يهمّ فيه تعويض الصوديوم."),
    ],
    not: [
      N("Everyone else", "الجميع عدا ذلك",
        "Typical intakes already exceed the requirement. Most people benefit from less, not more.",
        "المدخول المعتاد يتجاوز الاحتياج أصلاً. ومعظم الناس يستفيدون من التقليل لا الزيادة."),
    ],
  },
  msm: {
    best: [
      B("Osteoarthritis symptoms", "أعراض خشونة المفاصل", "emerging",
        "Modest symptom improvement in small trials over several weeks.",
        "تحسّن متواضع في الأعراض في تجارب صغيرة على مدى أسابيع."),
    ],
    not: [
      N("Allergies, skin and general inflammation", "الحساسية والبشرة والالتهاب عموماً",
        "Widely claimed, thinly evidenced.",
        "ادعاءات واسعة بدليل رقيق."),
    ],
  },
  "alpha-lipoic-acid": {
    best: [
      B("Diabetic peripheral neuropathy", "اعتلال الأعصاب الطرفي السكري", "moderate",
        "600 mg/day reduced neuropathic symptoms in trials. Its one clear indication.",
        "600 ملغ يومياً خفّضت أعراض الاعتلال في التجارب. وهي دواعي استعماله الواضحة الوحيدة."),
    ],
    not: [
      N("Weight loss and general antioxidant use", "إنقاص الوزن والاستخدام العام كمضاد أكسدة",
        "Effects on weight are small enough to be clinically meaningless.",
        "الأثر على الوزن صغير لدرجة انعدام المعنى السريري."),
    ],
  },
  glucosamine: {
    best: [
      B("Knee osteoarthritis, glucosamine sulfate specifically", "خشونة الركبة، كبريتات الغلوكوزامين تحديداً", "emerging",
        "Results split by form and by who funded the trial. Sulfate has the better record.",
        "النتائج تنقسم حسب الشكل وحسب جهة التمويل. ولكبريتات سجل أفضل."),
    ],
    not: [
      N("Preventing joint problems before they start", "منع مشاكل المفاصل قبل حدوثها",
        "No evidence supports taking it preventively.",
        "لا دليل يدعم تناوله وقائياً."),
    ],
  },
  "vitamin-k2": {
    best: [
      B("No outcome is established", "لا نتيجة راسخة", "insufficient",
        "K2 activates the relevant proteins, which is not the same as changing fractures or arteries.",
        "ك2 ينشّط البروتينات المعنية، وهذا ليس نفسه تغيير الكسور أو الشرايين."),
    ],
    not: [
      N("Bone and artery protection", "حماية العظام والشرايين",
        "The claim the category is sold on, and the trials are not there yet.",
        "الادعاء الذي تُباع عليه الفئة، والتجارب لم تصل بعد."),
    ],
  },
};

export function getBestFor(slug) {
  return bestFor[slug] || null;
}
