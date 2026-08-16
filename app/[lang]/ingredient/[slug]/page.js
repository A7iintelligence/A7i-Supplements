import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getReviewed, reviewed } from "@/data/catalog";
import { indicators } from "@/data/site";
import { verdicts } from "@/data/browse";
import { getPairings, getStack, strengthMeta } from "@/data/pairings";
import { getForms, formStrength } from "@/data/forms";
import { pairNameAr, stackNameAr, formNameAr } from "@/data/pair-names-ar";
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

  const isAr = lang === "ar";
  return {
    title: isAr
      ? `${d.name}: الغذاء أم المكمّل، الامتصاص والتداخلات والتوقيت`
      : `${d.name}: food vs supplement, absorption, interactions & timing`,
    description: isAr
      ? `${d.name} في ستين ثانية: مصادره في الغذاء، المقدار اليومي أو الجرعة البحثية، هل يكفي الغذاء، الامتصاص والتداخلات والتوقيت.`
      : `${d.name} in 60 seconds: food sources, daily intake or research dose, whether food can realistically provide it, absorption, interactions and timing.`,
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
  const stack = getStack(slug);
  const formList = getForms(slug);
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

      {(stack || (pair && (pair.pairWith.length > 0 || pair.keepApart.length > 0))) && (
        <section className="pairSection">
          <div className="pairHead">
            <p className="eyebrow">{ar ? "الاقتران" : "THE PAIRING"}</p>
            {stack ? (
              <div className="pairStack">
                {stack.items.map((it, i) => (
                  <span key={it.name} className="stackItem">
                    {i > 0 && <span className="stackPlus" aria-hidden="true">+</span>}
                    <span className={it.dim ? "stackName dim" : "stackName"}>{(ar && stackNameAr[it.name]) || it.name}</span>
                  </span>
                ))}
                <span className="stackTag">{ar ? stack.tag.ar : stack.tag.en}</span>
              </div>
            ) : (
              <h2>{ar ? "مع وش تاخذه، وعن وش تبعده" : "What to pair it with, and what to keep it away from"}</h2>
            )}
          </div>

          <div className="pairGrid">
            <div className="pairCol">
              <p className="pairColLabel good">{ar ? "تناوله مع" : "Pair with"}</p>
              {(!pair || pair.pairWith.length === 0) && (
                <p className="quietText">{ar ? "لا اقتران عام مفيد." : "No useful general pairing."}</p>
              )}
              {(pair?.pairWith || []).map((x) => {
                const st = strengthMeta[x.strength];
                return (
                  <article key={x.with}>
                    <div className="pairTop">
                      {x.slug ? (
                        <Link href={`/${lang}/ingredient/${x.slug}`} className="pairName">{(ar && pairNameAr[x.with]) || x.with}</Link>
                      ) : (
                        <span className="pairName">{(ar && pairNameAr[x.with]) || x.with}</span>
                      )}
                      <span className={`verdict v-${st.tone} vSmall`}>{ar ? st.ar : st.en}</span>
                    </div>
                    <p>{ar ? x.why.ar : x.why.en}</p>
                    {x.source ? (
                      <a href={x.source.url} target="_blank" rel="noreferrer" className="pairSrc">
                        {x.source.label} ↗
                      </a>
                    ) : (
                      <span className="pairSrcNone">
                        {ar
                          ? "لا توصية من جهة مرجعية. مُدرج على أساس الآلية فقط."
                          : "No authoritative body recommends this. Listed on mechanism only."}
                      </span>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="pairCol">
              <p className="pairColLabel warn">{ar ? "لا تجمعه مع" : "Keep apart from"}</p>
              {(!pair || pair.keepApart.length === 0) && (
                <p className="quietText">{ar ? "لا قاعدة فصل عامة." : "No general separation rule."}</p>
              )}
              {(pair?.keepApart || []).map((x) => (
                <article key={x.from}>
                  <div className="pairTop">
                    {x.slug ? (
                      <Link href={`/${lang}/ingredient/${x.slug}`} className="pairName">{(ar && pairNameAr[x.from]) || x.from}</Link>
                    ) : (
                      <span className="pairName">{(ar && pairNameAr[x.from]) || x.from}</span>
                    )}
                    <span className="verdict v-warn vSmall">{ar ? strengthMeta.caution.ar : strengthMeta.caution.en}</span>
                  </div>
                  <p>{ar ? x.why.ar : x.why.en}</p>
                  {x.source && (
                    <a href={x.source.url} target="_blank" rel="noreferrer" className="pairSrc">
                      {x.source.label} ↗
                    </a>
                  )}
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

      {d.hormoneNote && (
        <section className="claimCheck">
          <p className="eyebrow">{ar ? "فحص ادعاء" : "CLAIM CHECK"}</p>
          <h2>{d.hormoneNote.claim}</h2>
          <div className="ccRows">
            <div>
              <small>{ar ? "الآلية المقترحة" : "The proposed mechanism"}</small>
              <p>{d.hormoneNote.mechanism}</p>
            </div>
            <div>
              <small>{ar ? "ما حجم الدليل" : "How big is the evidence"}</small>
              <p>{d.hormoneNote.evidence}</p>
            </div>
            <div className="ccPremise">
              <small>{ar ? "المشكلة في الافتراض نفسه" : "The problem with the premise"}</small>
              <p>{d.hormoneNote.premise}</p>
            </div>
          </div>
          <div className="ccVerdict">
            <small>{ar ? "موقف A7i" : "A7i POSITION"}</small>
            <strong>{d.hormoneNote.verdict}</strong>
          </div>
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
          <div className="deeperBody">
            {formList ? (
              <>
                <p>{ar ? formList.lead.ar : formList.lead.en}</p>
                <div className="formList">
                  {formList.items.map((f) => {
                    const fs = formStrength[f.strength];
                    return (
                      <details className="formRow" key={f.name}>
                        <summary>
                          <span className="formName">{(ar && formNameAr[f.name]) || f.name}</span>
                          <span className={`verdict v-${fs.tone} vSmall`}>{ar ? fs.ar : fs.en}</span>
                        </summary>
                        <p>{ar ? f.why.ar : f.why.en}</p>
                      </details>
                    );
                  })}
                </div>
                <p className="formNote">
                  {ar
                    ? "\"ادعاء تسويقي\" يعني أن الادعاء شائع لكن الدليل البشري ضعيف أو غائب."
                    : "\"Marketed claim\" means the claim is widely made but human evidence is thin or absent."}
                </p>
              </>
            ) : (
              <p>{d.forms}</p>
            )}
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modAbsorption}</summary>
          <div className="deeperBody deeperSplit">
            <div>
              <small>{ar ? "قد يساعد" : "MAY HELP"}</small>
              <BulletList items={d.absorption.helps} empty={ar ? "ما فيه قاعدة عامة." : "No useful universal rule."} />
            </div>
            <div>
              <small>{ar ? "قد يقلل الامتصاص" : "CAN REDUCE UPTAKE"}</small>
              <BulletList items={d.absorption.reduces} empty={ar ? "ما فيه قاعدة عامة." : "No useful universal rule."} />
            </div>
            {d.absorption.note && (
              <div className="absNote">
                <small>{ar ? "للعلم، وليست توصية" : "NOTED, NOT RECOMMENDED"}</small>
                <BulletList items={d.absorption.note} empty="" />
              </div>
            )}
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
            <BulletList items={d.absorption.separate} empty={ar ? "ما فيه قاعدة فصل عامة." : "No universal separation rule."} />
          </div>
        </details>

        <details className="deeper" name="deeper">
          <summary>{t.modSafety}</summary>
          <div className="deeperBody">
            <p>
              {ar
                ? "راجع طبيبك أو الصيدلي إذا كان عندك مرض أو تأخذ أدوية أو كنتِ حاملاً أو عندك أعراض أو تشك في نقص."
                : "Ask your doctor, pharmacist or qualified healthcare professional if you have a medical condition, take medicines, are pregnant, have symptoms or suspect a deficiency."}
            </p>
            <BulletList items={d.absorption.separate} empty={ar ? "ما فيه تحذيرات فصل عامة." : "No universal separation warnings."} />
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

      <section className="sourcesBlock">
        <p className="eyebrow">{ar ? "المصادر" : "SOURCES"}</p>
        <p className="srcLead">
          {ar
            ? "كل رقم ومطالبة في هذه الصفحة تستند إلى المراجع أدناه. حين لا يوجد مرجع رسمي، تقول الصفحة ذلك صراحةً."
            : "Every figure and claim on this page rests on the references below. Where no authoritative source exists, the page says so rather than implying one."}
        </p>
        <ul className="srcList">
          {item.sources.map((sc) => (
            <li key={sc.url}>
              <a href={sc.url} target="_blank" rel="noreferrer">{sc.label} ↗</a>
              <span>{sc.type}</span>
            </li>
          ))}
        </ul>
        <p className="srcNote">
          {ar
            ? "أرقام تركيب الأغذية قيم تقريبية نموذجية لكل حصة، وتتفاوت حسب الصنف والتربة والتحضير."
            : "Food composition figures are typical approximate values per stated serving, and vary with variety, soil and preparation."}
        </p>
      </section>

      <aside className="medicalCallout">
        <strong>
          {ar
            ? "حالتك الشخصية أهم من أي صفحة ويب."
            : "Your individual context matters more than a webpage."}
        </strong>
        <p>
          {ar
            ? "راجع طبيبك أو الصيدلي قبل أن تبدأ أي مكمّل أو تغيّره."
            : "Ask your doctor, pharmacist or qualified healthcare professional before starting or changing any supplement."}
        </p>
      </aside>
    </main>
  );
}
