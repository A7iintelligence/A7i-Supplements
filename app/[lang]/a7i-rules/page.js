import Link from "next/link";
import { notFound } from "next/navigation";
import { supportedLangs, getUi } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar ? "قواعد A7i" : "A7i Rules",
    description: ar
      ? "أربع قواعد تحكم ما ينشره A7i وكيف يقيّم الدليل."
      : "Four rules that govern what A7i publishes and how it grades evidence.",
    alternates: {
      canonical: `/${lang}/a7i-rules`,
      languages: { en: "/en/a7i-rules", ar: "/ar/a7i-rules", "x-default": "/en/a7i-rules" },
    },
  };
}

export default async function RulesPage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const t = getUi(lang);
  const ar = lang === "ar";

  return (
    <main className="shell rulesPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{t.rulesPageTitle}</span>
      </nav>

      <header className="goalHero">
        <h1>{t.rulesPageTitle}</h1>
        <p className="goalLead">
          {ar
            ? "أربع قواعد تحكم ما ننشره وكيف نقيّم الدليل. إذا تعارض شيء معها، لا يُنشر."
            : "Four rules that govern what we publish and how we grade evidence. If something conflicts with them, it does not go on the site."}
        </p>
      </header>

      <ol className="rulesScroll">
        {t.rules.map(([num, rule]) => (
          <li key={num}>
            <span className="ruleNum">{num}</span>
            <p className="ruleText">{rule}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
