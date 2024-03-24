import { useState } from "react";
import { Link } from "react-router-dom";
import BlurWrap from "../../components/BlurWrap/BlurWrap";
import Input from "../../components/Input/Input";
import style from "./Regestriation.module.css"
import Tick from "../../components/Tick/Tick";

const Regestriationpage = ()=> {
    const [isClicked , CheckIsClicked] = useState(0);

    function Checker() {
      if(isClicked == 0) CheckIsClicked(1);
      else CheckIsClicked(0);
    }

    return (
        <div className={style.Regestriationpage}>
            <BlurWrap>
            <div className="wrap sec">
                <h1 className={style.H1}>КАТТАЛУУ</h1>
                <div className="collector-1">
                    <p className="p-1-1">Имя</p>
                    <Input placeholder={"********"}></Input>
                </div>
                <div className="collector-1">
                    <p className="p-1-1">Фамилия</p>
                    <Input placeholder={"********"}></Input>
                </div>
                <div className="collector-1">
                    <p className="p-1-1">Email</p>
                    <Input placeholder={"Enter your email"}></Input>
                </div>
                <div className="collector-1">
                    <p className="p-1-1">Password</p>
                    <Input placeholder={"********"}></Input>
                </div>
                <div className="collector-2 reg">
                        <div className="collector-3">
                            <Tick onClick={Checker} isClicked={isClicked}/>
                            <p className="p-1-2">Remember for 30 days</p>
                        </div>
                    <Link to="/pagePassword" className="p-1-2 pass">Forgot password</Link>
                </div>
                </div>
                
                <Link to="/Regestriation" className="button-white">Sign in</Link>
                <div className="collector-4">
                    <p className="p-1-3">Already have an account?</p>
                    <Link to="/" className="p-1-4">Sign in</Link>
                </div>
                    
            </BlurWrap>
        </div>
    )
}

export {Regestriationpage};