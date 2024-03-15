import { useState } from "react";
import "./ProductDetail.css";
import { useCartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetail({ product }) {
  const [count, setCount] = useState(1);
  const [productAdd, setProductAdd] = useState(false);
  const { addProductToCart } = useCartContext();

  const addProduct = () => {
    addProductToCart(product, count);
    setProductAdd(true);
  };

  return (
    <div className='productDetail'>
      <img src={product.image} alt={product.title} />
      <div className='productDetailContent'>
        <div className='productDetailContentInfo'>
          <h2>{product.title}</h2>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <div className='productDetailCounter'>
          {productAdd ? (
            <Link to='/cart'>Go Cart</Link>
          ) : (
            <>
              <div>
                <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <button onClick={addProduct}>Add To Cart</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
