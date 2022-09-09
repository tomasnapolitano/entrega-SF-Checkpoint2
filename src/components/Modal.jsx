import React from 'react'
import styles from './Modal.module.css'
import Button from '@mui/material/Button';

const Modal = ({estado, cambiarEstado, data}) => {
    const {name, status, gender, image, location, species} = data
    
    const closeModal = () => {
        cambiarEstado(false)
    }
    
    return (
        <>
            {estado && 
            <div className={styles.container}>
                <img className={styles.image} src={image}/>
                    <div className={styles.text}>
                        <h2>Nombre: {name}</h2>
                        <h3>Genero: {gender}</h3>
                        <h3>Estado: {status}</h3>
                        <h3>Ubicación: {location.name}</h3>
                        <h3>Especie{species}</h3>                   
                    </div>
                <Button className={styles.button} variant="outlined" color="warning" onClick={closeModal}>Volver</Button>
            </div>
            }
        </>
    )
}
export default Modal