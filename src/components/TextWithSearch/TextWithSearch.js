import React from 'react'
import style from './TextWithSearch.module.css'
import Search from '../Search/Search'
import star from '../../assets/star-smile-line.png'
import straightVector from '../../assets/straight-vector.png'
import burger from '../../assets/burger.png'

export default function TextWithSearch({text}) {
  return (
    <div>
        <h1 className={style.h1Black}>{text}</h1>
        <div className={style.collector1}>
            <Search />
            <div className={style.favorites}>
                <img src={star} className={style.image}/>
                <img src={straightVector} className={style.image}/>
            </div>
            <div className={style.traditional}>
                <p>Традиционный</p>
                <img src={straightVector} className={style.image}/>
            </div>
            <div className={style.timeMeal}>
                <p>тушку тамак</p>
                <img src={straightVector} className={style.image}/>
            </div>
            <div className={style.menu}>
                <img src={burger} className={style.burgerWrap}/>
            </div>
        </div>
    </div>
  )
}
