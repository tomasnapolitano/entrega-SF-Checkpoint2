
import React, { useState } from 'react'
import styles from './Buscador.module.css'
import Button from '@mui/material/Button';

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
    <form className={styles.container} onSubmit={buscar}>
        <input className={styles.input} type='text' placeholder='Buscar Personaje' value={texto} onChange={setTextoBusqueda}></input>
        <Button className={styles.button} variant="contained" color="warning" type='submit'>Buscar</Button>
    </form>
  )
}

export default Buscador