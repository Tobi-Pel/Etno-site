import { Route , Routes , Link } from "react-router-dom";
import React from "react";
import './global.css'
import Login from "./components/Login/Login";

function App() {
  return (
  <div className="App">
      <Login>
        <h1 className="h1-1-1">КИРУУ</h1>
        <div className="wrap">
          <div className="collector-1">
            <p className="p-1-1">Email</p>
          </div>
          <div className="collector-2"></div>
        </div>
      </Login>
    </div>
  );
}

export default App;