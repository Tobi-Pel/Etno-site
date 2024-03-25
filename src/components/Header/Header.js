import React, { useState } from "react";
import style from "./Header.module.css"
import MK from '../../components/Svg/MainKalpakSvg/MK'
import { Link } from "react-router-dom";

export default function Header() {
  const [isUnderline , setUnderline] = useState(false);

  return (
    <div className='App'>
      <div className={style.container1}>
          <div className={style.left}>
              <MK/>
              <p className={style.header}>КЫРГЫЗ ДААМЫ</p>
          </div>
          <div className={style.middle}>
            <Link to="/MainPage" onClick={() => setUnderline(true)} className={style.button3}>Башкы Бет</Link>
            <Link to="/MenuPage" className={style.button3}>Меню</Link>
            <Link to="/MainPage" className={style.button3}>Таанымал тамактар</Link>
            <Link to="/MainPage" onClick={() => setUnderline(true)} className={style.button3}>Биз жөнүндө</Link>
          </div>
          <div className={style.buttons}>
            <Link to="/" className={style.button1}>Кирүү</Link>
            <Link to="/Regestriation"  className={style.button2}>Каталуу</Link>
          </div>
      </div>
      </div>
  )
}
