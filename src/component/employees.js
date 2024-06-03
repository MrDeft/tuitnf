import React, { useState } from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
import avatar from '../images/avatar.png'
import Quat_Tleuov from '../images/bolim/Quat_Tleuov.jpg'
import E_Umirzakov from '../images/bolim/E_Umirzakov.jpg'
import D_Bimuratov from '../images/bolim/D_Bimuratov.png'
import I_Isakov from '../images/bolim/I_Isakov.png'

export default function Employees() {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleLiClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='employees'>
      <div className='home_img'>
        <h2>Xodimlar Bo'limi</h2>
        <img src={tatuimg} alt="" />
        <ul className='bolim'>
          <li className={`bolim_item ' + ${activeIndex === 0 ? 'bolim_item_active' : ''}`}
            onClick={() => handleLiClick(0)}
          >
            <img src={Quat_Tleuov} alt="" />
            <p><b>K.Tleuov</b> - Masofaviy ta'limni tashkil etish vа rivojlantirish markazi boshig'i
              <span style={{ display: activeIndex === 0 ? 'flex' : '' }} className='bolim_item_text'>
                <br />
                1998-1999 yy. - Qoraqalpog‘iston  markaziy mashina traktor parki III-toifali slesar'
                <br />
                1999-2003 yy. - Qoraqalpoq davlat universiteti matematika fakulteti talabasi
                <br />
                2003-2005 yy. - Qoraqalpoq davlat universiteti amaliy matematika kafedrasi magistranti
                <br />
                2005-2007 yy. - Qoraqalpoq davlat universiteti matematika fakulteti assistent-o‘qituvchisi
                <br />
                2007-2008 yy. - O‘zbekiston Milliy universiteti aspiranti
                <br />
                2008-2009 yy. - Qoraqalpoq davlat universiteti matematika fakulteti assistent-o‘qituvchisi
                <br />
                2009-2013 yy. - Toshkent axborot texnologiyalari universiteti Nukus filiali tabiiy va umumkasbiy
                fanlar kafedrasi assistent-o‘qituvchisi
                <br />
                2013-2014 yy. - Toshkent axborot texnologiyalari universiteti Nukus filiali telekommunikasiya
                injiniringi kafedrasi mudiri
                <br />
                2014-2015 yy. - Toshkent axborot texnologiyalari universiteti Nukus filiali axborot texnologiyalari
                kafedrasi assistent-o‘qituvchisi
                <br />
                2015-2016 yy. - Toshkent axborot texnologiyalari universiteti Nukus filialining o‘quv-metodik bo‘limi
                boshlig‘i
                <br />
                2016-2017 yy. -Toshkent axborot texnologiyalari universiteti Nukus filiali dasturiy injiniring
                kafedrasi katta o‘qituvchisi
                <br />
                2017-2018 yy. - Qoraqalpog‘iston Resublikasi Vazirlar Kengashi huzuridagi “Qoraqalpog‘iston
                komp'yuterlashtirish markazi” DUK direktori
                <br />
                2018-2018 yy. - Muxammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus
                filiali telekommunikasiya injiniring kafedrasi mudiri
                <br />
                2018- y. h.v.    - Muxammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus
                filiali axborot texnologiyalari kafedrasi katta o‘qituvchisi
              </span>
            </p>
          </li>
          <li className={`bolim_item ' + ${activeIndex === 1 ? 'bolim_item_active' : ''}`}
            onClick={() => handleLiClick(1)}
          >
            <img src={E_Umirzakov} alt="" />
            <p><b>E.Umirzakov</b> - masofaviy ta'limni boshqarish bo'yicha dasturiy ta'minot
              LMS platformasini yuritish va uzluksiz ishlashini nazorat qilib borishga ma'sul
              <span style={{ display: activeIndex === 1 ? 'flex' : '' }} className='bolim_item_text'>
                <br />
                2012 – 2015 y.y.- Nukus kompyuter va axborot tehnologiyalari kasb-hunar kolledji talabasi
                <br />
                2015 - 2019 y.y. -Toshkent axborot texnologiyalari universiteti Nukus filiali bakalavriat talabasi
                <br />
                2019 - 2020 y.y. -Muhammed al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali axborot texnologiyalari markazi tarmoq administratori
                <br />
                2019 – 2021 y.y.-Muhammed al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali telekommunikatsiya texnologiyalari va kasbiy talim fakulteti telekommunikatsiya texnologiyalari (teleradioyeshittirish) mutahassisligi magistranti
                <br />
                2021 - x.v.  -Muhammed al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti ma’lumotlarni uzatish tarmoqlari va tizimlari kafedrasi assistent o‘qituvchisi
              </span>
            </p>

          </li>
          <li className={`bolim_item ' + ${activeIndex === 2 ? 'bolim_item_active' : ''}`}
            onClick={() => handleLiClick(2)}
          >
            <img src={avatar} alt="" />
            <p><b>D.Qodirov</b> - 1-kurs talabalarning o'qish jarayonini nazorat qilish, kursdan
              kursga o'tkazish va o'zlashtirish ko'rsatkichlarini nazorat qilib borishga ma'sul
              <span style={{ display: activeIndex === 2 ? 'flex' : '' }} className='bolim_item_text'></span>
            </p>
          </li>
          <li className={`bolim_item ' + ${activeIndex === 3 ? 'bolim_item_active' : ''}`}
            onClick={() => handleLiClick(3)}
          >
            <img src={D_Bimuratov} alt="" />
            <p><b>D.Bimuratov</b> - 2-kurs talabalarning o'qish jarayonini nazorat qilish, kursdan
              kursga o'tkazisir va o'zlashtirish ko'rsatkichlarini nazorat qilib borishga ma'sul
              <span style={{ display: activeIndex === 3 ? 'flex' : '' }} className='bolim_item_text'>
                <br />
                2016-2020 yy.  -  Muxammad al-xorazmiy nomidagi toshkent axborot texnologiyalari universiteti Nukus filiali talabasi.
                <br />
                2022-yy.  -  Toshkent shaxar 91-IDUM  informatika ukituvchisi
                <br />
                2022-yy   -  Toshkent axborot texnologiyalari universiteti multimedia texnologiyalari kafedrasi stajor-ukituvchisi
                <br />
                2021–2023 yy  -  Muxammad al-xorazmiy nomidagi toshkent axborot texnologiyalari universiteti magistranti.
                <br />
                2023-yy - h.v.  -  Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali Axborot texnologiyalari kafedrasi assistenti-uqituvshisi.
              </span>
            </p>
          </li>
          <li className={`bolim_item ' + ${activeIndex === 4 ? 'bolim_item_active' : ''}`}
            onClick={() => handleLiClick(4)}
          >
            <img src={I_Isakov} alt="" />
            <p><b>I.Isakov</b> - Masofaviy ta'lim shakli uchun olinadigan video kontent
              uskunalarinining doimiy ishlashini ta'minlash, sozlash va nazorat qilishga ma'sul
              <span style={{ display: activeIndex === 4 ? 'flex' : '' }} className='bolim_item_text'>
                <br />
                2019-2023 -yil oraligida Muxammad-al' Xorazmiy nomidagi  Toshkent axborot texnologiyalari universiteti Nukus filiali (bakalavriat) ;
                <br />
                2023 yildan Muxammad-al' Xorazmiy nomidagi  Toshkent axborot texnologiyalari universiteti Nukus filiali (Komp'yuter injiniringi yonalishi 1-kurs magistranti)
                <br />
                2023-yil 22-noyabrdan Muxammad-al' Xorazmiy nomidagi  Toshkent axborot texnologiyalari universiteti Nukus filiali « Araliktan okitiu orayi» ga normativ-xukukiy xujjatlarin yurgizish va olib borish boyicha laborant.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
