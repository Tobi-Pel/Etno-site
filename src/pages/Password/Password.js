import React, {useState} from "react";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import style from "./Password.module.css"

export default function Password() {
    return (
        <div className="App">
            <div className={style.container2}>
                <div className={style.innerContainer}>
                    <p className={style.Header}>Забыли пароль</p>
                    <p className={style.email}>Email</p>
                    <Input placeholder={"Enter your email"}></Input>
                    <p className={style.text}>
                        Пожалуйста, сообщите нам свой адрес электронной 
                        почты, и мы вышлем вам ссылку,по которой вы сможете 
                        сбросить пароль.
                    </p>
                    <button className={style.passButton}>Отправить</button>
                    <div className={style.buttons}>
                        <Link to="/" className={style.button2}>Войти</Link>
                        <Link to="/Regestriation" className={style.button2}>Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}