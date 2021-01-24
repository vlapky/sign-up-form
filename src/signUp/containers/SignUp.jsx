import TextInput from '../components/TextInput'
import ListInput from '../components/ListInput'
import AcceptRules from '../components/AcceptRules'
import Header from '../components/Header'
import SubmitButton from '../components/SubmitButton'

import useForm from '../hooks/useForm'

import '../styles/SignUp.scss'

const LANGUAGES = ['Русский', 'Английский', 'Китайский', 'Испанский']

const SignUp = ({ handleSubmit }) => {
  const formState = useForm()
  const { formData, setForm, setLang, setRules, formValid } = formState

  const onSubmit = (e) => {
    handleSubmit(e, formData)
  }

  return (
    <div className="sign-up">
      <form onSubmit={onSubmit}>
        <Header />
        <TextInput
          value={formData.name}
          valid={formData.nameValid}
          onChange={setForm}
          id="name"
          type="text"
          label="Имя"
          placeholder="Введите Ваше Имя"
        />
        <TextInput
          value={formData.email}
          valid={formData.emailValid}
          onChange={setForm}
          id="email"
          type="text"
          label="Email"
          placeholder="Введите ваш email"
        />
        <TextInput
          value={formData.tel}
          valid={formData.telValid}
          onChange={setForm}
          id="tel"
          type="tel"
          label="Номер телефона"
          placeholder="Введите номер телефона"
        />
        <ListInput
          value={formData.lang}
          onChange={setLang}
          id="lang"
          label="Язык"
          placeholder="Язык"
          options={LANGUAGES}
        />
        <AcceptRules checked={formData.rules} onChange={setRules} />
        <SubmitButton text="Зарегистрироваться" disabled={!formValid} />
      </form>
    </div>
  )
}

export default SignUp
