import React, { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { admissionsFAQ } from '../../data/admissions';
import styles from './AdmissionsPages.module.css';

/**
 * AdmissionsOverview page hosting application info, selecting philosophy, and FAQs.
 */
const AdmissionsOverview = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Admissions at Arcade"
        description="Providing access to promising scholars regardless of their financial backgrounds."
      />

      {/* Holistic Philosophy */}
      <section className="section">
        <div className="container">
          <div className={styles.introBlock}>
            <h2 className={styles.subheading}>Our Holistic Review Philosophy</h2>
            <p className={styles.paragraph}>
              We seek students with intellectual curiosity, scholastic drive, and unique personal perspectives. We evaluate every applicant as an individual. Standardized test scores and GPAs are only part of the story; we read your personal essays, counselor letters, and extra-curricular commitments with equal dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways Selection */}
      <section className="section section-bg-warm" aria-label="Admissions Pathways">
        <div className="container">
          <SectionHeading title="Select Your Study Pathway" subtitle="Admissions Categories" align="center" />
          
          <div className={styles.splitGrid}>
            <div className={styles.pathwayBox}>
              <h3 className={styles.pathwayTitle}>Undergraduate Admission</h3>
              <p className={styles.paragraph}>
                Join our residential scholar community. Explore application timelines for high school seniors, transfer scholars, and international applicants.
              </p>
              <Button to="/admissions/undergraduate" variant="primary">Undergraduate Portals</Button>
            </div>
            
            <div className={styles.pathwayBox}>
              <h3 className={styles.pathwayTitle}>Postgraduate Admission</h3>
              <p className={styles.paragraph}>
                Advance your scholarly credentials. Find requirements for Master's, Ph.D., and executive program applications.
              </p>
              <Button to="/admissions/postgraduate" variant="primary">Graduate Portals</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section" aria-label="Frequently Asked Questions">
        <div className="container">
          <SectionHeading title="Admissions Frequently Asked Questions" subtitle="FAQ" align="center" />
          
          <div className={styles.faqList}>
            {admissionsFAQ.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}>&#9662;</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.opened : ''}`}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsOverview;
