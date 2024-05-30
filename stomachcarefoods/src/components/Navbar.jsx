import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo2.png";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isBackToTopActive, setIsBackToTopActive] = useState(false);

  const handleNavToggle = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsHeaderActive(true);
        setIsBackToTopActive(true);
      } else {
        setIsHeaderActive(false);
        setIsBackToTopActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`header ${isHeaderActive ? "active" : ""}`}
        data-header
      >
        <div className="container">
          <h1>
            <a href="#" className="logo">
              <img src={logo} width={"60px"} height={"60px"} />
            </a>
          </h1>

          <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" data-nav-link>
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="navbar-link" data-nav-link>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="navbar-link" data-nav-link>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="btn btn-hover">
              <a href="tel:+12265520043">Reservations</a>
            </button>
            <button
              className={`nav-toggle-btn ${isNavActive ? "active" : ""}`}
              aria-label="Toggle Menu"
              data-menu-toggle-btn
              onClick={handleNavToggle}
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
        </div>
      </header>
      {isBackToTopActive && (
        <button
          className="back-to-top-btn active"
          data-back-top-btn
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default Navbar;
