import React from 'react'
import tatuimg from '../masofaviy/tatuimg.png'


export default function about() {
  return (
    <div className='about'>
      <img src={tatuimg} alt="" />
      <div className='about_com'>
        <h3>Biz haqimizda</h3>
        <div>
          <p className='about_com_text'>
            O‘zbekiston Respublikasi Vazirlar Mahkamasining 2022-yil 3 oktyabrdagi 559-son qarori asosida, O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi 2022 yil 7 oktyabrdagi “Oliy ta’lim tashkilotlarida masofaviy ta’lim shaklini joriy etish to‘g‘risida”gi 324-sonli buyrug‘i bo‘yicha filialda 2022-2023 o‘quv yilidan boshlab masovafiy o‘qish joriy etildi.
            Hozirgi kunda filialning masofaviy taʼlim yo‘nalishlariga 24 nafar professor-o‘qituvchilar dars mashg‘ulotlarini olib bormoqda.
            Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali masofaviy ta’lim platformasi o‘z ish faoliyatini olib bormoqta. Filialning masofaviy taʼlim platformasi internet manzili: <a href="https://studentlms.tatunf.uz" style={{ color: 'goldenrod' }}>https://studentlms.tatunf.uz</a> .
            Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali masofaviy ta’lim platformasiga barcha fanlar bo‘yicha tillar kesmida ma’lumotlar (O‘UMlar) joylashtirilgan.
          </p>
        </div>
        <div className='about_yout'>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/B5qA3RvrbUM?si=vMEN4Mt9Wxwhw_g7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>TREYLER (TATU Nukus filiali “Masofaviy ta’limni tashkil etish va rivojlantirish” markazi)</p>
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8kORCd7nyOA?si=fn4U0zf7NMQNCkK7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>TATU Nukus filiali “Masofaviy ta’limni tashkil etish va rivojlantirish” markazi</p>
          </div>
        </div>
      </div>
    </div>
  )
}