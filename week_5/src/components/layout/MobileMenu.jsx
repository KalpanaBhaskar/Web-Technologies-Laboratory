import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

/**
 * MobileMenu component rendering as a full-height drawer.
 * Utilizes accordion expansions for submenu items to optimize screen real estate.
 */
const MobileMenu = ({ isOpen, onClose, navigationData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!isOpen) return null;

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.logoPlaceholder}>ARCADE</div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            &times;
          </button>
        </div>

        {/* Navigation Accordions */}
        <nav className={styles.nav} aria-label="Mobile Navigation">
          {navigationData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className={styles.accordionGroup}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isExpanded}
                >
                  <span className={styles.sectionTitle}>{item.title}</span>
                  <span className={`${styles.chevron} ${isExpanded ? styles.rotate : ''}`}>
                    &#9662;
                  </span>
                </button>
                
                <div className={`${styles.accordionContent} ${isExpanded ? styles.expanded : ''}`}>
                  <ul className={styles.submenuList}>
                    {/* General Overview Link for Section */}
                    <li className={styles.submenuItem}>
                      <Link to={item.path} className={styles.overviewLink} onClick={onClose}>
                        {item.title} Overview
                      </Link>
                    </li>
                    {/* Submenu Item Links */}
                    {item.submenu.map((sub, sIdx) => (
                      <li key={sIdx} className={styles.submenuItem}>
                        <Link to={sub.path} className={styles.submenuLink} onClick={onClose}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA in Drawer */}
        <div className={styles.drawerFooter}>
          <Link to="/admissions/application-process" className={styles.applyBtn} onClick={onClose}>
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
