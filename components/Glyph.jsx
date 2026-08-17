"use client";

// THE SEVEN SIGNALS
// Seven fragments, one per question A7i resolves:
// 01 evidence · 02 food · 03 form · 04 dose · 05 absorption · 06 timing · 07 safety
//
// Rest: fragments sit slightly apart and drift almost imperceptibly.
// Resolved: they settle into the A7i mark.
// active={n}: fragment n takes Signal Blue.
// Respects prefers-reduced-motion by rendering the resolved state, still.

export const SIGNALS = [
  "evidence", "food", "form", "dose", "absorption", "timing", "safety",
];

export default function Glyph({
  size = 300,
  resolved = false,
  active = null,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`a7iGlyph${resolved ? " isResolved" : ""} ${className}`}
      role="img"
      aria-label="A7i"
      focusable="false"
    >
      <g strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="7.5">
        {/* 01 evidence — the upper diagonal */}
        <line className={`sig s1${active === 0 ? " on" : ""}`} x1="45" y1="16" x2="61" y2="50" />
        {/* 02 food — the left leg */}
        <line className={`sig s2${active === 1 ? " on" : ""}`} x1="16" y1="80" x2="33" y2="43" />
        {/* 03 form — the crossing bar */}
        <line className={`sig s3${active === 2 ? " on" : ""}`} x1="34" y1="59" x2="70" y2="59" />
        {/* 04 dose — the seven's descent */}
        <line className={`sig s4${active === 3 ? " on" : ""}`} x1="67" y1="59" x2="46" y2="90" />
        {/* 05 absorption — the counter stroke */}
        <line className={`sig s5${active === 4 ? " on" : ""}`} x1="26" y1="62" x2="33" y2="47" />
        {/* 06 timing — the dot */}
        <circle className={`sig s6${active === 5 ? " on" : ""}`} cx="84" cy="45" r="4.2" fill="currentColor" stroke="none" />
        {/* 07 safety — the upright i */}
        <line className={`sig s7${active === 6 ? " on" : ""}`} x1="84" y1="62" x2="84" y2="88" />
      </g>
    </svg>
  );
}
