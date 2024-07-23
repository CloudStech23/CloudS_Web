import React, { useState, useRef } from 'react';
import LogoImg from '../Images/cloudslogo.png';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { auth } from '../Admin/Firebase';

function Navbar() {
  const token = localStorage.getItem('token');

  // Check if user is authenticated
  const isAuthenticated = auth.currentUser && token && auth.currentUser.accessToken === token;

  // Function to handle navigation based on user's authentication status
  const handleNavigation = () => {
    if (isAuthenticated) {
      return '/Dashboard'; // Redirect to dashboard if user is authenticated
    } else {
      return '/Signin'; // Redirect to sign-in page if user is not authenticated
    }
  };

  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [dropdownHovered2, setDropdownHovered2] = useState(false);
  const [submenuHovered, setSubmenuHovered] = useState(false);

  // Ref for the navbar collapse element
  const handleLinkClick = () => {
    const collapseElement = document.querySelector('#navbarSupportedContent');
    if (collapseElement) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

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
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
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
                  <Link className="dropdown-item menu-item" to="/About-Us" onClick={handleLinkClick}>
                    Who Are We?
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
                  <Link className="dropdown-item menu-item" to="/It-Strategy-Consultancy" onClick={handleLinkClick}>
                    IT Strategy Consultancy
                  </Link>
                </li>
                <li
                  className={`dropdown-submenu ${submenuHovered ? 'show' : ''}`}
                  onMouseEnter={() => setSubmenuHovered(true)}
                  onMouseLeave={() => setSubmenuHovered(false)}
                >
                  <a className="dropdown-item dropdown-toggle"  >
                    Software Services
                  </a>
                  <ul className={`dropdown-menu ${submenuHovered ? 'show' : ''}`}>
                    <li>
                      <Link className="dropdown-item" to="/Machine-Learning" onClick={handleLinkClick}>
                        Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Cloud-Services" onClick={handleLinkClick}>
                        Cloud Service
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/DevOps" onClick={handleLinkClick}>
                        DevOps
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ProductManagement-QA" onClick={handleLinkClick}>
                    Product Management & QA
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Career' onClick={handleLinkClick}>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={handleNavigation()} onClick={handleLinkClick}>
                <i className="fa fa-user-circle-o" title='Admin Dashboard' aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
