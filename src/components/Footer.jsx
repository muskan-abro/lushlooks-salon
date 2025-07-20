import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Lush Looks</h3>
          <p>Elevating beauty with elegance.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>📍 123 Serenity Lane, New Delhi</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 hello@lushlooks.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Lush Looks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
