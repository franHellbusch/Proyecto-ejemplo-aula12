import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product, quantity) => {
    if (cart.some((item) => item.product.id == product.id)) {
      return setCart(
        cart.map((item) => {
          if (item.product.id == product.id) {
            item.quantity += quantity;
          }

          return item;
        })
      );
    }

    setCart([
      ...cart,
      {
        quantity,
        product,
      },
    ]);
  };

  const changeQuantityInProduct = (productId, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.product.id == productId) {
          item.quantity = quantity;
        }

        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cart, addProductToCart, changeQuantityInProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
