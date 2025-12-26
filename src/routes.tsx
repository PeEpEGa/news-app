import { Navigate, Route, Routes } from "react-router";
import NewsPage from "./features/news/pages/NewsPage";
import NewsDetailsPage from "./features/news/pages/NewsDetailsPage";
import Layout from "./layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/news" replace />} />
        <Route path="news">
          <Route index element={<NewsPage />} />
          <Route path=":id" element={<NewsDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
