import { API } from '../../API'

export const registerRequest = async (formData) => {
  try {
    const response = await API({
      endpoint: '/users/register',
      method: 'POST',
      body: formData,
      isJSON: false
    })

    if (response.error) {
      throw new Error(response.error || 'Registration failed')
    }

    console.log('User registered successfully:', response)

    return response
  } catch (error) {
    console.error('Error in registerUser:', error.message)
    return { error: error.message }
  }
}
