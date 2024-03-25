import React from 'react'
import Header from '../../components/Header/Header'
import style from './MenuPage.module.css'
import TextWithSearch from '../../components/TextWithSearch/TextWithSearch'

export default function MenuPage() {
  return (
    <div className="App">
        <Header />
        <TextWithSearch text={'TRADITIONAL FAVORITES'}/>
    </div>
  )
}
