import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/Logo.png";
import { UserContext } from "./contexts/user-provider";

const Header = () => {
  const { pathname } = useLocation();
  const { logOut, user } = useContext(UserContext);
  const handleLogOut = () => {
    logOut();
  };

  const active = "text-orange-400 font-semibold";
  return (
    <nav className='bg-gray-800 flex items-center sticky top-0 z-10 shadow-md justify-between px-28'>
      <Link to='/' className='flex items-center gap-2'>
        <img src={logo} alt='logo' />
        <p className='text-gray-400 text-xs'>{user?.email.split("@")[0]}</p>
      </Link>
      <ul className='flex gap-8'>
        <li className={`li-icon ${pathname === "/" && active}`}>
          <Link to='/'>Home</Link>
        </li>
        <li className={`li-icon ${pathname === "/shop" && active}`}>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className={`li-icon ${pathname === "/order" && active}`}>
          <Link to='order'>Order Review</Link>
        </li>
        <li className={`li-icon ${pathname === "/inventory" && active}`}>
          <Link to='/inventory'>Manage Inventory</Link>
        </li>{" "}
        {!user?.uid ? (
          <li className={`li-icon ${pathname === "/login" && active}`}>
            <Link to='/login'>Login</Link>
          </li>
        ) : (
          <button onClick={handleLogOut} className='li-icon'>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Header;
