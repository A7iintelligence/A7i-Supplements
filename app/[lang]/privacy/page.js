import Link from "next/link";
import { notFound } from "next/navigation";
import { supportedLangs } from "@/lib/i18n";

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    title: ar ? "الخصوصية" : "Privacy",
    description: ar
      ? "كيف تتعامل A7i مع البيانات."
      : "How A7i handles data.",
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { en: "/en/privacy", ar: "/ar/privacy", "x-default": "/en/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const ar = lang === "ar";

  return (
    <main className="shell docPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{ar ? "الخصوصية" : "Privacy"}</span>
      </nav>

      <h1>{ar ? "الخصوصية" : "Privacy"}</h1>
      <p className="docLead">
        {ar
          ? "A7i موقع للقراءة. لا يتطلّب حساباً ولا يطلب بياناتك الصحية."
          : "A7i is a place to read. It requires no account and does not ask for your health data."}
      </p>

      <section className="docSection">
        <h2>{ar ? "ما نجمعه" : "What we collect"}</h2>
        <p>
          {ar
            ? "نستخدم تحليلات مجمّعة ومجهولة الهوية لفهم الصفحات الأكثر فائدة. لا نبني ملفات شخصية عنك ولا نبيع بيانات."
            : "We use aggregate, anonymised analytics to understand which pages are most useful. We do not build personal profiles of you and we do not sell data."}
        </p>
      </section>

      <section className="docSection">
        <h2>{ar ? "بحثك" : "Your searches"}</h2>
        <p>
          {ar
            ? "يجري البحث في متصفّحك على فهرس مُحمّل مسبقاً. ما تكتبه في مربّع البحث لا يُرسل إلينا كسجلّ شخصي."
            : "Search runs in your browser against a preloaded index. What you type into the search box is not sent to us as a personal record."}
        </p>
        <p className="muted">
          {ar ? "أسئلة؟ راجع " : "Questions? See our "}
          <Link href={`/${lang}/standards`}>{ar ? "المعايير" : "standards"}</Link>.
        </p>
      </section>
    </main>
  );
}
