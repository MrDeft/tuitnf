import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const options = [
  { value: 'uzb', label: 'UZB', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-g7a_UIrOPSCikicGCd2WPifbOEtU5diP8QXKhnuPg&s' },
  { value: 'qar', label: 'QAR', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_Karakalpakstan.svg/800px-Flag_of_Karakalpakstan.svg.png' },
  { value: 'rus', label: 'RUS', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg' },
  { value: 'eng', label: 'ENG', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
];



export default function Header() {
  const [show, setShow] = useState('header_hidden')

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selected = options.find(option => option.value === selectedValue);
    setSelectedOption(selected);
  };

  return (
    <header>
      <div className='logo'>
        <Link to='/'><p>Bosh sahifa</p></Link>
      </div>
      <ul className={`header ` + show}>
        <li><Link to='about'>Biz haqimizda</Link></li>
        <li><Link to='employees'>Xodimlar</Link></li>
        <li><Link to='teacher'>O'qituvchilar</Link></li>
        <li><Link to='curriculum'>O'quv jarayoni</Link></li>
      </ul>
      <button id='menubar_btn' onClick={() => {
        if (show === 'header_show') {
          setShow('header_hidden')
          document.getElementById('menubar_btn').style.right = '20px'
        } else {
          setShow('header_show')
          document.getElementById('menubar_btn').style.right = '320px'
        }
      }}>Menu</button>
      <div className="select-container">
        <div className="selected-value">
          <img src={selectedOption.image} alt={selectedOption.label} className="custom-image" />
        </div>
        <select value={selectedOption.value} onChange={handleChange} className="custom-select">
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}
