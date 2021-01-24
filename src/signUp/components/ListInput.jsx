const ListInput = ({ value, onChange, id, label, placeholder, options }) => {
  return (
    <div className="sign-up__text-input">
      <label htmlFor={id} className="sign-up__text-input_label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        list={`${id}List`}
        name={id}
        id={id}
        placeholder={placeholder}
        className="sign-up__text-input_input sign-up__text-input_list "
      />
      <datalist id={`${id}List`}>
        {options.map((text, index) => (
          <option key={`${index}+option`} value={text} />
        ))}
      </datalist>
    </div>
  )
}

export default ListInput
