import type { News } from "../../types";

export function calculateNewsScore(news: News, query: string) {
  let score = 0;
  const keywords = query.toLowerCase().split(" ");

  for (const keyword of keywords) {
    if (news.title.toLowerCase().includes(keyword)) {
      score += 10;
    }
    if (news.description.toLowerCase().includes(keyword)) {
      score += 3;
    }
  }

  return score;
}
