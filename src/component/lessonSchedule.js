import React from 'react'
import ki1 from '../images/dars/ki-1-kurs.png'
import ki2 from '../images/dars/ki-2-kurs.png'
import kt1 from '../images/dars/kt-1-kurs.png'
import kt2 from '../images/dars/kt-2-kurs.png'


export default function lessonSchedule() {
  return (
    <div className='lesson'>

      {/* 1 - Kurs */}
      <ul className='lesson__component'>
        <li className='lesson__item__titul'><button>1-Kurs KI fakultet</button></li>
        <li className='lesson__item__img'><img src={ki1} alt="" /></li>
      </ul>

      {/* 2 - Kurs */}
      <ul className='lesson__component'>
        <li className='lesson__item__titul'><button>2-Kurs KI fakultet</button></li>
        <li className='lesson__item__img'><img src={ki2} alt="" /></li>
      </ul>

      {/* 1 - Kurs */}
      <ul className='lesson__component'>
        <li className='lesson__item__titul'><button>1-Kurs Telekommunikatsiya fakultet</button></li>
        <li className='lesson__item__img'><img src={kt1} alt="" /></li>
      </ul>

      {/* 2 - Kurs */}
      <ul className='lesson__component'>
        <li className='lesson__item__titul'><button>2-Kurs Telekommunikatsiya fakultet</button></li>
        <li className='lesson__item__img'><img src={kt2} alt="" /></li>
      </ul>
    </div>
  )
}
