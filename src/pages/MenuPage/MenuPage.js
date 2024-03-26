import React from 'react'
import Header from '../../components/Header/Header'
import style from './MenuPage.module.css'
import TextWithSearch from '../../components/TextWithSearch/TextWithSearch'
import Card from '../../components/Card/Card'
// import food1 from '../../assets/food/food1.png'
import { useState } from 'react'
import { useEffect } from 'react'
// import food2 from '../../assets/food/food2.png'
// import food3 from '../../assets/food/food3.png'
// import food4 from '../../assets/food/food4.png'
// import food5 from '../../assets/food/food5.png'
// import food6 from '../../assets/food/food6.png'
// import food7 from '../../assets/food/food7.png'
// import food8 from '../../assets/food/food8.png'
// import food9 from '../../assets/food/food9.png'
// import food10 from '../../assets/food/food10.png'
// import food11 from '../../assets/food/food11.png'
// import food12 from '../../assets/food/food12.png'
// import food13 from '../../assets/food/food13.png'
// import food14 from '../../assets/food/food14.png'
// import food15 from '../../assets/food/food15.png'
// import food16 from '../../assets/food/food16.png'

export default function MenuPage() {

  const [images, setImage] = useState([]);
  const [unrepeatedImages , setUnrepeatedImages] = useState([]);

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

  console.log(images)


  return (
    <div className="App">
        <Header />  
        <TextWithSearch text={'TRADITIONAL FAVORITES'}/>
        <div className={style.collector1}>
          {images.map(image => {
              return <Card foodImg={image.url} price={prices[image.id]}/>
          })}
        </div>
    </div>
  )
}
