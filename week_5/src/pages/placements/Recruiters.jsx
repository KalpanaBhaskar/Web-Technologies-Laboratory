import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './PlacementsPages.module.css';

/**
 * Recruiters page listing corporate partners.
 */
const Recruiters = () => {
  const partners = [
    { sector: "Technology & Computing", list: ["Veloce Technologies", "Altum Cloud", "Caelum Software", "Syntropy AI"] },
    { sector: "Investment Banking & Advisories", list: ["Vanguard Capital", "Apex Asset Management", "Sovereign Trust", "Horizon Ventures"] },
    { sector: "Bio-Tech & Healthcare", list: ["BioGlow Diagnostics", "Nova Therapeutics", "Sterling Health", "ClinGen Lab"] }
  ];

  return (
    <main>
      <PageHero 
        category="Placements"
        title="Recruiting Partners"
        description="Connecting Arcade scholars with leading global corporations and research laboratories."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Active Recruitment Sectors" subtitle="Hiring Networks" align="center" />
          
          <div className="grid grid-3">
            {partners.map((p, idx) => (
              <div key={idx} className={styles.recruiterSector}>
                <h3 className={styles.sectorTitle}>{p.sector}</h3>
                <p className={styles.paragraph} style={{ fontSize: '0.85rem', marginBottom: '8px' }}>
                  Notable recruiting partners in this sector include:
                </p>
                <ul className={styles.recruiterList}>
                  {p.list.map((partner, pIdx) => (
                    <li key={pIdx} className={styles.recruiterTag}>{partner}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Relations Notice */}
      <section className="section section-bg-warm" aria-label="Corporate Relations">
        <div className="container text-center">
          <h2 className={styles.subheading}>Corporate Relations Office</h2>
          <p className={styles.paragraph} style={{ maxWidth: '700px', margin: '0 auto' }}>
            We sponsor corporate workshops, capstone sponsorships, and recruiting events. For inquiries about corporate hiring programs, contact <a href="mailto:corporate@arcade.edu">corporate@arcade.edu</a>. These companies are fictionalized examples.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Recruiters;
