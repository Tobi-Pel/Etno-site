import React from 'react'
import Header from '../../components/Header/Header'
import style from './FamousFoodPage.module.css'
import image from '../../assets/assets-for-famous/famous-image.png'
import TextWithSearch from '../../components/TextWithSearch/TextWithSearch'
import PotatoFree from '../../components/Svg/PotatoFree/PotatoFree'
import Card from '../../components/Card/Card'
import { useState , useEffect } from 'react'
import LineWithText from '../../components/LineWithText/LineWithText'
import PunCakeSvg from '../../components/Svg/PunCakeSvg/PunCakeSvg'
import Footer from '../../components/Footer/Footer'

export default function FamousFoodPage() {


  const [images, setImage] = useState([]);

  const prices = [
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" ,
    "$16.99" 
  ]

  useEffect(() => {
    for (let i = 1; i <= 8; i++) {
      setImage(prevState => [...prevState, {
        url: require(`../../assets/famous-food/food${i}-2.png`) , 
        id: i
      }]);
    }

    setImage(prevState => prevState.slice(1, 9))
  }, [])

  return (
    <div className='App'>
        <Header />
        <img src={image} className={style.bigImage}/>
        <TextWithSearch text={'таанымал тамактар'}/>
        <PotatoFree className={style.PotatoFree}/>
        <div className={style.collector1}>
          {images.map(image => {
              return <Card foodImg={image.url} price={prices[image.id]}/>
          })}
        </div>
        <LineWithText />
        <PunCakeSvg className={style.PunCakeSvg}/>
        <div className={style.space}></div>
        <Footer />
    </div>
  )
}