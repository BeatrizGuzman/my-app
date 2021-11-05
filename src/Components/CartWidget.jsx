import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import pic from './../assets/pic.png';


function CartWidget() {
  const { cart, productCount } = useCart();
  return (
    (cart.length > 0) ?
            (<div>
                <Link to="/cart"><img src={pic} width="40px" alt="img" /></Link>
                <p style={{ fontSize: "1rem", color: "white" }}>{productCount}</p>
            </div>) :
            (<></>));
}

export default CartWidget;