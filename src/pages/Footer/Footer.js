import React from "react";
import style from "./Footer.module.css"
import { Link } from "react-router-dom";
import MK2 from "../../components/Svg/MainKalpak2Svg/MK2";
import Icon from "../../components/Svg/IconsSvg/Icon"

export default function Footer() {

    return (
        <div className="App">
            <div className={style.container}>
                <div className={style.left}>
                    <MK2/>
                </div>
                <div className={style.line}></div>
                <div className={style.box}>
                    <Link to="/MainPage" className={style.button3}>Башкы Бет</Link>
                    <Link to="/MainPage" className={style.button3}>Меню</Link>
                    <Link to="/MainPage" className={style.button3}>Таанымал тамактар</Link>
                    <Link to="/MainPage" className={style.button3}>Биз жөнүндө</Link>
                    <Link to="/" className={style.button3}>Кирүү</Link>
                    <Link to="/Regestriation"  className={style.button3}>Каталуу</Link>
                </div>
                <div className={style.Icon}>
                    <Icon/>
                </div>
            </div>
        </div>
    )
}
