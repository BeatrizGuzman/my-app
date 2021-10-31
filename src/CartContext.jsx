import React, { createContext,useContext,useState } from 'react'

export const  CartContext= createContext();

export const useCart = () => useContext(CartContext)

export const CartProvider= (props)=>{

    const [carrito,setCarrito]=useState([]);

    const task={}
    task.setItems = setCarrito;
    task.borrarItem = (id) => setCarrito(carrito.filter( item=> item.id !== id));
    task.total = ()=> carrito.reduce((a,b)=>a + b.price , 0)

    return (
        <CartContext.Provider value={[carrito,task]}>
            {props.children}
        </CartContext.Provider>
    )
}