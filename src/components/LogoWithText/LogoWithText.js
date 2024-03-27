import React from 'react'
import style from './LogoWithText.module.css'
import logo from '../../assets/kyrgyz.png'
import logo2 from '../../assets/kyrgyz-uzor.png'

export default function LogoWithText() {
  return (
    <div className={style.LogoWithText}>
        <img src={logo} className={style.logo}/>
        <div className={style.collector1}>
            <p className={style.p1}>КЫРГЫЗ ДААМЫ</p>
            <div className={style.collector2}>
                <div className={style.yellowLine}></div>
                <p className={style.description}>Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus nulla eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce egestas felis metus, nec tincidunt elit finibus ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eleifend, lectus sed porttitor ullamcorper, massa risus ultricies magna, in molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida tellus rutrum quis.</p>
            </div>
        </div>
        <img src={logo2} className={style.logo2}/>
    </div>
  )
}
