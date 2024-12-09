import React from 'react'
import Button from '../Button/Button'
import Tooltip from '../ToolTip/ToolTip'
import './MainSearch.css'
import InputField from '../InputField/InputField'
import { useForm } from 'react-hook-form'

import { useSearch } from '../../Contexts/SearchContext'

import { useNavigate } from 'react-router-dom'

const MainSearch = () => {
  console.log('MainSerch, render')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { searchTerm, setSearchTerm, setFieldtoFilter } = useSearch('')
  const navigate = useNavigate()

  const handleSearch = (data) => {
    const valueMainSearch = data.mainSerchinput

    if (valueMainSearch) {
      setSearchTerm(valueMainSearch)
      setFieldtoFilter('skillToTeach')
      navigate('/SkillsPool')
    }
  }
  console.log(searchTerm)

  return (
    <form className='mainSerchConteiner' onSubmit={handleSubmit(handleSearch)}>
      <InputField
        className='mainSearch'
        placeholder='Search for a skill to learn'
        inputClassName={'mainSerchinput'}
        {...register('mainSerchinput', {
          required: 'Write what you would to learn here.'
        })}
      />

      <Button
        className='mainSerchButton'
        fnc={handleSearch}
        imgSrc='https://res.cloudinary.com/digcf0lad/image/upload/v1730050946/search_elqrbo.png'
      ></Button>
      {errors.mainSerchinput && (
        <p className='errorMessageMainSearch'>
          {errors.mainSerchinput.message}
        </p>
      )}
    </form>
  )
}

export default MainSearch
