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
            Hozirgi kunda filialning masofaviy taʼlim yo‘nalishlariga 23 nafar professor-o‘qituvchilar dars mashg‘ulotlarini olib bormoqda.
            Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali masofaviy ta’lim platformasi o‘z ish faoliyatini olib bormoqta. Filialning masofaviy taʼlim platformasi internet manzili: <a href="https://studentlms.tatunf.uz" style={{color: 'goldenrod'}}>https://studentlms.tatunf.uz</a> .
            Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali masofaviy ta’lim platformasiga barcha fanlar bo‘yicha tillar kesmida ma’lumotlar (O‘UMlar) joylashtirilgan.
          </p>
        </div>
      </div>
    </div>
  )
}