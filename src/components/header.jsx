import logo from "../images/Logo.svg";
const Header = () => {
  return (
    <nav className='bg-gray-800 flex items-center justify-between px-28'>
      <img src={logo} alt='' />
      <ul className='flex gap-8'>
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
