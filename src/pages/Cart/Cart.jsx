import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";
import CartProductsTable from "./components/CartProductsTable/CartProductsTable";

function Cart() {
  const { cart } = useCartContext();

  return (
    <div className='Cart'>
      {cart.length == 0 ? (
        <h2>No hay productos almacenados en el carrito</h2>
      ) : (
        <CartProductsTable cart={cart} />
      )}
      <div className='totalTable'>
        <h3>Cart Totals</h3>
        <p>Total: {cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
        <Link to='/checkout'>Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
