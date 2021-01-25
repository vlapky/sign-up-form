import ErrorMessage from './ErrorMessage'
const ERROR = 'Введено не коректное значение'

const TextInput = ({
  value,
  valid,
  onChange,
  type,
  id,
  label,
  placeholder,
}) => {
  return (
    <div className="sign-up__text-input">
      <label htmlFor={id} className="sign-up__text-input_label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        className="sign-up__text-input_input"
      />
      <ErrorMessage value={value} valid={valid} message={ERROR} />
    </div>
  )
}

export default TextInput
