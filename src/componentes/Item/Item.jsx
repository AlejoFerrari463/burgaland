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
            <span class="text-success">FIES</span><span class="animate__animated animate__shakeY">TA MEX</span><span class="text-danger">ICANA</span>
        </h3>
        
        }

        {nombre == "italia" && 
        
        <h3 className='mb-3' >
          BELLA <span class="text-success">ITALIA</span>
        </h3>
        
        } 

        {nombre == "reto tokyo" && 
        
        <h3 className='mb-3' >
          RET<span class="text-danger">O T</span>OKYO
        </h3>
        
        }   

        {nombre == "samba do brasil" && 
        
        <h3 className='mb-3' >
          <span class="text-success">SAMBA</span> <span class="text-warning"> DO </span><span class="text-success">BRASIL</span>
        </h3>
        
        } 

        {nombre == "sagrada familia" && 
        
        <h3 className='mb-3' >
          <span class="text-danger">SAGRA</span><span class="text-warning">DA HAM</span><span class="text-danger">BURGUESA</span>
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