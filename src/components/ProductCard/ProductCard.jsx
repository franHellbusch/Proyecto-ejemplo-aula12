import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='productCard'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className='productCardHover'>
        <div className='productCardHoverBackground'></div>
        <div className='productCardHoverContent'>
          <Link to={`/product/${product.id}`}>View detail</Link>
          <div>
            <a href=''>Share</a>
            <a href=''>Compare</a>
            <a href=''>Like</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
