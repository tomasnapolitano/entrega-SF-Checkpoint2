import React, { useState } from 'react'
import styles from './Form.module.css'
import { Link } from 'react-router-dom'
import buttonBack from '../assets/Back.png'


function Form() {
  const [name, setName] = useState("") 
  function agregarNombre(text){
    setName(text.target.value)
  }
  const [email, setEmail] = useState("") 
    function agregarEmail(text){
      setEmail(text.target.value)
  }
  const [mensaje, setMensaje] = useState("") 
  function agregarMensaje(text){
    setMensaje(text.target.value)
  }

function mostrarDatos(e) {
  e.preventDefault()
  const datos = {
    "name": name,
    "email": email,
    "mensaje":mensaje
  }
console.log(datos);
}

 console.log(name);
  console.log(email);
  console.log(mensaje);
  return (
    <div  id="page" className={styles.body}>
      <div className={styles.titleContainer}>
          <Link className={styles.buttonExit} to='/'><img className={styles.imageBack} src={buttonBack}/></Link>
          <h1 className={styles.title}>FORMULARIO</h1>
      </div>
      <form className={styles.form} action="" id="form">
          <label className="label" >Nombre</label>
          <input className={styles.input} onChange= {agregarNombre} type="text" name="name" autoComplete="off"></input>
          <label className="label"  >Email</label>
          <input className={styles.input} onChange= {agregarEmail} type="email" name="email" autoComplete="off"></input>
          <label className="label" >Mensaje</label>
          <textarea className={styles.textArea} onChange= {agregarMensaje}name="mensaje" cols="30" rows="10"></textarea>
          <button className={styles.button} onClick={mostrarDatos}>Enviar</button>
      </form>
    </div>
  )
}

export default Form