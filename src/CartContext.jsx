import React, { createContext,useContext,useState } from 'react'

const context = createContext()

const {Provider} = context

export const useCart = () => useContext(context)

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [total, setTotal] = useState(0);

    function agregarProducto(product) {
        let newCart = [...cart];
        if (cartHas(product)) {
            let cartProduct = cart.find(p => p.id === product.id);
            cartProduct.quantity += product.quantity;
        } else {
            newCart.push(product);
        }
        setTotal(total + (product.quantity * product.price));
        setProductCount(productCount + product.quantity);
        setCart(newCart);
    }

    function borrarProducto(product) {
        setCart(cart.filter(p => p.id !== product.id));
        setProductCount(productCount - product.quantity);
        setTotal(total - (product.quantity * product.price));
    }

    function clearCart() {
        setCart([]);
        setProductCount(0);
        setTotal(0);
    }
    function cartHas(product) {
        return cart.find(p => p.id === product.id) !== undefined;
    }

    const contextValue = {
        productCount,
        total,
        cart,
        agregarProducto,
        borrarProducto,
        clearCart
    };

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    );
}
 
export default CartProvider