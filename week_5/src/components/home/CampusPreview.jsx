import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { images } from '../../data/images';
import styles from './CampusPreview.module.css';

/**
 * Campus Preview block for Home Page.
 * Showcases the residential structure and community experiences of students.
 */
const CampusPreview = () => {
  return (
    <section className="section" aria-label="Campus Life Preview">
      <div className="container">
        
        {/* Split Grid */}
        <div className={styles.splitGrid}>
          
          {/* Left Column: Context & Details */}
          <div className={styles.textContent}>
            <SectionHeading 
              title="A Vibrant Residential Community Built on Association" 
              subtitle="Campus Life" 
              align="left"
            />
            <p className={styles.leadText}>
              Learning at Arcade doesn't stop when you exit the lecture hall. It continues in historic residential dining rooms, athletics, and theater rehearsals.
            </p>
            <p className={styles.bodyText}>
              Our residential house system group scholars from diverse backgrounds and academic disciplines. With over 120 registered clubs, active visual art spaces, and state-of-the-art wellness centers, students shape an environment matching their individual interests.
            </p>
            
            <div className={styles.actions}>
              <Button to="/campus-life" variant="primary">
                Student Communities
              </Button>
              <Button to="/campus-life/housing" variant="outline">
                Explore Housing
              </Button>
            </div>
          </div>

          {/* Right Column: Visual treat */}
          <div className={styles.imageBlock}>
            <img src={images.campusLifeFeatured} className={styles.campusImg} alt="Students studying together on the university lawn under oak trees" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CampusPreview;
