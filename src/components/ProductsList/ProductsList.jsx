import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div>
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ProductsList;
