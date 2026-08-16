import Link from "next/link";
import { notFound } from "next/navigation";
import { enzymeIntro, enzymeGroups } from "@/data/enzymes";
import { supportedLangs, getUi } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const d = enzymeIntro[lang] || enzymeIntro.en;
  return {
    title: d.title,
    description: d.lead,
    alternates: {
      canonical: `/${lang}/how-minerals-work`,
      languages: {
        en: "/en/how-minerals-work",
        ar: "/ar/how-minerals-work",
        "x-default": "/en/how-minerals-work",
      },
    },
  };
}

export default async function EnzymePage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const t = getUi(lang);
  const ar = lang === "ar";
  const d = enzymeIntro[lang] || enzymeIntro.en;

  return (
    <main className="shell enzymePage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{d.title}</span>
      </nav>

      <header className="goalHero">
        <p className="eyebrow">{ar ? "شرح" : "EXPLAINER"}</p>
        <h1>{d.title}</h1>
        <p className="goalLead">{d.lead}</p>
      </header>

      <aside className="redFlag">
        <span className="rfMark" aria-hidden="true">!</span>
        <p>{d.caution}</p>
      </aside>

      {enzymeGroups.map((g) => (
        <section className="goalSection" key={g.group.en}>
          <p className="eyebrow">{ar ? g.group.ar : g.group.en}</p>
          <div className="enzymeList">
            {g.items.map((e) => (
              <article key={e.name}>
                <div className="enzHead">
                  <span className="enzName">{e.name}</span>
                  <span className="enzDep">{e.dependsOn}</span>
                </div>
                <p>{ar ? e.role.ar : e.role.en}</p>
                <p className="enzDeficit">
                  <span>{ar ? "عند النقص" : "When it falls short"}</span>
                  {ar ? e.deficit.ar : e.deficit.en}
                </p>
                {e.slugs.length > 0 && (
                  <p className="enzLinks">
                    {e.slugs.map((s) => (
                      <Link key={s} href={`/${lang}/ingredient/${s}`}>{s.replace(/-/g, " ")}</Link>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      <aside className="honestBox">
        <strong>{ar ? "لماذا هذا مهم" : "Why this matters"}</strong>
        <p>
          {ar
            ? "هذه الصفحة تفسّر لماذا ترتبط المعادن ببعضها: النحاس يؤثر على الحديد لأن إنزيمات الحديد نحاسية، والزنك يؤثر على النحاس لأنهما يتنافسان. الآلية تفسّر الارتباط، لكنها لا تثبت أن المكمل يفيد."
            : "This page explains why minerals are linked to each other: copper affects iron because the iron-releasing enzymes are copper enzymes, and zinc affects copper because they compete. Mechanism explains the link. It does not prove a supplement helps."}
        </p>
      </aside>
    </main>
  );
}
