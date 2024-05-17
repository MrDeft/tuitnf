import React, { useState, useEffect, useRef } from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
import ki1 from '../images/dars/ki-1-kurs.png'
import ki2 from '../images/dars/ki-2-kurs.png'
import kt1 from '../images/dars/kt-1-kurs.png'
import kt2 from '../images/dars/kt-2-kurs.png'
import ekzamen01 from '../images/exam/ekzamen01.jpg'
import ekzamen02 from '../images/exam/ekzamen02.jpg'
import Jarayon from './jarayon'

export default function Curriculum() {
    const [activeDiv, setActiveDiv] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const refs = useRef([]);
    console.log(imageHeight);
    const handleButtonClick = (index) => {
        setActiveDiv(index);
    };
    const removeAllActiveClasses = () => {
        setActiveDiv(null);
    };
    const removeAllActiveTabClasses = () => {
        setActiveTab(null);
    };
    useEffect(() => {
        const calculateContainerHeight = () => {
            let maxImageHeight = 0;
            refs.current.forEach(ref => {
                if (ref.offsetHeight > maxImageHeight) {
                    maxImageHeight = ref.offsetHeight;
                }
            });
            setContainerHeight(maxImageHeight);
        };
        const calculateImageHeight = () => {
            if (activeDiv !== null) {
                const activeImageHeight = refs.current[activeDiv - 1].offsetHeight;
                setImageHeight(activeImageHeight);
            }
        };
        calculateContainerHeight();
        if (activeDiv !== null) {
            calculateImageHeight();
        }
    }, [activeDiv]);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className='curriculum'>
            <ul className='curriculum_in'>
                <Jarayon />
                <li className='lesson'>
                    <h1>Dars jadvali</h1>
                    <ul className='lesson_com' style={{ height: `${containerHeight + 30}px` }}>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => {
                                removeAllActiveClasses()
                            }}>Yopish</button></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(1)} className={activeDiv === 1 ? 'lesson_item_titul_active' : 'inherit'}>1-Kurs KI fakultet</button></div>
                            <div ref={(ref) => { refs.current[0] = ref; }} className={`lesson_item_img ${activeDiv === 1 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={ki1} alt="" /></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(2)} className={activeDiv === 2 ? 'lesson_item_titul_active' : 'inherit'}>2-Kurs KI fakultet</button></div>
                            <div ref={(ref) => { refs.current[1] = ref; }} className={`lesson_item_img ${activeDiv === 2 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={ki2} alt="" /></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(3)} className={activeDiv === 3 ? 'lesson_item_titul_active' : 'inherit'}>1-Kurs Telekommunikatsiya fakultet</button></div>
                            <div ref={(ref) => { refs.current[2] = ref; }} className={`lesson_item_img ${activeDiv === 3 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={kt1} alt="" /></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleButtonClick(4)} className={activeDiv === 4 ? 'lesson_item_titul_active' : 'inherit'}>2-Kurs Telekommunikatsiya fakultet</button></div>
                            <div ref={(ref) => { refs.current[3] = ref; }} className={`lesson_item_img ${activeDiv === 4 ? 'lesson_item_img_active' : 'lesson_item_img'}`}><img src={kt2} alt="" /></div>
                        </li>
                    </ul>
                </li>
                <li className='exam'>
                    <h1>Imtihom jadvali</h1>
                    <ul className='lesson_com'>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={removeAllActiveTabClasses}>Yopish</button></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'lesson_item_titul_active' : 'inherit'}>1-Kurs KI fakultet</button></div>
                            <div className={`lesson_item_img ${activeTab === 1 ? 'lesson_item_img_active' : ''}`}><img src={ekzamen01} alt="" /></div>
                        </li>
                        <li className='lesson_component'>
                            <div className='lesson_item_titul'><button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'lesson_item_titul_active' : 'inherit'}>2-Kurs KI fakultet</button></div>
                            <div className={`lesson_item_img ${activeTab === 2 ? 'lesson_item_img_active' : ''}`}><img src={ekzamen02} alt="" /></div>
                        </li>
                    </ul>
                </li>
            </ul>
            <img className='curriculum_img_i' src={tatuimg} alt="" />
        </div>
    )
}