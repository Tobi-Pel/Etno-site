import React from 'react'
import style from './BlurWrap.module.css'

export default function BlurWrap({children}) {
  return (
    <div className={style.BlurWrap}>{children}</div>
  )
}
