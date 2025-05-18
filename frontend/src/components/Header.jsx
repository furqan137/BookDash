// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink exact to="/" activeClassName="active-link" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link" className="nav-link">
          About
        </NavLink>
        <NavLink to="/features" activeClassName="active-link" className="nav-link">
          Features
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link" className="nav-link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
