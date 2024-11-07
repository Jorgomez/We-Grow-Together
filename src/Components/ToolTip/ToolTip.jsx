import React, { useState, cloneElement, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ToolTip.css'

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const showTooltip = (event) => {
    text && setIsVisible(true)
    setPosition({ x: event.clientX, y: event.clientY })
  }

  const hideTooltip = () => setIsVisible(false)

  // useEffect(() => {
  //   const handleTouchOutside = (event) => {
  //     if (!event.target.closest('.tooltipText')) {
  //       setIsVisible(false)
  //     }
  //   }

  //   document.addEventListener('touchstart', handleTouchOutside)
  //   return () => {
  //     document.removeEventListener('touchstart', handleTouchOutside)
  //   }
  // }, [])

  const childWithEvents = cloneElement(children, {
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onTouchStart: showTooltip,
    onTouchEnd: hideTooltip
  })

  return (
    <>
      {childWithEvents}
      {isVisible &&
        ReactDOM.createPortal(
          <span
            className='tooltipText'
            style={{
              top: position.y - 40,
              left: position.x + 10,
              visibility: 'visible',
              opacity: 1
            }}
          >
            {text}
          </span>,
          document.body
        )}
    </>
  )
}

export default Tooltip
