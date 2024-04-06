import React, { useState, useEffect } from 'react';
import LogoImg from '../Images/cloudslogo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsScrolled(currentPosition > 80); // Navbar is fixed from the start
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark fixed-top'
      style={{ backgroundColor: '#1e232e', transition: '.3s' }} // Remove transition
    >
      <div className={`container px-5 ${isScrolled ? 'nav-pad':''}`}>
        <a className="navbar-brand" href="/">
          <img
            src={LogoImg}
            className="img-fluid logoimg"
            style={{ height: '4rem' }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item underline-hover">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item underline-hover">
              <Link className="nav-link" to="/About-Us">
                About
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${dropdownHovered ? 'show' : ''}`}
              onMouseEnter={() => setDropdownHovered(true)}
              onMouseLeave={() => setDropdownHovered(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownBlog"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  dropdownHovered ? 'show' : ''
                }`}
                aria-labelledby="navbarDropdownBlog"
                onMouseEnter={() => setDropdownHovered(true)}
                onMouseLeave={() => setDropdownHovered(false)}
              >
                <li>
                  <Link className="dropdown-item menu-item" to="/It-Strategy-Consultancy">
                    IT Strategy Consultancy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/Software-Service">
                    Software Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ProductManagement-QA">
                    Product Management & QA
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Career'>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
