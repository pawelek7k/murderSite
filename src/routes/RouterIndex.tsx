import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { ArticleDetails } from "../pages/ArticleDetails";
import { Home } from "../pages/Home";
import { Iceberg } from "../pages/Iceberg";
import { Test } from "../pages/Test";

export const RouterIndex = () => {
  return (
    <BrowserRouter basename="/murderSite">
      {/* basename="/murderSite" */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/iceberg" element={<Iceberg />} />
        <Route path="/iceberg/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
