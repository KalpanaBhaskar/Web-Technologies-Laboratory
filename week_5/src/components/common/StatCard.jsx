import React from 'react';
import styles from './StatCard.module.css';

/**
 * StatCard for presenting key achievements or metrics.
 */
const StatCard = ({ number, label, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
};

export default StatCard;
