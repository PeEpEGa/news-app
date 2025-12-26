import type { News, RankedNews } from "../../types";
import { calculateNewsScore } from "./calculateNewsScore";

export function rankNews(news: News[], query: string): RankedNews[] {
  return news
    .map((n) => ({ ...n, score: calculateNewsScore(n, query) }))
    .filter((n) => n.score > 0)
    .sort((a, b) => b.score - a.score);
}
