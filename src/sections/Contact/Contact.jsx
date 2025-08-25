import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactMethod}>
            <h3 className={styles.contactMethodTitle}>Email</h3>
            <a href="mailto:your.email@example.com" className={styles.contactMethodLink}>
              your.email@example.com
            </a>
          </div>
          
          <div className={styles.contactMethod}>
            <h3 className={styles.contactMethodTitle}>Location</h3>
            <p className={styles.contactMethodText}>
              Toronto, Ontario, Canada
            </p>
          </div>
          
          <div className={styles.contactMethod}>
            <h3 className={styles.contactMethodTitle}>Available For</h3>
            <p className={styles.contactMethodText}>
              Full-time opportunities, Freelance projects, Open source contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
