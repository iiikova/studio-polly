import React from "react";
import {Route, Routes} from "react-router-dom";
import Cups from "./pages/Cups/Cups";
import Vases from "./pages/Vases/Vases";
import Plates from "./pages/Plates/Plates";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Journal from "./pages/Journal/Journal";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/vases" element={<Vases/>}/>
            <Route path="/cups" element={<Cups/>}/>
            <Route path="/plates" element={<Plates/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/journal" element={<Journal/>}/>
        </Routes>
    );
}

export default Router;
