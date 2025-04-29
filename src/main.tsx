import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WebsiteLayout from "./components/WebsiteLayout.tsx";
import ScrollToTop from "./components/ui/ScrollToTop.tsx";
import { HelmetProvider } from "react-helmet-async";
import DynamicMeta from "./components/DynamicMeta.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <DynamicMeta />
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
