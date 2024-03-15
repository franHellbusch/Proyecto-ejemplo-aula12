import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import "./Home.css";

function Home() {
  return (
    <div className='homeContainer'>
      <h1>Home</h1>
      <ProductsContainer limit={8} />
    </div>
  );
}

export default Home;
