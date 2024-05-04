import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default function Header() {
  const [show, setShow] = useState('header_hidden')
  return (
    <header>
      <div className='logo'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <Link to='/'><p>TATU NF</p></Link>
      </div>
      <ul className={`header ` + show}>
        <li><Link to='lesson-schedule'>Dars jadvali</Link></li>
        <li><Link to='exam-schedule'>Imtihon jadvali</Link></li>
        <li><Link to='teacher'>O'qituvchilar</Link></li>
        <li><Link to='employees'>Xodimlar</Link></li>
        <li><Link to='curriculum'>O'quv rejasi</Link></li>
      </ul>
      <button id='menubar_btn' onClick={() => {
        if (show === 'header_show') {
          setShow('header_hidden')
          document.getElementById('menubar_btn').style.right = '20px'
        } else {
          setShow('header_show')
          document.getElementById('menubar_btn').style.right = '320px'
        }
      }}>Menu</button>
    </header>
  )
}