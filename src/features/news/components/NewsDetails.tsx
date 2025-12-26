import { Box, Typography, Link } from "@mui/material";
import type { News } from "../types";
import { formatLongDate } from "../utils/time/formatters";
import { Link as RouterLink } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  news: News;
}

export default function NewsDetails({ news }: Props) {
  return (
    <Box
      component="article"
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={news.image}
        alt={news.title}
        loading="lazy"
        sx={{
          width: "100%",
          maxHeight: 400,
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="body2" component="time" dateTime={news.date}>
            {formatLongDate(news.date)}
          </Typography>

          <Typography variant="h5" component="h3">
            {news.title}
          </Typography>

          <Typography variant="body1" component="p">
            {news.description}
          </Typography>
        </Box>

        <Link
          component={RouterLink}
          to={`/`}
          style={{ marginTop: "auto", textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "#1c1c1c",
              fontWeight: "bold",
              transition: "color 0.2s",
              "&:hover": {
                color: "#333333",
              },
            }}
          >
            <ArrowBackIcon fontSize="small" />
            Back to homepage
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
