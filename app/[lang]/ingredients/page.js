import Link from "next/link";
import { notFound } from "next/navigation";
import { supportedLangs } from "@/lib/i18n";
import IngredientIndex from "@/components/IngredientIndex";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar ? "كل المكوّنات A–Z" : "All ingredients A–Z",
    description: ar
      ? "الفهرس الكامل للمكوّنات في A7i، مرتباً أبجدياً مع بحث وتصفية بالفئة."
      : "The full A7i ingredient index, alphabetical, with search and category filtering.",
    alternates: {
      canonical: `/${lang}/ingredients`,
      languages: { en: "/en/ingredients", ar: "/ar/ingredients", "x-default": "/en/ingredients" },
    },
  };
}

export default async function IngredientsPage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const ar = lang === "ar";

  return (
    <main className="shell azPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{ar ? "كل المكوّنات" : "All ingredients"}</span>
      </nav>

      <header className="goalHero">
        <h1>{ar ? "كل المكوّنات" : "All ingredients"}</h1>
        <p className="goalLead">
          {ar
            ? "كل ما يعرفه A7i، مرتباً أبجدياً. المكوّنات التي لها دليل مُراجَع قابلة للفتح؛ والبقية مفهرسة وقابلة للبحث بينما تُراجَع."
            : "Everything A7i tracks, alphabetically. Ingredients with a reviewed guide open; the rest are indexed and searchable while they are being reviewed."}
        </p>
      </header>

      <IngredientIndex lang={lang} />
    </main>
  );
}
