import { useState } from 'react';
import ItemCuenta from './ItemCuenta';
import { useCart } from './../CartContext';
import { Link } from 'react-router-dom';

function ItemDetalle({ item }) {
    const { title, price, image, description } = item;
    const { agregarProducto } = useCart();
    const [quantity, setQuantity] = useState();

    function onAdd(ItemCuenta) {
        setQuantity(ItemCuenta);
    }

    function buyItem() {
        agregarProducto({ ...item, quantity });
    }

    return (

        <div>
            <div style={{ display: "flex" }}>
                <img src={image} alt="" />
                <div style={{ margin: "3rem" }}>
                    <h5 style={{ fontSize: "2rem" }}>{title}</h5>
                    <p style={{ marginTop: "3rem", fontSize: "1.5rem", marginBottom: "3rem" }}><em>{description}</em></p>
                    <p style={{ margin: "5rem", fontSize: "1.5rem" }}>{`$ ${price}`}</p>
                    <div style={{}}>
                        {quantity ?
                        <Link className="botones" to="/" onClick={buyItem} style={{fontSize:"1rem", color:"black"}} >Agregar al Carrito</Link> :
                        <ItemCuenta initial={0} stock={50} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ItemDetalle