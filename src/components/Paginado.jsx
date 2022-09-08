import styles from './Paginado.module.css'

function Paginado({total, actual, data, setPagina, setActual}) {
 
  const cambiarPaginaUp = () => {
    setPagina(data.info.next)
    setActual(( actual < total ) ? actual+1 : actual)
  }
  const cambiarPaginaDown = () => {
    setPagina(data.info.prev)
    setActual(( actual != 1 ) ? actual-1 : actual)
  }

  //console.log(setPagina)
  //console.log(setActual);
  //console.log(actual);
  
  return (
    <div className={styles.container}>
      <button onClick={cambiarPaginaDown}>previo</button>
      <h3>{actual}</h3> - <h3>{total}</h3>
      <button onClick={cambiarPaginaUp}>siguiente</button>
    </div>
  )
}

export default Paginado