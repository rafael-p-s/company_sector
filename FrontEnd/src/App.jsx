import React from "react";
import "./App.css";

//Router-Dom:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components:
// import { NavBar } from "./components/navbar/NavBar";
// import { Research } from "./components/researchInput/research";
//Pages:
import { Home } from "./pages/home";
import { CadCompany } from "./pages/cadCompany.jsx";
import { CadSector } from "./pages/cadSector.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadcompany" element={<CadCompany />} />
          <Route path="/cadsector" element={<CadSector />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
