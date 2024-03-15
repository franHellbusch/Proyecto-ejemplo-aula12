import { useEffect, useState } from "react";
import "./ProductDetailContainer.css";
import { useProductsContext } from "../../context/ProductsContext";
import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ProductDetailContainer() {
  const { getProductById } = useProductsContext();
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const apiCall = async () => setProduct(await getProductById(productId));

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className='productDetailContainer'>
      {!product ? (
        <div className='productDetailLoader'></div>
      ) : (
        <>
          <div className='productDetailSectionView'>
            <p>
              Home <ArrowForwardIosIcon />
            </p>
            <p>
              Shop <ArrowForwardIosIcon />
            </p>
            <span>{product.title}</span>
          </div>
          <ProductDetail product={product} />
        </>
      )}
    </div>
  );
}

export default ProductDetailContainer;
