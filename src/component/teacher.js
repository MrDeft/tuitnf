import React from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
import avatar from '../images/avatar.png'

export default function teacher() {
  return (
    <div className='teacher teacher_plus'>
      <div className='home_img'>
        <h2>O'qituvchilar Bo'limi</h2>
        <img id='img' src={tatuimg} alt="" />
        <ul className='card_com'>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b><span className='card_span'>F.I.Sh:</span> Artiqbayev Maxkam Artiqbayevich</b></h4>
              <p>PhD</p>
              <h5><b><span className='card_span'>Fan:</span> Dasturiy injiniringga kirish</b></h5>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
          <li class="card">
            <img src={avatar} alt="Avatar"/>
            <div class="card_container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
