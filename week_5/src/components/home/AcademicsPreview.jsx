import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';
import { academicSchools } from '../../data/academics';
import styles from './AcademicsPreview.module.css';

/**
 * Academics Preview section on Home Page.
 * Displays card elements representing academic schools of the university.
 */
const AcademicsPreview = () => {
  return (
    <section className="section" aria-label="Academics Preview">
      <div className="container">
        
        {/* Header Title */}
        <SectionHeading 
          title="Intellectual Environments Built for Exploration" 
          subtitle="Academics" 
          align="center"
        />

        {/* Academic Schools Grid */}
        <div className={styles.schoolsGrid}>
          {academicSchools.slice(0, 3).map((school, idx) => (
            <Card
              key={idx}
              title={school.name}
              description={school.description}
              image={school.image}
              category="Academic School"
              to="/academics/schools"
              linkLabel="Explore Departments"
            />
          ))}
        </div>

        {/* View Programs Call to Action */}
        <div className={styles.actionRow}>
          <Button to="/academics" variant="outline">
            View All Programs
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AcademicsPreview;
