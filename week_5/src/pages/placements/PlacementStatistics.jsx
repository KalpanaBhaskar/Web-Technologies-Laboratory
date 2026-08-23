import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './PlacementsPages.module.css';

/**
 * PlacementStatistics page displaying graduation employment outcomes.
 */
const PlacementStatistics = () => {
  const sectors = [
    { label: "Technology & Software Systems", percentage: 32 },
    { label: "Investment Banking & Finance", percentage: 28 },
    { label: "Strategy Consulting & Policy", percentage: 18 },
    { label: "Bio-Sciences & Research Laboratories", percentage: 14 },
    { label: "Arts, Law & Public Interest Academia", percentage: 8 }
  ];

  return (
    <main>
      <PageHero 
        category="Placements"
        title="Placement Statistics"
        description="A transparent breakdown of employment metrics and recruiting sectors for the Class of 2025."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Sector Employment Distribution" subtitle="Hiring Statistics" align="center" />
          
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {sectors.map((sec, idx) => (
              <div key={idx} className={styles.statRow}>
                <div className={styles.statLabel}>
                  <span>{sec.label}</span>
                  <span>{sec.percentage}%</span>
                </div>
                <div className={styles.statBarContainer}>
                  <div className={styles.statBar} style={{ width: `${sec.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology note */}
      <section className="section section-bg-warm" aria-label="Methodology Note">
        <div className="container text-center">
          <h2 className={styles.subheading}>Survey Methodology</h2>
          <p className={styles.paragraph} style={{ maxWidth: '700px', margin: '0 auto' }}>
            Outcome statistics are gathered annually by the Office of Career Services. The figures reflect student reports submitted between graduation and six months post-commencement. These figures represent mock demo values.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PlacementStatistics;
