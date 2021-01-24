const ErrorMessage = ({ valid, message }) => {
  if (!valid) {
    return <p className="sign-up__error-message">{message}</p>
  }
  return null
}

export default ErrorMessage
