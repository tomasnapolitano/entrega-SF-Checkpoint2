import React from 'react'
import styles from './HeaderRyM.module.css'
import Logo from '../assets/Rick-and-Morty1.png'

function HeaderRyM() {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={Logo}></img>
    </div>
  )
}

export default HeaderRyM