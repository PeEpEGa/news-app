import { useQuery } from "@tanstack/react-query";
import * as newsClient from "../client/news.api";

export default function useNews() {
  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news"],
    queryFn: () => newsClient.getNews(),
  });

  return { news: news ?? [], isLoading, error };
}
