import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { applicationSteps } from '../../data/admissions';
import styles from './AdmissionsPages.module.css';

/**
 * ApplicationProcess page walking students through portal steps.
 */
const ApplicationProcess = () => {
  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Application Process"
        description="A step-by-step guide to compiling and submitting your application to Arcade."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Step-by-Step Guidelines" subtitle="Procedure" align="center" />
          
          <div className={styles.stepsContainer}>
            {applicationSteps.map((stepItem, idx) => (
              <div key={idx} className={styles.stepBlock}>
                <div className={styles.stepNumber}>{stepItem.step}</div>
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>{stepItem.title}</h3>
                  <p className={styles.paragraph} style={{ margin: 0 }}>
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Portal */}
      <section className="section section-bg-warm" aria-label="Portal Link">
        <div className="container text-center">
          <h2 className={styles.subheading}>Ready to Start?</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Access our secure online applicant portal. You can save your progress and submit when complete.
          </p>
          <Button href="https://application.arcade.edu" variant="secondary">
            Access Arcade Application Portal
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ApplicationProcess;
