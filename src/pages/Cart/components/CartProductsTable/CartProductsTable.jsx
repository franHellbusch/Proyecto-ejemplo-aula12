import { useCartContext } from "../../../../context/CartContext";
import "./CartProductsTable.css";

function CartProductsTable({ cart }) {
  const { changeQuantityInProduct } = useCartContext();

  return (
    <table className='cartTable'>
      <thead>
        <tr>
          <td></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr className='cartItem'>
            <td>
              <img src={item.product.image} alt={item.product.title} />
            </td>
            <td>{item.product.title}</td>
            <td>${item.product.price}</td>
            <td>
              <div className='cartProductCounter'>
                <button
                  onClick={() =>
                    item.quantity > 1 && changeQuantityInProduct(item.product.id, item.quantity - 1)
                  }>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantityInProduct(item.product.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </td>
            <td>${(item.product.price * item.quantity).toFixed(2)}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartProductsTable;
