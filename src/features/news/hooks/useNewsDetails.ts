import { useQuery } from "@tanstack/react-query";
import * as newsClient from "../client/news.api";

export default function useNewsDetails(id: string) {
  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news", id],
    queryFn: () => newsClient.getNewsDetails(id),
  });

  return { news, isLoading, error };
}
