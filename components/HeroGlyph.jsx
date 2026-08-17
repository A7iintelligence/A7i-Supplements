"use client";

import { useEffect, useState } from "react";

// The approved A7i mark is used as supplied artwork. It is never redrawn,
// reconstructed, recoloured or distorted. Only the illumination behind it
// and the category labels around it are animated.

const CATS = {
  en: ["Enzymes","Herbal extraction","Fatty acid / lipids","Postbiotics","Longevity","Fungi / adaptogens","Minerals","Vitamins","Essentials","Amino acids","Prebiotic","Probiotic"],
  ar: ["الإنزيمات","المستخلصات العشبية","الأحماض الدهنية","البوستبايوتك","طول العمر","الفطريات","المعادن","الفيتامينات","العناصر الأساسية","الأحماض الأمينية","البريبايوتك","البروبيوتيك"],
};
const SLOTS = ["p1", "p2", "p3"];

export default function HeroGlyph({ lang }) {
  const list = CATS[lang === "ar" ? "ar" : "en"];
  const [i, setI] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => setI((n) => (n + SLOTS.length) % list.length), 5200);
    return () => clearInterval(id);
  }, [list.length]);

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
      {SLOTS.map((slot, n) => (
        <span key={slot} className={`sigLabel ${slot}`} aria-hidden="true">
          {list[(i + n) % list.length]}
        </span>
      ))}
    </div>
  );
}
