import React from 'react'

import './Footer.css'
import { scrollToTop } from '../../utils/Functions/ScrollToTop'
import Tooltip from '../ToolTip/ToolTip'
import { color } from '@chakra-ui/react'

export const Footer = () => {
  console.log('footer, render')
  return (
    <footer className='footer'>
      <button className='backToTop' onClick={scrollToTop}>
        <img
          src='https://res.cloudinary.com/digcf0lad/image/upload/v1712095485/Portafolio/ic_baseline-double-arrow_uazq6c.png'
          alt='Back-to-top'
        />
      </button>
      <ul className='flexContainer' id='ulContactFooter'>
        <Tooltip text={`Founder's Linkedin  `}>
          <li>
            <a
              href='https://www.linkedin.com/in/jorgomezm/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1711815171/Portafolio/Vector_5_ze3gnd.png'
                alt='LinkedIn Icon'
              />
            </a>
          </li>
        </Tooltip>
        <Tooltip text={`Founder's projects  `}>
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
        </Tooltip>
        <Tooltip text={'Contact the founder '}>
          <li>
            <a
              href='mailto:Jorgomez@protonmail.com'
              className='smallEmailFooter'
            >
              <img
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1711814986/Portafolio/Vector_3_rivw1h.png'
                alt='Email Icon'
              />
            </a>
          </li>
        </Tooltip>
      </ul>
      <h3>
        @2024 - <span style={{ fontWeight: '600' }}> WE GROW TOGETHER,</span> by
        JorGomez
      </h3>
    </footer>
  )
}
