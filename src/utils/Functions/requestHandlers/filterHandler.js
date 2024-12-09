import { getByFilterReq } from '../../API/Requests/SkillsRequestEndpoints/getByFilterReq'

export const handleSearchByFilter = async (
  searchTerm,
  fieldToFilter,
  setSearchResults,
  getSkillRequests,
  offset,
  setNoResults
) => {
  let results = []

  if (fieldToFilter === 'skillToTeach') {
    results = await getByFilterReq('skill', 'skillToTeach', searchTerm)
  } else if (fieldToFilter === 'skillToLearn') {
    results = await getByFilterReq('skill', 'skillToLearn', searchTerm)
  } else if (fieldToFilter === 'location') {
    results = await getByFilterReq('location', 'location', searchTerm)
  }

  if (results.length > 0) {
    setSearchResults(results)
    setNoResults(false)
  } else {
    console.log('render no result')
    getSkillRequests(offset, 20)
    setSearchResults([])
    setNoResults(true)
  }
}
