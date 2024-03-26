import React from 'react'
import style from './Card.module.css'
import StarButton from '../StarButton/StarButton'
import AddButton from '../AddButton/AddButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import straightVector from '../../assets/straight-vector.png'
import { useState } from 'react'

export default function Card({foodImg , price}) {

    const [active , setActive] = useState(0);

  return (
    <div className={style.card}>
        <StarButton active={active}/>
        <img src={foodImg} className={style.foodImage}/>
            <div className={style.collector1}>
                <h5 className={style.h5Black}>Pancakes with red salted caviar</h5>
                <p className={style.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                {active !== 0
                    ? <div className={style.collector3}>
                        <p className={style.priceStyle}>{price}</p>
                        <div className={style.line}></div>
                        <p className={style.counts}>1 шт</p>
                        <img src={straightVector} className={style.straightVector}/>
                    </div>
                    : ''
                }
            </div>
            <div className={style.collector2}>
                <AddButton onClick={()=>{if(active === 0) setActive(1)}} active={active}/>
                <DeleteButton price={price} onClick={()=>{if(active === 1) setActive(0)}} active={active}/>
            </div>
    </div>
  )
}
