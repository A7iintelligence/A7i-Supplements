import Link from "next/link";
import { notFound } from "next/navigation";
import { goals, getGoal, gradeMeta } from "@/data/goals";
import { supportedLangs, getUi } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLangs.flatMap((lang) => goals.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const goal = getGoal(slug);
  if (!goal) return {};
  const d = goal[lang] || goal.en;
  return {
    title: `${d.name}: what the evidence actually supports`,
    description: `${d.teaser} ${d.lead}`,
    alternates: {
      canonical: `/${lang}/goal/${slug}`,
      languages: {
        en: `/en/goal/${slug}`,
        ar: `/ar/goal/${slug}`,
        "x-default": `/en/goal/${slug}`,
      },
    },
  };
}

export default async function GoalPage({ params }) {
  const { lang, slug } = await params;
  const goal = getGoal(slug);
  if (!goal || !supportedLangs.includes(lang)) notFound();

  const t = getUi(lang);
  const ar = lang === "ar";
  const d = goal[lang] || goal.en;

  return (
    <main className="shell goalPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{d.name}</span>
      </nav>

      <header className="goalHero">
        <p className="eyebrow">{ar ? "هدف" : "GOAL"}</p>
        <h1>{d.name}</h1>
        <p className="goalTeaser">{d.teaser}</p>
        <p className="goalLead">{d.lead}</p>
      </header>

      <aside className="redFlag">
        <span className="rfMark" aria-hidden="true">!</span>
        <p>{d.redFlag}</p>
      </aside>

      <section className="goalSection">
        <p className="eyebrow">{t.firstFree}</p>
        <div className="freeList">
          {d.firstFree.map(([title, body]) => (
            <div key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="goalSection">
        <p className="eyebrow">{t.thenStudied}</p>
        <p className="gradedNote">{t.gradedNote}</p>
        <div className="studiedList">
          {d.studied.map(([name, ingSlug, grade, note]) => {
            const g = gradeMeta[grade];
            const head = (
              <>
                <span className="stName">{name}</span>
                <span className={`verdict v-${g.tone} vSmall`}>{ar ? g.ar : g.en}</span>
              </>
            );
            return (
              <article key={name}>
                {ingSlug ? (
                  <Link href={`/${lang}/ingredient/${ingSlug}`} className="stHead stLink">
                    {head}
                  </Link>
                ) : (
                  <div className="stHead">{head}</div>
                )}
                <p>{note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <aside className="honestBox">
        <strong>{t.honestSummary}</strong>
        <p>{d.honest}</p>
      </aside>

      <p className="goalFooterLink">
        <Link href={`/${lang}#search`}>{t.exploreLibrary} →</Link>
      </p>
    </main>
  );
}
