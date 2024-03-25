import { Route , Routes , Link } from "react-router-dom";
import React, { useState } from "react";
import './global.css'
import { Regestriationpage } from "./pages/Regestriation/Regestriation";
import LoginPage from "./pages/LoginPage/LoginPage";
import Password from "./pages/Password/Password";
import MainPage from "./pages/MainPage/MainPage";
import MenuPage from "./pages/MenuPage/MenuPage";


function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Regestriation" element={<Regestriationpage />} />
        <Route path="/pagePassword" element={<Password/>} />
        <Route path="/MainPage" element={<MainPage/>}/>
        <Route path="/MenuPage" element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;