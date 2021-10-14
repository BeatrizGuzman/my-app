import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext';
import Navegacion from '../Components/Navegacion';

function Carrito () {

    const [items]= useContext(CartContext);
    const [total,setTotal]= useState(0);
    useEffect (()=> {
        let todo= 0; 
        items.map((item)=> {
         todo= todo + item.price 
        });
        
        setTotal(todo)

    },[])

    function borrar(index) {
        let vista = items;
        vista.delete(index,1)
        setTotal(vista);
    }

    return (
        <>
        <Navegacion/>
        <div className="container">
            {items.map((item,index)=> { 
            return (
                <ul className="list-group" key={index} >
                    <img src={item.image} width="100px" alt="imagen" />
                    <li className="list-group-item list-group-item-primary">{item.title}</li>
                    <li className="list-group-item list-group-item-secondary">{item.price}</li>
                    <button onClick={()=>{borrar(item.id)}}>Borrar</button>
                </ul>
                )
             })}
             <h2>Total: {total}</h2>
        </div>
        </>
    )
}
export default Carrito;