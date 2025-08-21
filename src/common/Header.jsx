import styles from './HeaderStyles.module.css';
import CV from '../assets/cv.pdf';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <nav className={styles.container}>
      <a href="#hero" className={styles.link}>Tamseel Sheikh</a>
      <a href="#projects" className={styles.link}>Projects</a>
      <a href="mailto:your.email@example.com" className={styles.link}>Contact</a>
      <div className={styles.socialLinks}>
        <a href={CV} download className={styles.iconLink}>
          <button className={styles.resumeButton}>Resume</button>
        </a>
        <a href="https://github.com/tamseel101" target="_blank" rel="noreferrer" className={styles.iconLink}>
          <img src={githubIcon} alt="Github icon" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/tamseelsheikh/" target="_blank" className={styles.iconLink}>
          <img src={linkedinIcon} alt="Linkedin icon" className={styles.icon} />
        </a>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
    </nav>
  );
}

export default Header;
