"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { categories, searchKnowledge, getReviewed } from "@/data/catalog";
import { searchPlaceholders } from "@/data/site";
import { browseIndex, verdicts, verdictMeta } from "@/data/browse";
import { getUi } from "@/lib/i18n";

function VerdictTag({ id, lang }) {
  const m = verdictMeta[id];
  if (!m) return null;
  return <span className={`verdict v-${m.tone} vSmall`}>{lang === "ar" ? m.ar : m.en}</span>;
}

function AnswerCard({ slug, lang }) {
  const item = getReviewed(slug);
  if (!item) return null;
  const d = item[lang] || item.en;
  const t = getUi(lang);
  const [food, amount] = d.food[0];

  return (
    <div className="answerCard">
      <div className="answerHead">
        <span className="answerName">{d.name}</span>
        {verdicts[slug] && <VerdictTag id={verdicts[slug]} lang={lang} />}
      </div>
      <p className="answerLine">
        {food} · {amount}. {d.target.split(".")[0]}.
      </p>
      <div className="answerChips">
        <span>
          <small>{t.indFood}</small>
          {d.foodVsShelf.canFood.replace(/[—.].*$/, "").trim()}
        </span>
        <span>
          <small>{t.indTiming}</small>
          {d.absorption.meal.split(";")[0].split(".")[0]}
        </span>
      </div>
      <Link href={`/${lang}/ingredient/${slug}`} className="answerLink">
        {t.openGuide}
      </Link>
    </div>
  );
}

export default function SearchExperience({ lang, lockedCategory = null }) {
  const t = getUi(lang);
  const ar = lang === "ar";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(lockedCategory);
  const [phIndex, setPhIndex] = useState(0);
  const focused = useRef(false);

  const placeholders = searchPlaceholders[ar ? "ar" : "en"];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      if (!focused.current) setPhIndex((i) => (i + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(id);
  }, [placeholders.length]);

  const q = query.trim();
  const results = useMemo(() => searchKnowledge(q, category), [q, category]);
  const suggestions = useMemo(
    () => (q.length > 2 ? searchKnowledge(q.slice(0, 2), null) : []),
    [q]
  );
  const groups = category ? browseIndex[category] : null;

  return (
    <section className="searchExperience" id="search">
      <div className="bigSearch">
        <span className="magnifier" aria-hidden="true">⌕</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => (focused.current = true)}
          onBlur={() => (focused.current = false)}
          placeholder={placeholders[phIndex]}
          aria-label={t.navSearch}
        />
        {query && (
          <button type="button" className="clearBtn" onClick={() => setQuery("")} aria-label="Clear search">
            ×
          </button>
        )}
      </div>

      {!lockedCategory && (
        <div className="categoryRail" id="explore" role="group" aria-label={t.navExplore}>
          <button type="button" className={category === null ? "active" : ""} onClick={() => setCategory(null)}>
            {t.allCategories}
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={category === c.slug ? "active" : ""}
              onClick={() => setCategory(category === c.slug ? null : c.slug)}
            >
              {ar ? c.ar : c.label}
            </button>
          ))}
        </div>
      )}

      {!q && category && groups && (
        <div className="browsePanel inSearch">
          {groups.map((g) => (
            <div className="browseGroup" key={g.group.en}>
              <p className="eyebrow">{ar ? g.group.ar : g.group.en}</p>
              <ul>
                {g.items.map((item) => {
                  const inner = (
                    <>
                      <span className="bName">{item.name}</span>
                      {item.symbol && <span className="bSym">{item.symbol}</span>}
                      {item.slug && verdicts[item.slug] && (
                        <span className="bVerdict">
                          <VerdictTag id={verdicts[item.slug]} lang={lang} />
                        </span>
                      )}
                    </>
                  );
                  return (
                    <li key={item.name + (item.slug || "")}>
                      {item.slug ? (
                        <Link href={`/${lang}/ingredient/${item.slug}`} className="bRow bLink">
                          {inner}
                        </Link>
                      ) : (
                        <span className="bRow">{inner}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {q && (
        <div className="searchResults" role="region" aria-live="polite">
          {results.length === 0 && (
            <div className="emptySearch">
              <p>{t.emptySearch}</p>
              {suggestions.length > 0 && (
                <div className="didYouMean">
                  <small>{t.didYouMean}</small>
                  {suggestions.slice(0, 3).map((s) => (
                    <button key={s.name} type="button" onClick={() => setQuery(s.name)}>
                      {s.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {results.map((r, i) => {
            const cat = categories.find((c) => c.slug === r.category);
            const catLabel = cat ? (ar ? cat.ar : cat.label) : r.category;

            if (r.status === "reviewed" && i === 0) {
              return <AnswerCard key={r.slug} slug={r.slug} lang={lang} />;
            }

            if (r.status === "reviewed") {
              return (
                <Link href={`/${lang}/ingredient/${r.slug}`} className="searchResult" key={`${r.category}-${r.name}`}>
                  <span className="srName">{r.name}</span>
                  <span className="srCat">{catLabel}</span>
                  {verdicts[r.slug] && <VerdictTag id={verdicts[r.slug]} lang={lang} />}
                </Link>
              );
            }

            return (
              <div className="searchResult quiet" key={`${r.category}-${r.name}`}>
                <span className="srName">{r.name}</span>
                <span className="srCat">{catLabel}</span>
                {r.status === "research-only" && (
                  <span className="verdict v-warn vSmall">{t.researchOnlyTag}</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
