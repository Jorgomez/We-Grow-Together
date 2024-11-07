import { useReducer, useRef } from 'react'
import {
  validateEmail,
  validateFullName,
  validatePassword,
  validateProfilePicture,
  validateSkill
} from '../utils/Functions/validation'
import { errorReducer, initialState } from '../Reducers/errorReducer'

export const useAuthForm = () => {
  const refs = {
    iName: useRef(),
    iEmail: useRef(),
    iPassword: useRef(),
    iSkillToLearn: useRef(),
    iSkillToTeach: useRef(),
    iPicture: useRef()
  }

  const [errors, dispatch] = useReducer(errorReducer, initialState)

  const validateInputs = () => {
    dispatch({ type: 'CLEAR_ALL_ERRORS' })
    let hasErrors = false

    // Primera validación: Verificar campos vacíos, mostrando solo el primer error encontrado
    const requiredFields = [
      { field: 'name', ref: refs.iName },
      { field: 'email', ref: refs.iEmail },
      { field: 'password', ref: refs.iPassword },
      { field: 'skillToLearn', ref: refs.iSkillToLearn },
      { field: 'skillToTeach', ref: refs.iSkillToTeach }
    ]

    for (let { field, ref } of requiredFields) {
      const value = ref.current.value.trim()
      if (!value) {
        dispatch({
          type: 'SET_ERROR',
          payload: { field, message: 'The red field is required ' }
        })
        hasErrors = true
        break
      }
    }

    if (!hasErrors) {
      const validations = [
        {
          field: 'name',
          value: refs.iName.current.value.trim(),
          validate: validateFullName
        },
        {
          field: 'email',
          value: refs.iEmail.current.value.trim(),
          validate: validateEmail
        },
        {
          field: 'password',
          value: refs.iPassword.current.value.trim(),
          validate: validatePassword
        },
        {
          field: 'skillToLearn',
          value: refs.iSkillToLearn.current.value.trim(),
          validate: validateSkill
        },
        {
          field: 'skillToTeach',
          value: refs.iSkillToTeach.current.value.trim(),
          validate: validateSkill
        },
        {
          field: 'profilePicture',
          value: refs.iPicture.current.files[0],
          validate: validateProfilePicture
        }
      ]

      for (let { field, value, validate } of validations) {
        if (value) {
          const errorMessage = validate(value)
          if (errorMessage) {
            dispatch({
              type: 'SET_ERROR',
              payload: { field, message: errorMessage }
            })
            hasErrors = true
            break
          }
        }
      }
    }

    return !hasErrors
  }

  return { refs, errors, validateInputs }
}

// import { useReducer, useRef } from 'react'

// import {
//   validateEmail,
//   validateFullName,
//   validatePassword,
//   validateProfilePicture,
//   validateSkill
// } from '../utils/Functions/validation'
// import { errorReducer, initialState } from '../Reducers/errorReducer'

// export const useAuthForm = () => {
//   const refs = {
//     iName: useRef(),
//     iEmail: useRef(),
//     iPassword: useRef(),
//     iSkillToLearn: useRef(),
//     iSkillToTeach: useRef(),
//     iPicture: useRef()
//     // iNameLog: useRef(),
//     // iPasswordLog: useRef()
//   }

//   const [errors, dispatch] = useReducer(errorReducer, initialState)

//   const validateInputs = () => {
//     dispatch({ type: 'CLEAR_ALL_ERRORS' })
//     let hasErrors = false

//     const validations = [
//       refs.iName.current && {
//         field: 'name',
//         value: refs.iName.current.value.trim(),
//         validate: validateFullName
//       },
//       refs.iEmail.current && {
//         field: 'email',
//         value: refs.iEmail.current.value.trim(),
//         validate: validateEmail
//       },
//       refs.iPassword.current && {
//         field: 'password',
//         value: refs.iPassword.current.value.trim(),
//         validate: validatePassword
//       },
//       refs.iSkillToLearn.current && {
//         field: 'skillToLearn',
//         value: refs.iSkillToLearn.current.value.trim(),
//         validate: validateSkill
//       },
//       refs.iSkillToTeach.current && {
//         field: 'skillToTeach',
//         value: refs.iSkillToTeach.current.value.trim(),
//         validate: validateSkill
//       },
//       refs.iPicture.current && {
//         field: 'profilePicture',
//         value: refs.iPicture.current.files[0],
//         validate: validateProfilePicture
//       }
//       // refs.iNameLog.current && {
//       //   field: 'nameLog',
//       //   value: refs.iNameLog.current.value.trim(),
//       //   validate: validateFullName
//       // },
//       // refs.iPasswordLog.current && {
//       //   field: 'passwordLog',
//       //   value: refs.iPasswordLog.current.value.trim(),
//       //   validate: validatePassword
//       // }
//     ].filter(Boolean)

//     validations.forEach(({ field, value, validate }) => {
//       const errorMessage = validate(value)
//       if (errorMessage) {
//         dispatch({
//           type: 'SET_ERROR',
//           payload: { field, message: errorMessage }
//         })
//         hasErrors = true
//       }
//     })

//     return !hasErrors
//   }

//   return { refs, errors, validateInputs }
// }

// useAuthForm.js
// useAuthForm.js
// useAuthForm.js
