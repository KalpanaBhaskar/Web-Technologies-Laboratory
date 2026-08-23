import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './CampusPages.module.css';

/**
 * CampusFacilities page.
 */
const CampusFacilities = () => {
  const facilities = [
    { name: "Vanguard Library", type: "Academic Stack", desc: "Houses over 2.5 million print volumes, rare colonial manuscripts, and subscription keys to all global scientific databases." },
    { name: "The Arcade Quad & Great Hall", type: "Association Space", desc: "The historical heart of campus. Holds the central student dining hall, administrative offices, and broad lawns." },
    { name: "Wellness & Health Clinic", type: "Health Support", desc: "Providing 24/7 medical assistance, mental health counselling, stress workshops, and physical therapy." },
    { name: "Vanguard Science Center", type: "Laboratory Space", desc: "Features modern diagnostic suites, cleanrooms for microfabrication, and the Room-Temperature Quantum computers." }
  ];

  return (
    <main>
      <PageHero 
        category="Campus Life"
        title="Campus Facilities"
        description="Fostering academic focus and wellness through state-of-the-art physical assets."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Key Campus Facilities" subtitle="Physical Assets" align="center" />
          
          <div className={styles.facList}>
            {facilities.map((fac, idx) => (
              <div key={idx} className={styles.facItem}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {fac.type}
                </div>
                <h3 className={styles.facTitle}>{fac.name}</h3>
                <p className={styles.paragraph} style={{ fontSize: '0.95rem', margin: 0 }}>
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampusFacilities;
