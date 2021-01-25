import { useState } from 'react'

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    lang: '',
    nameValid: false,
    emailValid: false,
    telValid: false,
    rules: false,
    formValid: false,
  })
  const { nameValid, emailValid, telValid, lang, rules } = formData

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        return {
          validName: 'emailValid',
          validValue: /^\w+@\w+[.]\w+$/.test(value),
        }

      case 'name':
        return {
          validName: 'nameValid',
          validValue: /^[a-zA-ZА-Яа-я\s-]+$/.test(value),
        }

      case 'tel':
        return {
          // /^[\d()-+]+$/
          // +7(903)-123-45-67
          validName: 'telValid',
          validValue: /^[+]?([\d]{1})[- ]?\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/.test(
            value
          ),
        }
      default:
        break
    }
  }

  let formValid = nameValid && emailValid && telValid && lang && rules
  return {
    formData,
    formValid,
    setForm: (e) => {
      let name = e.target.name
      let value = e.target.value

      setFormData((prevState) => ({ ...prevState, [name]: value }))
      const valid = validateField(name, value)
      setFormData((prevState) => ({
        ...prevState,
        [valid.validName]: valid.validValue,
      }))
    },
    setLang: (e) => {
      setFormData((prevState) => ({ ...prevState, lang: e.target.value }))
    },
    setRules: () =>
      setFormData((prevState) => ({ ...prevState, rules: !formData.rules })),
  }
}

export default useForm
