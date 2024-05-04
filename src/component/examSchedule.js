import React from 'react'
import ekzamen01 from '../images/exam/ekzamen01.jpg'
import ekzamen02 from '../images/exam/ekzamen02.jpg'

export default function examSchedule() {
  return (
    <div className='exam'>

      {/* 1 - Kurs */}
      <ul>
        <li className='exam__item__titul'><h2>1-Kurs</h2></li>
        <li className='exam__item__img'><img src="" alt="" /></li>
      </ul>

      {/* 2 - Kurs */}
      <ul>
        <li className='exam__item__titul'><h2>2-Kurs KI fakultet</h2></li>
        <li className='exam__item__img'><img src={ekzamen01} alt="" /></li>
      </ul>

      {/* 2 - Kurs */}
      <ul>
        <li className='exam__item__titul'><h2>2-Kurs Telekommunikatsiya fakultet</h2></li>
        <li className='exam__item__img'><img src={ekzamen02} alt="" /></li>
      </ul>

      {/* 3 - Kurs */}
      <ul>
        <li className='exam__item__titul'><h2>3-Kurs</h2></li>
        <li className='exam__item__img'><img src={ekzamen01} alt="" /></li>
      </ul>

      {/* 4 - Kurs */}
      <ul>
        <li className='exam__item__titul'><h2>4-Kurs</h2></li>
        <li className='exam__item__img'><img src={ekzamen01} alt="" /></li>
      </ul>
    </div>
  )
}
