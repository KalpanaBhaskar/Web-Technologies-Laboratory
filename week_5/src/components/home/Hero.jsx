import React from 'react';
import Button from '../common/Button';
import { images } from '../../data/images';
import styles from './Hero.module.css';

/**
 * Editorial Hero component for the Arcade University home page.
 * Implements a large high-fidelity architectural background overlay with clean typographic contrast.
 */
const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Welcome Banner">
      <div 
        className={styles.bgImage} 
        style={{ backgroundImage: `url(${images.heroHome})` }}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Arcade University</span>
          <h1 className={styles.title}>Knowledge Without Boundaries.</h1>
          <p className={styles.description}>
            A premier global institution fostering rigorous scholastic research, critical dialogue, and academic empowerment. Discover your purpose among a community of world-renowned scholars.
          </p>
          <div className={styles.actions}>
            <Button to="/academics" variant="secondary">
              Explore Academics
            </Button>
            <Button to="/admissions/application-process" variant="outline" className={styles.outlineWhite}>
              Apply to Arcade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
