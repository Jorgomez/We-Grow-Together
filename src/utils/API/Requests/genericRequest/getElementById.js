import { API } from '../../API'

export const getElementById = async (endpoint) => {
  try {
    const response = await API({
      endpoint: endpoint
    })
    if (response.error) {
      throw new Error(response.error || 'get elementById failed')
    }
    console.log('request elementById successfully')

    return response
  } catch (error) {
    console.error('Error in getElementById function:', error.message)
    return { error: error.message }
  }
}
