import styles from './Paginado.module.css'
import Button from '@mui/material/Button';

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
      <Button variant="contained" color="warning" onClick={cambiarPaginaDown}>Prev</Button>
      <h3 className={styles.data}>{actual} - {total}</h3>
      <Button variant="contained" color="warning" onClick={cambiarPaginaUp}>Next</Button>
    </div>
  )
}

export default Paginado