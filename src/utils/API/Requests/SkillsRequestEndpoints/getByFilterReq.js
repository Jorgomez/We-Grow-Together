import { API } from '../../API'

export const getByFilterReq = async (filter, field, searchTerm) => {
  try {
    let endpoint = ''

    endpoint =
      filter === 'location'
        ? `/skillRequests/${filter}?${field}=${searchTerm}`
        : `/skillRequests/${filter}?field=${field}&value=${searchTerm}`

    const response = await API({
      endpoint: endpoint
    })
    if (response.error) {
      console.log(response.error)
    } else {
      console.log('search sucefully:', response)
      return response
    }
  } catch (error) {
    console.error('Error in serchByWordHandler Function:', error.message)
    return { error: error.message }
  }
}
