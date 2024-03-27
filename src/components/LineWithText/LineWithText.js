import React from 'react'
import style from './LineWithText.module.css'

export default function LineWithText({children}) {
  return (
    <div className={style.LineWithText}>
        <div className={style.line}></div>
        <p className={style.text}>кошумча</p>
        {children}
    </div>
  )
}
