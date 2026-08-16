"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { supportedLangs } from "@/lib/i18n";

export default function LanguageToggle({ lang }) {
  const pathname = usePathname() || `/${lang}`;

  const pathFor = (target) => {
    const parts = pathname.split("/");
    if (supportedLangs.includes(parts[1])) parts[1] = target;
    else parts.splice(1, 0, target);
    return parts.join("/") || `/${target}`;
  };

  return (
    <nav className="langToggle" aria-label="Language">
      <Link className={lang === "en" ? "active" : ""} href={pathFor("en")}>
        EN
      </Link>
      <Link className={lang === "ar" ? "active" : ""} href={pathFor("ar")}>
        عربي
      </Link>
    </nav>
  );
}
