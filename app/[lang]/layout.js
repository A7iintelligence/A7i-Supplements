import Link from "next/link";
import { notFound } from "next/navigation";
import { supportedLangs, getUi } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const t = getUi(lang);

  return (
    <html lang={lang} dir={t.dir}>
      <body>
        <div className="safety">{t.safetyStrip}</div>

        <header className="header">
          <Link className="brand" href={`/${lang}`}>
            <strong>{t.brand}</strong>
            <span>{t.brandTag}</span>
          </Link>
          <nav className="miniNav" aria-label="Primary">
            <Link href={`/${lang}#search`}>{t.navSearch}</Link>
            <Link href={`/${lang}#explore`}>{t.navExplore}</Link>
            <LanguageToggle lang={lang} />
          </nav>
        </header>

        {children}

        <footer className="footer">
          <strong>{t.footerTitle}</strong>
          <p>{t.footerNote}</p>
          <p>© 2026 A7i Supplements</p>
        </footer>
      </body>
    </html>
  );
}
