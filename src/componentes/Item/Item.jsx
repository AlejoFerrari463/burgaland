import React from 'react'

import "./Item.css"

const Item = ({id,nombre,ingredientes,cantidad,precio,imagen,tipo}) => {
  
  
  
  return (

    <>
    
    <div className='menu-card' data-bs-toggle="modal" data-bs-target={`#Modal${id}`} >

      <div className='menu-descripcion' >

        {nombre == "maradona" && 
        
        <h3 className='mb-3' >
            <span className="text-info">MA</span><span className="text-warning">RAD</span><span className="text-info">ONA</span>
        </h3>
        
        }

        {nombre == "fiesta mexicana" && 
        
        <h3 className='mb-3' >
            <span className="text-success">FIES</span><span className="animate__animated animate__shakeY">TA MEX</span><span className="text-danger">ICANA</span>
        </h3>
        
        }

        {nombre == "italia" && 
        
        <h3 className='mb-3' >
          BELLA <span className="text-success">ITALIA</span>
        </h3>
        
        } 

        {nombre == "reto tokyo" && 
        
        <h3 className='mb-3' >
          RET<span className="text-danger">O T</span>OKYO
        </h3>
        
        }   

        {nombre == "samba do brasil" && 
        
        <h3 className='mb-3' >
          <span className="text-success">SAMBA</span> <span className="text-warning"> DO </span><span className="text-success">BRASIL</span>
        </h3>
        
        } 

        {nombre == "sagrada hamburguesa" && 
        
        <h3 className='mb-3' >
          <span className="text-danger">SAGRA</span><span className="text-warning">DA HAM</span><span className="text-danger">BURGUESA</span>
        </h3>
        
        } 
        

        {tipo != "internacional" && <h3 className='mb-3' >{nombre.toUpperCase()}</h3>}
        
   
      
        <p>{ingredientes}</p>
        <p>{cantidad}</p>
        <div>{precio}</div>
      </div>
      <img className='menu-foto' src={imagen} alt={nombre} />
      

      
    </div>
    

    <div className="modal fade" id={`Modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
          {nombre == "maradona" && 
        
              <h1 className="modal-titulo fs-3" id="exampleModalLabel">
                <span className="text-info">MA</span><span className="text-warning">RAD</span><span className="text-info">ONA</span>
              </h1>
        
          }
        {nombre == "fiesta mexicana" && 
        
        <h1 className="modal-titulo fs-3" id="exampleModalLabel">
            <span className="text-success">FIES</span><span className="animate__animated animate__shakeY">TA MEX</span><span className="text-danger">ICANA</span>
        </h1>
        
        }

        {nombre == "italia" && 
        
        <h1 className="modal-titulo fs-3" id="exampleModalLabel">
          BELLA <span className="text-success">ITALIA</span>
        </h1>
        
        } 

        {nombre == "reto tokyo" && 
        
        <h1 className="modal-titulo fs-3" id="exampleModalLabel">
          RET<span className="text-danger">O T</span>OKYO
        </h1>
        
        }   

        {nombre == "samba do brasil" && 
        
        <h1 className="modal-titulo fs-3" id="exampleModalLabel">
          <span className="text-success">SAMBA</span> <span className="text-warning"> DO </span><span className="text-success">BRASIL</span>
        </h1>
        
        } 

        {nombre == "sagrada hamburguesa" && 
        
        <h1 className="modal-titulo fs-3" id="exampleModalLabel">
          <span className="text-danger">SAGRA</span><span className="text-warning">DA HAM</span><span className="text-danger">BURGUESA</span>
        </h1>
        
        }
        
        {tipo != "internacional" && <h1 className="modal-titulo fs-3" id="exampleModalLabel">{nombre.toUpperCase()}</h1>}

          </div>
          <div className="modal-body">
          <img className='menu-foto' src={imagen} alt={nombre} />
          <p>{ingredientes}</p>
          <p>{cantidad}</p>
          <div>{precio}</div>
          </div>
          <div className="modal-footer">
            <button type="button" className="menu-boton" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


   
    
    
    </>
  

    
  )
}

export default Item