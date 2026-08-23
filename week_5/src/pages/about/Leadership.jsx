import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './AboutPages.module.css';

/**
 * Leadership page displaying executive faculty officers.
 */
const Leadership = () => {
  const leaders = [
    { name: "Dr. Arthur Pendelton", role: "President of the University", initials: "AP", bio: "Former Dean of Sciences at Princeton, Dr. Pendelton has spearheaded Arcade's research expansion since 2018." },
    { name: "Dr. Katherine Vance", role: "Provost & Vice President", initials: "KV", bio: "Leading academic affairs and faculty appointments, Dr. Vance is a scholar in Macroeconomics." },
    { name: "Dr. Marcus Thorne", role: "Dean of College Admissions", initials: "MT", bio: "Oversees holistic admissions and financial aid distributions, ensuring diverse cohort intakes." }
  ];

  return (
    <main>
      <PageHero 
        category="About Us"
        title="University Leadership"
        description="The executive officers and academic deans who shape the strategic direction of Arcade."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Office of the President & Deans" subtitle="Governance" align="center" />
          
          <div className={styles.leadersGrid}>
            {leaders.map((leader, idx) => (
              <div key={idx} className={styles.leaderCard}>
                <div className={styles.leaderAvatar}>{leader.initials}</div>
                <h3 className={styles.leaderName}>{leader.name}</h3>
                <div className={styles.leaderRole}>{leader.role}</div>
                <p className={styles.leaderBio}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees info */}
      <section className="section section-bg-warm" aria-label="Governance Statement">
        <div className="container text-center">
          <h2 className={styles.subheading}>The Board of Trustees</h2>
          <p className={styles.paragraph} style={{ maxWidth: '750px', margin: '0 auto' }}>
            Arcade University is governed by a Board of Trustees comprising 24 alumni, academic advisors, and industry advisors. The Board is responsible for managing the university's fiscal investments, long-term capital campaigns, and properties.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
