import React from 'react';
import styles from './SectionHeading.module.css';

/**
 * SectionHeading provides editorial styled headings with a visual accent line.
 */
const SectionHeading = ({
  title,
  subtitle,
  align = 'center', // 'center' or 'left'
  light = false
}) => {
  const containerClass = `${styles.headingContainer} ${styles[align]} ${light ? styles.light : ''}`;

  return (
    <div className={containerClass}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}></div>
    </div>
  );
};

export default SectionHeading;
