import { newsSchema } from "../schemas/news.schema";
import type { News } from "../types";
import endpoints from "./endpoints";

export async function getNews(): Promise<News[]> {
  const url = `${endpoints.baseUrl}${endpoints.getNews}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to get news: ${res.statusText}`);
  }

  const data = await res.json();

  return data.results.map((news: News) => newsSchema.parse(news));
}
