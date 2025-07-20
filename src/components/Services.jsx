import styles from './Services.module.css';

const services = [
    {
    title: 'Skin Treatments',
    img: '/images/services/skin.jpg',
    description: 'Facials, skin brightening, and advanced hydration therapies for radiant skin.',
    price: '$12 – $48',
  },
  {
    title: 'Hair Treatments',
    img: '/images/services/hairtreatment.jpg',
    description: 'Nourish your hair with keratin, smoothening, dandruff care, and deep conditioning treatments.',
    price: '$15 – $45',
  },
    {
    title: 'Hair Styling',
    img: '/images/services/hair.jpg',
    description: 'From classic cuts to trendy blowouts, our stylists craft hairstyles that reflect your personality.',
    price: '$10 – $30',
  },
  {
    title: 'Spa & Relaxation',
    img: '/images/services/spa.jpg',
    description: 'Rejuvenate your body and soul with our therapeutic massages and calming spa sessions.',
    price: '$15 – $36',
  },
  {
    title: 'Nail Art',
    img: '/images/services/nails.jpg',
    description: 'Trendy nail art, gel polish, and expert manicures to keep your nails flawless.',
    price: '$6 – $18',
  },
  {
    title: 'Makeup',
    img: '/images/services/makeup.jpg',
    description: 'From bridal glam to party looks — makeup artistry that enhances your beauty.',
    price: '$24 – $72',
  },
];


function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <img src={service.img} alt={service.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              <p className={styles.price}>{service.price}</p>
              <button className={styles.button}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
