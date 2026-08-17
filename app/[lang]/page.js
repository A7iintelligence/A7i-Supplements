import Link from "next/link";
import { getUi } from "@/lib/i18n";
import { askedQuestions } from "@/data/site";
import SearchExperience from "@/components/SearchExperience";
import HeroGlyph from "@/components/HeroGlyph";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar
      ? "A7i — اسأل وحنا نشرح لك"
      : "A7i Supplements — Supplements, minus the noise",
    description: ar
      ? "منصة ثنائية اللغة قائمة على الدليل: الغذاء أولاً، والمكمّل حين يضيف قيمة حقيقية."
      : "Understand what you take, before deciding whether you need it. Evidence-led supplement guides.",
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
  const questions = askedQuestions[ar ? "ar" : "en"];

  return (
    <main>
      {/* ── Carbon hero: the glyph, the statement, the search ── */}
      <section className="heroBand">
        <div className="shell heroBandInner">
          <div className="heroCopy">
            <p className="heroKicker">{t.heroSupport}</p>
            <h1>{t.heroTitle}</h1>
            <p className="heroSignals">{t.signalsNote}</p>
          </div>
          <HeroGlyph lang={lang} />
        </div>
      </section>

      <div className="boneSheet">
        <section className="shell searchZone">
          <SearchExperience lang={lang} />
        </section>

      {/* ── What are people asking: editorial rows, no cards ── */}
        <section className="shell askedBlock">
        <p className="eyebrow">{t.askedEyebrow}</p>
        <ul className="askedList">
          {questions.map(([q, slug]) => (
            <li key={slug + q}>
              <Link href={`/${lang}/ingredient/${slug}`}>
                <span>{q}</span>
                <em aria-hidden="true">{ar ? "←" : "→"}</em>
              </Link>
            </li>
          ))}
        </ul>
        </section>
      </div>

      {/* ── A7i Rules: Carbon, massive numerals, no cards ── */}
      <section className="rulesBand">
        <div className="shell">
          <p className="eyebrow">{t.rulesEyebrow}</p>
          <ol className="rulesScroll">
            {t.rules.map(([num, rule]) => (
              <li key={num}>
                <span className="ruleNum">{num}</span>
                <p className="ruleText">{rule}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
