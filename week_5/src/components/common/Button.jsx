import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Reusable Button component that handles standard actions, external anchors,
 * or React Router navigation links cleanly.
 */
const Button = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary', 'secondary', 'outline'
  className = '',
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer" onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
