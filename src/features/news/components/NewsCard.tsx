import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { formatLongDate } from "../utils/time/formatters";
import type { News } from "../types";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  return (
    <Card component="article">
      <CardMedia
        component="img"
        image={news.image}
        alt={news.title}
        loading="lazy"
        sx={{
          height: 180,
          width: "100%",
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Typography variant="body2" component="time" dateTime={news.date}>
          {formatLongDate(news.date)}
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {news.title}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {news.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
