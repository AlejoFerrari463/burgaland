import React from 'react'

import "./ItemList.css"
import Item from '../Item/Item'

const ItemList = ({prods}) => {
  return (
    <>

        {

            prods.map((item)=>(

              <Item key={item.id} {...item}/>
             

            ))

        }
    
    </>
  )
}

export default ItemList