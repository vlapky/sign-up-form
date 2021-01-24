const SubmitButton = ({ text, disabled = false }) => {
  return (
    <button disabled={disabled} type="submit" className="sign-up__button">
      {text}
    </button>
  )
}

export default SubmitButton
