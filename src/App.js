import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Prices from "./pages/prices";
import Help from "./pages/help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Prices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
