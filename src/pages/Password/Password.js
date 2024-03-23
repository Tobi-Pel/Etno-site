import React, {useState} from "react";
import Input from "../../components/Input/Input";

export default function Password() {


    return (
        <div className="App">
            <div className="container-2">
                <div className="inner-container">
                    <p className="p-2-1">Забыли пароль</p>
                    <p className="p-2-2">Email</p>
                    <Input placeholder={"Enter your email"}></Input>
                    <p className="p-2-3">
                        Пожалуйста, сообщите нам свой адрес электронной 
                        почты, и мы вышлем вам ссылку,по которой вы сможете 
                        сбросить пароль.
                    </p>
                    <button className="pass-button">Отправить</button>
                    <div className="buttons">
                        <button className="button-2">Войти</button>
                        <button className="button-2">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}