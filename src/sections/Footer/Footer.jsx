import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerBrandName}>
              <span className={styles.footerFirstName}>Tamseel</span>
              <span className={styles.footerLastName}>Sheikh</span>
            </h3>
            <p className={styles.footerTagline}>
              Building digital experiences that matter
            </p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            <p>&copy; 2025 Tamseel Sheikh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
