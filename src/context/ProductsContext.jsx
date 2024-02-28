import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";

export const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async (category = null) => {
    const reference = category
      ? query(collection(db, "products"), where("category", "==", category))
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

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
