import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import { ModalProvider } from "./context/modal-context";
import { ThemeProvider } from "./context/theme-context";
import GraphicsPage from "./pages/graphics/GraphicsPage";
import Portfolio from "./sections/portfolio/Portfolio";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Add more routes for other pages */}
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </ThemeProvider>
);
