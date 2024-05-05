import React from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
import avatar from '../images/avatar.png'

export default function employees() {
  return (
    <div className='employees'>
      <div className='home_img'>
        <h2>Xodimlar Bo'limi</h2>
        <img src={tatuimg} alt="" />
        <ul className='bolim'>
          <li className='bolim_item'>
            <img src={avatar} alt="" />
            <p><b>K.Tleuov</b> - Masofaviy ta'limni tashkil etish vа rivojlantirish markazi boshig'i</p>
          </li>
          <li className='bolim_item'>
            <img src={avatar} alt="" />
            <p><b>E.Umirzakov</b> - masofaviy ta'limni boshqarish bo'yicha dasturiy ta'minot
              LMS platformasini yuritish va uzluksiz ishlashini nazorat qilib borishga ma'sul</p>
          </li>
          <li className='bolim_item'>
            <img src={avatar} alt="" />
            <p><b>D.Qodirov</b> - 1-kurs talabalarning o'qish jarayonini nazorat qilish, kursdan
              kursga o'tkazish va o'zlashtirish ko'rsatkichlarini nazorat qilib borishga ma'sul</p>
          </li>
          <li className='bolim_item'>
            <img src={avatar} alt="" />
            <p><b>D.Bimuratov</b> - 2-kurs talabalarning o'qish jarayonini nazorat qilish, kursdan
              kursga o'tkazisir va o'zlashtirish ko'rsatkichlarini nazorat qilib borishga ma'sul</p>
          </li>
          <li className='bolim_item'>
            <img src={avatar} alt="" />
            <p><b>I.Isakov</b> - Masofaviy ta'lim shakli uchun olinadigan video kontent
              uskunalarinining doimiy ishlashini ta'minlash, sozlash va nazorat qilishga ma'sul</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
