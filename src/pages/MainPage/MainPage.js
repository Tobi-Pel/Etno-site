import { Route , Routes , Link } from "react-router-dom";
import React, {useState} from "react";
import Header from "../Header/Header";
import Kalpak2 from "../../components/Svg/Kalpak2Svg/Kalpak2";
import style from "./MainPage.module.css"
import CakeSvg from "../../components/Svg/CakeSvg/CakeSvg";
import PunCakeSvg from "../../components/Svg/PunCakeSvg/PunCakeSvg";
import SteamSvg from "../../components/Svg/SteamSvg/SteamSvg";
import WhiteKomuzSvg from "../../components/Svg/WhiteKomuzSvg/WhiteKomuzSvg";
import Pizza from "../../components/Svg/PizzaSvg/Pizza";
import Play from "../../components/Svg/PlaySvg/Play";
import Pasta from "../../components/Svg/PastaSvg/Pasta"
import Footer from "../Footer/Footer";

export default function MainPage() {


    return (
        <div className="App">
            <Header/>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.innerContainer}>
                        <div className={style.left}>
                            <Kalpak2/>
                        </div>
                        <div className={style.right}>
                            <p className={style.header}>КОШ КЕЛИНИЗДЕР</p>
                            <p className={style.text1}><b>А сиз күткөн даамдарды биз менен биргеликте ооз тийиңиз!</b></p>
                            <p className={style.text2}>
                                "Кыргыздын улуттук тамак аштары" дасторконуна жайылып, 
                                берекелүү, даамдуу жана экологиялык жактан тазалыгы менен 
                                башкаларда айырмаланат
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.blackBox}></div>
            </div>
            {/*  */}
            <div className={style.largeText}>
                <div className={style.steam}>
                    <SteamSvg/>
                </div>
                <div className={style.cake}>
                    <CakeSvg/>
                </div>
                <p className={style.header2}>
                    <div className={style.line}></div>
                    <p className={style.headerInner}>НУКУРА КЫРГЫЗ ДААМЫ</p>
                </p>
                <div className={style.bigText}>
                    <p className={style.text3}>
                        Fusce vitae felis ut diam pharetra tristique id nec nulla. 
                        Fusce ac ipsum suscipit, commodo orci et, porta ex. Pellentesque 
                        tempus nulla eu erat pulvinar, vitae varius massa convallis. 
                        Mauris vestibulum sapien vitae orci ullamcorper dapibus. 
                        Integer quis enim urna. Fusce egestas felis metus, nec tincidunt 
                        elit finibus ac. Aliquam erat volutpat. Class aptent taciti 
                        sociosqu ad litora torquent per conubia nostra, per inceptos 
                        himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa 
                        risus ultricies magna, in molestie ex nibh non elit. Donec fermentum 
                        erat lorem, sed gravida tellus rutrum quis.
                    </p>
                    <p className={style.text3}>
                        Fusce vitae felis ut diam pharetra tristique id nec nulla. 
                        Fusce ac ipsum suscipit, commodo orci et, porta ex. Pellentesque 
                        tempus nulla eu erat pulvinar, vitae varius massa convallis. 
                        Mauris vestibulum sapien vitae orci ullamcorper dapibus. 
                        Integer quis enim urna. Fusce egestas felis metus, nec tincidunt 
                        elit finibus ac. Aliquam erat volutpat. Class aptent taciti 
                        sociosqu ad litora torquent per conubia nostra, per inceptos 
                        himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa 
                        risus ultricies magna, in molestie ex nibh non elit. Donec fermentum 
                        erat lorem, sed gravida tellus rutrum quis.
                    </p>
                </div>
                <div className={style.punCake}>
                    <PunCakeSvg/>    
                </div>                  
            </div>
            {/*  */}
            <div className={style.mainGallery}>
                <div className={style.gallery}>
                    <div className={style.box1}>
                        <WhiteKomuzSvg/>
                    </div>
                    <div className={style.box2}>
                        <WhiteKomuzSvg/>
                    </div>
                    <div className={style.box3}>
                        <WhiteKomuzSvg/>
                    </div>
                    <div className={style.box4}>
                        <WhiteKomuzSvg/>
                    </div>
                    <div className={style.box5}>
                        <WhiteKomuzSvg/>
                    </div>
                    <div className={style.box6}>
                        <WhiteKomuzSvg/>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={style.mainBox}>
                <div className={style.line2}></div>
                <div className={style.Pizza}><Pizza/></div>
                <div className={style.header3}>ГАЛЕРЕЯ</div>
                <div className={style.container2}>
                    <div className={style.video}>
                        <Play/>
                    </div>
                    <div className={style.textBox}>
                        <p className={style.header4}><b>WE HAVE YOUTUBE CHANNEL</b></p>
                        <p className={style.text4}>
                            Fusce vitae felis ut diam pharetra tristique id nec nulla. 
                            Fusce ac ipsum suscipit, commodo orci et, porta ex. 
                            Pellentesque tempus nulla eu erat pulvinar, vitae varius 
                            massa convallis. Mauris vestibulum sapien vitae orci 
                            ullamcorper dapibus. Integer quis enim urna. Fusce egestas 
                            felis metus, nec tincidunt elit finibus ac. Aliquam erat 
                            volutpat. Class aptent taciti sociosqu ad litora torquent 
                            per conubia nostra, per inceptos himenaeos. Nam eleifend, 
                            lectus sed porttitor ullamcorper, massa risus ultricies 
                            magna, in molestie ex nibh non elit. Donec fermentum erat 
                            lorem, sed gravida tellus rutrum quis.
                        </p>
                        <div className={style.Pasta}><Pasta/></div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}