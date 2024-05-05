import React, { useState } from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
// import { Link } from 'react-router-dom'
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
import telegram from '../images/social/telegram.svg'
import twitterx from '../images/social/twitterx.svg'
import youtube from '../images/social/youtube.svg'
import website from '../images/social/website.png'

export default function Home() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  const handleButtonToggle = (event, index) => {
    event.stopPropagation(); // Bunda li elementining bosilishini to'xtatamiz
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };

  return (
    <div className='home'>
      <div className='home_img'>
        <div className='home_com'>
          <h3>Muhammad al-Xorazmiy nomidagi TATU Nukus filiali Masofaviy Ta'lim tizimi</h3>
          {/* Yangiliklar */}
          <div className='home_news'>
            <h1>Yangiliklar</h1>
            <ul className='home_news_com'>
              <li className={`home_news_item ${selectedItemIndex === 44 ? 'home_news_active' : 'home_news_item'}`} onClick={() => handleItemClick(44)}>
                <>
                  <button className='home_news_item_btn' onClick={(event) => handleButtonToggle(event, 44)}>
                    {selectedItemIndex === 0 ? 'Yopish' : 'Add Class'}
                  </button>
                  <img className='home_news_img' src="https://tatunf.uz/images/news/2024/may/1/4.jpg" alt="" />
                  <div>
                    <h4>Ózbekstan ulıwma úyimiz!</h4>
                    <p>Muhammed al-Xorezmiy atındaǵı TITU Nókis filialında "Ózbekstan - ulıwma úyimiz" atamasındaǵı doslıq</p>
                  </div>
                </>
              </li>
              <li className={`home_news_item ${selectedItemIndex === 1 ? 'home_news_active' : 'home_news_item'}`} onClick={() => handleItemClick(1)}>
                <>
                  <button className='home_news_item_btn' onClick={(event) => handleButtonToggle(event, 0)}>
                    {selectedItemIndex === 1 ? 'Yopish' : 'Add Class'}
                  </button>
                  <img className='home_news_img' src="https://tatunf.uz/images/news/2024/may/1/8.jpg" alt="" />
                  <div>
                    <h4>"Jaslar akademiyası forumı" bolıp ótti.</h4>
                    <p>30-aprel kúni Nókis kánshilik institutında Ájiniyaz atındaǵı NMPI, Muhammed al-Xorezmiy atındaǵı TITU</p>
                  </div>
                </>
              </li>
              <li className={`home_news_item ${selectedItemIndex === 2 ? 'home_news_active' : 'home_news_item'}`} onClick={() => handleItemClick(2)}>
                <>
                  <button className='home_news_item_btn' onClick={(event) => handleButtonToggle(event, 0)}>
                    {selectedItemIndex === 2 ? 'Yopish' : 'Add Class'}
                  </button>
                  <img className='home_news_img' src="https://tatunf.uz/images/news/2024/may/1/11.jpg" alt="" />
                  <div>
                    <h4>Búgin erte tańnan paytaxtımız boylap «Bir watanda, bir waqıtta, birdey aralıqqa, bir maqsette – birgelikte</h4>
                    <p>Marafonda bárshe qatnasıwshılar qatarında Muhammed al-Xorezmiy atındaģı TITU Nókis filialı basshılar</p>
                  </div>
                </>
              </li>
              <li className={`home_news_item ${selectedItemIndex === 3 ? 'home_news_active' : 'home_news_item'}`} onClick={() => handleItemClick(3)}>
                <>
                  <button className='home_news_item_btn' onClick={(event) => handleButtonToggle(event, 0)}>
                    {selectedItemIndex === 3 ? 'Yopish' : 'Add Class'}
                  </button>
                  <img className='home_news_img' src="https://tatunf.uz/images/news/2024/april/5/6.jpg" alt="" />
                  <div>
                    <h4>Mutoala loyihasi taqdimoti bilan tanishmoqda</h4>
                    <p>
                      Ayni damda, Muhammad al-Xorazmiy nomidagi TATU Nukus filiali talaba-yoshlari tadbir doirasida O'zbek xalqi Jadidlarining ilm-ma'rifat ulashish maqsadida hayot yo'llarida bosib o'tgan qiyinchiliklarini aks ettirgan spektaklni tomosha qilmoqda.
                      Ayni damda, Muhammad al-Xorazmiy nomidagi TATU Nukus filiali talaba-yoshlari tadbir doirasida O'zbek xalqi Jadidlarining ilm-ma'rifat ulashish maqsadida hayot yo'llarida bosib o'tgan qiyinchiliklarini aks ettirgan spektaklni tomosha qilmoqda.
                    </p>
                  </div>
                </>
              </li>
              <li className={`home_news_item ${selectedItemIndex === 4 ? 'home_news_active' : 'home_news_item'}`} onClick={() => handleItemClick(4)}>
                <>
                  <button className='home_news_item_btn' onClick={(event) => handleButtonToggle(event, 0)}>
                    {selectedItemIndex === 4 ? 'Yopish' : 'Add Class'}
                  </button>
                  <img className='home_news_img' src="https://tatunf.uz/images/news/2024/april/5/24.jpg" alt="" />
                  <div>
                    <h4>"Xon atlas" ilaji bolıp ótti</h4>
                    <p>Filialımızda hayal-qızlarımızdıń milliy kóyleklerinde xalqımızdıń mıń ásirlik ótmishi, úrp-ádet hám dástúrleri sáwlelendirilgen kórinisler jámlengen "Xon atlas" hápteligi sheńberinde ilaj bolıp ótti.</p>
                  </div>
                </>
              </li>
            </ul>
          </div>

          {/* Havolalaar */}
          <div className='home_link'>
            <h1>Foydali hovalalar</h1>
            <ul className='home_link_com'>

              <li className='home_link_item'>
                <a href="https://student.tatunf.uz/dashboard/login">
                  <div>
                    <img src="https://student.tatunf.uz/assets/226ccd22/img/gerb.png" alt="" />
                    <div>
                      <h4>Toshkent axborot texnologiyalari universiteti Nukus filiali</h4>
                      <p><span>HEMIS</span> Student axborot tizimi</p>
                    </div>
                  </div>
                </a>
              </li>

              <li className='home_link_item'>
                <a href="https://studentlms.tatunf.uz">
                  <div>
                    <img src="https://student.tatunf.uz/assets/226ccd22/img/gerb.png" alt="" />
                    <div>
                      <h4>Toshkent axborot texnologiyalari universiteti Nukus filiali</h4>
                      <p><span>EVEREST</span> Student axborot tizimi</p>
                    </div>
                  </div>
                </a>
              </li>

            </ul>
          </div>

          {/* Footer */}
          <div className='home_footer'>
            <ul className='home_footer_com'>
              <li className='home_footer_item'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6966481790237!2d59.62231558946046!3d42.46179371301456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a6a5da477e9%3A0x25c61071930fbf14!2z0J3Rg9C60YPRgdGB0LrQuNC5INCk0LjQu9C40LDQuyDQotCw0YjQutC10L3RgdGC0LrQvtCz0L4g0KPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40LksIEEuIERvc25hemFyb3Yga28nc2hlc2ksINCd0YPQutGD0YEsINCg0LXRgdC_0YPQsdC70LjQutCwINCa0LDRgNCw0LrQsNC70L_QsNC60YHRgtCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e1!3m2!1sru!2s!4v1714838835991!5m2!1sru!2s" width="600" title="This is a unique title" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
              </li>
              <li className='home_footer_item'>
                <h3>Biz bilan bog'lanish</h3>
                <ul className='home_footer_right'>
                  <li>
                    <h4>Manzil:</h4>
                    <p>Nukus shahri, A. Dosnazarov ko`chasi. 74-uy</p>
                  </li>
                  <li>
                    <h4>Ishonch telefonlari:</h4>
                    <p>+998-61-222-49-10</p>
                    <p>+998-61-222-46-12</p>
                  </li>
                  <li>
                    <h4>E-mail:</h4>
                    <p><a href="mailto:kantatunf@umail.uz">kantatunf@umail.uz</a></p>
                  </li>
                  <li>
                    <h4>Biz ijtimoiy tarmoqlarda:</h4>
                    <ul className='home_footer_social'>
                      <a href="https://tatunf.uz/"><img src={website} alt="" /></a>
                      <a href="https://t.me/titunf"><img src={telegram} alt="" /></a>
                      <a href="https://www.instagram.com/nb_tuit_official?igsh=MWVmdDNqZ2I1NjVteA=="><img src={instagram} alt="" /></a>
                      <a href="https://bit.ly/3z9RdAp"><img src={youtube} alt="" /></a>
                      <a href="https://fb.com/tatunf.uz"><img src={facebook} alt="" /></a>
                      <a href="https://twitter.com/titu_nf/"><img src={twitterx} alt="" /></a>
                    </ul>
                  </li>
                </ul>

              </li>
            </ul>
          </div>
        </div>

        <img src={tatuimg} alt="" />
      </div>
    </div>
  )
}
