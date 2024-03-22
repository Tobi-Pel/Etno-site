import React from 'react'
import style from './Login.module.css'

export default function Login({children}) {
  return (
    <div className={style.Login}>{children}</div>
  )
}
