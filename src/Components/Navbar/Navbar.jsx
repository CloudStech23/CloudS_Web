import React, { useState } from 'react';
import LogoImg from '../Images/cloudslogo.png';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

function Navbar() {
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [dropdownHovered2, setDropdownHovered2] = useState(false);
  const [submenuHovered, setSubmenuHovered] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#1e232e', transition: '.3s' }}>
      <div className='container px-5'>
        <Link className="navbar-brand" to="/">
          <img
            src={LogoImg}
            className="img-fluid logoimg"
            style={{ height: '4rem' }}
            alt="Logo"
          />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item underline-hover">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item dropdown ${dropdownHovered2 ? 'show' : ''}`}
              onMouseEnter={() => setDropdownHovered2(true)}
              onMouseLeave={() => setDropdownHovered2(false)}>
              
              <a
                className="nav-link dropdown-toggle"
                 
                id="navbarDropdownSolutions"
                role="button"
                aria-expanded="false"
              >
                About
              </a>
              <ul
                className={`dropdown-menu ${dropdownHovered2 ? 'show' : ''}`}
                aria-labelledby="navbarDropdownSolutions"
                onMouseEnter={() => setDropdownHovered2(true)}
                onMouseLeave={() => setDropdownHovered2(false)}
              >
                <li>
                  <Link className="dropdown-item menu-item" to="/About-Us">
                    Who Are We?
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item menu-item" to="">
                    Proud Customers
                  </Link>
                </li>
                </ul>


               
            </li>
            <li
              className={`nav-item dropdown ${dropdownHovered ? 'show' : ''}`}
              onMouseEnter={() => setDropdownHovered(true)}
              onMouseLeave={() => setDropdownHovered(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                 
                id="navbarDropdownSolutions"
                role="button"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul
                className={`dropdown-menu ${dropdownHovered ? 'show' : ''}`}
                aria-labelledby="navbarDropdownSolutions"
                onMouseEnter={() => setDropdownHovered(true)}
                onMouseLeave={() => setDropdownHovered(false)}
              >
                <li>
                  <Link className="dropdown-item menu-item" to="/It-Strategy-Consultancy">
                    IT Strategy Consultancy
                  </Link>
                </li>
                <li
                  className={`dropdown-submenu ${submenuHovered ? 'show' : ''}`}
                  onMouseEnter={() => setSubmenuHovered(true)}
                  onMouseLeave={() => setSubmenuHovered(false)}
                >
                  <a className="dropdown-item dropdown-toggle">
                    Software Services
                  </a>
                  <ul className={`dropdown-menu ${submenuHovered ? 'show' : ''}`}>
                    {/* Add submenu items here */}
                    <li>
                      <Link className="dropdown-item" to="/">
                        Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Cloud Service
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        DevOps
                      </Link>
                    </li>
                    {/* Add more submenu items if needed */}
                  </ul>
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
