import React from 'react'
import Header from '../../components/Header/Header'
import style from './MenuPage.module.css'
import TextWithSearch from '../../components/TextWithSearch/TextWithSearch'
import Card from '../../components/Card/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import PunCakeSvg from '../../components/Svg/PunCakeSvg/PunCakeSvg'
import Free from '../../components/Svg/Free/Free'
import LineWithText from '../../components/LineWithText/LineWithText'
import Slider from '../../components/Slider/Slider'
import LogoWithText from '../../components/LogoWithText/LogoWithText'
import Footer from '../../components/Footer/Footer'

export default function MenuPage() {

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
    for (let i = 1; i <= 16; i++) {
      setImage(prevState => [...prevState, {
        url: require(`../../assets/food/food${i}.png`) , 
        id: i
      }]);
    }

    setImage(prevState => prevState.slice(1, 17))
  }, [])


  return (
    <div className="App">
        <Header />  
        <TextWithSearch text={'TRADITIONAL FAVORITES'}/>
        <div className={style.collector1}>
          {images.map(image => {
              return <Card foodImg={image.url} price={prices[image.id]}/>
          })}
        </div>
        <PunCakeSvg className={style.PunCakeSvg}/>
        <div className={style.Free}><Free/></div>
        <LineWithText>
          <Slider />
        </LineWithText>
        <LogoWithText />
        <Footer />
    </div>
  )
}
