import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='productCard'>
      <h3>{product.title}</h3>
    </div>
  );
}

export default ProductCard;
