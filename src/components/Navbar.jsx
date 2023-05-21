import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className='Navwrapper'>
      <div className="Navbar">
      <div className="Navbar-brand">
        <span className="logo">
            <img alt='logo' src='https://res.cloudinary.com/blackgirlmagic/image/upload/v1684602207/mlh-hack-logo_ersbbc.png' className='logo-img'/>
            <p>sociALL</p>
        </span>
        <button className={`Navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
  <span className="Navbar-toggler-icon"></span>
</button>

      </div>

      <div className={`Navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="Navbar-nav">
          <li className="Nav-item">
            <Link to="/" className="Nav-link">Home</Link>
          </li>
    
          <li className="Nav-item">
            <Link to="/login" className="Nav-link">Login</Link>
          </li>
          <li className="Nav-item">
          <Link to="/signup" className="Nav-link">Signup</Link>
          </li>
          <li className="Nav-item">
            <Link to="/postevent" className="Nav-link">Post</Link>
          </li>
          <li className="Nav-item">
            <Link to="/" className="Nav-link">profile</Link>
          </li>
        </ul>
      </div>





      </div>








    </nav>
  );
}

export default Navbar;
