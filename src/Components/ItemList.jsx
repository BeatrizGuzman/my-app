import React, { useEffect, useState } from 'react'
import Item from './Item';

const ItemList = () => {

    const [items,setItems]=useState([]);
    const leerItems = () => {

        let i=[
            {id:"1",tittle:"investigación",description:"gramática",precio:700,pictureUrl:"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
            {id:"1",tittle:"ensayo",description:"argumentación",precio:600,pictureUrl:"https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80"},
            {id:"1",tittle:"monografía",description:"descripción",precio:500,pictureUrl:"https://images.unsplash.com/photo-1501690364027-04faa1e9cb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
            {id:"1",tittle:"tesis",description:"ortografía",precio:400,pictureUrl:"https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
            {id:"1",tittle:"tesina",description:"trama",precio:300,pictureUrl:"https://images.unsplash.com/photo-1484522676511-0f51cc572bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"}
        ];
        setItems(i); 
        // (leer items funcion que se ejecute desp de un tiempo)
        setTimeout(function(){ alert("Bienvenido a Comodyet :)"); }, 2000);
    }

    useEffect(()=>{
leerItems();
    },[])

    return (
        <>
        {items && items.length ?
            <>
            {items.map((item)=>{
                return <Item id={item.id} tittle={item.tittle} description={item.description} precio={item.precio} pictureUrl={item.pictureUrl} ></Item>
            })}
            </>
            :
            <div>Cargando informacion...</div>
            };
            </>
    )
}
export default ItemList;