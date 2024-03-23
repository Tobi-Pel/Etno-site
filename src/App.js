import { Route , Routes , Link } from "react-router-dom";
import React, { useState } from "react";
import './global.css'
import { Regestriationpage } from "./pages/Regestriation/Regestriation";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/page2" element={<Regestriationpage />} />
      </Routes>
    </>
  );
}

export default App;