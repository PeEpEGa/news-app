import { Alert, Box, CircularProgress } from "@mui/material";

interface Props<T> {
  data: T[];
  isLoading: boolean;
  error: unknown;
  renderItem: (item: T) => React.ReactNode;
}

export default function DataGridLayout<T>({
  data,
  isLoading,
  error,
  renderItem,
}: Props<T>) {
  if (isLoading) {
    return (
      <Box
        sx={{ width: "100%", height: "100%" }}
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

  if (data.length === 0) {
    return <Alert severity="info">No data found</Alert>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 3,
      }}
    >
      {data.map(renderItem)}
    </Box>
  );
}
