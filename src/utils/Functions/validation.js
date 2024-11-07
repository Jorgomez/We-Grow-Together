export const validateFullName = (value) => {
  return /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value)
    ? null
    : 'Full Name must have a space.'
}

export const validateEmail = (value) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    ? null
    : 'Invalid email format.'
}

export const validatePassword = (value) => {
  return /^(?=.*[A-Za-z]{3,})(?=.*\d)[A-Za-z\d]{4,}$/.test(value)
    ? null
    : 'Password needs 3 letters and 1 number.'
}

export const validateSkill = (value) => {
  return /^[a-zA-Z\s]+$/.test(value) ? null : 'Skill must be text only.'
}

export const validateProfilePicture = (file) => {
  const fileSizeLimit = 2 * 1024 * 1024 // 2 MB
  if (!file) return null
  if (!/\.(jpg|jpeg|png|gif)$/i.test(file.name))
    return 'Image must be JPG, PNG or GIF.'
  if (file.size > fileSizeLimit) return 'Image size over 2MB.'
  return null
}
