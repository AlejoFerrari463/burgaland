import React from 'react'

import "./Item.css"

const Item = ({nombre,ingredientes}) => {
  return (
    <div>

        <h3 className='text-center' >{nombre.toUpperCase()}</h3>
       

    </div>
  )
}

export default Item