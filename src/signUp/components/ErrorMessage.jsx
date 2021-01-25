const ErrorMessage = ({ value, valid, message }) => {
  if (value !== '') {
    if (!valid) {
      return <p className="sign-up__error-message">{message}</p>
    }
  }
  return null
}

export default ErrorMessage
