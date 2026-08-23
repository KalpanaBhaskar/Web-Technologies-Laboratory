import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Footer.module.css';

/**
 * Substantial, comprehensive Footer component.
 * Provides broad structural layout links, school contact address,
 * social connections, and institutional legal links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="University Footer">
      {/* Top Footer with Grid of Links */}
      <div className={styles.topFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            
            {/* Column 1: Logo & Brief Statement */}
            <div className={styles.infoCol}>
              <div className={styles.logoWrapper}>
                <img src={logo} className={styles.logo} alt="Arcade University Crest" />
              </div>
              <p className={styles.tagline}>
                Cultivating curiosity, leadership, and knowledge without boundaries. A global institution of academic excellence.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LN</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X">X</a>
              </div>
            </div>

            {/* Column 2: Academics & Admissions */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Academics</h4>
              <ul className={styles.linksList}>
                <li><Link to="/academics/undergraduate">Undergraduate Programs</Link></li>
                <li><Link to="/academics/postgraduate">Postgraduate Programs</Link></li>
                <li><Link to="/academics/schools">Schools & Departments</Link></li>
                <li><Link to="/academics/calendar">Academic Calendar</Link></li>
                <li><Link to="/admissions/scholarships">Scholarships & Aid</Link></li>
              </ul>
            </div>

            {/* Column 3: Research & Campus */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Research & Placements</h4>
              <ul className={styles.linksList}>
                <li><Link to="/research">Research Overview</Link></li>
                <li><Link to="/research/centers">Centers & Institutes</Link></li>
                <li><Link to="/placements">Career Services</Link></li>
                <li><Link to="/placements/statistics">Placement Stats</Link></li>
                <li><Link to="/placements/stories">Success Stories</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact Info</h4>
              <p className={styles.contactText}>
                <strong>Arcade University</strong><br />
                404 Academic Parkway,<br />
                Vanguard Square, MA 02138
              </p>
              <p className={styles.contactText}>
                <strong>General:</strong> <a href="mailto:info@arcade.edu">info@arcade.edu</a><br />
                <strong>Admissions:</strong> <a href="mailto:admissions@arcade.edu">admissions@arcade.edu</a><br />
                <strong>Tel:</strong> <a href="tel:+15550192000">+1 (555) 019-2000</a>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer with Copyright and Legal Disclaimer */}
      <div className={styles.bottomFooter}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <p className={styles.copyright}>
              &copy; {currentYear} Arcade University. All Rights Reserved. (Fictional educational site demonstration)
            </p>
            <div className={styles.legalLinks}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/accessibility">Accessibility</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
