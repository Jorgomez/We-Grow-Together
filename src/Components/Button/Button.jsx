import React from 'react'
import './Button.css'
import Tooltip from '../ToolTip/ToolTip'
const Button = ({
  className = 'button',
  fnc,
  children,
  imgSrc,
  altText,
  TooltipTex
}) => {
  return (
    <Tooltip text={TooltipTex}>
      <button className={className} onClick={fnc}>
        {imgSrc && <img src={imgSrc} alt={altText} className='button-image' />}
        {children}
      </button>
    </Tooltip>
  )
}
export default Button
