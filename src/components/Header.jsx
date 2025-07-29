import { NavLink } from "react-router-dom";
import './Header.css'; // Si tienes estilos opcionales

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

