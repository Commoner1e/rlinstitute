import React from 'react';
import { IoHome, IoBook, IoDocumentText, IoMail, IoLogIn } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const { pathname } = useLocation();
  
  const navItems = [
    { path: "/", icon: <IoHome />, text: "Home" },
    { path: "/about", icon: <IoBook />, text: "About" },
    { path: "/course", icon: <IoBook />, text: "Course" },
    { path: "/faculty", icon: <GiTeacher />, text: "Faculty" },
    { path: "/admission", icon: <IoDocumentText />, text: "Admission" },
    { path: "/contact", icon: <IoMail />, text: "Contact" },
    { path: "/login", icon: <IoLogIn />, text: "Login" }
  ];

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="nav-logo">
          <h1>RLT Institute</h1>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li 
              key={item.path} 
              className={`nav-item ${pathname === item.path ? "active-nav" : ""}`}
            >
              <Link to={item.path} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;