import Link from "next/link";
import { getUi } from "@/lib/i18n";
import { goals } from "@/data/goals";
import SearchExperience from "@/components/SearchExperience";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar
      ? "A7i — ماذا تريد أن تفهم؟"
      : "A7i Supplements — What do you want to understand?",
    description: ar
      ? "منصة ثنائية اللغة قائمة على الدليل: الغذاء أولاً، والمكمل حين يضيف قيمة حقيقية."
      : "Evidence-led supplement guides: food first, supplements only when they genuinely add value.",
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
  };
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  const t = getUi(lang);
  const ar = lang === "ar";

  return (
    <main>
      <section className="heroBand">
        <div className="shell heroBandInner">
          <p className="heroKicker">{t.heroSupport}</p>
          <h1>{t.heroTitle}</h1>
        </div>
        <img src="/logo-mark-white.png" alt="" aria-hidden="true" className="heroMark" />
      </section>

      <section className="shell searchZone">
        <SearchExperience lang={lang} />
      </section>

      <section className="shell goalsBlock">
        <p className="eyebrow">{t.goalsEyebrow}</p>
        <h2 className="sectionTitle">{t.goalsTitle}</h2>
        <div className="goalCards">
          {goals.map((g) => {
            const d = g[lang] || g.en;
            return (
              <Link key={g.slug} href={`/${lang}/goal/${g.slug}`} className={`goalCard gc-${g.slug}`}>
                <strong>{d.name}</strong>
                <span>{d.teaser}</span>
                <em aria-hidden="true">{ar ? "←" : "→"}</em>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="shell explainerBlock">
        <Link href={`/${lang}/how-minerals-work`} className="explainerLink">
          <span className="eyebrow">{ar ? "شرح" : "EXPLAINER"}</span>
          <strong>{ar ? "كيف تشتغل المعادن فعلياً" : "How minerals actually work"}</strong>
          <span>{ar ? "الإنزيمات التي تفسّر لماذا ترتبط المعادن ببعضها." : "The enzymes that explain why minerals depend on each other."}</span>
        </Link>
      </section>

      <section className="shell rulesBlock">
        <p className="eyebrow">{t.rulesEyebrow}</p>
        <div className="rules">
          {t.rules.map(([num, rule]) => (
            <div key={num}>
              <small>{num}</small>
              <b>{rule}</b>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
