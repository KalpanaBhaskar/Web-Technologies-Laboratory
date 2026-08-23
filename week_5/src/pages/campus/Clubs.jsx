import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './CampusPages.module.css';

/**
 * Clubs page displaying active student organizations.
 */
const Clubs = () => {
  const clubs = [
    { name: "Arcade Debate Union", type: "Academic & Speech", desc: "One of the oldest societies on campus, competing globally in parliamentary format debates." },
    { name: "Robotics & Maker Association", type: "Technology & Engineering", desc: "Builds autonomous rovers and drones, providing members access to 3D printers and CNC machines." },
    { name: "University Philharmonia", type: "Arts & Culture", desc: "A full student-run symphony orchestra staging four seasonal concerts inside Vanguard Auditorium." },
    { name: "Arcade Outing Club", type: "Recreation & Outdoors", desc: "Organizes weekly hiking, climbing, and canoeing expeditions across New England trails." }
  ];

  return (
    <main>
      <PageHero 
        category="Campus Life"
        title="Clubs & Organizations"
        description="Fostering student association and self-expression through over 120 student-run groups."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Registered Student Groups" subtitle="Associations" align="center" />
          
          <div className="grid grid-2">
            {clubs.map((club, idx) => (
              <div key={idx} className={styles.clubCard}>
                <span className={styles.clubType}>{club.type}</span>
                <h3 className={styles.clubTitle}>{club.name}</h3>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clubs;
