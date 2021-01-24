const AcceptRules = ({ checked = false, onChange }) => {
  return (
    <div className="sign-up__rules">
      <input
        checked={checked}
        onChange={onChange}
        id="accept-rules"
        className="sign-up__rules_accept-checkbox"
        type="checkbox"
      />
      <label htmlFor="accept-rules" className="sign-up__rules_accept-text">
        Принимаю{' '}
        <a className="sign-up__link" href="/#">
          условия
        </a>{' '}
        использования
      </label>
    </div>
  )
}
export default AcceptRules
