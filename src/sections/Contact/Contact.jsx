import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactMethod}>
            <h3 className={styles.contactMethodTitle}>Email</h3>
            <a href="mailto:tamseel.sheikh@mail.utoronto.ca" className={styles.contactMethodLink}>
              tamseel.sheikh@mail.utoronto.ca
            </a>
          </div>
          
          <div className={styles.contactMethod}>
            <h3 className={styles.contactMethodTitle}>Location</h3>
            <p className={styles.contactMethodText}>
              Toronto, Ontario, Canada
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
