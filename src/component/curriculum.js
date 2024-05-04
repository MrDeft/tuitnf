import React from 'react'
import { Link } from 'react-router-dom'
import tatuimg from '../masofaviy/tatuimg.png'

export default function curriculum() {
    return (
        <div className='curriculum'>
            <div className='curriculum_img'>
                <h1>O'quv rejasi</h1>
                <ul>
                    <li><Link to="/curriculum/di1">1-Kurs Dasturiy injiniring</Link></li>
                    <li><Link to="/curriculum/di2">2-Kurs Dasturiy injiniring</Link></li>
                    <li><Link to="/curriculum/at1">1-Kurs AT</Link></li>
                    <li><Link to="/curriculum/at2">2-Kurs AT</Link></li>
                </ul>
            </div>
                <img className='curriculum_img_i' src={tatuimg} alt="" />
        </div>
    )
}
