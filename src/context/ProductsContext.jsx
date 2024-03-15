import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";

export const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async (category = null, productsLimit = null) => {
    const reference =
      category && productsLimit
        ? query(collection(db, "products"), where("category", "==", category), limit(productsLimit))
        : category
        ? query(collection(db, "products"), where("category", "==", category))
        : productsLimit
        ? query(collection(db, "products"), limit(productsLimit))
        : collection(db, "products");

    const querySnapshot = await getDocs(reference);

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setProducts(data);
  };

  const getProductById = async (productId) => {
    const docReference = doc(db, "products", productId);
    const docSnapshot = await getDoc(docReference);

    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      };
    } else {
      return null;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, getProducts, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
