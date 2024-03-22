import React from 'react'
import style from "./Input.module.css"

export default function Input({children , ...props}) {
  return (
    <input className={style.Input} {...props}></input>
  )
}
