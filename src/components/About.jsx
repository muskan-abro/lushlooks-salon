import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>About Lush Looks</h2>
          <p>
            Welcome to <strong>Lush Looks</strong> — your sanctuary of style, beauty, and relaxation. Since opening our doors in 2015, we’ve dedicated ourselves to creating luxurious experiences tailored to every individual.
          </p>
          <p>
            Our philosophy is simple: beauty should be empowering, accessible, and personal. From precision haircuts to rejuvenating skin treatments and trendsetting nail art, every service is delivered with passion and perfection.
          </p>
          <p>
            With a talented team of stylists, aestheticians, and wellness experts, we blend the latest techniques with a warm, client-focused approach. Whether it’s your wedding day, a special event, or a much-needed self-care escape — we’re here to make you feel your absolute best.
          </p>
          <p>
            At Lush Looks, you’re not just a client — you’re part of a community that celebrates individuality, creativity, and confidence.
          </p>
        </div>
        <div className={styles.image}>
          <img src="/images/about/salon.jpg" alt="Lush Looks Salon Interior" loading='lazy' />
        </div>
      </div>
    </section>
  );
}

export default About;
