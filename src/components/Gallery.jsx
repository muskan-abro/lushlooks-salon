import styles from './Gallery.module.css';

const galleryImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/9.jpg',
  '/images/gallery/10.jpg',
];

function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.heading}>Our Work</h2>
      <div className={styles.grid}>
        {galleryImages.map((img, index) => (
          <div key={index} className={styles.card}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
