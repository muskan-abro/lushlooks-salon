import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Get in Touch</h2>
      <div className={styles.info}>
        <div>
          <h3>Address</h3>
          <p>123 Luxe Street,<br /> Beverly Hills, CA 90210</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
        <div>
          <h3>Email</h3>
          <p><a href="mailto:info@lushlooks.com">info@lushlooks.com</a></p>
        </div>
      </div>

      <div className={styles.socials}>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Lush Looks Salon. All rights reserved.
      </footer>
    </section>
  );
}

export default Contact;
