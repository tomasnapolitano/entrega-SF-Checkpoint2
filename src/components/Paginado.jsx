import React from 'react'

function Paginado({total, actual, data}) {

    console.log(data);
    const cambiarPaginaUp = () => {
        console.log(data.info.next)
        }
        const cambiarPaginaDown = () => {
        console.log(data.info.prev)
        }
  return (
    <div>
        <button onClick={cambiarPaginaDown}>previo</button>
        <h3>{actual}</h3> - <h3>{total}</h3>
        <button onClick={cambiarPaginaUp}>siguiente</button>
    </div>
  )
}

export default Paginado