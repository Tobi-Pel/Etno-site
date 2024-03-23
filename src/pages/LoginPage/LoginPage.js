import React, { useState } from "react";
import BlurWrap from '../../components/BlurWrap/BlurWrap.js';
import Input from '../../components/Input/Input';
import Tick from '../../components/Tick/Tick';
import Vector from '../../assets/Vector.png';
import { Link } from "react-router-dom";

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
            <Link to="/pagePassword" className="p-1-2">Forgot password</Link>
            </div>
          </div>
            <Link to="/page2" className="button-white">Sign in</Link>
            <Link to="/page2" className="button-white sec"> <img src={Vector} style={{width: "20px"}}></img> Sign in with Google</Link>
        </BlurWrap>
        </div>
    </div>
  )
}
