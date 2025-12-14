import React, { useState, useEffect } from 'react';
import { IoHome, IoBook, IoDocumentText, IoMail, IoClose, IoMenu } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Nav.css";

function Nav() {
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  
  const navItems = [
    { path: "/", icon: <IoHome />, text: "Home" },
    { path: "/about", icon: <IoBook />, text: "About" },
    { path: "/course", icon: <IoBook />, text: "Course" },
    { path: "/faculty", icon: <GiTeacher />, text: "Faculty" },
    { path: "/admission", icon: <IoDocumentText />, text: "Admission" },
    { path: "/contact", icon: <IoMail />, text: "Contact" },
    { path: "/login", icon: <CgProfile />, text: "Profile" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state updates with initial window size
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector('.nav-mobile-menu');
      const menuButton = document.querySelector('.nav-hamburger');
      
      if (isMobileOpen && 
          mobileMenu && 
          menuButton &&
          !mobileMenu.contains(event.target) && 
          !menuButton.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  return (
    <nav className="nav-main-container">
      <div className="nav-content-wrapper">
        <div className="nav-logo-section">
          <h1 className="nav-logo-text">RLT Institute</h1>
        </div>
        
        {/* Desktop Navigation - Only show on desktop */}
        {isDesktop && (
          <ul className="nav-desktop-menu">
            {navItems.map((item) => (
              <li 
                key={item.path} 
                className={`nav-desktop-item ${pathname === item.path ? "nav-active-item" : ""}`}
              >
                <Link to={item.path} className="nav-desktop-link">
                  <span className="nav-desktop-text">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger Menu Button - Only show on mobile */}
        {!isDesktop && (
          <button 
            className="nav-hamburger" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <IoClose /> : <IoMenu />}
          </button>
        )}

        {/* Mobile Overlay and Side Menu */}
        <div className={`nav-mobile-overlay ${isMobileOpen ? 'nav-overlay-active' : ''}`} 
             onClick={closeMobileMenu}>
        </div>
        
        <div className={`nav-mobile-menu ${isMobileOpen ? 'nav-menu-active' : ''}`}>
          <div className="nav-mobile-header">
            <h2 className="nav-mobile-title">Menu</h2>
          </div>
          
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li 
                key={item.path} 
                className={`nav-mobile-item ${pathname === item.path ? "nav-mobile-active" : ""}`}
                onClick={closeMobileMenu}
              >
                <Link to={item.path} className="nav-mobile-link">
                  <span className="nav-mobile-icon">{item.icon}</span>
                  <span className="nav-mobile-text">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;