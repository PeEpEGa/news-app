import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
  query: string;
}

export default function HighlightedText({ text, query }: Props) {
  if (!query) return <>{text}</>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  const parts = text.split(regex);
  const queryLower = query.toLowerCase();

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === queryLower ? (
          <Box
            key={index}
            component="mark"
            sx={{
              backgroundColor: "yellow",
              color: "inherit",
              px: 0.25,
              borderRadius: 0.5,
            }}
          >
            {part}
          </Box>
        ) : (
          <Typography key={index} component="span">
            {part}
          </Typography>
        )
      )}
    </>
  );
}
