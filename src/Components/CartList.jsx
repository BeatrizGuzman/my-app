import CartProduct from './CartProduct';

function CartList({ cart }) {
    return (<>
        {cart.map(product => <CartProduct key={product.id} product={product} />)}
    </>
    );
}
 
export default CartList