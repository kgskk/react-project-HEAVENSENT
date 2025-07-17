import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // окремий css файл

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="./components/Import" 
        className={({ isActive }) => isActive ? 'import active' : 'import'}
      >
        Home
      </NavLink>

      <NavLink 
        to="/export" 
        className={({ isActive }) => isActive ? 'export active' : 'export'}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;