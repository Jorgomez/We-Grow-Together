import React, { useEffect, useState } from 'react'
import './SkillsPool.css'
import { UserCard } from '../../Components/UserCard/UserCard'
// import { users } from '../../Data/users'
import { Link } from 'react-router-dom'

import { Loading } from '../../Components/Loading/Loading'
import { useSkillRequests } from '../../utils/Functions/requestHandlers/progressiveHandler'
import Button from '../../Components/Button/Button'
import { useSearch } from '../../Contexts/SearchContext'

import { Filters } from '../../Components/Filter/Filters'
import { handleSearchByFilter } from '../../utils/Functions/requestHandlers/filterHandler'

const SkillsPool = () => {
  console.log('Rander Skill Pool')
  const {
    skillRequests,
    getSkillRequests,
    hasMore,
    offset,
    loadMore,
    loading
  } = useSkillRequests(0, 20)

  const {
    searchTerm,
    searchResults,
    setSearchResults,
    setSearchTerm,
    fieldToFilter,
    noResults,
    setNoResults
  } = useSearch()

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        handleSearchByFilter(
          searchTerm,
          fieldToFilter,
          setSearchResults,
          getSkillRequests,
          offset,
          setNoResults
        )
      } else {
        !searchTerm && getSkillRequests(offset, 20)
        console.log('render defoult')
        setSearchResults([])
      }
    }

    fetchData()

    return () => {
      setSearchTerm('')
      setNoResults(false)
    }
  }, [searchTerm, offset, fieldToFilter])

  const dataToRender = searchResults.length > 0 ? searchResults : skillRequests

  return (
    <main className='skillsPool'>
      {loading && offset <= 0 && <Loading />}

      {noResults && (
        <p className='noResultsMessage'>
          No results found. Check out these suggestions instead :
        </p>
      )}
      {/* <div className='titleCont'> */}
      <h2>Find your Mentor</h2>
      <Filters />
      {/* </div> */}
      <section className='userCardsCont'>
        {dataToRender?.map((skillRequest) => (
          <Link
            key={skillRequest._id}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <UserCard skillRequest={skillRequest} />
          </Link>
        ))}
      </section>
      <div className='loadMoreContainer'>
        {dataToRender.length > 19 && !loading && hasMore && (
          <Button
            className='loadMoreBtn'
            fnc={loadMore}
            disabled={loading}
            imgSrc={
              'https://res.cloudinary.com/digcf0lad/image/upload/v1732545357/right-arrow_hmxtf9.png'
            }
          ></Button>
        )}

        {loading && offset > 0 && (
          <div className='incrementalLoading'>Loading...</div>
        )}
      </div>
    </main>
  )
}

export default SkillsPool
