import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, reviewed, getCategory } from "@/data/catalog";
import { categorySubtypes } from "@/data/site";
import { supportedLangs, getUi } from "@/lib/i18n";
import SearchExperience from "@/components/SearchExperience";

export function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    categories.map((c) => ({ lang, category: c.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  const ar = lang === "ar";
  return {
    title: ar ? cat.ar : cat.label,
    description: ar ? cat.definitionAr : cat.definition,
    alternates: {
      canonical: `/${lang}/category/${category}`,
      languages: {
        en: `/en/category/${category}`,
        ar: `/ar/category/${category}`,
        "x-default": `/en/category/${category}`,
      },
    },
  };
}

export default async function CategoryPage({ params }) {
  const { lang, category } = await params;
  const cat = getCategory(category);
  if (!cat || !supportedLangs.includes(lang)) notFound();

  const t = getUi(lang);
  const ar = lang === "ar";
  const reviewedHere = reviewed.filter((i) => i.category === category);
  const subtypes = categorySubtypes[category]?.[ar ? "ar" : "en"] || [];

  return (
    <main className="shell categoryPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{ar ? cat.ar : cat.label}</span>
      </nav>

      <header>
        <p className="eyebrow">{ar ? "فئة" : "CATEGORY"}</p>
        <h1>{ar ? cat.ar : cat.label}</h1>
        <p>{ar ? cat.definitionAr : cat.definition}</p>
      </header>

      {subtypes.length > 0 && (
        <section className="categorySeoCopy">
          <h2>{t.whatBelongs}</h2>
          <ul className="subtypeList">
            {subtypes.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      )}

      <section className="categorySearch">
        <p className="eyebrow">{t.searchWithin}</p>
        <SearchExperience lang={lang} lockedCategory={category} compact />
      </section>

      {reviewedHere.length > 0 && (
        <section className="categoryGuides">
          <p className="eyebrow">{t.guidesIn}</p>
          <div className="reviewedStrip">
            {reviewedHere.map((item) => (
              <Link key={item.slug} href={`/${lang}/ingredient/${item.slug}`}>
                <small>{ar ? cat.ar : cat.label}</small>
                <strong>{item.en.name}</strong>
                <span>{t.openGuide}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
