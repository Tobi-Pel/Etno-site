import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Pattern1 from '../../components/Svg/Patterns/Pattern1'
import style from "./AboutPage.module.css"
import BK from '../../components/Svg/BlackKalpak/BK'
import Pattern2 from '../../components/Svg/Patterns/Pattern2'
import PlayBorder from '../../components/Svg/PlaySvg/PlayBorder'
import GrayCirclePattern from '../../components/Svg/Patterns/GrayCirclePattern'
import PunCakeSvg from '../../components/Svg/PunCakeSvg/PunCakeSvg'
import photo1 from "../../assets/photo1.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo4 from "../../assets/photo4.jpg"
import Free from '../../components/Svg/Free/Free'
import Slider2 from '../../components/Slider2/Slider2'

export default function AboutPage() {
  return (
    <div className="App">
        <Header />
          <div className={style.container}>
            <Pattern1/>
            <div className={style.boxTop}>
              <div className={style.boxTopInner}>
                <BK/>
                <p className={style.header}>КЫРГЫЗ ДААМЫ</p>
                <p className={style.text1}>
                  Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce 
                  ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus 
                  nulla eu erat pulvinar, vitae varius massa convallis. Mauris 
                  vestibulum sapien vitae orci ullamcorper dapibus. Integer quis 
                  enim urna. Fusce egestas felis metus, nec tincidunt elit finibus 
                  ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora 
                  torquent per conubia nostra, per inceptos himenaeos. Nam eleifend, 
                  lectus sed porttitor ullamcorper, massa risus ultricies magna, in 
                  molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida 
                  tellus rutrum quis.
                </p>
              </div>
              <div className={style.GCP}><GrayCirclePattern/></div>
            </div>
            <Pattern2/>
            <div className={style.box1}>
              <div className={style.video}>
                <PlayBorder/>
              </div>
              <div className={style.textBox}>
                <p className={style.header1}><b>Lorem Ipsum</b></p>
                <p className={style.text2}>
                  Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce 
                  ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus 
                  nulla eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum 
                  sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce 
                  egestas felis metus, nec tincidunt elit finibus ac. Aliquam erat volutpat. 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                  inceptos himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa 
                  risus ultricies magna, in molestie ex nibh non elit. Donec fermentum erat 
                  lorem, sed gravida tellus rutrum quis.
                </p>
              </div>
              <div className={style.free}><Free/></div>
            </div>
            <Slider2/>
            <div className={style.PunCakeSvg}><PunCakeSvg/></div>
            <p className={style.header1}><b>Lorem Ipsum</b></p>
            <div className={style.photos}>
              <img className={style.photo1} src={photo1}/>
              <img className={style.photo1} src={photo2}/>
              <img className={style.photo1} src={photo3}/>
              <img className={style.photo1} src={photo4}/>
            </div>
            <div className={style.bottom}>
              <div className={style.kumuz}/>
              <div className={style.textBox2}>
                <p className={style.header3}>
                  <b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
                </p>
                <p className={style.text3}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a 
                  type specimen book. It has survived not only five centuries, but also the 
                  leap into electronic typesetting, remaining essentially unchanged. It was 
                  popularised in the 1960s with the release of Letraset sheets containing Lorem 
                  Ipsum passages, and more recently with desktop publishing software like Aldus 
                  PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
