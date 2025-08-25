import styles from './HeroStyles.module.css';
import heroImg from '../../assets/tamseel.jpg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import Typewriter from '../../common/Typewriter';
import { useTheme } from '../../common/ThemeContext';

// eslint-disable-next-line react/prop-types
function Hero({ id }) {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const words = ["code", "videos", "bad decisions", "stuff"];

  return (
    <section id={id} className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.firstName}>Tamseel</span>
              <br />
              <span className={styles.lastName}>Sheikh</span>
            </h1>
            <h2 className={styles.heroSubtitle}>I make:</h2>
            <div className={styles.typewriterContainer}>
              <Typewriter words={words} className={styles.typewriterText} />
            </div>
            <div className={styles.heroActions}>
              <a href={CV} download className={styles.resumeButton}>
                Download Resume
              </a>
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/tamseel101" 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub Profile"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tamseelsheikh/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn Profile"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src={heroImg}
              className={styles.profileImage}
              alt="Tamseel Sheikh - Software Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;