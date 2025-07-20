import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Unwind. Refresh. Shine.</h1>
          <p className={styles.subtitle}>Experience the luxury you deserve at Lush Looks Salon.</p>
          <a href="#booking" className={styles.button}>Book Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
