/* eslint-disable jsx-a11y/alt-text */
import { useCart } from './../CartContext';

function Producto({ product }) {

  const { title, price, image, quantity } = product;
  const totalPrice = quantity * price;
  const { borrarProducto } = useCart();

  function eliminarProducto() {
    return borrarProducto(product);
  }

  return (<div style={{ width: "auto", marginBottom: "5rem", border: "1px solid grey", }}>
    <img variant="top" src={image} />
    <div style={{ marginBottom: "1rem", textAlign: "center" }}>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</p>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
        $ {totalPrice}
      </p>
      <button onClick={eliminarProducto} className="botones">Borrar</button>
    </div>
  </div>
  );
}
 
export default Producto