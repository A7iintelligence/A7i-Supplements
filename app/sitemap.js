import { categories, reviewed } from "@/data/catalog";
import { goals } from "@/data/goals";

export default function sitemap() {
  const base = "https://supplements.a7iintelligence.com";
  const langs = ["en", "ar"];
  const now = new Date();

  const home = langs.map((lang) => ({
    url: `${base}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  }));

  const categoryUrls = langs.flatMap((lang) =>
    categories.map((c) => ({
      url: `${base}/${lang}/category/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  const ingredientUrls = langs.flatMap((lang) =>
    reviewed.map((i) => ({
      url: `${base}/${lang}/ingredient/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }))
  );

  const goalUrls = langs.flatMap((lang) =>
    goals.map((g) => ({
      url: `${base}/${lang}/goal/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }))
  );

  const indexUrls = langs.map((lang) => ({
    url: `${base}/${lang}/ingredients`,
    lastModified: now, changeFrequency: "weekly", priority: 0.8,
  }));

  const rulesUrls = langs.map((lang) => ({
    url: `${base}/${lang}/a7i-rules`,
    lastModified: now, changeFrequency: "yearly", priority: 0.5,
  }));

  const explainerUrls = langs.map((lang) => ({
    url: `${base}/${lang}/how-minerals-work`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...home, ...indexUrls, ...rulesUrls, ...explainerUrls, ...goalUrls, ...categoryUrls, ...ingredientUrls];
}
