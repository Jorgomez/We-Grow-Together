import { API } from '../../API'

export const getAllElements = async (endpoint) => {
  try {
    const response = await API({
      endpoint: endpoint
    })
    if (response.error) {
      throw new Error(response.error || 'get elements failed')
    }
    console.log('request all elements successfully')

    return response
  } catch (error) {
    console.error('Error in getAllElements function:', error.message)
    return { error: error.message }
  }
}
