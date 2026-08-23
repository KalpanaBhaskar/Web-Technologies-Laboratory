import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MegaMenu.module.css';

/**
 * MegaMenu component for desktop dropdown navigation.
 * Renders submenu links alongside a prominent, editorial callout.
 */
const MegaMenu = ({ item, active, scrolled, onClose }) => {
  if (!active) return null;

  const topOffset = scrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)';

  // Render a visual feature banner inside the mega menu based on the section
  const getFeatureBlock = () => {
    switch (item.title) {
      case "About Us":
        return {
          title: "Founded in 1892",
          desc: "Arcade University is a global leader in education, pioneering discoveries and molding future leaders.",
          cta: "Read our History",
          link: "/about/history"
        };
      case "Academics":
        return {
          title: "Explore Programs",
          desc: "With over 80 majors and degrees, you can customize your education to align with your passions.",
          cta: "View Schools",
          link: "/academics/schools"
        };
      case "Admissions":
        return {
          title: "Admissions Open",
          desc: "Apply today to join a vibrant community of scholars, artists, and innovators.",
          cta: "Application Process",
          link: "/admissions/application-process"
        };
      case "Research":
        return {
          title: "Research Centers",
          desc: "Tackling the world's most complex challenges through interdisciplinary inquiry.",
          cta: "View Centers",
          link: "/research/centers"
        };
      case "Campus Life":
        return {
          title: "Campus Housing",
          desc: "A residential campus with historic buildings, vibrant dining, and global communities.",
          cta: "Student Housing",
          link: "/campus-life/housing"
        };
      case "Placements":
        return {
          title: "Graduate Outcomes",
          desc: "95% employment rate within six months of graduation. Recruiters visit from top companies.",
          cta: "Placement Stats",
          link: "/placements/statistics"
        };
      default:
        return {
          title: "Connect with Us",
          desc: "Have questions? Our admissions and academic offices are here to guide you.",
          cta: "Contact Info",
          link: "/contact"
        };
    }
  };

  const feature = getFeatureBlock();

  return (
    <div className={styles.megaMenuContainer} style={{ top: topOffset }} onMouseLeave={onClose}>
      <div className={styles.megaMenuContent}>
        {/* Navigation Links Column */}
        <div className={styles.linksGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>{item.title}</span>
            <Link to={item.path} className={styles.overviewLink} onClick={onClose}>
              Overview &rarr;
            </Link>
          </div>
          <ul className={styles.linksList}>
            {item.submenu.map((sub, idx) => (
              <li key={idx} className={styles.linkItem}>
                <Link to={sub.path} className={styles.submenuLink} onClick={onClose}>
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Card Block */}
        <div className={styles.featureBlock}>
          <h4 className={styles.featureTitle}>{feature.title}</h4>
          <p className={styles.featureDesc}>{feature.desc}</p>
          <Link to={feature.link} className={styles.featureCta} onClick={onClose}>
            {feature.cta} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
