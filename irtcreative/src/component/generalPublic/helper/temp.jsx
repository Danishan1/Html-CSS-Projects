import React, { useState } from "react";
import "./temp.css"; // Import CSS file for styling

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">Your Logo</div>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navigation;
