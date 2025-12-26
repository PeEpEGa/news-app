import type { News, RankedNews } from "../../types";
import { calculateNewsScore } from "./calculateNewsScore";

export function rankNews(news: News[], keywords: string[]): RankedNews[] {
  if (!keywords.length) {
    return news.map((n) => ({ ...n, score: 0 }));
  }

  return news
    .map((n) => ({ ...n, score: calculateNewsScore(n, keywords) }))
    .filter((n) => n.score > 0)
    .sort((a, b) => b.score - a.score);
}
