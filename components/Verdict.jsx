import { verdictMeta } from "@/data/browse";

export default function Verdict({ id, lang = "en", small = false }) {
  const m = verdictMeta[id];
  if (!m) return null;
  return (
    <span className={`verdict v-${m.tone}${small ? " vSmall" : ""}`}>
      {lang === "ar" ? m.ar : m.en}
    </span>
  );
}
