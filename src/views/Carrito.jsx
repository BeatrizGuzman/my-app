import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'
import Navegacion from '../Components/Navegacion';


function Carrito () {

    const [items, task, cart]= useContext(CartContext);
     const [total,setTotal]= useState(0);

    //  const generarOrden = () =>{

    //      let orden = {}

    //     orden.buyer = {name: "Titi" , phone: "12486542", email: "titiguzman3@gmail.com"}
    //     orden.total = setTotal;
    //     orden.items = cart.map(cartItem => {
    //         const id = cartItem.item.id;
    //         const title = cartItem.item.title;
    //         const price = cartItem.item.price * cartItem.quantity;
    //         return {id, title, price}
    //     })
    //  }

    
useEffect(() => {
    setTotal(task.total())
},[items])


    return (
        <>
        <Navegacion/>
        <div className="container">
            { items.length === 0  ? 
            <h1><strong><em>No hay productos seleccionados :) <Link to="/" type="button" class="btn btn-dark">Ir al Home</Link> </em></strong></h1> : (
                
                
            items.map((item,index)=> { 
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
                })
            )}
            
             <h2>Total: {total}</h2>
             <div>
             <Link to={`/cart`} type="button" class="btn btn-secondary">Finalizar compra</Link>
             {/* <button onClick={generarOrden}>Finalizar compra</button> */}
            </div>
        </div>
        </>
    )
}
export default Carrito;