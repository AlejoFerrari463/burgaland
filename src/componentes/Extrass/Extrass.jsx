import React from 'react'

import "./Extrass.css"

const Extrass = ({id,nombre,imagen,precio}) => {
  return (

    <>

      <div className='extras-card' data-bs-toggle="modal" data-bs-target={`#Modal${id}`}>

      <div className='extras-descripcion' >

          <h3 className='mb-3' >{nombre}</h3>
          <p>{precio}</p>

      </div>

      <img className='extras-foto ' src={imagen} alt={nombre} />


      </div>
    
    
    
      <div className="modal fade" id={`Modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-titulo fs-5" id="exampleModalLabel">{nombre.toUpperCase()}</h1>
            </div>
            <div className="modal-body">
            <img className='menu-foto' src={imagen} alt={nombre} />
            <div>{precio}</div>
            </div>
            <div className="modal-footer">
              <button type="button"  className="menu-boton" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    
    </>
   
  )
}

export default Extrass