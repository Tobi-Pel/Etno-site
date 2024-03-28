import React from 'react'
import style from "./Slider2.module.css"
import VectorLeft from '../Svg/Vectors/VectorLeft'
import VectorRight from '../Svg/Vectors/VectorRight'
import soda from "../../assets/soda.jpeg"
import sillyPizza from "../../assets/sillyPizza.jpeg"
import table from "../../assets/table.jpeg"


export default function Slider2() {
  return (
    <div>
        <div className={style.slider}>
              <button><VectorLeft/></button>
              <div className={style.sliderInner}>
                <div className={style.scrollImages}>
                  <img className={style.soda} src={soda}/>
                  <img className={style.sillyPizza} src={sillyPizza}/>
                  <img className={style.table} src={table}/>
                </div>
                <div className={style.whiteBackground}>
                  <div className={style.WBL}></div>
                  <div className={style.WBR}></div>
                </div>
              </div>
              <button><VectorRight/></button>
            </div>
    </div>
  )
}
