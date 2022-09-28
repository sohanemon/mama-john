import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
const Header = () => {
  return (
    <nav className='bg-gray-800 flex items-center sticky top-0 z-10 shadow-md justify-between px-28'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <ul className='flex gap-8'>
        <li className='li-icon'>
          <Link to='/'>Home</Link>
        </li>
        <li className='li-icon'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className='li-icon'>
          <Link to='order'>Order Review</Link>
        </li>
        <li className='li-icon'>
          <Link to='/'>Manage Inventory</Link>
        </li>
        <li className='li-icon'>
          <Link to='/'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
