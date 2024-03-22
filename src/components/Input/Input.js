import React from 'react'
import style from "./Input.module.css"

export default function Input({children , ...props}) {
  return (
    <input className={style.Input} props={props} placeholder='Enter your email'></input>
  )
}
