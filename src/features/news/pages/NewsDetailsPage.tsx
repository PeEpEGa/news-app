import { useParams } from "react-router";
import NewsDetails from "../components/NewsDetails";
import useNewsDetails from "../hooks/useNewsDetails";
import { Alert, Box, CircularProgress } from "@mui/material";

export default function NewsDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { news, isLoading, error } = useNewsDetails(id!);

  if (isLoading) {
    return (
      <Box
        sx={{ width: "100%", flexGrow: 1 }}
        width={100}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Failed to load data</Alert>;
  }

  if (!news) return <Alert severity="error">News not found</Alert>;

  return <NewsDetails news={news} />;
}
