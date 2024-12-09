export const validationName = {
  pattern: {
    value: /^[a-zA-Z]+(\s+[a-zA-Z]+)+$/,
    message: 'Please enter first and last name  '
  },
  required: 'This field is required'
}

export const validationEmail = {
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Invalid email format.'
  },
  required: 'This field is required'
}

export const validationPassword = {
  pattern: {
    value: /^(?=.*[A-Za-z]{3,})(?=.*\d)[A-Za-z\d]{4,}$/,
    message: 'Password needs 3 letters and 1 number.'
  },
  required: 'This field is required'
}

export const validationSkill = {
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: 'Skill must be text only.'
  },
  required: 'This field is required'
}

export const validationProfilePicture = {
  validate: (fileList) => {
    if (!fileList || fileList.length === 0) {
      return true
    }
    const file = fileList[0]
    const fileSizeLimit = 4 * 1024 * 1024 // 2 MB

    if (!/\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
      return 'Image must be JPG, PNG, or GIF.'
    }
    if (file.size > fileSizeLimit) {
      return 'Image size must not exceed 4MB.'
    }

    return true
  }
}

export const validationMessage = {
  required: 'Message is required.',
  minLength: {
    value: 5,
    message: 'Message must be at least 5 characters long.'
  },
  // maxLength: {
  //   value: 500,
  //   message: 'Message cannot exceed 500 characters.'
  // },
  pattern: {
    value: /^[a-zA-Z0-9\s,.!?'"-]+$/,
    message: 'Message contains invalid characters.'
  }
}

export const validationNameProfile = {
  pattern: {
    value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
    message: 'Name need a space between'
  }
}

export const validationEmailProfile = {
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Invalid email format.'
  }
}

export const validationSkillProfile = {
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: 'Skill must be text only.'
  }
}
export const validationPlace = {
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: 'This field accepts text only.'
  }
}

export const validationAge = {
  pattern: {
    value: /^[0-9]+$/,
    message: 'Age must be a valid number'
  }
}
export const validationAdditionlInfo = {
  maxLength: {
    value: 150,
    message: 'limit: 150 characters.'
  },
  pattern: {
    value: /^[a-zA-Z0-9\s,.!?'"-]+$/,
    message: 'text contains invalid characters.'
  }
}
