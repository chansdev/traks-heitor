import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao.jsx'
import Rodape from './components/Rodape.jsx'

function App() {

  return (
    <>
      <h1>Traks</h1>
      <Saudacao/>
      <Rodape/>
    </>
  )
}

export default App
