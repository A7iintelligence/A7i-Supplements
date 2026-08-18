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
    title: ar ? "المعايير" : "Standards",
    description: ar
      ? "المنهجية وتصنيف الأدلة وسياسة التحرير والمصادر والتصحيحات في A7i."
      : "A7i's methodology, evidence grading, editorial policy, sources and corrections.",
    alternates: {
      canonical: `/${lang}/standards`,
      languages: { en: "/en/standards", ar: "/ar/standards", "x-default": "/en/standards" },
    },
  };
}

export default async function StandardsPage({ params }) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang)) notFound();
  const ar = lang === "ar";

  return (
    <main className="shell docPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href={`/${lang}`}>A7i</Link>
        <span aria-hidden="true">→</span>
        <span>{ar ? "المعايير" : "Standards"}</span>
      </nav>

      <h1>{ar ? "المعايير" : "Standards"}</h1>
      <p className="docLead">
        {ar
          ? "كيف نقرر ما يُنشر، وكيف نصف قوة الدليل، وكيف نصحّح أخطاءنا."
          : "How we decide what gets published, how we describe the strength of evidence, and how we correct our mistakes."}
      </p>

      <section className="docSection">
        <h2 id="methodology">{ar ? "المنهجية" : "Methodology"}</h2>
        <p>
          {ar
            ? "نبدأ من المكوّن أو المنتج كما يُباع فعلاً، ثم نسأل: ماذا يفعل، وهل يوفّره الغذاء بشكل واقعي، وأي جرعة وشكل يهمّان، وبماذا يتداخل. الدليل يسبق أي ادّعاء تسويقي."
            : "We start from the ingredient or product as it is actually sold, then ask: what does it do, can food realistically provide it, what dose and form matter, and what does it interact with. Evidence comes before any marketing claim."}
        </p>
        <p>
          {ar
            ? "لا ننشر أرقام جرعات تتجاوز القيم المرجعية الرسمية (RDA/UL) حتى لو وردت في مصادرنا. حين يعتمد الأمر على وضعك الشخصي، نقول ذلك ونحيلك إلى مختصّ."
            : "We do not publish dose figures that exceed official reference values (RDA/UL), even where a source states them. When something depends on your individual context, we say so and refer you to a clinician."}
        </p>
      </section>

      <section className="docSection">
        <h2 id="evidence-grading">{ar ? "تصنيف الأدلة" : "Evidence grading"}</h2>
        <p>
          {ar
            ? "قوة الدليل خاصّة بالنتيجة، لا حكم عام على المكوّن. قد يكون الدليل قوياً لنتيجة وضعيفاً لأخرى، ونقولها هكذا بدل تلخيصها في وسم واحد."
            : "Strength of evidence is specific to an outcome, not a single global verdict on an ingredient. Evidence can be strong for one outcome and weak for another, and we say so rather than collapsing it into one badge."}
        </p>
        <ul>
          <li>{ar ? "قوي — دليل متّسق من تجارب جيدة التصميم." : "Strong — consistent evidence from well-designed trials."}</li>
          <li>{ar ? "متوسط — دليل داعم لكنه محدود أو مختلط." : "Moderate — supportive but limited or mixed evidence."}</li>
          <li>{ar ? "محدود — إشارات مبكرة تحتاج تأكيداً." : "Limited — early signals that need confirmation."}</li>
        </ul>
      </section>

      <section className="docSection">
        <h2 id="editorial-policy">{ar ? "سياسة التحرير" : "Editorial policy"}</h2>
        <p>
          {ar
            ? "المحتوى مستقلّ عن أي بائع. لا نبيع مكمّلات ولا نعرض إعلانات مدفوعة داخل الصفحات، والروابط ليست مقابل مال."
            : "Content is independent of any seller. We do not sell supplements or run paid placements inside pages, and links are not paid for."}
        </p>
        <p>
          {ar
            ? "نكتب بالإنجليزية والعربية، ويُراجع المحتوى العربي بشكل منفصل لا كترجمة آلية. نذكر حدود اليقين صراحةً."
            : "We publish in English and Arabic, with Arabic reviewed on its own terms rather than machine-translated. We state the limits of certainty explicitly."}
        </p>
      </section>

      <section className="docSection">
        <h2 id="sources">{ar ? "المصادر" : "Sources"}</h2>
        <p>
          {ar
            ? "نعتمد على مصادر أولية حيثما أمكن: أبحاث محكّمة وجهات رسمية. تحمل كل صفحة مُراجَعة مصادرها، ونفضّل الأصل على المُجمّعات."
            : "We rely on primary sources where possible: peer-reviewed research and official bodies. Each reviewed page carries its sources, and we prefer originals over aggregators."}
        </p>
      </section>

      <section className="docSection">
        <h2 id="corrections">{ar ? "التصحيحات" : "Corrections"}</h2>
        <p>
          {ar
            ? "إذا نشرنا خطأً، نصحّحه. الدقّة أهم من حفظ ماء الوجه. إن وجدت خطأً، تواصل معنا وسنراجعه."
            : "If we publish something wrong, we fix it. Accuracy matters more than saving face. If you find an error, tell us and we will review it."}
        </p>
      </section>
    </main>
  );
}
