import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getReviewed, reviewed } from "@/data/catalog";
import { indicators } from "@/data/site";
import { verdicts } from "@/data/browse";
import { getPairings, strengthMeta } from "@/data/pairings";
import Verdict from "@/components/Verdict";
import { supportedLangs, getUi } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    reviewed.map((item) => ({ lang, slug: item.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const item = getReviewed(slug);
  if (!item) return {};
  const d = item[lang] || item.en;

  return {
    title: `${d.name}: food vs supplement, absorption, interactions & timing`,
    description: `${d.name} in 60 seconds: food sources, daily intake or research dose, whether food can realistically provide it, absorption, interactions and timing.`,
    alternates: {
      canonical: `/${lang}/ingredient/${slug}`,
      languages: {
        en: `/en/ingredient/${slug}`,
        ar: `/ar/ingredient/${slug}`,
        "x-default": `/en/ingredient/${slug}`,
      },
    },
  };
}

function BulletList({ items, empty }) {
  if (!items?.length) return <p className="quietText">{empty}</p>;
  return (
    <ul className="microList">
      {items.map((x) => <li key={x}>{x}</li>)}
    </ul>
  );
}

export default async function IngredientPage({ params }) {
  const { lang, slug } = await params;
  const item = getReviewed(slug);
  if (!item || !supportedLangs.includes(lang)) notFound();

  const t = getUi(lang);
  const d = item[lang] || item.en;
  const ar = lang === "ar";
  const category = categories.find((c) => c.slug === item.category);
  const ind = indicators[slug]?.[ar ? "ar" : "en"] || null;
  const pair = getPairings(slug);
  const base = "https://supplements.a7iintelligence.com";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${d.name}: food vs supplement, absorption, interactions and timing`,
    description: d.strap,
    inLanguage: lang,
    author: { "@type": "Organization", name: "A7i Supplements" },
    publisher: { "@type": "Organization", name: "A7i Supplements" },
    mainEntityOfPage: `${base}/${lang}/ingredient/${slug}`,
    about: d.name,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "A7i", item: `${base}/${lang}` },
      { "@type": "ListItem", position: 2, name: ar ? category.ar : category.label, item: `${base}/${lang}/category/${category.slug}` },
      { "@type": "ListItem", position: 3, name: d.name, item: `${base}/${lang}/ingredient/${slug}` },
    ],
  };

  return (
    <main className="shell ingredientPage v6Ingredient">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <Link href={`/${lang}/category/${category.slug}`}>
          {ar ? category.ar : category.label}
        </Link>
      </nav>

      <header className="ingredientHero">
        <div>
          <p className="eyebrow">{ar ? category.ar : category.label} · 60 SEC</p>
          <h1>{d.name}</h1>
          {verdicts[slug] && (
            <p className="heroVerdict"><Verdict id={verdicts[slug]} lang={lang} /></p>
          )}
          <p>{d.strap}</p>
        </div>
      </header>

      {ind && (
        <ul className="indicators">
          <li><small>{t.indFood}</small><strong>{ind.food}</strong></li>
          <li><small>{t.indIntake}</small><strong>{ind.intake}</strong></li>
          <li><small>{t.indTiming}</small><strong>{ind.timing}</strong></li>
          <li><small>{t.indEvidence}</small><strong>{ind.evidence}</strong></li>
        </ul>
      )}

      <section className="ingredientGrid">
        <article className="infoCard dark">
          <small>{ar ? "ما هو؟" : "WHAT IS IT?"}</small>
          <h2>{d.what}</h2>
          <p>{d.why}</p>
        </article>

        <article className="infoCard">
          <small>{ar ? "الغذاء" : "FOOD"}</small>
          <h2>{ar ? "أين أجده؟" : "Where can I get it?"}</h2>
          <div className="foodList">
            {d.food.map(([food, amount]) => (
              <div key={food}>
                <strong>{food}</strong>
                <span>{amount}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="infoCard">
          <small>{d.targetLabel}</small>
          <h2>{ar ? "كم؟" : "How much?"}</h2>
          <p>{d.target}</p>
        </article>
      </section>

      <section className="foodVsShelf">
        <div className="fvsTitle">
          <p className="eyebrow">{ar ? "الغذاء أم المكمل؟" : "FOOD VS SUPPLEMENT"}</p>
          <h2>
            {ar
              ? "هل يمكنني الوصول إلى الكمية عملياً من الطعام؟"
              : "Can food realistically get me there?"}
          </h2>
        </div>

        <div className="fvsGrid">
          <div>
            <small>{ar ? "هل يمكن للطعام؟" : "CAN FOOD DO IT?"}</small>
            <strong>{d.foodVsShelf.canFood}</strong>
          </div>
          <div>
            <small>{ar ? "في الحياة اليومية" : "REAL-WORLD FEASIBILITY"}</small>
            <p>{d.foodVsShelf.reality}</p>
          </div>
          <div>
            <small>{ar ? "لماذا أشتري مكمل؟" : "WHAT DOES A SUPPLEMENT ADD?"}</small>
            <p>{d.foodVsShelf.shelf}</p>
          </div>
          <div className="fvsTake">
            <small>{ar ? "خلاصة A7i" : "A7i TAKE"}</small>
            <strong>{d.foodVsShelf.verdict}</strong>
          </div>
        </div>
      </section>

      {pair && (pair.pairWith.length > 0 || pair.keepApart.length > 0) && (
        <section className="pairSection">
          <div className="pairHead">
            <p className="eyebrow">{ar ? "الاقتران" : "PAIRING"}</p>
            <h2>{ar ? "مع ماذا يُؤخذ، وعن ماذا يُفصل" : "What to pair it with, and what to keep it away from"}</h2>
          </div>

          <div className="pairGrid">
            <div className="pairCol">
              <p className="pairColLabel good">{ar ? "اقترنه بـ" : "Pair with"}</p>
              {pair.pairWith.length === 0 && (
                <p className="quietText">{ar ? "لا اقتران عام مفيد." : "No useful general pairing."}</p>
              )}
              {pair.pairWith.map((x) => {
                const st = strengthMeta[x.strength];
                return (
                  <article key={x.with}>
                    <div className="pairTop">
                      {x.slug ? (
                        <Link href={`/${lang}/ingredient/${x.slug}`} className="pairName">{x.with}</Link>
                      ) : (
                        <span className="pairName">{x.with}</span>
                      )}
                      <span className={`verdict v-${st.tone} vSmall`}>{ar ? st.ar : st.en}</span>
                    </div>
                    <p>{ar ? x.why.ar : x.why.en}</p>
                  </article>
                );
              })}
            </div>

            <div className="pairCol">
              <p className="pairColLabel warn">{ar ? "افصله عن" : "Keep apart from"}</p>
              {pair.keepApart.length === 0 && (
                <p className="quietText">{ar ? "لا قاعدة فصل عامة." : "No general separation rule."}</p>
              )}
              {pair.keepApart.map((x) => (
                <article key={x.from}>
                  <div className="pairTop">
                    {x.slug ? (
                      <Link href={`/${lang}/ingredient/${x.slug}`} className="pairName">{x.from}</Link>
                    ) : (
                      <span className="pairName">{x.from}</span>
                    )}
                    <span className="verdict v-warn vSmall">{ar ? strengthMeta.caution.ar : strengthMeta.caution.en}</span>
                  </div>
                  <p>{ar ? x.why.ar : x.why.en}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="pairNote">
            {ar
              ? "يُذكر كل اقتران بقوة الدليل الداعم له. \"معقول\" تعني آلية سليمة ونتائج بشرية غير محسومة."
              : "Each pairing is stated at the strength the evidence supports. \"Plausible\" means the mechanism is sound but human outcomes are not settled."}
          </p>
        </section>
      )}

      <section className="deeperSection">
        <p className="eyebrow">{t.whatNext}</p>

        <details className="deeper" name="deeper">
          <summary>{t.modBenefits}</summary>
          <div className="deeperBody">
            <p>{d.why}</p>
            <p className="quietText">{d.evidence}</p>
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modForms}</summary>
          <div className="deeperBody"><p>{d.forms}</p></div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modAbsorption}</summary>
          <div className="deeperBody deeperSplit">
            <div>
              <small>{ar ? "قد يساعد" : "MAY HELP"}</small>
              <BulletList items={d.absorption.helps} empty={ar ? "لا توجد قاعدة عامة." : "No useful universal rule."} />
            </div>
            <div>
              <small>{ar ? "قد يقلل الامتصاص" : "CAN REDUCE UPTAKE"}</small>
              <BulletList items={d.absorption.reduces} empty={ar ? "لا توجد قاعدة عامة." : "No useful universal rule."} />
            </div>
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modTiming}</summary>
          <div className="deeperBody deeperSplit">
            <div>
              <small>{ar ? "مع الطعام؟" : "WITH FOOD?"}</small>
              <p>{d.absorption.meal}</p>
            </div>
            <div>
              <small>{ar ? "وقت اليوم" : "TIME OF DAY"}</small>
              <p>{d.absorption.clock}</p>
            </div>
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modInteractions}</summary>
          <div className="deeperBody">
            <small>{ar ? "افصل بينهما / تحقق" : "KEEP APART / CHECK"}</small>
            <BulletList items={d.absorption.separate} empty={ar ? "لا توجد قاعدة فصل عامة." : "No universal separation rule."} />
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modSafety}</summary>
          <div className="deeperBody">
            <p>
              {ar
                ? "استشر طبيبك أو الصيدلي أو مختصاً صحياً مؤهلاً عند وجود مرض أو أدوية أو حمل أو أعراض أو شك في وجود نقص."
                : "Ask your doctor, pharmacist or qualified healthcare professional if you have a medical condition, take medicines, are pregnant, have symptoms or suspect a deficiency."}
            </p>
            <BulletList items={d.absorption.separate} empty={ar ? "لا تحذيرات فصل عامة." : "No universal separation warnings."} />
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modStudies}</summary>
          <div className="deeperBody">
            {item.sources.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="sourceLink">
                {s.label} ↗
              </a>
            ))}
          </div>
        </details>
      </section>

      <aside className="medicalCallout">
        <strong>
          {ar
            ? "سياقك الشخصي أهم من صفحة ويب."
            : "Your individual context matters more than a webpage."}
        </strong>
        <p>
          {ar
            ? "استشر طبيبك أو الصيدلي أو مختصاً صحياً مؤهلاً قبل بدء أو تغيير أي مكمل."
            : "Ask your doctor, pharmacist or qualified healthcare professional before starting or changing any supplement."}
        </p>
      </aside>
    </main>
  );
}
