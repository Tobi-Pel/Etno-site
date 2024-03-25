import React from 'react'
import style from './Search.module.css'
import searchIcon from '../../assets/search-icon.jpeg'

export default function Search({children , ...props}) {
  return (
    <div className={style.Search}>
        <input className={style.SearchInput} placeholder='издоо'></input>
        <img src={searchIcon} className={style.image}/>
    </div>
  )
}
