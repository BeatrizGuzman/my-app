import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Item({id,category,image,price,title}) {

  const [items,setItems]= useContext(CartContext)

function agregar () {
  const producto = {
    id:id,
    category:category,
    image:image,
    price:price,
    title:title
  }

 const vista = items;
 vista.push(producto);
  setItems(vista)
  console.log(items);
}

  return (
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {category} - {price} 
            </p>
            <Link className="btn btn-primary" to={'/producto/'+id}>VER</Link>
            <button className="btn btn-primary" onClick={agregar}>Agregar al Carrito</button>
        </div>
        </div>
      </div>
  );
}

export default Item;