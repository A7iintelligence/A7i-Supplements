"use client";

import { useEffect, useState } from "react";

// Sticky in-page navigation. Sections are anchors already present in the
// document, so nothing is hidden from crawlers.

export default function IngredientNav({ items, lang }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="ingredientNav" aria-label={lang === "ar" ? "أقسام الصفحة" : "Page sections"}>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={active === i.id ? "on" : undefined}
              aria-current={active === i.id ? "true" : undefined}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
