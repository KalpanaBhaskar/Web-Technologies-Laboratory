import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './AdmissionsPages.module.css';

/**
 * Undergraduate Admissions guidelines page.
 */
const UndergraduateAdmissions = () => {
  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Undergraduate Admissions"
        description="Join a community of scholars, researchers, and creators. We review applications holistically."
      />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.introBlock}>
            <SectionHeading title="Candidate Profile & Expectations" subtitle="First-Year Students" align="center" />
            <p className={styles.paragraph}>
              There is no typical Arcade student. We look for individuals who demonstrate academic curiosity, drive, and character. We seek to understand your context — how you've leveraged the resources available to you in your school and community.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section section-bg-warm" aria-label="Requirements">
        <div className="container">
          <SectionHeading title="Application Checklist" subtitle="What We Require" align="center" />
          
          <div className={styles.reqGrid}>
            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>1. Academic Transcripts</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                Official high school records reflecting 4 years of secondary education. We assess course rigor and grade trends.
              </p>
            </div>
            
            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>2. Letters of Recommendation</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                One recommendation from your high school counselor and one from a core academic teacher (English, Math, Science).
              </p>
            </div>

            <div className={styles.reqCard}>
              <h4 className={styles.reqTitle}>3. Personal Statement</h4>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>
                A 650-word essay reflecting your personality, background, and intellectual goals. Submit via the Application Portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="section" aria-label="Next Steps">
        <div className="container text-center">
          <h2 className={styles.subheading}>Ready to Start Your Journey?</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Applications open annually on September 1st. Read our step-by-step guidelines before starting.
          </p>
          <div className={styles.splitGrid} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Button to="/admissions/application-process" variant="secondary">Application Process</Button>
            <Button to="/admissions/dates" variant="outline">Important Dates</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UndergraduateAdmissions;
