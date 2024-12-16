import React, { useEffect, useState } from 'react'

import "./ItemListContainer.css"
import { collection,getDocs,query,where } from 'firebase/firestore';

import { db } from '../../services/config';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {

    const [internacionales, setInternacional] = useState([]);
    const [tradicionales, setTradicionales] = useState([]);
    const [veggies, setVeggies] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [spinner, setSpinner] = useState(false)

    useEffect(()=>{

        setSpinner(true)
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
        .finally(()=>{
            setSpinner(false)
        })
        


    },[])

    useEffect(()=>{
        setSpinner(true)
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
        .finally(()=>{
            setSpinner(false)
        })
        


    },[])

    useEffect(()=>{
        setSpinner(true)
        const obtenerVeggie = query(collection(db, "productos"),where("tipo","==","veggie"));

        getDocs(obtenerVeggie)
        .then((res)=>{
            
           

            const veggies = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setVeggies(veggies)


        })
        .catch((error)=>{
           console.log(error)
        })
        .finally(()=>{
            setSpinner(false)
        })
        


    },[])

    useEffect(()=>{
        setSpinner(true)
        const obtenerBebida = query(collection(db, "productos"),where("tipo","==","bebida"));

        getDocs(obtenerBebida)
        .then((res)=>{
            
           

            const bebidas = res.docs.map((doc)=>{

                const data = doc.data()

                return({id: doc.id,...data})


            })

            setBebidas(bebidas)


        })
        .catch((error)=>{
           console.log(error)
        })
        .finally(()=>{
            setSpinner(false)
        })
        


    },[])

  return (
    <div className='item-list-container-contenedor' >

        {spinner ? <Loader/> :  <div>

            <h1 className='text-center animate__animated animate__pulse' >INTERNACIONALES</h1>
            <ItemList prods={internacionales}/>

            <span id='tradicionales' ></span>
            <h1 className='text-center animate__animated animate__pulse' >TRADICIONALES</h1>
            <ItemList prods={tradicionales}/>

            <span id='veggies' ></span>
            <h1 className='text-center animate__animated animate__pulse' id='veggies' >VEGGIES</h1>
            <ItemList prods={veggies}/>

            <span id='bebidas' ></span>
            <h1 className='text-center animate__animated animate__pulse' id='bebidas' >BEBIDAS</h1>
            <ItemList prods={bebidas}/>


        </div>}

       

    </div>
  )
}

export default ItemListContainer