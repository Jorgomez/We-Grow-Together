import React from 'react'

const ErrorsMessagesForm = ({ errors }) => {
  return (
    <>
      {Object.values(errors).map((error, index) => (
        <p key={index} style={{ color: 'red', fontSize: '13px' }}>
          {`* ${error}`}
        </p>
      ))}
    </>
  )
}

export default ErrorsMessagesForm
