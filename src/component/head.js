import React from 'react'
import logo from '../logo.png'
export default function head() {
    return (
        <div className='head'>

            <div className='head_com'>
                <div>
                    <img src={logo} alt="" />
                    <h4>
                        Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali
                    </h4>
                </div>
                <div>
                    <img src="https://tatunf.uz/views/img/gerb_flag.jpg" alt="" />
                </div>
            </div>

            <p className='head_p'>Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti Nukus filiali “Masofaviy ta’limni tashkil etish va rivojlantirish” markazi rasmiy web sahifasi</p>
        </div>
    )
}
