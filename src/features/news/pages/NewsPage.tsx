import useNews from "../hooks/useNews";
import DataGridLayout from "../../../shared/components/DataGridLayout";
import NewsCard from "../components/NewsCard";
import { useMemo, useState } from "react";
import SearchInput from "../../../shared/components/SearchInput";
import { Box, Divider, Typography } from "@mui/material";
import type { RankedNews } from "../types";
import { rankNews } from "../utils/ranking/rankNews";
import { useDebounce } from "../../../shared/hooks/useDebounce";

export default function NewsPage() {
  const { news, isLoading, error } = useNews();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const keywords = useMemo(
    () => debouncedQuery.toLowerCase().split(/\s+/).filter(Boolean),
    [debouncedQuery]
  );

  const rankedNews = useMemo<RankedNews[]>(
    () => rankNews(news, keywords),
    [news, debouncedQuery]
  );

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Filter by keywords
        </Typography>
        <SearchInput value={query} onChange={setQuery} />
      </Box>

      <Box>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Results: {rankedNews.length}
        </Typography>
        <Divider sx={{ my: 1 }} />
      </Box>

      <DataGridLayout
        data={rankedNews}
        error={error}
        isLoading={isLoading}
        renderItem={(news) => (
          <NewsCard key={news.id} news={news} keywords={keywords}></NewsCard>
        )}
      />
    </Box>
  );
}
