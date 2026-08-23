import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { images } from '../../data/images';
import styles from './ResearchPages.module.css';

/**
 * Innovation page detailing startup incubators and student entrepreneurship labs.
 */
const Innovation = () => {
  const startups = [
    { name: "Veloce Quantum", year: "Founded 2024", outcome: "Raised $6.2M seed round, building room-temperature quantum diagnostic modules based on CAC patents." },
    { name: "BioGlow Diagnostics", year: "Founded 2023", outcome: "Acquired by Vanguard Health Systems for $18M, commercializing gene-editing diagnostic sticks." }
  ];

  return (
    <main>
      <PageHero 
        category="Research"
        title="Innovation & Entrepreneurship"
        description="Fostering an ecosystem where academic models translate into market-leading startups."
      />

      {/* Venture Lab Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.incubatorBox}>
            <div className={styles.incubatorText}>
              <SectionHeading title="The Arcade Venture Lab" subtitle="Venture Incubator" align="left" />
              <p className={styles.paragraph}>
                The Venture Lab serves as our campus startup launchpad. We provide seed funding, legal advisory on patents, and co-working office space to students and faculty looking to commercialize original research.
              </p>
              <p className={styles.paragraph}>
                Through our Technology Transfer Office (TTO), we have licensed over 85 patents to commercial ventures and assisted in launching 20 student-led startups in the past three years alone.
              </p>
              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <Button href="https://venturelab.arcade.edu" variant="primary">Access Portal</Button>
              </div>
            </div>
            <div>
              <img src={images.introImg} className={styles.incubatorImg} alt="Students drafting startup timelines in Arcade Venture Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* Startup Showcase */}
      <section className="section section-bg-warm" aria-label="Startup Success Stories">
        <div className="container">
          <SectionHeading title="Notable Ventures Launched at Arcade" subtitle="Alumni Startups" align="center" />
          
          <div className="grid grid-2">
            {startups.map((s, idx) => (
              <div key={idx} className={styles.focusCard}>
                <h4 className={styles.focusTitle}>{s.name}</h4>
                <div className={styles.centerMeta} style={{ margin: '0 0 var(--spacing-sm)' }}><strong>{s.year}</strong></div>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {s.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Innovation;
