import { Box } from "@mui/material";
import NewsPage from "./features/news/pages/NewsPage";

function App() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
        display: "flex",
        justifyContent: "center",
        border: "2px solid green",
      }}
    >
      <NewsPage />
    </Box>
  );
}

export default App;
