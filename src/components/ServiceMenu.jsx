import styles from './ServiceMenu.module.css';

const serviceMenu = [
  {
    category: 'Hair Services',
    subcategories: [
      {
        title: 'Hair Styling',
        services: [
          { name: 'Blow Dry & Styling', price: '$40' },
          { name: 'Women’s Haircut', price: '$60' },
          { name: 'Men’s Haircut', price: '$35' },
          { name: 'Updos & Occasion Styling', price: '$80' },
        ],
      },
      {
        title: 'Hair Treatments',
        services: [
          { name: 'Deep Conditioning', price: '$50' },
          { name: 'Keratin Smoothing', price: '$150' },
          { name: 'Scalp Detox', price: '$60' },
          { name: 'Olaplex Treatment', price: '$90' },
        ],
      },
      {
        title: 'Hair Coloring',
        services: [
          { name: 'Root Touch-Up', price: '$70' },
          { name: 'Balayage', price: '$180' },
          { name: 'Full Color', price: '$120' },
          { name: 'Highlights', price: '$150' },
        ],
      },
    ],
  },
  {
    category: 'Skin & Spa',
    subcategories: [
      {
        title: 'Facials',
        services: [
          { name: 'Classic Facial', price: '$65' },
          { name: 'Deep Cleansing Facial', price: '$75' },
          { name: 'Hydrating Facial', price: '$90' },
          { name: 'Anti-Aging Facial', price: '$110' },
          { name: 'Brightening Vitamin C Facial', price: '$100' },
          { name: 'Acne Treatment Facial', price: '$85' },
          { name: 'Collagen Boost Facial', price: '$120' },
          { name: 'Gold Facial', price: '$130' },
          { name: 'Oxygen Facial', price: '$140' },
          { name: 'Microdermabrasion Facial', price: '$150' },
          { name: 'LED Therapy Facial', price: '$160' },
        ],
      },
      {
        title: 'Body Treatments',
        services: [
          { name: 'Body Polish', price: '$80' },
          { name: 'Back Facial', price: '$70' },
          { name: 'Ubtan Body Polish', price: '$89' },
        ],
      },
      {
        title: 'Massage',
        services: [
          { name: 'Swedish Massage (60 min)', price: '$100' },
          { name: 'Deep Tissue Massage (60 min)', price: '$120' },
          { name: 'Hot Stone Massage', price: '$130' },
          { name: 'Aromatherapy Massage', price: '$110' },
          { name: 'Head & Shoulder Massage (30 min)', price: '$60' },
          { name: 'Foot Reflexology (30 min)', price: '$55' },
        ],
      },
    ],
  },
  {
    category: 'Waxing',
    subcategories: [
      {
        title: 'Rica Wax',
        services: [
          { name: 'Full Face Wax', price: '$40' },
          { name: 'Eyebrow Shaping', price: '$15' },
          { name: 'Underarms Wax', price: '$25' },
          { name: 'Full Arms Wax', price: '$45' },
          { name: 'Full Legs Wax', price: '$60' },
          { name: 'Bikini Wax', price: '$55' },
          { name: 'Brazilian Wax', price: '$85' },
          { name: 'Back Wax', price: '$65' },
          { name: 'Chest Wax', price: '$70' },
        ],
      },
      {
        title: 'Threading',
        services: [
          { name: 'Eyebrows', price: '$12' },
          { name: 'Upper Lip', price: '$8' },
          { name: 'Full Face', price: '$35' },
        ],
      },
    ],
  },
  {
    category: 'Nail Services',
    subcategories: [
      {
        title: 'Nail Care',
        services: [
          { name: 'Manicure', price: '$30' },
          { name: 'Pedicure', price: '$40' },
          { name: 'Gel Nail Extensions', price: '$70' },
          { name: 'Nail Art Add-on', price: '$15' },
        ],
      },
    ],
  },
  {
    category: 'Makeup',
    subcategories: [
      {
        title: 'Makeup Services',
        services: [
          { name: 'Bridal Makeup', price: '$400' },
          { name: 'Event Glam', price: '$150' },
          { name: 'Natural Day Look', price: '$100' },
          { name: 'Evening Glam', price: '$130' },
        ],
      },
    ],
  },
  {
    category: 'Packages & Deals',
    subcategories: [
      {
        title: 'Combo Packages',
        services: [
          { name: 'Bridal Package (Makeup + Hair + Nails)', price: '$599' },
          { name: 'Spa Day (Facial + Massage + Body Polish)', price: '$280' },
          { name: 'Weekend Beauty (Haircut + Mani/Pedi)', price: '$120' },
        ],
      },
    ],
  },
];

function ServiceMenu() {
  return (
    <section className={styles.menu} id="menu">
      <h2 className={styles.heading}>Service Menu</h2>
      <div className={styles.grid}>
        {serviceMenu.map((category, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.category}>{category.category}</h3>
            {category.subcategories.map((sub, subIndex) => (
              <div key={subIndex}>
                <h4 className={styles.subheading}>{sub.title}</h4>
                <ul className={styles.list}>
                  {sub.services.map((service, idx) => (
                    <li key={idx} className={styles.item}>
                      <span className={styles.name}>{service.name}</span>
                      <span className={styles.price}>{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceMenu;
