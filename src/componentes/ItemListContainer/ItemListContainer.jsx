import React, { useEffect, useState } from 'react'

import "./ItemListContainer.css"
import { collection,getDocs,query,where } from 'firebase/firestore';

import { db } from '../../services/config';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [internacionales, setInternacional] = useState([]);
    const [tradicionales, setTradicionales] = useState([]);

    useEffect(()=>{

        const obtenerInternacional = query(collection(db, "productos"),where("tipo","==","internacional"));

        getDocs(obtenerInternacional)
        .then((res)=>{
            
            const internacionales = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setInternacional(internacionales)


        })
        .catch((error)=>{
           console.log(error)
        })
        


    },[])

    useEffect(()=>{

        const obtenerTradicional = query(collection(db, "productos"),where("tipo","==","tradicional"));

        getDocs(obtenerTradicional)
        .then((res)=>{
            
            const tradicionales = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setTradicionales(tradicionales)


        })
        .catch((error)=>{
           console.log(error)
        })
        


    },[])

  return (
    <div>

        <h1 className='text-center animate__animated animate__pulse' >INTERNACIONALES</h1>
        <ItemList prods={internacionales}/>

        <h1 className='text-center animate__animated animate__pulse' >TRADICIONALES</h1>
        <ItemList prods={tradicionales}/>

    </div>
  )
}

export default ItemListContainer