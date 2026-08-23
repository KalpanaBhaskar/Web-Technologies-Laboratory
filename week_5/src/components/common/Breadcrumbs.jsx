import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

/**
 * Dynamic Breadcrumbs component to assist user navigation.
 * Automatically parses the URL pathway and generates links.
 */
const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // If we are on the Home page, don't show breadcrumbs
  if (pathname === '/') return null;

  // Split paths and filter out empty elements
  const pathnames = pathname.split('/').filter((x) => x);

  // Capitalize path segments and replace hyphens with spaces
  const formatSegment = (str) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <div className={styles.container}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
              <li key={to} className={`${styles.item} ${styles.active}`} aria-current="page">
                <span className={styles.separator}>/</span>
                <span>{formatSegment(value)}</span>
              </li>
            ) : (
              <li key={to} className={styles.item}>
                <span className={styles.separator}>/</span>
                <Link to={to} className={styles.link}>
                  {formatSegment(value)}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
