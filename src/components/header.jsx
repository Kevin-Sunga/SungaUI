import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Nike</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
