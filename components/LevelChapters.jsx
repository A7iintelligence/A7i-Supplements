"use client";

import { useState } from "react";
import Link from "next/link";
import { LEVELS } from "@/data/architecture";
import { slugsForLevel } from "@/data/levels";
import { getReviewed } from "@/data/catalog";

export default function LevelChapters({ lang, note }) {
  const ar = lang === "ar";
  const [open, setOpen] = useState(null);

  return (
    <section className="chapters">
      <div className="shell">
        <p className="chaptersNote">{note}</p>
        {LEVELS.map((lv) => {
          const d = lv[lang] || lv.en;
          const isOpen = open === lv.id;
          const published = slugsForLevel(lv.id)
            .map(getReviewed)
            .filter(Boolean);

          return (
            <article key={lv.id} className={`chapter ch-${lv.id}${isOpen ? " isOpen" : ""}`}>
              <button
                type="button"
                className="chapterHead"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : lv.id)}
              >
                <span className="chNum">{lv.num}</span>
                <span className="chBody">
                  <span className="chName">{d.name}</span>
                  <span className="chLead">{d.lead}</span>
                  <span className="chInside">{d.inside}</span>
                </span>
                <span className="chCta">
                  {d.cta}
                  <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </span>
              </button>

              {isOpen && (
                <div className="chapterOpen">
                  {lv.groups.map((g) => (
                    <div className="chGroup" key={g.id}>
                      <p className="eyebrow">{ar ? g.ar : g.en}</p>

                      {g.isLibrary ? (
                        <p className="chLibrary">
                          <Link href={`/${lang}/ingredients`}>
                            {ar ? "كل المكوّنات A–Z ←" : "All ingredients A–Z →"}
                          </Link>
                        </p>
                      ) : (
                        <ul className="chItems">
                          {g.items.map((it) => (
                            <li key={it} className={g.restricted ? "restricted" : undefined}>
                              {it}
                              {g.restricted && (
                                <em>{ar ? "جزيء بحثي" : "Research molecule"}</em>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {published.length > 0 && (
                    <div className="chGroup chPublished">
                      <p className="eyebrow">
                        {ar ? "أدلة متاحة الآن" : "Guides available now"}
                      </p>
                      <ul className="chGuides">
                        {published.map((item) => {
                          const nm = (item[lang] || item.en).name;
                          return (
                            <li key={item.slug}>
                              <Link href={`/${lang}/ingredient/${item.slug}`}>
                                <span>{nm}</span>
                                <em aria-hidden="true">{ar ? "←" : "→"}</em>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
