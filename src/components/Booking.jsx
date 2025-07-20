// src/components/Booking.jsx
import styles from './Booking.module.css';

function Booking() {
  return (
    <section className={styles.booking} id="booking">
      <h2 className={styles.heading}>Book an Appointment</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <select required>
          <option value="">Select a Service</option>
          <option value="Hair Styling">Hair Styling</option>
          <option value="Facial">Facial</option>
          <option value="Massage">Massage</option>
          <option value="Waxing">Waxing</option>
          <option value="Makeup">Makeup</option>
        </select>
        <input type="date" required />
        <input type="time" required />
        <textarea placeholder="Any special requests?" rows="4" />
        <button type="submit">Confirm Booking</button>
      </form>
    </section>
  );
}

export default Booking;
