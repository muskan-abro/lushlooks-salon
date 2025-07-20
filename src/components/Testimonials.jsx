import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sophia R.',
    feedback: 'Absolutely love this place! The staff is professional and my hair has never looked better.',
    image: '/images/clients/sophia.jpg'
  },
  {
    name: 'Ava J.',
    feedback: 'Such a relaxing environment. I had the best spa treatment here!',
    image: '/images/clients/ava.jpg'
  },
  {
    name: 'Lily K.',
    feedback: 'The makeup artist made me feel like a queen. Highly recommend for bridal services.',
    image: '/images/clients/lily.jpg'
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.cards}>
        {testimonials.map((t, i) => (
          <div className={styles.card} key={i}>
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <p className={styles.text}>“{t.feedback}”</p>
            <h4 className={styles.name}>— {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
