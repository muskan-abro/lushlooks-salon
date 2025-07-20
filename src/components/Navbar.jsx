import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Lush Looks</div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
        <span className={isOpen ? styles.open : ''}></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
