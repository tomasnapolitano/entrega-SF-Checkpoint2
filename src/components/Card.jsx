import React, { useState } from "react";
import styles from './Card.module.css'
import Modal from './Modal'

const Card = ({data}) => {
    const {name, image} = data
    const [showModal, setShowModal] = useState(false)

    const showDescription = () => {
        setShowModal(!showModal)
        console.log(showModal);
    }

    return (
        <a className={styles.card} onClick={showDescription}>
            <Modal estado={showModal} cambiarEstado={setShowModal} data={data}/>
            <img className={styles.image} src={image}></img>
            <h2 className={styles.title}>{name}</h2>
        </a>
    )
}
export default Card