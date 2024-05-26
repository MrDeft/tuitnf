import React, { useState, useEffect } from 'react'
import tatuimg from '../masofaviy/tatuimg.png'
import avatar from '../images/avatar.png'
import Teacherdata from '../teacherdata'

export default function Teacher() {
  const [teachers1, setTeachers1] = useState([]);
  const [teachers2, setTeachers2] = useState([]);
  useEffect(() => {
    setTeachers1(Teacherdata.teachers1);
    setTeachers2(Teacherdata.teachers2);
  }, []);
  return (
    <div className='teacher teacher_plus'>
      <div className='home_img'>
        <h2>O'qituvchilar Bo'limi</h2>
        <img id='img' src={tatuimg} alt="" />
        <div className='teacher_com'>
          {/* 1-kurs */}
          <div>
            <h3>1-Kurs</h3>
            <ul className='card_com'>
              {teachers1.map((teacher, index) => (
                <li className="card" id={index}>
                  <img src={teacher.rasm ? teacher.rasm : avatar} alt="Avatar" />
                  <div className="card_container">
                    <h4><b><span className='card_span'>F.I.Sh:</span>{teacher.fish}</b></h4>
                    <p>{teacher.daraja}</p>
                    <h5><b><span className='card_span'>Fan:</span>{teacher.fan}</b></h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* 2-kurs */}
          <div>
            <h3>2-Kurs</h3>
            <ul className='card_com'>
              {teachers2.map((teacher, index) => (
                <li className="card" id={index}>
                  <img src={teacher.rasm ? teacher.rasm : avatar} alt="Avatar" />
                  <div className="card_container">
                    <h4><b><span className='card_span'>F.I.Sh:</span>{teacher.fish}</b></h4>
                    <p>{teacher.daraja}</p>
                    <h5><b><span className='card_span'>Fan:</span>{teacher.fan}</b></h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
