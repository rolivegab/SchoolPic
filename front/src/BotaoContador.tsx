import { useState } from "react"
import React from 'react'

interface State {
  contador: number;
}

const BotaoContador = () => {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <label>Meu contador atual é {contador}</label>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  )
}

export default BotaoContador