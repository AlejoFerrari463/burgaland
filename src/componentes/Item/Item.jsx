import React from 'react'

import "./Item.css"

const Item = ({nombre,ingredientes,cantidad,precio,imagen,tipo}) => {
  return (
    <div className='menu-card' >

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

        {nombre == "sagrada familia" && 
        
        <h3 className='mb-3' >
          <span className="text-danger">SAGRA</span><span className="text-warning">DA HAM</span><span className="text-danger">BURGUESA</span>
        </h3>
        
        } 
        

        {tipo != "internacional" && <h3 className='mb-3' >{nombre.toUpperCase()}</h3>}
        
   
      
        <p>{ingredientes}</p>
        <p>{cantidad}</p>
        <div>{precio}</div>
      </div>
      <img className='menu-foto' src={imagen} alt="" />
      
      
       

    </div>
  )
}

export default Item