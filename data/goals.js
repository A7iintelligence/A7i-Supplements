// Goal pages are their own content type.
// Shape: free/behavioural interventions first, red flags, then compounds
// graded FOR THIS OUTCOME ONLY (not the ingredient's overall grade).

export const gradeMeta = {
  strong:       { en:"Strong",       ar:"قوي",     tone:"good" },
  moderate:     { en:"Moderate",     ar:"متوسط",   tone:"info" },
  emerging:     { en:"Emerging",     ar:"ناشئ",    tone:"warn" },
  insufficient: { en:"Insufficient", ar:"غير كافٍ", tone:"muted" },
};

export const goals = [
  {
    slug: "sleep",
    icon: "ti-moon",
    en: {
      name: "Sleeping better",
      teaser: "Most sleep problems are not supplement problems.",
      lead: "Here is what the evidence supports, in the order worth trying it.",
      redFlag: "Loud snoring with daytime sleepiness, or waking up gasping, can point to sleep apnoea. No supplement treats that. See a doctor first.",
      firstFree: [
        ["Move caffeine earlier", "Caffeine has a half-life of roughly five to six hours. A 3pm coffee is still working at bedtime."],
        ["Reconsider the nightcap", "Alcohol shortens the time to fall asleep and then fragments the second half of the night."],
        ["Ask about CBT-I", "For ongoing insomnia, cognitive behavioural therapy for insomnia is first-line in most clinical guidelines, ahead of any tablet."],
      ],
      studied: [
        ["Melatonin", null, "moderate", "Works on timing rather than sedation. The best evidence is jet lag and delayed sleep phase. Prescription status varies by country and age, so check yours."],
        ["L-theanine", null, "emerging", "Small trials, mostly on relaxation and sleep quality rather than falling asleep faster. Promising, not settled."],
        ["Magnesium", "magnesium", "insufficient", "Popular for sleep, but the trials are small and low quality. Correcting a real dietary shortfall is a different question from using it as a sedative."],
        ["Valerian", null, "insufficient", "Long history of use, but preparations vary enormously and results do not replicate reliably."],
      ],
      honest: "For most people the caffeine and alcohol changes above will do more than anything on the second list. We will say so even when it costs us a sale.",
    },
    ar: {
      name: "نوم أفضل",
      teaser: "معظم مشكلات النوم ليست مشكلة مكملات.",
      lead: "هذا ما يدعمه الدليل، بالترتيب الذي يستحق تجربته.",
      redFlag: "الشخير العالي مع نعاس نهاري، أو الاستيقاظ لاهثاً، قد يشير إلى انقطاع النفس النومي. لا يعالج ذلك أي مكمل. راجع الطبيب أولاً.",
      firstFree: [
        ["قدّم موعد القهوة", "عمر النصف للكافيين نحو خمس إلى ست ساعات. قهوة الثالثة عصراً ما زالت فاعلة عند النوم."],
        ["أعد النظر في كأس الليل", "الكحول يقصّر زمن الغفوة ثم يفكك النصف الثاني من الليل."],
        ["اسأل عن العلاج السلوكي المعرفي للأرق", "في الأرق المزمن يُعد الخيار الأول في معظم الإرشادات السريرية، قبل أي حبة."],
      ],
      studied: [
        ["الميلاتونين", null, "moderate", "يعمل على توقيت النوم لا على التهدئة. أقوى دليل في اضطراب السفر وتأخر طور النوم. وضعه الدوائي يختلف بين الدول والأعمار، فتحقق من بلدك."],
        ["إل-ثيانين", null, "emerging", "تجارب صغيرة، غالباً على الاسترخاء وجودة النوم لا على سرعة الغفوة. واعد لا حاسم."],
        ["المغنيسيوم", "magnesium", "insufficient", "شائع للنوم، لكن التجارب صغيرة وضعيفة الجودة. تصحيح نقص غذائي حقيقي مسألة مختلفة عن استخدامه كمهدئ."],
        ["الناردين", null, "insufficient", "تاريخ استخدام طويل، لكن المستحضرات شديدة التباين والنتائج لا تتكرر بثبات."],
      ],
      honest: "لمعظم الناس، تعديل الكافيين والكحول أعلاه يفعل أكثر من أي شيء في القائمة الثانية. سنقول ذلك حتى لو كلّفنا بيعة.",
    },
  },

  {
    slug: "energy",
    icon: "ti-bolt",
    en: {
      name: "Energy and the afternoon crash",
      teaser: "Fatigue is a symptom, not a deficiency.",
      lead: "Before any supplement, the useful question is what is causing it.",
      redFlag: "Persistent fatigue deserves a proper workup. Iron studies, thyroid function, B12 and blood glucose are ordinary tests that explain a large share of it. Supplementing over an undiagnosed cause delays the answer.",
      firstFree: [
        ["Get the sleep question answered first", "Short or fragmented sleep explains more daytime fatigue than any nutrient. Start there."],
        ["Look at the shape of your meals", "A large refined-carbohydrate lunch is the most common cause of a specifically mid-afternoon dip."],
        ["Audit caffeine timing, not just amount", "Late caffeine costs you sleep, which costs you the next afternoon. The loop is self-feeding."],
      ],
      studied: [
        ["Iron", "iron", "strong", "Strong for fatigue caused by genuine iron deficiency, which is common in menstruating women. Worthless and potentially harmful without a confirmed deficiency. Test, do not guess."],
        ["Vitamin B12", null, "strong", "Strong where a deficiency exists, particularly in vegans, older adults and long-term metformin or PPI users. No benefit in people who are replete."],
        ["Creatine", "creatine", "emerging", "Mostly studied for physical performance. Some early work on mental fatigue and sleep deprivation, but not established."],
        ["Vitamin B-complex", null, "insufficient", "Marketed heavily for energy. In people who are not deficient, there is little to show for it."],
      ],
      honest: "The most valuable thing on this page is a blood test, not a bottle. If iron and thyroid come back normal and you still feel flat, the answer is more likely sleep or mood than any supplement here.",
    },
    ar: {
      name: "الطاقة وهبوط ما بعد الظهر",
      teaser: "الإرهاق عَرَض، وليس نقصاً بالضرورة.",
      lead: "قبل أي مكمل، السؤال المفيد هو: ما السبب؟",
      redFlag: "الإرهاق المستمر يستحق تقييماً طبياً. فحوص الحديد والغدة الدرقية وفيتامين ب12 وسكر الدم فحوص اعتيادية تفسر جزءاً كبيراً منه. تناول المكملات فوق سبب غير مشخّص يؤخر الإجابة.",
      firstFree: [
        ["احسم مسألة النوم أولاً", "النوم القصير أو المتقطع يفسر إرهاق النهار أكثر من أي مغذٍ. ابدأ من هناك."],
        ["انظر إلى شكل وجباتك", "غداء كبير غني بالنشويات المكررة هو السبب الأشيع لهبوط منتصف العصر تحديداً."],
        ["راجع توقيت الكافيين لا كميته فقط", "الكافيين المتأخر يكلفك نومك، وهذا يكلفك عصر اليوم التالي. حلقة تغذي نفسها."],
      ],
      studied: [
        ["الحديد", "iron", "strong", "قوي للإرهاق الناتج عن نقص حديد حقيقي، وهو شائع لدى النساء في سن الحيض. بلا فائدة وقد يضر دون نقص مؤكد. افحص ولا تخمّن."],
        ["فيتامين ب12", null, "strong", "قوي عند وجود نقص، خصوصاً لدى النباتيين وكبار السن ومستخدمي الميتفورمين أو مثبطات الحموضة طويلاً. لا فائدة لمن مستواه كافٍ."],
        ["الكرياتين", "creatine", "emerging", "مدروس غالباً للأداء البدني. أعمال أولية عن الإرهاق الذهني والحرمان من النوم، لكنها غير راسخة."],
        ["مجموعة فيتامينات ب", null, "insufficient", "تُسوَّق بكثافة للطاقة. لمن ليس لديه نقص، النتائج ضعيفة."],
      ],
      honest: "أنفع ما في هذه الصفحة تحليل دم، لا عبوة. إذا كان الحديد والغدة طبيعيين وما زلت تشعر بالخمول، فالسبب الأرجح النوم أو المزاج لا أي مكمل هنا.",
    },
  },

  {
    slug: "longevity",
    icon: "ti-infinity",
    en: {
      name: "Longevity and cellular health",
      teaser: "The most expensive category with the thinnest human evidence.",
      lead: "Almost everything here rests on cell studies, animal work or short human trials measuring surrogate markers rather than how long or how well people actually live.",
      redFlag: "Nothing in this category has been shown to extend human lifespan. Trials that could show it would need to run for decades, and they have not been done. Anyone telling you otherwise is selling something.",
      firstFree: [
        ["The boring things still win", "Not smoking, regular movement, sleep, blood pressure and blood glucose control have decades of human outcome data behind them. No compound here comes close."],
        ["Mouse lifespan is not human lifespan", "Many of these compounds extended life in short-lived animals under laboratory conditions. That has repeatedly failed to translate."],
        ["Watch what is being measured", "A trial showing a compound raised a blood marker has not shown it made anyone healthier or live longer. Surrogate endpoints are where this field lives."],
      ],
      studied: [
        ["CoQ10", null, "moderate", "The most established of this group, mainly in heart failure and in statin-associated muscle symptoms, where results are still mixed. Not a general longevity result."],
        ["Taurine", null, "emerging", "Widely discussed after animal ageing work. Human outcome evidence has not caught up."],
        ["Urolithin A", null, "emerging", "Early human trials on muscle endurance and mitochondrial markers. Small, short, and largely funded by the companies producing it."],
        ["NMN and nicotinamide riboside", null, "insufficient", "Reliably raise NAD+ in blood. No human trial has yet shown that this translates into a meaningful health or lifespan outcome. Regulatory status of NMN differs by country."],
        ["Spermidine", null, "insufficient", "Mechanistically interesting for cellular recycling. Human evidence is observational or very preliminary."],
      ],
      honest: "If you spend money in this category, spend it knowing you are funding a hypothesis rather than buying a proven outcome. That may still be a reasonable choice. It should be an informed one.",
    },
    ar: {
      name: "طول العمر وصحة الخلايا",
      teaser: "أغلى فئة، وأقلها دليلاً بشرياً.",
      lead: "معظم ما هنا يستند إلى دراسات خلوية أو حيوانية أو تجارب بشرية قصيرة تقيس مؤشرات بديلة لا طول العمر أو جودته فعلياً.",
      redFlag: "لا شيء في هذه الفئة ثبت أنه يطيل عمر الإنسان. التجارب القادرة على إثبات ذلك تحتاج عقوداً ولم تُجرَ. من يقول لك غير ذلك يبيع شيئاً.",
      firstFree: [
        ["الأساسيات المملة ما زالت تفوز", "الامتناع عن التدخين والحركة المنتظمة والنوم وضبط ضغط الدم والسكر لها عقود من البيانات البشرية. لا مركب هنا يقترب."],
        ["عمر الفأر ليس عمر الإنسان", "كثير من هذه المركبات أطال حياة حيوانات قصيرة العمر في المختبر. وقد فشل ذلك في الانتقال إلى الإنسان مراراً."],
        ["انتبه لما يُقاس", "تجربة تُظهر ارتفاع مؤشر في الدم لم تُظهر أن أحداً صار أصح أو أطول عمراً. المؤشرات البديلة هي موطن هذا المجال."],
      ],
      studied: [
        ["كو إنزيم Q10", null, "moderate", "الأرسخ في هذه المجموعة، أساساً في قصور القلب وأعراض العضلات المصاحبة للستاتينات، والنتائج ما زالت متباينة. وليست نتيجة تتعلق بطول العمر."],
        ["التورين", null, "emerging", "نال اهتماماً واسعاً بعد أعمال الشيخوخة الحيوانية. الدليل البشري لم يلحق بعد."],
        ["يورليثين A", null, "emerging", "تجارب بشرية مبكرة على تحمل العضلات ومؤشرات الميتوكوندريا. صغيرة وقصيرة وممولة غالباً من الشركات المنتجة."],
        ["NMN ونيكوتيناميد ريبوسايد", null, "insufficient", "يرفعان NAD+ في الدم بشكل موثوق. لم تُظهر أي تجربة بشرية بعد أن هذا يترجم إلى نتيجة صحية ذات معنى. الوضع التنظيمي لـ NMN يختلف بين الدول."],
        ["السبيرميدين", null, "insufficient", "مثير للاهتمام آلياً في إعادة التدوير الخلوي. الدليل البشري رصدي أو أولي جداً."],
      ],
      honest: "إن أنفقت في هذه الفئة، فاعلم أنك تموّل فرضية لا تشتري نتيجة مثبتة. قد يبقى ذلك خياراً معقولاً، لكن ليكن خياراً مستنيراً.",
    },
  },

  {
    slug: "immunity",
    icon: "ti-shield",
    en: {
      name: "Immunity",
      teaser: "A crowded shelf with a short list of things that hold up.",
      lead: "Most immunity products are built on the idea that more is better. Immune function does not work that way.",
      redFlag: "Frequent or unusually severe infections are a reason to see a doctor, not to buy a stronger formula.",
      firstFree: [
        ["Sleep is the immune intervention", "Short sleep is one of the better-documented influences on susceptibility to infection. It is also free."],
        ["Cover the basics before the extras", "Adequate protein and a varied diet do more than any single-ingredient immune product."],
      ],
      studied: [
        ["Vitamin D3", "vitamin-d3", "moderate", "Correcting a low vitamin D status is worthwhile in its own right, and there is reasonable evidence around respiratory infection in people who were deficient to begin with. Much weaker in people already replete."],
        ["Zinc", "zinc", "moderate", "Some evidence that zinc started very early in a cold shortens its duration. Formulation and timing matter, and prolonged high doses interfere with copper."],
        ["Vitamin C", "vitamin-c", "insufficient", "Regular supplementation does not prevent colds in the general population. Effects on duration are small at best."],
        ["Echinacea", null, "insufficient", "Heavily marketed, extensively studied, and the results remain inconsistent across preparations."],
      ],
      honest: "Vitamin D status is worth knowing. Zinc has a narrow, real, time-sensitive use. Most of the rest of the immunity aisle does not survive contact with the evidence.",
    },
    ar: {
      name: "المناعة",
      teaser: "رف مزدحم وقائمة قصيرة مما يصمد.",
      lead: "معظم منتجات المناعة مبنية على فكرة أن الأكثر أفضل. وظيفة المناعة لا تعمل هكذا.",
      redFlag: "تكرار العدوى أو شدتها غير المعتادة سبب لمراجعة الطبيب، لا لشراء تركيبة أقوى.",
      firstFree: [
        ["النوم هو تدخل المناعة", "قلة النوم من أكثر العوامل توثيقاً في القابلية للعدوى. وهو مجاني أيضاً."],
        ["غطِّ الأساسيات قبل الإضافات", "البروتين الكافي والتنوع الغذائي يفعلان أكثر من أي منتج مناعة بمكوّن واحد."],
      ],
      studied: [
        ["فيتامين د3", "vitamin-d3", "moderate", "تصحيح انخفاض فيتامين د مفيد بحد ذاته، وهناك دليل معقول حول عدوى الجهاز التنفسي لدى من كان لديهم نقص أصلاً. وأضعف بكثير لدى من مستواهم كافٍ."],
        ["الزنك", "zinc", "moderate", "بعض الدليل أن بدء الزنك مبكراً جداً في نزلة البرد يقصّر مدتها. الشكل والتوقيت مهمان، والجرعات العالية المطولة تعارض النحاس."],
        ["فيتامين سي", "vitamin-c", "insufficient", "التناول المنتظم لا يمنع نزلات البرد لدى عامة الناس. والأثر على المدة صغير في أفضل الأحوال."],
        ["الإكيناسيا", null, "insufficient", "تُسوَّق بكثافة ودُرست كثيراً، وتبقى النتائج متباينة بين المستحضرات."],
      ],
      honest: "معرفة مستوى فيتامين د تستحق. وللزنك استخدام ضيق وحقيقي ومرتبط بالتوقيت. أما بقية رف المناعة فلا يصمد أمام الدليل.",
    },
  },
];

export function getGoal(slug) {
  return goals.find((g) => g.slug === slug);
}
