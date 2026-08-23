import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './AboutPages.module.css';

/**
 * VisionMission component outlining strategic objectives.
 */
const VisionMission = () => {
  return (
    <main>
      <PageHero 
        category="About Us"
        title="Vision & Mission"
        description="Fostering academic discovery and shaping the next generation of global leaders."
      />

      <section className="section">
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionItem}>
              <h2 className={styles.visionTitle}>Our Vision</h2>
              <p className={styles.paragraph}>
                To stand at the absolute forefront of global education, defined by our devotion to intellectual courage, original research, and the creation of an inclusive society where scholarship transforms human lives.
              </p>
            </div>
            <div className={styles.visionItem}>
              <h2 className={styles.visionTitle}>Our Mission</h2>
              <p className={styles.paragraph}>
                To educate citizens and citizen-leaders for our society. We achieve this through our commitment to the transformative power of a liberal arts and sciences education, merging teaching excellence with groundbreaking research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section section-bg-warm" aria-label="Strategic Pillars">
        <div className="container">
          <SectionHeading title="Strategic Pillars: Arcade 2030" subtitle="Long Term Goals" align="center" />
          
          <div className="grid grid-3">
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>1. Research Excellence</h4>
              <p className={styles.valueDesc}>Double our endowment for scientific and humanities research, creating five new interdisciplinary research institutes by 2030.</p>
            </div>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>2. Global Access</h4>
              <p className={styles.valueDesc}>Expand need-blind admissions to guarantee full financial aid coverage for all admitted international students.</p>
            </div>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>3. Carbon Neutrality</h4>
              <p className={styles.valueDesc}>Commit to a 100% renewably powered campus grid, retrofitting historical structures with zero-emission cooling systems.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionMission;
