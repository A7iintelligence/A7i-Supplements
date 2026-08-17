import Link from "next/link";
import { getUi } from "@/lib/i18n";
import { askedQuestions } from "@/data/site";
import SearchExperience from "@/components/SearchExperience";
import HeroGlyph from "@/components/HeroGlyph";
import LevelChapters from "@/components/LevelChapters";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar
      ? "A7i — افهم المكمّلات قبل ما تاخذها"
      : "A7i Supplements — Understand supplements before you take them",
    description: ar
      ? "اعرف ماذا تفعل المكمّلات، وماذا يوفّر الغذاء، وكم المقدار المهم، وكيف تتداخل، وماذا يدعم الدليل فعلاً."
      : "See what supplements do, what food can provide, how much matters, how they interact, and what the evidence actually supports.",
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
      <section className="heroBand">
        <div className="shell heroBandInner">
          <div className="heroCopy">
            <h1>{t.heroTitle}</h1>
            <p className="heroLead">{t.heroLead}</p>
          </div>
          <HeroGlyph lang={lang} />
        </div>
      </section>

      <div className="boneSheet">
        <section className="shell searchZone">
          <SearchExperience lang={lang} />
        </section>

        <LevelChapters lang={lang} note={t.levelsNote} />

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
    </main>
  );
}
