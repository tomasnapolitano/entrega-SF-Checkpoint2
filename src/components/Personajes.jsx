import React, { useEffect, useState } from 'react'
import Card from './Card'
import GetApi from './GetApi'
import Paginado from './Paginado'
import styles from './Personajes.module.css'

const urlAPI = 'https://rickandmortyapi.com/api/character'
const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=`

function personajes() {
  const [response, setResponse] = useState({})
  const [personajes, setPersonajes] = useState([])
  const [totalPaginas, setTotalPaginas] = useState(null)
  const [pagina, setPagina] = useState(1)
  
  const getPersonajes = async () => {
    const data = await GetApi(urlAPI)
    setResponse(data)
    setPersonajes(data.results)
    const totalPag = Math.floor((data.info.count)/20)
    setTotalPaginas(totalPag)
  }
  useEffect(() => {
    getPersonajes()
  },[pagina])
  
  console.log(personajes);
  console.log(totalPaginas);
  console.log(pagina);
  
  return (
    <div className={styles.container}>
      <h1>RICK & MORTY</h1>
      <Paginado total={totalPaginas} actual={pagina} data={response}/>
      <div className={styles.cardBox}>
        {personajes.map((personaje) => {
          return <Card data={personaje} key={personaje.id}/>
        })}
      </div>
      <Paginado />
    </div>
  )
}

export default personajes