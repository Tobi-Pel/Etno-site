import { Route , Routes , Link } from "react-router-dom";
import React, { useState } from "react";
import './global.css'
import Login from "./components/Login/Login";
import Input from "./components/Input/Input";
import Tick from "./components/Tick/Tick";
import Vector from "./assets/google-line.png"
import { Regestriationpage } from "./pages/Regestriation/Regestriation";

function App() {
  const [isClicked , CheckIsClicked] = useState(0);

  function Checker() {
    if(isClicked == 0) CheckIsClicked(1);
    else CheckIsClicked(0);
    console.log(isClicked)
  }

  return (
  <div className="App">
      <Login>
        <h1 className="h1-1-1">КИРУУ</h1>
        <div className="wrap">
          <div className="collector-1">
            <p className="p-1-1">Email</p>
            <Input placeholder={"Enter your email"}></Input>
          </div>
          <div className="collector-1">
            <p className="p-1-1">Password</p>
            <Input placeholder={"********"}></Input>
          </div>
          <div className="collector-2">
            <div className="collector-3">
                <Tick onClick={Checker} isClicked={isClicked}/>
                <p className="p-1-2">Remember for 30 days</p>
            </div>
            <a className="p-1-2" href="*">Forgot password</a>
          </div>
        </div>
          <Link to="/" className="button-white">Sign in</Link>
          <Link to="/" className="button-white sec"> <img src={Vector} style={{width: "20px"}}></img> Sign in with Google</Link>
      </Login>

      <Routes>
        <Route path="/" element={<Regestriationpage />} />
        <Route path="/" element={<Regestriationpage />} />
      </Routes>
    </div>
  );
}

export default App;