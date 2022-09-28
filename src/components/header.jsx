import logo from "../images/Logo.png";
const Header = () => {
  return (
    <nav className='bg-gray-800 flex items-center sticky top-0 z-10 shadow-md justify-between px-28'>
      <a href='/'>
        <img src={logo} alt='' />
      </a>
      <ul className='flex gap-8'>
        <li className='li-icon'>
          <a href='/'>Home</a>
        </li>
        <li className='li-icon'>
          <a href='/'>Order</a>
        </li>
        <li className='li-icon'>
          <a href='/'>Order Review</a>
        </li>
        <li className='li-icon'>
          <a href='/'>Manage Inventory</a>
        </li>
        <li className='li-icon'>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
