import { useState } from 'react'
import './App.css'
import Banner from './componentes/Banner/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner/>
      <h1>Olá Mundo!</h1>
    </>
  )
}

export default App
