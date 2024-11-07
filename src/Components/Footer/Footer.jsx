import React from 'react'

import './Footer.css'
import { scrollToTop } from '../../utils/Functions/ScrollToTop'

export const Footer = () => {
  console.log('footer, render')
  return (
    <footer>
      <button className='backToTop' onClick={scrollToTop}>
        <img
          src='https://res.cloudinary.com/digcf0lad/image/upload/v1712095485/Portafolio/ic_baseline-double-arrow_uazq6c.png'
          alt='Back-to-top'
        />
      </button>
      <ul className='flexContainer' id='ulContactFooter'>
        <li>
          <a
            href='https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1711815171/Portafolio/Vector_5_ze3gnd.png'
              alt='LinkedIn Icon'
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Jorgomez'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1711814985/Portafolio/Vector_4_jff8k8.png'
              alt='GitHub Icon'
            />
          </a>
        </li>
        <li>
          <a href='mailto:Jorgomez@protonmail.com' className='smallEmailFooter'>
            <img
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1711814986/Portafolio/Vector_3_rivw1h.png'
              alt='Email Icon'
            />
          </a>
        </li>
      </ul>
      <h3>@2024 - XXXXXXX, by JorGomez</h3>
    </footer>
  )
}
