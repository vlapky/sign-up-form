import { useState } from 'react'

const ListInput = ({ value, onChange, id, label, placeholder, options }) => {
  const [view, setView] = useState(false)
  const handleClick = () => {
    setView(!view)
  }
  return (
    <div className="sign-up__text-input sign-up__list-input">
      <label htmlFor={id} className="sign-up__text-input_label">
        {label}
      </label>
      <input
        onClick={handleClick}
        autoComplete="off"
        value={value}
        type="text"
        onChange={onChange}
        name={id}
        id={id}
        placeholder={placeholder}
        className="sign-up__text-input_input sign-up__text-input_list "
      />
      <div
        className="sign-up__list-input__list"
        style={
          view
            ? { opacity: 1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }
        }
      >
        {options.map((text, index) => (
          <div
            className="sign-up__list-input__list_item"
            key={`${index}+option`}
            onClick={() => {
              let e = { target: { value: text } }
              onChange(e)
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListInput
