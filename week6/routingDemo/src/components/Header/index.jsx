import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'nav-item')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'nav-item')} to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'nav-item')} to="about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'nav-item')} to="products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
