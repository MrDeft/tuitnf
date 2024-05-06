import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tatuimg from '../masofaviy/tatuimg.png'
import ki1 from '../images/dars/ki-1-kurs.png'
import ki2 from '../images/dars/ki-2-kurs.png'
import kt1 from '../images/dars/kt-1-kurs.png'
import kt2 from '../images/dars/kt-2-kurs.png'

export default function Curriculum() {
    const [activeDiv, setActiveDiv] = useState(null); // Faol divni saqlash uchun holat o'zgaruvchisi

    // Buton bosilganda
    const handleButtonClick = (index) => {
        setActiveDiv(index); // Bosilgan butonning indeksini saqlash
    };
    // Barcha divlardan active classni olib tashlash
    const removeAllActiveClasses = () => {
        setActiveDiv(null);
    };

    return (
        <div className='curriculum'>
            <div className='curriculum_in'>

                <div className='curriculum_img'>
                    <h1>O'quv rejasi</h1>
                    <ul className='curriculum_com'>
                        <li><Link to="/curriculum/di1">1-Kurs Dasturiy injiniring</Link></li>
                        <li><Link to="/curriculum/di2">2-Kurs Dasturiy injiniring</Link></li>
                        <li><Link to="/curriculum/at1">1-Kurs AT</Link></li>
                        <li><Link to="/curriculum/at2">2-Kurs AT</Link></li>
                    </ul>
                </div>
                <div className='lesson'>
                    <h1>Dars jadvali</h1>
                    <ul className='lesson_com'>

                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={removeAllActiveClasses}>Yopish</button></div>
                        </li>
                        {/* 1 - Kurs */}
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(1)} className={activeDiv === 1 ? 'lesson_item_titul_active' : 'inherit' }>1-Kurs KI fakultet</button></div>
                            <div className={`lesson_item_img ${activeDiv === 1 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={ki1} alt="" /></div>
                        </li>

                        {/* 2 - Kurs */}
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(2)} className={activeDiv === 2 ? 'lesson_item_titul_active' : 'inherit' }>2-Kurs KI fakultet</button></div>
                            <div className={`lesson_item_img ${activeDiv === 2 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={ki2} alt="" /></div>
                        </li>

                        {/* 1 - Kurs */}
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(3)} className={activeDiv === 3 ? 'lesson_item_titul_active' : 'inherit' }>1-Kurs Telekommunikatsiya fakultet</button></div>
                            <div className={`lesson_item_img ${activeDiv === 3 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={kt1} alt="" /></div>
                        </li>

                        {/* 2 - Kurs */}
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(4)} className={activeDiv === 4 ? 'lesson_item_titul_active' : 'inherit' }>2-Kurs Telekommunikatsiya fakultet</button></div>
                            <div className={`lesson_item_img ${activeDiv === 4 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={kt2} alt="" /></div>
                        </li>
                    </ul>
                </div>
            </div>
            <img className='curriculum_img_i' src={tatuimg} alt="" />
        </div>
    )
}
