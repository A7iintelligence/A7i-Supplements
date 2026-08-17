"use client";

import { useEffect, useState } from "react";
import Glyph from "@/components/Glyph";

const CATS = {
  en: ["Vitamins","Minerals","Amino acids","Probiotic","Postbiotics","Enzymes","Lipids","Botanicals","Longevity","Fungi"],
  ar: ["الفيتامينات","المعادن","الأحماض الأمينية","بروبيوتيك","بوستبايوتك","الإنزيمات","الدهون","النباتات","طول العمر","الفطريات"],
};
const SLOTS = ["p1", "p2", "p3"];

export default function HeroGlyph({ lang }) {
  const list = CATS[lang === "ar" ? "ar" : "en"];
  const [i, setI] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStill(mq.matches);
    if (mq.matches) return;
    const id = setInterval(() => setI((n) => (n + SLOTS.length) % list.length), 4200);
    return () => clearInterval(id);
  }, [list.length]);

  return (
    <div className="heroGlyphWrap" aria-hidden="true">
      <Glyph size={undefined} resolved={still} className="heroGlyphSvg" />
      {SLOTS.map((slot, n) => (
        <span key={slot} className={`sigLabel ${slot}`}>
          {list[(i + n) % list.length]}
        </span>
      ))}
    </div>
  );
}
