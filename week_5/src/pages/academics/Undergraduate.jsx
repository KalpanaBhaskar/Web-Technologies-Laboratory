import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { undergraduatePrograms } from '../../data/academics';
import styles from './AcademicsPages.module.css';

/**
 * Undergraduate Programs subpage displaying degree listings.
 */
const Undergraduate = () => {
  return (
    <main>
      <PageHero 
        category="Academics"
        title="Undergraduate Programs"
        description="Inspiring undergraduate students to develop critical intellect and explore original pathways."
      />

      {/* Core Curriculum Explanation */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <SectionHeading title="The Arcade Core Curriculum" subtitle="Scholastic Foundation" align="center" />
            <p className={styles.paragraph}>
              All undergraduate students participate in our foundational Core Curriculum. By taking seminar classes in quantitative analysis, historical inquiry, comparative literature, and ethical reasoning, students build a versatile intellectual footing before selecting a major.
            </p>
          </div>
        </div>
      </section>

      {/* Degree List */}
      <section className="section section-bg-warm" aria-label="Available Degrees">
        <div className="container">
          <SectionHeading title="Offered Degrees" subtitle="B.S. & B.A. Catalog" align="center" />
          
          <div className={styles.programGrid}>
            {undergraduatePrograms.map((prog, idx) => (
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
          <h2 className={styles.subheading}>Ready to Begin Your Application?</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Applications open on September 1st. Explore requirements, application deadlines, and need-based financial aid.
          </p>
          <Button to="/admissions/undergraduate" variant="secondary">Undergraduate Admissions</Button>
        </div>
      </section>
    </main>
  );
};

export default Undergraduate;
