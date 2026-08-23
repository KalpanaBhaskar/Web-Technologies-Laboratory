import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { images } from '../../data/images';
import styles from './CampusPages.module.css';

/**
 * CampusLife main hub page.
 */
const CampusLife = () => {
  const areas = [
    { title: "Residential House System", desc: "12 historical houses combining dining rooms, libraries, and advisor suites.", link: "/campus-life/housing" },
    { title: "Clubs & Organizations", desc: "Over 120 student organizations, debate societies, and community groups.", link: "/campus-life/clubs" },
    { title: "Vanguard Athletics", desc: "18 varsity team sports and state-of-the-art recreation wellness systems.", link: "/campus-life/athletics" }
  ];

  return (
    <main>
      <PageHero 
        category="Campus Life"
        title="Student Experience"
        description="A residential community fostering associations, wellness, and self-expression."
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <h2 className={styles.subheading}>More Than a Place of Study: A Place of Association</h2>
            <p className={styles.paragraph}>
              At Arcade, learning is continuous. It thrives in historic dining rooms, late-night dorm debates, and community service. Our housing, recreation, and arts centers ensure students develop lifelong associations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section section-bg-warm" aria-label="Campus Sections">
        <div className="container">
          <SectionHeading title="Ecosystems of student life" subtitle="Ecosystems" align="center" />
          
          <div className="grid grid-3">
            {areas.map((a, idx) => (
              <Card
                key={idx}
                title={a.title}
                description={a.desc}
                category="Student Life"
                to={a.link}
                linkLabel="Explore Sector"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities CTA */}
      <section className="section" aria-label="Campus Tour">
        <div className="container text-center">
          <h2 className={styles.subheading}>Explore Our Historic Campus Facilities</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            From our central library holding 2.5 million volumes to modern athletic complexes, view our campus map.
          </p>
          <div className={styles.ctaFlex}>
            <Button to="/campus-life/facilities" variant="primary">Campus Facilities</Button>
            <Button to="/contact/map" variant="outline">Interactive Map</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampusLife;
