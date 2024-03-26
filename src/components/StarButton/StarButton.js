import React from 'react'
import style from './StarButton.module.css'
import starImg from '../../assets/white-star-smile-line.png'

export default function StarButton({active}) {
  return (
    <div className={style.StarButton}>
        <img src={starImg} className={active === 0 ? style.vipIcon : style.vipIconActive}/>
    </div>
  )
}
