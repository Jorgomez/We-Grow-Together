import { API } from '../../API'

export const loginRequest = async (loginData) => {
  try {
    const response = await API({
      endpoint: '/users/login',
      method: 'POST',
      body: loginData
    })

    if (response.error) {
      throw new Error(response.error || 'Login failed')
    }

    return response
  } catch (error) {
    console.error('Error in loginRequest function:', error.message)
    return { error: error.message }
  }
}
