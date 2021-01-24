import { useState } from 'react'

import './normalize.css'
import './App.scss'

import SignUp from './signUp/containers/SignUp'

function App() {
  const [result, setResult] = useState({})

  const handleSubmit = (e, formData) => {
    e.preventDefault()
    setResult({
      name: formData.name,
      email: formData.email,
      tel: formData.tel,
      lang: formData.lang,
      rules: formData.rules,
    })
  }
  return (
    <div className="app">
      <main className="main">
        <SignUp handleSubmit={handleSubmit} />
      </main>
      {result.name && (
        <div className="result">
          <p>Name: {result.name}</p>
          <p>Email: {result.email}</p>
          <p>Tel: {result.tel}</p>
          <p>Languge: {result.lang}</p>
        </div>
      )}
    </div>
  )
}

export default App
