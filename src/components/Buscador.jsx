
import React, { useState } from 'react'

function Buscador({setBusqueda, setPass, setActual}) {
  const [texto, setTexto] = useState('')
    
  const setTextoBusqueda = (e) => {
    setTexto(e.target.value)
  }
  const buscar = (e) => {
    e.preventDefault()
    setBusqueda(texto)
    setPass(true)
    setActual(1)
  }
  console.log(texto);
  return (
    <form onSubmit={buscar}>
        <input type='text' placeholder='Buscar Personaje' id='busqueda' value={texto} onChange={setTextoBusqueda}></input>
        <button>Buscar</button>
    </form>
  )
}

export default Buscador