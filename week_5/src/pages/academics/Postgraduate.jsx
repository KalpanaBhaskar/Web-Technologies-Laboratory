import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { postgraduatePrograms } from '../../data/academics';
import styles from './AcademicsPages.module.css';

/**
 * Postgraduate programs catalog page.
 */
const Postgraduate = () => {
  return (
    <main>
      <PageHero 
        category="Academics"
        title="Postgraduate & Doctoral Programs"
        description="Empowering scholars to pursue specialized research, professional excellence, and original discoveries."
      />

      {/* Advanced Research Ethos */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <SectionHeading title="Graduate Research Infrastructure" subtitle="Scholarly Inquiry" align="center" />
            <p className={styles.paragraph}>
              Arcade's graduate school is characterized by close advisor relationships and robust financial research grants. With access to world-class labs and a dedicated library stack, our graduate students are pioneers in their respective academic fields.
            </p>
          </div>
        </div>
      </section>

      {/* Degree List */}
      <section className="section section-bg-warm" aria-label="Available Degrees">
        <div className="container">
          <SectionHeading title="Graduate & PhD Degree Offerings" subtitle="M.S., M.B.A. & Ph.D." align="center" />
          
          <div className={styles.programGrid}>
            {postgraduatePrograms.map((prog, idx) => (
              <div key={idx} className={styles.programCard}>
                <span className={styles.programCode}>{prog.code}</span>
                <h3 className={styles.programName}>{prog.name}</h3>
                <span className={styles.programDuration}>Duration: {prog.duration}</span>
                <p className={styles.programDesc}>{prog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="section" aria-label="Apply Now">
        <div className="container text-center">
          <h2 className={styles.subheading}>Ready to Apply for Graduate Studies?</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Review our application timeline, department recommendations, and statement of research requirements.
          </p>
          <Button to="/admissions/postgraduate" variant="secondary">Postgraduate Admissions</Button>
        </div>
      </section>
    </main>
  );
};

export default Postgraduate;
