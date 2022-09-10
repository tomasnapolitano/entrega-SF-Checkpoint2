import React from 'react'
import styles from './Modal.module.css'

const Modal = ({estado, cambiarEstado, data}) => {
    const {name, status, gender, image, location, species} = data
    
/*     const closeModal = () => {
        cambiarEstado(false)
    } */
    
    return (
        <>
            {estado && 
            <div className={styles.container}>
                <div className={styles.cardDetail}>
                    <img className={styles.image} src={image}/>
                    <div className={styles.text}>
                        <h2>Nombre: {name}</h2>
                        <h3>Genero: {gender}</h3>
                        {status === 'Alive' ? <h3 style={{color: 'rgb(17, 105, 17)'}}>Estado: {status}</h3> : <h3 style={{color: 'rgb(160, 21, 21)'}}>Estado: {status}</h3>}
                        <h3>Ubicación: {location.name}</h3>
                        <h3>Especie: {species}</h3>                   
                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default Modal