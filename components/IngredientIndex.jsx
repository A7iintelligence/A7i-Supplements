"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { masterIndex, indexCategories } from "@/data/index-master";

// A–Z reference index. Every ingredient in the system is reachable here,
// whether or not it has a published guide. Indexed-only entries render as
// plain text, never as a link to an empty page.

export default function IngredientIndex({ lang }) {
  const ar = lang === "ar";
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return masterIndex.filter((e) => {
      if (cat && e.category !== cat) return false;
      if (!term) return true;
      return [e.name, ...(e.aliases || [])]
        .filter(Boolean)
        .some((n) => n.toLowerCase().includes(term));
    });
  }, [q, cat]);

  const letters = useMemo(() => {
    const map = {};
    for (const e of filtered) {
      const L = e.name[0].toUpperCase();
      (map[L] = map[L] || []).push(e);
    }
    return Object.keys(map)
      .sort()
      .map((L) => [L, map[L].sort((a, b) => a.name.localeCompare(b.name))]);
  }, [filtered]);

  return (
    <div className="azIndex">
      <div className="azControls">
        <div className="bigSearch azSearch">
          <span className="magnifier" aria-hidden="true">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={ar ? "ابحث في المكتبة" : "Search the library"}
            aria-label={ar ? "ابحث في المكتبة" : "Search the library"}
          />
          {q && (
            <button type="button" className="clearBtn" onClick={() => setQ("")} aria-label="Clear">×</button>
          )}
        </div>

        <div className="azCats" role="group" aria-label={ar ? "الفئات" : "Categories"}>
          <button type="button" className={!cat ? "on" : ""} onClick={() => setCat(null)}>
            {ar ? "الكل" : "All"}
          </button>
          {indexCategories.map(([id, en, arLabel]) => (
            <button
              key={id}
              type="button"
              className={cat === id ? "on" : ""}
              onClick={() => setCat(cat === id ? null : id)}
            >
              {ar ? arLabel : en}
            </button>
          ))}
        </div>
      </div>

      <p className="azCount">
        {ar
          ? `${filtered.length} مدخل`
          : `${filtered.length} ${filtered.length === 1 ? "entry" : "entries"}`}
      </p>

      {letters.length === 0 && (
        <p className="quietText">{ar ? "لا نتائج." : "Nothing matched."}</p>
      )}

      {letters.map(([letter, items]) => (
        <section className="azGroup" key={letter}>
          <h2 className="azLetter">{letter}</h2>
          <ul>
            {items.map((e) => (
              <li key={e.name}>
                {e.slug ? (
                  <Link href={`/${lang}/ingredient/${e.slug}`} className="azLink">
                    <span>{e.name}</span>
                    <em aria-hidden="true">{ar ? "←" : "→"}</em>
                  </Link>
                ) : (
                  <span className="azPlain">{e.name}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
