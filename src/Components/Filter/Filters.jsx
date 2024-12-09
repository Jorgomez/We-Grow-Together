import React from 'react'
import { useSearch } from '../../Contexts/SearchContext'
import { set, useForm } from 'react-hook-form'
import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import './Filters.css'
import { ChakraProvider, Select } from '@chakra-ui/react'

export const Filters = () => {
  const { setSearchTerm, setFieldtoFilter, setNoResults } = useSearch('')

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleFilter = (data) => {
    const { filterType, searchValuefilter } = data

    setFieldtoFilter(filterType)
    setSearchTerm(searchValuefilter)
    setNoResults(false)
  }

  const handleCleanFilter = () => {
    setSearchTerm('')
    setFieldtoFilter('')
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className='filter'
      style={{
        display: 'flex',
        // border: '1px solid white',
        gap: '15px'
      }}
    >
      <ChakraProvider resetCSS={false} cssVarsRoot='#chakra-root'>
        <div
          className='filterInputCont'
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            alignItems: 'center'
            // border: '1px solid white'
          }}
        >
          <Select
            className='inputSelect'
            id='filterType'
            placeholder='Select a filter'
            {...register('filterType')}
          >
            {/* <option value=''>Select a Filter </option> */}
            <option value='skillToLearn' className='option1'>
              Skill to Learn
            </option>
            <option value='skillToTeach'>Skill to Teach</option>
            <option value='location'>Location</option>
          </Select>
          <InputField
            inputClassName='inputFilter'
            className='inputCont'
            placeholder='Write a search term'
            {...register('searchValuefilter')}
          />
        </div>
        <div
          className='filterButtonCont'
          style={{
            display: 'flex',
            alignContent: 'center',
            gap: '15px',
            justifyContent: 'center'
          }}
        >
          <Button
            className='button Filter'
            fnc={handleFilter}
            children={'Serch'}
          />
          <Button
            className='button cleanFilter'
            fnc={handleCleanFilter}
            children={'Clean filter'}
          />
        </div>
      </ChakraProvider>
    </form>
  )
}
