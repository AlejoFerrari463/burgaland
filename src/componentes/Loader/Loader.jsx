import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const loader = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
    </div>
  )
}

export default loader