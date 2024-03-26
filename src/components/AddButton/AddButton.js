import React from 'react'
import style from './AddButton.module.css'
import addLine from '../../assets/add-line.png'
import blackVector from '../../assets/check-line.png'

export default function AddButton({active , ...props}) {
  return (
    <div className={active === 0 ? style.AddButton : style.AddButtonActive} {...props}>
        <img src={active === 0 ? addLine : blackVector} className={active === 0 ? style.image : style.imageReady}/>
        <p className={style.text}>{active === 0 ? "Add to Order" : "Добавлено"}</p>
    </div>
  )
}
