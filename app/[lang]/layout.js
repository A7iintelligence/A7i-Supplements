import Link from "next/link";
import { notFound } from "next/navigation";
import { supportedLangs, getUi } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import { Analytics } from "@vercel/analytics/next";

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
          <Link className="brand" href={`/${lang}`} aria-label="A7i Supplements">
            <img src="/logo-wordmark.png" alt="A7i Supplements" className="brandLogo" />
          </Link>
          <nav className="miniNav" aria-label="Primary">
            <Link href={`/${lang}#search`}>{t.navSearch}</Link>
            <Link href={`/${lang}/ingredients`}>{t.navExplore}</Link>
            <LanguageToggle lang={lang} />
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div className="footerTop">
            <img src="/logo-wordmark-white.png" alt="A7i Supplements" className="footerLogo" />
            <strong>{t.footerTitle}</strong>
          </div>
          <ul className="footerNav">
            {t.footerNav.map(([label, href]) => (
              <li key={href}>
                <Link href={`/${lang}${href}`}>{label}</Link>
              </li>
            ))}
          </ul>
          <p className="footerNote">{t.footerNote}</p>
          <p className="footerCopy">© 2026 A7i Supplements</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
