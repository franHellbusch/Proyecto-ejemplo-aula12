import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
