import React, { useState } from 'react'
import styles from './Form.module.css'
import { Link } from 'react-router-dom'
import buttonBack from '../assets/Back.png'
import {handleInput} from '../utils/handleInput.js'
import { emailRegex } from '../utils/regex.js'

function Form() {
  
const [data, setData] = useState({name:'', email: '', text:'' })

function mostrarDatos(e) {
 e.preventDefault()
  if(!data.name || !data.email || !data.text){
    console.log("Te faltan datos")
    return
  }
  if(!emailRegex.test(data.email)){
    console.log("pone un email valido")
    return
  }
  console.log(data);
}


  return (
    <div  id="page" className={styles.body}>
      <div className={styles.titleContainer}>
          <Link className={styles.buttonExit} to='/'><img className={styles.imageBack} src={buttonBack}/></Link>
          <h1 className={styles.title}>FORMULARIO</h1>
      </div>
      <form className={styles.form} action='' method='' id="form">
          <label className="label" >Nombre</label>
          <input className={styles.input} onChange= {(value)=> handleInput('name', value, setData, data) } type="text" name="name" autoComplete="off"></input>
          <label className="label"  >Email</label>
          <input className={styles.input} onChange= {(value)=> handleInput('email', value, setData, data) } type="email" name="email" autoComplete="off"></input>
          <label className="label" >Mensaje</label>
          <textarea className={styles.textArea} onChange= {(value)=> handleInput('text', value, setData, data) } name="mensaje" cols="30" rows="10"></textarea>
          <button className={styles.button} onClick={mostrarDatos}>Enviar</button>
      </form>
    </div>
  )
}

export default Form