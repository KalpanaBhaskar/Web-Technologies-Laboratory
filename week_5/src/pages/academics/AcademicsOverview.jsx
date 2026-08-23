import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { academicSchools } from '../../data/academics';
import styles from './AcademicsPages.module.css';

/**
 * AcademicsOverview page.
 * Acts as the hub for curricular programs, calendar dates, and school listings.
 */
const AcademicsOverview = () => {
  return (
    <main>
      <PageHero 
        category="Academics"
        title="Academic Excellence"
        description="Fostering intellectual freedom, specialized study paths, and rigorous inquiry."
      />

      {/* Philosophy Statement */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <h2 className={styles.subheading}>Interdisciplinary Exploration & Individual Mentorship</h2>
            <p className={styles.paragraph}>
              At Arcade, we believe that real mastery comes when you connect ideas. Students do not just memorize facts; they engage in active laboratory testing, archival exploration, and analytical debate. We offer personalized attention, ensuring you work closely with professors who are leaders in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Showcase */}
      <section className="section section-bg-warm" aria-label="Schools & Departments">
        <div className="container">
          <SectionHeading title="Explore Our Schools" subtitle="Divisions" align="center" />
          
          <div className="grid grid-3">
            {academicSchools.slice(0, 3).map((school, idx) => (
              <Card
                key={idx}
                title={school.name}
                description={school.description}
                image={school.image}
                category="Academic Division"
                to="/academics/schools"
                linkLabel="View Departments"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Pathways */}
      <section className="section" aria-label="Pathways">
        <div className="container">
          <div className={styles.pathwayGrid}>
            
            <div className={styles.pathwayBox}>
              <h3 className={styles.pathwayTitle}>Undergraduate Studies</h3>
              <p className={styles.paragraph}>
                Fostered on our core curriculum. Choose from 40+ majors to create a customized degree combining tech and humanities.
              </p>
              <Button to="/academics/undergraduate" variant="outline">Explore Bachelors</Button>
            </div>

            <div className={styles.pathwayBox}>
              <h3 className={styles.pathwayTitle}>Postgraduate Studies</h3>
              <p className={styles.paragraph}>
                Advanced professional degrees and doctoral training modules supported by research endowments.
              </p>
              <Button to="/academics/postgraduate" variant="outline">Explore Masters & PhD</Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AcademicsOverview;
