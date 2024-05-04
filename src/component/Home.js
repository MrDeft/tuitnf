import React from 'react'
import tatuimg from '../masofaviy/tatuimg.png'

export default function Home() {
  return (
    <div className='home'>
      <div className='home_img'>
        <h2>Toshkent Axborot Texnologiyalari Universiteti Nukus Filiali</h2>
        <img src={tatuimg} alt="" />
      </div>
    </div>
  )
}
