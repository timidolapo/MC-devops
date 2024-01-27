import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AllComicsPage } from "./pages/guests/allComicsPage";
import { ComicsContents } from "./pages/guests/comicsContents";
import { HomePage } from "./pages/guests/home";
import { MainLayout } from "./sharedComponents/layout";
import ScrollToTop from "./sharedComponents/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route element={<MainLayout>{<Outlet />}</MainLayout>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-comics" element={<AllComicsPage />} />
          </Route>
          <Route path="/comics-content" element={<ComicsContents />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
