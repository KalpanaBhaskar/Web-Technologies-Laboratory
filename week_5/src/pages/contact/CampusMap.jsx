import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './ContactPages.module.css';

const zones = [
  { icon: '🏛️', label: 'Main Quad' },
  { icon: '🔬', label: 'Sciences Complex' },
  { icon: '📚', label: 'Vanguard Library' },
  { icon: '🏃', label: 'Athletics Center' },
  { icon: '🎭', label: 'Student Union' },
  { icon: '🏠', label: 'Residential Row' },
];

const buildings = [
  {
    name: 'Pendleton Hall',
    desc: 'Central administration building and home to the Office of the President and Admissions.',
  },
  {
    name: 'Vanguard Library',
    desc: 'The main research library holding 2.5 million volumes, digital archives, and study spaces.',
  },
  {
    name: 'Quantum Research Facility',
    desc: 'State-of-the-art room-temperature quantum computing laboratory opened in 2022.',
  },
  {
    name: 'Arcade Athletics Center',
    desc: 'Multi-sport complex housing the Vanguard Arena, aquatic center, and fitness studios.',
  },
  {
    name: 'The Arcade Student Union',
    desc: 'Hub of student life featuring dining halls, club offices, and the campus bookstore.',
  },
  {
    name: 'Residential House Row',
    desc: '12 historical residential houses with private dining rooms, libraries, and common areas.',
  },
];

const CampusMap = () => (
  <main id="main-content">
    <PageHero
      category="Contact Us"
      title="Campus Map"
      description="Explore the Arcade University campus — our historic grounds span 210 acres in Vanguard Square, Massachusetts."
    />

    <section className="section" aria-label="Interactive Campus Map">
      <div className="container">
        <SectionHeading title="Campus Zones" subtitle="Map Overview" />

        <div className={styles.mapWrapper}>
          <div className={styles.mapCanvas} aria-label="Illustrated campus zone map" role="img">
            {zones.map((zone, idx) => (
              <div key={idx} className={styles.mapZone}>
                <span className={styles.mapZoneIcon} aria-hidden="true">{zone.icon}</span>
                <span className={styles.mapZoneLabel}>{zone.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 'var(--spacing-xl)' }}>
          Arcade University, 404 Academic Parkway, Vanguard Square, MA 02138
        </p>

        <SectionHeading title="Key Buildings & Facilities" subtitle="Landmarks" />
        <div className={styles.buildingsGrid}>
          {buildings.map((b, idx) => (
            <div key={idx} className={styles.buildingCard}>
              <h4>{b.name}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default CampusMap;
