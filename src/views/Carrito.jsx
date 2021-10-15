import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'
import Navegacion from '../Components/Navegacion';


function Carrito () {

    const [items, task]= useContext(CartContext);
     const [total,setTotal]= useState(0);

    
useEffect(() => {
    setTotal(task.total())

},[items])


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
                    <div>
                    <button onClick={()=>task.borrarItem(item.id)}>Borrar</button>
                    </div>
                </ul>
                )
             })}
             <h2>Total: {total}</h2>
             <div>
             <Link to={`/cart`}>Finalizar compra</Link>
            </div>
        </div>
        </>
    )
}
export default Carrito;