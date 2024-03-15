import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import ProductsProvider from "./context/ProductsContext";
import ProductDetailContainer from "./pages/ProductsDetailContainer/ProductDetailContainer";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<ProductDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
