import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Marvels from "./components/remote/MarvelsApp";
import ExpendablesApp from "./components/remote/ExpendablesApp";
import "./i18n";
import { Lang } from "../../mfe-marvels/src/domain/model/Lang";

// const MarvelsLazy = lazy(() => import("./components/remote/MarvelsApp"));

function App() {
  const { t, i18n } = useTranslation();

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Suspense fallback={<p>{t("Loading")}</p>}>
          <Routes>
            <Route
              path="/marvels"
              element={<Marvels lang={i18n.language as Lang} />}
            />
            <Route path="/expendables" element={<ExpendablesApp />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
