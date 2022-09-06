import React, { useEffect, useState } from 'react'
import Card from './Card'
import GetApi from './GetApi'
import styles from './Personajes.module.css'

const urlAPI = 'https://rickandmortyapi.com/api/character'
const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=`

function personajes() {
  const [personajes, setPersonajes] = useState([])
  
  const getData = async () => {
    const data = await GetApi(urlAPI)
    setPersonajes(data.results)
  }
  useEffect(() => {
    getData()
  },[])
  
  console.log(personajes);
  
  return (
    <div className={styles.usersContainer}>
      <h1>RICK & MORTY</h1>
      <div>
        {personajes.map((personaje) => {
          return <Card data={personaje} key={personaje.id}/>
        })}
      </div>
    </div>
  )
}

export default personajes