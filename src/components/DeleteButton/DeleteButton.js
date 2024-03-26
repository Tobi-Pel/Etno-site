import React from 'react'
import style from './DeleteButton.module.css'

export default function DeleteButton({price , active , ...props}) {
  return (
    <div className={active === 0 ? style.DeleteButton : style.DeleteButtonActive} {...props}>{active === 0 ? price : "Удалить"}</div>
  )
}
