
import React, { useState, useContext } from 'react';
import styles from "./header.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";



const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className={styles.header}>
  {/* Top bar */}
  <div className={styles.topBar}>
    <h1 className={styles.headerHeading}>SmartNotes</h1>
    <div className={styles.rightSide}>
      
      {auth.isAuthenticated && (
        <>
        <span className={styles.username}>
          Hi, {auth.user?.username}
        </span>
        <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
        </>
      )}
     
      <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu} aria-label='Toggle menu'>
         <span></span>
         <span></span>
         <span></span>
      </div>
    </div>
  </div>
  {/* FULLSCREEN MENU */}
  <div className={`${styles.menuOverlay} ${menuOpen ? styles.open : ""}`}>
    <ul className={styles.menuLinks}>
      {auth.isAuthenticated ? (
        <>
          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Home</NavLink></li>
          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/about" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>About</NavLink></li>
          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/features" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Features</NavLink></li>
           <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Contact Us</NavLink></li>
        </>
      ) : (
        <>
         <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Home</NavLink></li>

          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/about" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>About</NavLink></li>
          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/login" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Sign In</NavLink></li>
          <li className={styles.navItem}><NavLink onClick={toggleMenu} to="/signup" className={({ isActive }) =>
                     `${styles.navLink} ${isActive ? styles.active : ''}`
                      }>Sign Up</NavLink></li>
        </>
      )}
    </ul>
  </div>
</div>
  );
};
export default Header;




