import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import { formatLongDate } from "../utils/time/formatters";
import type { News } from "../types";
import HighlightedText from "./HighlightedText";
import { Link as RouterLink } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  news: News;
  keywords: string[];
}

export default function NewsCard({ news, keywords }: Props) {
  return (
    <Card
      component="article"
      sx={{
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
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
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
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
          <HighlightedText text={news.title} keywords={keywords} />
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
          <HighlightedText text={news.description} keywords={keywords} />
        </Typography>

        <Link
          component={RouterLink}
          to={`${news.id}`}
          style={{ marginTop: "auto", textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: "bold",
              gap: 0.5,
              color: "#1c1c1c",
              "&:hover": {
                color: "#333333",
              },
            }}
          >
            Read more
            <ArrowForwardIcon fontSize="small" />
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
