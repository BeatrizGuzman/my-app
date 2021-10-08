import React, { useEffect, useState } from 'react'
import Item from './Item';

function ItemLIst () {

    const [items,setItems]=useState([]);
    const leerItems = () => {

        let i=[
            {id:"1",tittle:"Bolso",description:"Todo lo que querés llevar en una sola bag",precio:900,pictureUrl:"https://images.unsplash.com/photo-1512415031623-5c8392938dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
            {id:"2",tittle:"Remera",description:"La comodidad ante todo",precio:600,pictureUrl:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
            {id:"3",tittle:"Campera",description:"Para época de frío",precio:570,pictureUrl:"https://images.unsplash.com/photo-1551488831-68b4d0c92c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
            {id:"4",tittle:"Remera Manga Larga",description:"Para esos días de otoño",precio:600,pictureUrl:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"},
            {id:"5",tittle:"Accesorio",description:"Para que luzcas único",precio:1000,pictureUrl:"https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
        ];
        setItems(i); 
        // (leer items funcion que se ejecute desp de un tiempo)
        setTimeout(function(){ console.log("Bienvenido a Comodyet :)"); }, 2000);
    }

    useEffect(()=>{
        leerItems();
    },[])

    return (
        <>
        {items && items.length ?
            <>
            {items.map((item)=>{
                return <Item key={item.id} id={item.id} tittle={item.tittle} description={item.description} precio={item.precio} pictureUrl={item.pictureUrl} ></Item>
            })}
            </>
            :
            <div>Cargando informacion...</div>
            };
            </>
    )
}
export default ItemLIst