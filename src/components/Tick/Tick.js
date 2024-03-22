import React from 'react'
import styles from "./Tick.module.css"

export default function Tick({ isClicked , ...props }) {
  return (
    <div className={isClicked ?  [styles.Tick , styles.Yes].join(' ') : styles.Tick} {...props}></div>
  )
}