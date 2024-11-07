import { toast } from 'react-toastify'

export const handleRegisterSubmit =
  (refs, validateInputs, navigate, registerUser) => (e) => {
    e.preventDefault()
    if (validateInputs()) {
      const userData = {
        userName: refs.iName.current.value,
        email: refs.iEmail.current.value,
        password: refs.iPassword.current.value,
        ofertSkill: refs.iSkillToLearn.current.value,
        requiredSkill: refs.iSkillToTeach.current.value,
        profilePicture: refs.iPicture.current.files[0]
      }

      registerUser(userData)
      navigate('/SkillsPool')
      toast.success(
        `Welcome ${
          userData.userName.split(' ')[0]
        }, you're  successfully Registered`
      )
      console.log(userData)
    }
  }

export const handleLoginSubmit = (refs, validateInputs) => (e) => {
  e.preventDefault()
  if (validateInputs()) {
    console.log({
      email: refs.iName.current.value,
      password: refs.iPassword.current.value
    })
  }
}
