"use client";

import { useEffect, useRef, useState } from "react";

// The approved A7i mark is used as supplied artwork. It is never redrawn,
// reconstructed, recoloured or distorted. Only the illumination behind it
// and the category labels around it move — and they move by crossfade in
// fixed anchor positions, never by orbiting the mark.

const POOL = {
  en: [
    "Vitamins", "Minerals", "Protein", "Amino acids", "Electrolytes",
    "Fatty acids", "Enzymes", "Prebiotics", "Probiotics", "Postbiotics",
    "Botanicals", "Peptides", "Collagen", "Mushrooms", "Polyphenols",
    "Lipids", "Performance", "Metabolic health", "Mitochondria",
    "Microbiome", "Hormone health", "Healthy ageing",
  ],
  ar: [
    "الفيتامينات", "المعادن", "البروتين", "الأحماض الأمينية", "الإلكتروليتات",
    "الأحماض الدهنية", "الإنزيمات", "البريبايوتك", "البروبيوتيك", "البوستبايوتك",
    "النباتات", "الببتيدات", "الكولاجين", "الفطريات", "البوليفينولات",
    "الدهون", "الأداء", "الصحة الأيضية", "الميتوكوندريا",
    "الميكروبيوم", "صحة الهرمونات", "الشيخوخة الصحية",
  ],
};

// Eight fixed anchors around the mark. CSS positions them; JS only decides
// which word sits in each. On small screens CSS hides s5–s8.
const SLOTS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

export default function HeroGlyph({ lang }) {
  const pool = POOL[lang === "ar" ? "ar" : "en"];

  // Deterministic first paint (SSR-safe): first 8 of the pool, all visible.
  const [terms, setTerms] = useState(() => pool.slice(0, SLOTS.length));
  const [vis, setVis] = useState(() => SLOTS.map(() => 1));
  const termsRef = useRef(terms);
  termsRef.current = terms;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Compose the field once mounted rather than showing it alphabetical.
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setTerms(shuffled.slice(0, SLOTS.length));

    const timeouts = new Set();
    const tick = () => {
      const shown = new Set(termsRef.current);
      const fresh = pool.filter((w) => !shown.has(w));
      if (!fresh.length) return;

      const howMany = Math.random() > 0.5 ? 2 : 1;
      const picks = new Set();
      while (picks.size < howMany) picks.add(Math.floor(Math.random() * SLOTS.length));

      [...picks].forEach((slot, n) => {
        const t1 = setTimeout(() => {
          setVis((v) => v.map((o, k) => (k === slot ? 0 : o)));
          const t2 = setTimeout(() => {
            const next = fresh[Math.floor(Math.random() * fresh.length)];
            setTerms((prev) => prev.map((w, k) => (k === slot ? next : w)));
            setVis((v) => v.map((o, k) => (k === slot ? 1 : o)));
          }, 420);
          timeouts.add(t2);
        }, n * 260);
        timeouts.add(t1);
      });
    };

    const id = setInterval(tick, 2400);
    return () => {
      clearInterval(id);
      timeouts.forEach(clearTimeout);
    };
  }, [pool]);

  return (
    <div className="heroGlyphWrap">
      <span className="heroLight" aria-hidden="true" />
      <img
        src="/logo-mark-white.png"
        alt="A7i"
        className="heroMarkImg"
        width={1254}
        height={1254}
      />
      <div className="sigField" aria-hidden="true">
        {SLOTS.map((slot, n) => (
          <span key={slot} className={`sigLabel ${slot}`} style={{ opacity: vis[n] }}>
            {terms[n]}
          </span>
        ))}
      </div>
    </div>
  );
}
