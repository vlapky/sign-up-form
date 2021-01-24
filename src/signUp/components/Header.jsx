import { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
      <p className="sign-up__title">Регистрация</p>
      <div className="sign-up__subtitle">
        <p className="sign-up__subtitle_question">Уже есть аккаунт?</p>
        <a className="sign-up__subtitle_login sign-up__link" href="/#">
          Войти
        </a>
      </div>
    </Fragment>
  )
}

export default Header
