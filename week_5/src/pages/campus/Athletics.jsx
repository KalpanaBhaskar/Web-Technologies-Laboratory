import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './CampusPages.module.css';

/**
 * Athletics page outlining sport teams and physical wellness resources.
 */
const Athletics = () => {
  const teams = [
    { name: "Varsity Rowing (Crew)", league: "Division 1", division: "Men & Women" },
    { name: "Varsity Basketball", league: "Division 1", division: "Men & Women" },
    { name: "Intramural Soccer Leagues", league: "Campus Intramurals", division: "Mixed Co-Ed" },
    { name: "Varsity Lawn Tennis", league: "Division 1", division: "Men & Women" }
  ];

  return (
    <main>
      <PageHero 
        category="Campus Life"
        title="Vanguard Athletics"
        description="Fostering sportsmanship, endurance, and physical wellness across our scholar community."
      />

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <SectionHeading title="Physical Wellness & Competition" subtitle="Sports Programs" align="center" />
            <p className={styles.paragraph}>
              Athletics are integral to the Arcade spirit. Our varsity crews train on the historic Vanguard River, while our basketball teams draw massive student support inside the campus gym. We support 18 Division 1 varsity sports alongside popular house intramural leagues.
            </p>
          </div>
        </div>
      </section>

      {/* Leagues Table */}
      <section className="section section-bg-warm" aria-label="Athletic Teams">
        <div className="container">
          <SectionHeading title="Varsity & Intramural Teams" subtitle="Athletics Directory" align="center" />
          
          <table className={styles.calendarTable} style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Program Team</th>
                <th>League / Level</th>
                <th>Division</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((t, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{t.name}</td>
                  <td>{t.league}</td>
                  <td>{t.division}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Athletics;
