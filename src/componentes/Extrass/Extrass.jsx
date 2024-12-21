import React from 'react'

import "./Extrass.css"

const Extrass = ({id,nombre,imagen,precio}) => {
  return (
    <div className='extras-card' >

        <div className='extras-descripcion' >

            <h3 className='mb-3' >{nombre}</h3>
            <p>{precio}</p>

        </div>

        <img className='extras-foto ' src={imagen} alt="" />


    </div>
  )
}

export default Extrass