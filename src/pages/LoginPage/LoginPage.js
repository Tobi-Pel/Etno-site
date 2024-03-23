import React, { useState } from "react";
import BlurWrap from '../../components/BlurWrap/BlurWrap.js';
import Input from '../../components/Input/Input.js';
import Tick from '../../components/Tick/Tick.js';
import Vector from '../../assets/Vector.png';
import { Link } from "react-router-dom";
import { Regestriationpage } from "../Regestriation/Regestriation.js";

export default function LoginPage() {
    const [isClicked , CheckIsClicked] = useState(0);

    function Checker() {
      if(isClicked == 0) CheckIsClicked(1);
      else CheckIsClicked(0);
      console.log(isClicked)
    }

  return (
    <div className='App'>
      <div className="container-1">
          <BlurWrap>
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
            <Link to="/pagePassword" className="p-1-2 pass">Forgot password</Link>
            </div>
          </div>
            <Link to="/" className="button-white">Sign in</Link>
            <Link to="/" className="button-white sec"> <img src={Vector} style={{width: "20px"}}></img> Sign in with Google</Link>

            <div className="collector-4">
              <p className="p-1-3">Don’t have on account?</p>
              <Link to="/page2" className="p-1-4">Sign up for free</Link>
            </div>
        </BlurWrap>
        </div>
    </div>
  )
}
