import { newsSchema } from "../schemas/news.schema";
import type { News } from "../types";
import endpoints from "./endpoints";

export async function getNews(): Promise<News[]> {
  const limit = 100;
  const url = `${endpoints.baseUrl}${endpoints.getNews}?limit=${limit}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to get news: ${res.statusText}`);
  }

  const data = await res.json();

  return data.results.map((news: News) => newsSchema.parse(news));
}

export async function getNewsDetails(id: string): Promise<News> {
  const url = `${endpoints.baseUrl}${endpoints.getNews}/${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to get news: ${res.statusText}`);
  }

  const data = await res.json();

  return newsSchema.parse(data);
}
