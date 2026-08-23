import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './AdmissionsPages.module.css';

/**
 * Postgraduate Admissions guidelines page.
 */
const PostgraduateAdmissions = () => {
  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Postgraduate Admissions"
        description="Fostering original scholarship. Explore requirements for Master's and Doctoral admissions."
      />

      {/* Review Strategy */}
      <section className="section">
        <div className="container">
          <div className={styles.introBlock}>
            <SectionHeading title="Scholarly Focus & Research Match" subtitle="Graduate School" align="center" />
            <p className={styles.paragraph}>
              Admission to Arcade's graduate programs is managed by individual departments. We look for candidates whose academic goals align with our faculty's ongoing research areas. We strongly encourage prospective doctoral students to contact potential advisors prior to submitting their application.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section section-bg-warm" aria-label="Requirements">
        <div className="container">
          <SectionHeading title="Graduate Requirements" subtitle="Checklist" align="center" />
          
          <div className={styles.reqGrid}>
            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>1. Research Statement</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                A 1,000-word statement detailing your academic experiences, research proposal, and fit with specific Arcade research labs.
              </p>
            </div>
            
            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>2. Letters of Reference</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                Three letters of recommendation from professors or research supervisors familiar with your scholarly work.
              </p>
            </div>

            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>3. Academic Transcripts</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                Official transcripts from all post-secondary institutions attended reflecting degree completion or coursework in progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="section" aria-label="Next Steps">
        <div className="container text-center">
          <h2 className={styles.subheading}>Ready to Submit Your Application?</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Ensure your recommendations and transcripts are prepared ahead of department deadlines.
          </p>
          <div className={styles.splitGrid} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Button to="/admissions/application-process" variant="secondary">Apply Now</Button>
            <Button to="/admissions/dates" variant="outline">Important Dates</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostgraduateAdmissions;
