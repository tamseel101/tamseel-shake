import styles from './HeaderStyles.module.css';
import CV from '../assets/cv.pdf';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from './ThemeContext';
import { useState, useEffect } from 'react';

const routes = [
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: 'mailto:your.email@example.com',
  },
];

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Close mobile menu when screen width becomes 1024px or larger (desktop breakpoint)
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo/Brand */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.brandLink}>
            <span className={styles.tamseel}>Tamseel</span>
            <span className={styles.sheikh}>Sheikh</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {routes.map((route) => (
              <li key={route.title} className={styles.navItem}>
                <a href={route.href} className={styles.navLink}>
                  {route.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            <img src={themeIcon} alt="Toggle theme" />
          </button>
          <a href={CV} download className={styles.resumeButton}>
            Resume
          </a>
          <a href="https://github.com/tamseel101" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/tamseelsheikh/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {routes.map((route) => (
                <li key={route.title} className={styles.mobileNavItem}>
                  <a 
                    href={route.href} 
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {route.title}
                  </a>
                </li>
              ))}
              <li className={styles.mobileNavItem}>
                <button className={styles.mobileThemeToggle} onClick={toggleTheme}>
                  <img src={themeIcon} alt="Toggle theme" />
                  <span>Toggle Theme</span>
                </button>
              </li>
              <li className={styles.mobileNavItem}>
                <a href={CV} download className={styles.mobileResumeButton} onClick={() => setMenuOpen(false)}>
                  Resume
                </a>
              </li>
              <li className={styles.mobileNavItem}>
                <a href="https://github.com/tamseel101" target="_blank" rel="noreferrer" className={styles.mobileSocialLink} onClick={() => setMenuOpen(false)}>
                  <img src={githubIcon} alt="GitHub" />
                  <span>GitHub</span>
                </a>
              </li>
              <li className={styles.mobileNavItem}>
                <a href="https://www.linkedin.com/in/tamseelsheikh/" target="_blank" rel="noreferrer" className={styles.mobileSocialLink} onClick={() => setMenuOpen(false)}>
                  <img src={linkedinIcon} alt="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
