import React, { useState, useEffect, useRef } from 'react'
import at_1 from '../masofaviy/kurs_1/at-1.png'
import at_2 from '../masofaviy/kurs_2/at-2.png'
import di_1 from '../masofaviy/kurs_1/di-1.png'
import di_2 from '../masofaviy/kurs_2/di-2.png'

export default function Jarayon() {
    const [activDiv, setActivDiv] = useState(null);
    const [containerHeigh, setContainerHeigh] = useState(0);
    const [imageHeigh, setImageHeigh] = useState(0);
    const refe = useRef([]);
    console.log(imageHeigh);
    const handleButtonClic = (index) => {
        setActivDiv(index);
    };
    const removeAllActiveClasse = () => {
        setActivDiv(null);
    };
    useEffect(() => {
        const calculateContainerHeigh = () => {
            let maxImageHeigh = 0;
            refe.current.forEach(ref => {
                if (ref.offsetHeight > maxImageHeigh) {
                    maxImageHeigh = ref.offsetHeight;
                }
            });
            setContainerHeigh(maxImageHeigh);
        };
        const calculateImageHeigh = () => {
            if (activDiv !== null) {
                const activeImageHeigh = refe.current[activDiv - 1].offsetHeight;
                setImageHeigh(activeImageHeigh);
            }
        };
        calculateContainerHeigh();
        if (activDiv !== null) {
            calculateImageHeigh();
        }
    }, [activDiv]);
    return (
        <li className='lesson'>
            <h1>O'quv rejasi</h1>
            <ul className='lesson_com' style={{ height: `${containerHeigh + 30}px` }}>

                <li className='lesson_component'>
                    <div className='lesson_item_titul'><button onClick={() => {

                        removeAllActiveClasse()
                    }}>Yopish</button></div>
                </li>
                <li className='lesson_component'>
                    <div className='lesson_item_titul'><button onClick={() => handleButtonClic(11)} className={activDiv === 11 ? 'lesson_item_titul_active_di' : 'inherit'}>1-Kurs DI gr</button></div>
                    <div ref={(re) => { refe.current[10] = re; }} className={`lesson_item_img ${activDiv === 11 ? 'lesson_item_img_active_di' : 'lesson_item_img'}`}><img src={di_1} alt="" /></div>
                </li>
                <li className='lesson_component'>
                    <div className='lesson_item_titul'><button onClick={() => handleButtonClic(12)} className={activDiv === 12 ? 'lesson_item_titul_active_di' : 'inherit'}>2-Kurs DI gr</button></div>
                    <div ref={(re) => { refe.current[11] = re; }} className={`lesson_item_img ${activDiv === 12 ? 'lesson_item_img_active_di' : 'lesson_item_img'}`}><img src={di_2} alt="" /></div>
                </li>
                <li className='lesson_component'>
                    <div className='lesson_item_titul'><button onClick={() => handleButtonClic(13)} className={activDiv === 13 ? 'lesson_item_titul_active_di' : 'inherit'}>1-Kurs AT gr</button></div>
                    <div ref={(re) => { refe.current[12] = re; }} className={`lesson_item_img ${activDiv === 13 ? 'lesson_item_img_active_di' : 'lesson_item_img'}`}><img src={at_1} alt="" /></div>
                </li>
                <li className='lesson_component'>
                    <div className='lesson_item_titul'><button onClick={() => handleButtonClic(14)} className={activDiv === 14 ? 'lesson_item_titul_active_di' : 'inherit'}>2-Kurs AT gr</button></div>
                    <div ref={(re) => { refe.current[13] = re; }} className={`lesson_item_img ${activDiv === 14 ? 'lesson_item_img_active_di' : 'lesson_item_img'}`}><img src={at_2} alt="" /></div>
                </li>
            </ul>
        </li>
    )
}