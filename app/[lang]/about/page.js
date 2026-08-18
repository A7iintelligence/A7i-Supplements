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
    title: ar ? "عن A7i" : "About",
    description: ar
      ? "A7i منصّة معلومات عن المكمّلات تقوم على الدليل، تشرح ماذا تفعل المكمّلات وماذا يوفّر الغذاء."
      : "A7i is an evidence-led supplement information platform explaining what supplements do and what food can provide.",
    alternates: {
      canonical: `/${lang}/about`,
      languages: { en: "/en/about", ar: "/ar/about", "x-default": "/en/about" },
    },
  };
}

export default async function AboutPage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const ar = lang === "ar";

  return (
    <main className="shell docPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{ar ? "عن A7i" : "About"}</span>
      </nav>

      <h1>{ar ? "عن A7i" : "About A7i"}</h1>
      <p className="docLead">
        {ar
          ? "A7i منصّة معلومات عن المكمّلات تقوم على الدليل، للخليج وبالعربية والإنجليزية. الهدف بسيط: أن تفهم ما تتناوله قبل أن تتناوله."
          : "A7i is an evidence-led supplement information platform for the Gulf, in Arabic and English. The aim is simple: understand what you are taking before you take it."}
      </p>

      <section className="docSection">
        <h2>{ar ? "ما نقيس عليه" : "What we stand on"}</h2>
        <p>
          {ar
            ? "الدليل قبل التسويق. الغذاء أولاً حين يكون ذلك عملياً. ونذكر حدود اليقين العلمي بوضوح بدل إخفائها."
            : "Evidence before marketing. Food first where that is practical. And we state the limits of scientific certainty plainly rather than hiding them."}
        </p>
        <p>
          {ar
            ? "حين يعتمد الأمر على وضعك الشخصي، نحيلك إلى مختصّ. A7i معلومات تعليمية، وليست بديلاً عن الطبيب أو الصيدلي."
            : "When the answer depends on your individual context, we point you to a clinician. A7i is educational information, not a substitute for your doctor or pharmacist."}
        </p>
      </section>

      <section className="docSection">
        <h2>{ar ? "لمن هذا" : "Who it is for"}</h2>
        <p>
          {ar
            ? "لأي شخص يريد قراءة صادقة عن مكوّن أو منتج قبل الشراء: ماذا يفعل، وهل يكفي الغذاء، وأي جرعة وشكل يهمّان، وبماذا يتداخل، وما قوة الدليل فعلاً."
            : "Anyone who wants an honest read on an ingredient or product before buying: what it does, whether food can cover it, what dose and form matter, what it interacts with, and how strong the evidence actually is."}
        </p>
        <p className="muted">
          {ar
            ? "ابدأ من "
            : "Start from the "}
          <Link href={`/${lang}`}>{ar ? "الصفحة الرئيسية" : "home page"}</Link>
          {ar ? " أو تصفّح " : " or browse "}
          <Link href={`/${lang}/ingredients`}>{ar ? "كل المكوّنات A–Z" : "all ingredients A–Z"}</Link>.
        </p>
      </section>
    </main>
  );
}
