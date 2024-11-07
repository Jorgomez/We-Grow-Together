import React, { useRef } from 'react'
import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import Tooltip from '../ToolTip/ToolTip'
import './MainSearch.css'
import { toast } from 'react-toastify'

const MainSearch = () => {
  const mainSearchValue = useRef(null)
  console.log('MainSerch, render')

  const handleSearch = (e) => {
    console.log(mainSearchValue.current.value)
    toast.error(
      `Santi/Manu, button disabled, I'm working on this functionality. `
    )
  }
  return (
    <Tooltip text={'Santi/Manu, Functionality in progress'}>
      <div className='mainSerchConteiner'>
        <InputField
          ref={mainSearchValue}
          className='mainSearch'
          placeholder='Search for skills...'
          inputClassName={'mainSerchinput'}
        />

        <Button
          className='mainSerchButton'
          fnc={handleSearch}
          imgSrc='https://res.cloudinary.com/digcf0lad/image/upload/v1730050946/search_elqrbo.png'
          TooltipTex={'Functionality in progress'}
        ></Button>
      </div>
    </Tooltip>
  )
}

export default MainSearch
