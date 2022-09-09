
import React, { useState } from 'react'
import styles from './Buscador.module.css'
import TextField from '@mui/material/TextField';
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
        <TextField  className={styles.textField} margin="dense" color="warning"  id="outlined-basic" label="Buscar Personaje" variant="outlined" value={texto} onChange={setTextoBusqueda} />
        <Button className={styles.button} variant="outlined" color="warning" type='submit'>Buscar</Button>
    </form>
  )
}

export default Buscador