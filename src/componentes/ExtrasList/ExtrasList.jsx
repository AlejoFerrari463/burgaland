import React from 'react'
import Extrass from '../Extrass/Extrass'



const ExtrasList = ({prods}) => {
  return (
    <div className='item-list-contenedor ' >

        {

        prods.map((item)=>(

        <Extrass key={item.id} {...item} />
        

        ))

        }

    </div>
    
  )
}

export default ExtrasList