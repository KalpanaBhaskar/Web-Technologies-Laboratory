import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

/**
 * Editorial Content Card component.
 * Displays an image, category, title, description, and link action.
 */
const Card = ({
  title,
  description,
  image,
  category,
  to,
  href,
  linkLabel = "Read More"
}) => {
  const CardContent = () => (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt={title} loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {(to || href) && (
          <span className={styles.linkText}>
            {linkLabel} &rarr;
          </span>
        )}
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles.card}>
        <CardContent />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  return (
    <div className={styles.staticCard}>
      <CardContent />
    </div>
  );
};

export default Card;
