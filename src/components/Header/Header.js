import React, { useState } from "react";
import style from "./Header.module.css"
import MK from '../../components/Svg/MainKalpakSvg/MK'
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation()

  const checker = (route) => {
    return location.pathname === route ? style.button3Active : style.button3
  }

  return (
    <div className='App'>
      <div className={style.container1}>
          <div className={style.left}>
              <MK/>
              <p className={style.header}>КЫРГЫЗ ДААМЫ</p>
          </div>
          <div className={style.middle}>
            <Link to="/MainPage" className={checker("/MainPage")}>Башкы Бет</Link>
            <Link to="/MenuPage" className={checker("/MenuPage")}>Меню</Link>
            <Link to="/FamousFoodPage" className={checker("/FamousFoodPage")}>Таанымал тамактар</Link>
            <Link to="/AboutPage" className={checker("/AboutPage")}>Биз жөнүндө</Link>
          </div>
          <div className={style.buttons}>
            <Link to="/" className={style.button1}>Кирүү</Link>
            <Link to="/Regestriation"  className={style.button2}>Каталуу</Link>
          </div>
      </div>
      </div>
  )
}
