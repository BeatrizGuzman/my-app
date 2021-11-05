import CartList from './CartList';
import { firestore } from '../firebase';
import { useCart } from './../CartContext';
import { Link } from 'react-router-dom';
import Order from './Order';
import { useModal } from './ModalContext';

function Cart() {
    const { cart, total, clear } = useCart();
    const { setOrden, orden } = useModal();

    function guardarOrden(buyer) {

        const order = {
            buyer: buyer,
            cart: cart,
            total: total
        };

        const ordersRef = firestore.collection("ordenes");
        const query = ordersRef.add(order);

        query.then(result => {
            setOrden(`Orden de compra generada automáticamente:  ${result.id}`);
            clear();
        }).catch(error => console.log("Ocurrió un error. Vuelve a intentarlo.")
        ).finally(() => orden()
        );
    }

    return (cart.length > 0
        ?
        <>
            <CartList cart={cart} />
            <div>
                <h2>Total: $ {total}</h2>
            </div>
            <Order guardarOrden={guardarOrden} orden={orden} setOrden={setOrden} />
        </>
        :
        <>
            <h1><strong><em>No hay productos seleccionados: ) <Link to="/" className="botones">Ir al Home</Link> </em></strong></h1>
            <hr />
        </>
    );
}
 
export default Cart