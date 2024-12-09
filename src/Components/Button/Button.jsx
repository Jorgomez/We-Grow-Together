import React from 'react'
import './Button.css'
import Tooltip from '../ToolTip/ToolTip'

export const Button = ({
  className = 'button',
  fnc,
  children,
  imgSrc,
  altText,
  TooltipTex,
  type,
  disabled
}) => {
  return (
    <Tooltip text={TooltipTex}>
      <button
        className={className}
        onClick={fnc}
        type={type}
        disabled={disabled}
      >
        {imgSrc && <img src={imgSrc} alt={altText} className='button-image' />}
        {children}
      </button>
    </Tooltip>
  )
}
export default Button
