import React, { useEffect, useState } from 'react'
import Buscador from './Buscador'
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
  const [pagina, setPagina] = useState(urlAPI)
  const [numPag, setNumPag] = useState(1)
  const [busqueda, setBusqueda] = useState('')
  
  const getPersonajes = async () => {
    const data = await GetApi(pagina)
    setResponse(data)
    setPersonajes(data.results)
    setTotalPaginas(data.info.pages)
  }

  useEffect(() => {
    getPersonajes()
  },[pagina])
  
  console.log(personajes);
  console.log(totalPaginas);
  console.log(pagina);
  console.log(numPag);
  
  return (
    <div className={styles.container}>
      <h1>RICK & MORTY</h1>
      <Buscador busqueda={busqueda} />
      <Paginado total={totalPaginas} actual={numPag} setActual={setNumPag} setPagina={setPagina} data={response}/>
      <div className={styles.cardBox}>
        {personajes.map((personaje) => {
          return <Card data={personaje} key={personaje.id}/>
        })}
      </div>
      <Paginado total={totalPaginas} actual={numPag} setActual={setNumPag} setPagina={setPagina} data={response}/>
    </div>
  )
}

export default personajes