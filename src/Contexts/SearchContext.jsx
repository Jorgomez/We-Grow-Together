import React, { createContext, useState, useContext } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([])
  const [fieldToFilter, setFieldtoFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [noResults, setNoResults] = useState(false)
  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchTerm,
        setSearchTerm,
        fieldToFilter,
        setFieldtoFilter,
        noResults,
        setNoResults
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
