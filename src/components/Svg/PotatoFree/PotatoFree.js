import React from 'react'
import potato from '../../../assets/potato-free.png'

export default function PotatoFree({...props}) {
  return (
    <img src={potato} {...props}/>
  )
}
