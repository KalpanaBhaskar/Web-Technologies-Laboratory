import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import { images } from '../../data/images';
import styles from './CampusPages.module.css';

/**
 * Housing page explaining the residential house system.
 */
const Housing = () => {
  const houses = [
    { name: "Sterling House", capacity: "180 Students", desc: "A historic brick manor built in 1895, featuring a wood-paneled library and an open courtyard." },
    { name: "Vance House", capacity: "210 Students", desc: "Centrally located near the quad, Vance is known for its strong association with intramural sports and debate nights." },
    { name: "Pendelton House", capacity: "195 Students", desc: "Located close to the engineering wing, Pendelton features digital maker spaces and study rooms." }
  ];

  return (
    <main>
      <PageHero 
        category="Campus Life"
        title="Residential House System"
        description="A supportive residential model grouping students, tutors, and faculty advisors together."
      />

      {/* House System Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.splitBox}>
            <div className={styles.textContent}>
              <SectionHeading title="The Heart of Student Association" subtitle="The Houses" align="left" />
              <p className={styles.paragraph}>
                At Arcade, residential houses are more than dorms; they are community centers. All undergraduates live in one of our 12 houses. Each house contains its own dining hall, study libraries, music practice rooms, and faculty dean quarters.
              </p>
              <p className={styles.paragraph}>
                Graduate tutors and resident advisors live alongside undergraduates, hosting weekly tea tables, guest seminars, and academic workshops.
              </p>
            </div>
            <div>
              <img src={images.campusLifeFeatured} className={styles.housingImg} alt="Historical stone house dorm facing the central quad" />
            </div>
          </div>
        </div>
      </section>

      {/* House Directories */}
      <section className="section section-bg-warm" aria-label="House Communities">
        <div className="container">
          <SectionHeading title="Featured Houses" subtitle="Communities" align="center" />
          
          <div className="grid grid-3">
            {houses.map((house, idx) => (
              <div key={idx} className={styles.houseCard}>
                <h3 className={styles.houseTitle}>{house.name}</h3>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '8px' }}>
                  Capacity: {house.capacity}
                </div>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {house.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Housing;
