import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './ResearchPages.module.css';

/**
 * ResearchCenters page displaying laboratory directories.
 */
const ResearchCenters = () => {
  const centers = [
    {
      name: "Center for Advanced Computing (CAC)",
      director: "Dr. Evelyn Thorne",
      location: "Pendelton Hall, Wing B",
      focus: "Developing room-temperature quantum logic gates, high-capacity cryptography, and machine learning models for climate simulation."
    },
    {
      name: "Institute for Molecular Genetics (IMG)",
      director: "Dr. Clara Sterling",
      location: "Genetics Research Center",
      focus: "Pioneering therapeutic gene-editing protocols, CRISPR modifications, and research on biocompatible cellular structures."
    },
    {
      name: "Arcade Policy & Macroeconomic Forum",
      director: "Dr. Katherine Vance",
      location: "Founders Hall, Suite 10",
      focus: "Formulating fiscal guidelines, economic models for inflation control, and sustainable urban infrastructure plans."
    },
    {
      name: "Institute for Astrophysics & Dark Matter Research",
      director: "Dr. Marcus Thorne",
      location: "Vanguard Observatory",
      focus: "Conducting deep-space observations, dark matter detector calibrations, and tracking cosmic radiation anomalies."
    }
  ];

  return (
    <main>
      <PageHero 
        category="Research"
        title="Research Centers & Institutes"
        description="The physical spaces and collaborative teams leading academic inquiry at Arcade."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Laboratory Directories" subtitle="Facilities" align="center" />
          
          <div className={styles.centersGrid}>
            {centers.map((center, idx) => (
              <div key={idx} className={styles.centerCard}>
                <h3 className={styles.centerTitle}>{center.name}</h3>
                <div className={styles.centerMeta}>
                  <strong>Director:</strong> {center.director} &nbsp;|&nbsp; 
                  <strong> Location:</strong> {center.location}
                </div>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {center.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchCenters;
