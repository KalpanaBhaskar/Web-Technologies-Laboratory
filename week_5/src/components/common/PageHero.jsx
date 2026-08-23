import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import styles from './PageHero.module.css';

/**
 * Editorial PageHero component to introduce nested interior pages.
 */
const PageHero = ({ title, description, category }) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        {category && <span className={styles.category}>{category}</span>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <Breadcrumbs />
    </div>
  );
};

export default PageHero;
