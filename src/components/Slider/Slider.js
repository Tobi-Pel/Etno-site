import React from 'react'
import style from './Slider.module.css'
import img1 from '../../assets/slider-images/Rectangle 44.png'
import img2 from '../../assets/slider-images/Rectangle 45.png'
import img3 from '../../assets/slider-images/Rectangle 46.png'
import img4 from '../../assets/slider-images/Rectangle 47.png'
import img5 from '../../assets/slider-images/Rectangle 48.png'

export default function Slider() {
  return (
    <div className={style.Slider}>
        <img src={img1} className={style.image}/>
        <img src={img2} className={style.image}/>
        <img src={img3} className={style.image}/>
        <img src={img4} className={style.image}/>
        <img src={img5} className={style.image}/>
    </div>
  )
}
