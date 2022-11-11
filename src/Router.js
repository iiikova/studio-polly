import React from "react";
import { Route, Routes } from "react-router-dom";
import Cups from "./pages/Cups/Cups";
import Vases from "./pages/Vases/Vases";
import Plates from "./pages/Plates/Plates";

function Router() {
  return (
    <Routes>
      <Route path="/vases" element={<Vases />} />
      <Route path="/cups" element={<Cups />} />
      <Route path="/plates" element={<Plates />} />
    </Routes>
  );
}

export default Router;
