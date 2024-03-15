import { useEffect } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import "./ProductsContainer.css";
import ProductsList from "../ProductsList/ProductsList";

function ProductsContainer({ limit }) {
  const { products, getProducts } = useProductsContext();

  useEffect(() => {
    getProducts(null, limit);
  }, []);

  return (
    <div className='ProductsContainer'>
      {products.length == 0 ? (
        <div className='productsLoader'></div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default ProductsContainer;
