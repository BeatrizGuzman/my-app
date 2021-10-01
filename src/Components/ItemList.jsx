import React, { useEffect, useState } from 'react'
import Item from './Item';

const ItemList = () => {

    const [items,setItems]=useState([]);
    const leerItems = () => {

        let i=[
            {id:"1",tittle:"Investigación",description:"Envíanos tu Investigación y nosotros la corregimos por vos",precio:700,pictureUrl:"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
            {id:"1",tittle:"Ensayo",description:"Envíanos tu Ensayo y nosotros lo corregimos por vos",precio:600,pictureUrl:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
            {id:"1",tittle:"Monografía",description:"Envíanos tu Monografía y nosotros la corregimos por vos",precio:500,pictureUrl:"https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"},
            {id:"1",tittle:"Tesis",description:"Envíanos tu Tesis y nosotros la corregimos por vos",precio:400,pictureUrl:"https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
            {id:"1",tittle:"Tesina",description:"Envíanos tu Tesina y nosotros la corregimos por vos",precio:300,pictureUrl:"https://images.unsplash.com/photo-1484522676511-0f51cc572bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"}
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