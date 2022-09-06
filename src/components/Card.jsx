import React from "react";
import styles from './Card.module.css'

const Card = ({data}) => {
    const {name, image} = data
    return (
        <div className={styles.card}>
            <img src={image}></img>
            <h2>{name}</h2>
        </div>
    )
}
export default Card