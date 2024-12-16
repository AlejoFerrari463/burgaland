import React from 'react'

import "./ItemList.css"
import Item from '../Item/Item'

const ItemList = ({prods}) => {
  return (
    <div className='item-list-contenedor ' >

        {

            prods.map((item)=>(

              <Item key={item.id} {...item}/>
             

            ))

        }
    
    </div>
  )
}

export default ItemList