import Link from "next/link";
import { browseIndex, verdicts } from "@/data/browse";
import Verdict from "@/components/Verdict";

export default function BrowsePanel({ category, lang }) {
  const groups = browseIndex[category];
  if (!groups) return null;
  const ar = lang === "ar";

  return (
    <div className="browsePanel">
      {groups.map((g) => (
        <div className="browseGroup" key={g.group.en}>
          <p className="eyebrow">{ar ? g.group.ar : g.group.en}</p>
          <ul>
            {g.items.map((item) => {
              const inner = (
                <>
                  <span className="bName">{item.name}</span>
                  {item.symbol && <span className="bSym">{item.symbol}</span>}
                  {item.slug && verdicts[item.slug] && (
                    <span className="bVerdict">
                      <Verdict id={verdicts[item.slug]} lang={lang} small />
                    </span>
                  )}
                </>
              );
              return (
                <li key={item.name + (item.slug || "")}>
                  {item.slug ? (
                    <Link href={`/${lang}/ingredient/${item.slug}`} className="bRow bLink">
                      {inner}
                    </Link>
                  ) : (
                    <span className="bRow">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
