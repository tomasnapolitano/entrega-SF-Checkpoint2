import React from 'react'
import styles from './HeaderRyM.module.css'
import Logo from '../assets/Rick-and-Morty1.png'
import { Link } from 'react-router-dom'
import buttonBack from '../assets/Back.png'

function HeaderRyM() {
  return (
    <div className={styles.header}>
      <Link className={styles.button} to='/'><img className={styles.imageBack} src={buttonBack}/></Link>
      <img className={styles.image} src={Logo}></img>
    </div>
  )
}

export default HeaderRyM