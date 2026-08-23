import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import { academicSchools } from '../../data/academics';
import { images } from '../../data/images';
import styles from './AcademicsPages.module.css';

/**
 * Schools page displaying academic divisions and departments alongside faculty spotlights.
 */
const Schools = () => {
  return (
    <main>
      <PageHero 
        category="Academics"
        title="Schools & Departments"
        description="The distinct divisions and departmental units forming the instructional core of Arcade."
      />

      {/* Schools List */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Academic Divisions" subtitle="Colleges" align="center" />
          
          <div className={styles.schoolsListContainer}>
            {academicSchools.map((school, idx) => (
              <div key={idx} className={styles.schoolBlock}>
                <div className={styles.schoolHeader}>
                  <img src={school.image} className={styles.schoolImg} alt={school.name} />
                  <div className={styles.schoolInfo}>
                    <h3 className={styles.schoolTitle}>{school.name}</h3>
                    <p className={styles.paragraph}>{school.description}</p>
                    <ul className={styles.departmentList}>
                      {school.departments.map((dept, dIdx) => (
                        <li key={dIdx} className={styles.departmentTag}>{dept}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="section section-bg-warm" aria-label="Faculty Spotlight">
        <div className="container">
          <SectionHeading title="Faculty Spotlight" subtitle="Scholars" align="center" />
          
          <div className={styles.facultySpotlight}>
            <img src={images.facultySpotlight} className={styles.facultyImg} alt="Dr. Evelyn Thorne speaking at a seminar" />
            <div className={styles.facultyInfo}>
              <h3 className={styles.facultyName}>Dr. Evelyn Thorne</h3>
              <div className={styles.facultyTitle}>Professor of Quantum Computing & Ethics</div>
              <p className={styles.paragraph}>
                Dr. Thorne is a leading authority on molecular computation and quantum architectures. Recipient of the 2025 Faraday Prize, her research explores the safety implications of room-temperature quantum processors. She teaches the introductory Core class "Algorithms and Society."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Schools;
