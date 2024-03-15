import "./Header.css";
import logo from "../../assets/icons/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function Header() {
  const { cart } = useCartContext();

  return (
    <header className='header'>
      <div className='headerTitle'>
        <img src={logo} alt='logo_image' />
        <h1>Furniro</h1>
      </div>
      <nav className='headerNavigation'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>
          <ShoppingCartOutlinedIcon />
          <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
