import "./Header.css";
import logo from "../../assets/icons/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Header() {
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
        <Link to='/'>
          <ShoppingCartOutlinedIcon />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
