"use client";

import { useEffect, useState } from "react";
import { categories } from "@/data/catalog";

const POSITIONS = ["f1", "f2", "f3", "f4"];

export default function RotatingLabels({ lang }) {
  const ar = lang === "ar";
  const labels = categories.map((c) => (ar ? c.ar : c.label));
  const [start, setStart] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    const id = setInterval(
      () => setStart((s) => (s + POSITIONS.length) % labels.length),
      5000
    );
    return () => clearInterval(id);
  }, [labels.length]);

  return (
    <>
      {POSITIONS.map((pos, i) => (
        <span
          key={pos}
          className={`float ${pos} orbitLabel`}
          aria-hidden="true"
          data-cycle={reduced ? "static" : start}
        >
          {labels[(start + i) % labels.length]}
        </span>
      ))}
    </>
  );
}
