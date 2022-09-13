import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Error.module.css'

function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Error 404</h1>
      <h3 className={styles.text}>No se encuentra la página - URL inválida</h3>
      <img className={styles.emogi} src='https://cdn-icons-png.flaticon.com/512/463/463612.png'/>
      <Link className={styles.link} to='/'>Volver al index</Link>
    </div>
  )
}

export default Error