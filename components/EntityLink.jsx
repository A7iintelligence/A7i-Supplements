import Link from "next/link";

// ONE component for every internal blue link on the site.
// Routes are derived here, so a tag can never point at a legacy template.
// Types: ingredient · goal · category · level · medicine · food · study

const ROUTES = {
  ingredient: (lang, id) => `/${lang}/ingredient/${id}`,
  goal:       (lang, id) => `/${lang}/goal/${id}`,
  category:   (lang, id) => `/${lang}/category/${id}`,
  level:      (lang, id) => `/${lang}#${id}`,
  rules:      (lang) => `/${lang}/a7i-rules`,
  explainer:  (lang) => `/${lang}/how-minerals-work`,
};

export default function EntityLink({
  type = "ingredient",
  id,
  lang = "en",
  children,
  variant = "inline", // inline | tag
  className = "",
  external = false,
  href,
}) {
  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`entityLink e-${variant} ${className}`}
      >
        {children}
        <span aria-hidden="true"> ↗</span>
      </a>
    );
  }

  const build = ROUTES[type];
  if (!build) return <span className={className}>{children}</span>;

  return (
    <Link href={build(lang, id)} className={`entityLink e-${variant} ${className}`}>
      {children}
    </Link>
  );
}
