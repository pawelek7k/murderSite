import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Iceberg } from "../pages/Api";
import { Home } from "../pages/Home";
import { Test } from "../pages/Test";

export const RouterIndex = () => {
  return (
    <BrowserRouter basename="/murderSite">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Iceberg" element={<Iceberg />} />
      </Routes>
    </BrowserRouter>
  );
};
