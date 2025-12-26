import useNews from "../hooks/useNews";
import DataGridLayout from "../../../shared/components/DataGridLayout";
import NewsCard from "../components/NewsCard";
import { useMemo, useState } from "react";
import SearchInput from "../../../shared/components/SearchInput";
import { Box } from "@mui/material";
import type { RankedNews } from "../types";
import { rankNews } from "../utils/ranking/rankNews";
import { useDebounce } from "../../../shared/hooks/useDebounce";

export default function NewsPage() {
  const { news, isLoading, error } = useNews();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const rankedNews = useMemo<RankedNews[]>(
    () => rankNews(news, debouncedQuery),
    [news, debouncedQuery]
  );

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}
    >
      <SearchInput value={query} onChange={setQuery} />

      <DataGridLayout
        data={rankedNews}
        error={error}
        isLoading={isLoading}
        renderItem={(news) => (
          <NewsCard key={news.id} news={news} searchQuery={query}></NewsCard>
        )}
      />
    </Box>
  );
}
