import React, { useEffect, useState } from 'react'
import Item from './Item';

const ItemList = () => {

    const [items,setItems]=useState([]);
    const leerItems = () => {

        let i=[
            {id:"1",tittle:"investigación",description:"gramática",precio:700,pictureUrl:"#"},
            {id:"1",tittle:"ensayo",description:"argumentación",precio:600,pictureUrl:"#"},
            {id:"1",tittle:"monografía",description:"descripción",precio:500,pictureUrl:"#"},
            {id:"1",tittle:"tesis",description:"ortografía",precio:400,pictureUrl:"#"},
            {id:"1",tittle:"tesina",description:"trama",precio:300,pictureUrl:"#"}
        ];
        setItems(i); 
        // (leer items funcion que se ejecute desp de un tiempo)
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
            
        // <div>
        //     {items.map((item)=>{
        //         return <Item id={item.id} tittle={item.tittle} description={item.description} precio={item.precio} pictureUrl={item.pictureUrl} ></Item>
        //     })}
        // </div>
    )
}

export default ItemList;