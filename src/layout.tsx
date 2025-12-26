import { Box } from "@mui/material";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet />
    </Box>
  );
}
