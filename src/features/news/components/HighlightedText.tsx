import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
  keywords: string[];
}

export default function HighlightedText({ text, keywords }: Props) {
  if (!keywords.length) return <>{text}</>;

  const escapedKeywords = keywords.map((kw) =>
    kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
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
