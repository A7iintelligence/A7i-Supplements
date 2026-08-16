// FORMS
// Form matters, but most form-specific health claims are marketing rather than
// trial evidence. Each entry is labelled:
//   established — absorption, elemental content or tolerability is documented
//   marketed    — the claim is widely made; human evidence is thin or absent

export const formStrength = {
  established: { en: "Documented", ar: "موثّق", tone: "good" },
  marketed:    { en: "Marketed claim", ar: "ادعاء تسويقي", tone: "muted" },
};

const F = (name, strength, en, ar) => ({ name, strength, why: { en, ar } });

export const forms = {
  magnesium: {
    lead: {
      en: "Forms differ in how much elemental magnesium they carry, how well they dissolve and how the gut tolerates them. Most differ far less in what they do.",
      ar: "تختلف الأشكال في محتوى المغنيسيوم العنصري والذوبانية وتحمّل الأمعاء لها. أما ما تفعله فيختلف أقل بكثير.",
    },
    items: [
      F("Glycinate", "established",
        "Magnesium bound to glycine. Generally the gentlest on the stomach, which is the main reason people choose it. Often marketed for sleep; the trial evidence for that specific use is weak.",
        "مغنيسيوم مرتبط بالغلايسين. الألطف عادة على المعدة، وهو السبب الرئيس لاختياره. يُسوّق كثيراً للنوم، ودليل التجارب لهذا الاستخدام تحديداً ضعيف."),
      F("Citrate", "established",
        "Well absorbed and widely available. Has an osmotic effect in the bowel, so higher doses loosen stools. That effect is why it appears in laxative preparations.",
        "جيد الامتصاص ومتوفر على نطاق واسع. له أثر تناضحي في الأمعاء، فالجرعات الأعلى تليّن البراز. ولهذا يدخل في مستحضرات ملينة."),
      F("Oxide", "established",
        "Carries the most elemental magnesium by weight but is poorly absorbed, and is the form most likely to cause loose stools. Cheap, and the weakest choice for correcting intake.",
        "يحمل أعلى نسبة مغنيسيوم عنصري بالوزن لكنه ضعيف الامتصاص، وأكثر الأشكال تسبباً في ليونة البراز. رخيص، وأضعف خيار لتصحيح المدخول."),
      F("L-threonate", "marketed",
        "Sold for cognition and brain health on the basis of animal work and a small number of human trials. Not established, and considerably more expensive.",
        "يُباع للإدراك وصحة الدماغ استناداً إلى دراسات حيوانية وعدد قليل من التجارب البشرية. غير راسخ، وأغلى بكثير."),
      F("Malate", "marketed",
        "Commonly promoted for fatigue and fibromyalgia. Human evidence for those uses is limited.",
        "يُروَّج غالباً للإرهاق والفيبروميالجيا. الدليل البشري لهذين الاستخدامين محدود."),
      F("Taurate and orotate", "marketed",
        "Promoted for cardiovascular use. Evidence is mechanistic rather than outcome-based.",
        "يُروَّجان للاستخدام القلبي الوعائي. الدليل آلي لا قائم على النتائج."),
    ],
  },

  calcium: {
    lead: {
      en: "The two common forms differ in one practical way: whether they need stomach acid.",
      ar: "يختلف الشكلان الشائعان في أمر عملي واحد: هل يحتاجان حمض المعدة.",
    },
    items: [
      F("Carbonate", "established",
        "Highest elemental calcium by weight and the cheapest. Depends on stomach acid, so it is taken with food.",
        "أعلى كالسيوم عنصري بالوزن والأرخص. يعتمد على حمض المعدة، لذا يؤخذ مع الطعام."),
      F("Citrate", "established",
        "Less dependent on stomach acid, so it suits people on acid-reducing medicines or with low stomach acid. Lower elemental calcium per tablet, so more tablets.",
        "أقل اعتماداً على حمض المعدة، فيناسب من يتناولون مثبطات الحموضة أو من لديهم حمض منخفض. كالسيوم عنصري أقل لكل قرص، فعدد الأقراص أكبر."),
    ],
  },

  zinc: {
    lead: {
      en: "For everyday intake the form matters less than the elemental dose. For colds, the format and timing matter more than the salt.",
      ar: "للمدخول اليومي، الشكل أقل أهمية من الجرعة العنصرية. أما لنزلات البرد، فالصيغة والتوقيت أهم من الملح المستخدم.",
    },
    items: [
      F("Picolinate, citrate, gluconate", "established",
        "All reasonably absorbed. Differences between them are small compared with the elemental zinc dose on the label.",
        "جميعها معقولة الامتصاص. الفروق بينها صغيرة مقارنة بجرعة الزنك العنصري على الملصق."),
      F("Lozenges for colds", "established",
        "Where zinc has a narrow real use, it is as a lozenge started very early in a cold. The dissolving format is part of why it was studied that way.",
        "حيث للزنك استخدام حقيقي ضيق، فهو كأقراص استحلاب تبدأ مبكراً جداً في نزلة البرد. صيغة الذوبان جزء من سبب دراسته بهذه الطريقة."),
      F("Oxide", "established",
        "Poorly absorbed compared with the salts above.",
        "ضعيف الامتصاص مقارنة بالأملاح أعلاه."),
    ],
  },

  iron: {
    lead: {
      en: "Formulation mainly changes tolerability. Dose and regimen should follow clinical advice, not a label.",
      ar: "الصيغة تغيّر التحمل أساساً. أما الجرعة والنظام فيتبعان المشورة السريرية لا الملصق.",
    },
    items: [
      F("Ferrous sulfate", "established",
        "The long-standing standard and the cheapest. Gastrointestinal side effects are common and are the usual reason people stop.",
        "المعيار القديم والأرخص. الأعراض الهضمية شائعة وهي السبب المعتاد للتوقف."),
      F("Ferrous gluconate and fumarate", "established",
        "Alternative salts with differing elemental iron per tablet. Tolerability varies between people.",
        "أملاح بديلة تختلف في الحديد العنصري لكل قرص. التحمل يتفاوت بين الأشخاص."),
      F("Bisglycinate", "marketed",
        "Promoted as gentler on the stomach. Some supporting work exists, but it is not settled and it costs more.",
        "يُروَّج كألطف على المعدة. توجد أعمال داعمة، لكنها غير محسومة وتكلفته أعلى."),
    ],
  },

  "vitamin-d3": {
    lead: {
      en: "Two forms exist. One raises blood levels more reliably.",
      ar: "يوجد شكلان. أحدهما يرفع مستوى الدم بثبات أكبر.",
    },
    items: [
      F("D3, cholecalciferol", "established",
        "The form made in skin from sunlight and the one generally more effective at raising 25(OH)D.",
        "الشكل الذي يُصنع في الجلد من الشمس، وهو عموماً الأكثر فعالية في رفع 25(OH)D."),
      F("D2, ergocalciferol", "established",
        "Plant-derived, used in some prescriptions and fortified foods. Generally less effective per unit at raising blood levels.",
        "نباتي المصدر، يُستخدم في بعض الوصفات والأغذية المدعّمة. أقل فعالية عموماً لكل وحدة في رفع مستوى الدم."),
    ],
  },
};

export function getForms(slug) {
  return forms[slug] || null;
}
