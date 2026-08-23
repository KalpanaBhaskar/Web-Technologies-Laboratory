import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import { importantDatesList } from '../../data/admissions';
import styles from './AdmissionsPages.module.css';

/**
 * ImportantDates page showing admissions deadlines.
 */
const ImportantDates = () => {
  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Important Dates & Deadlines"
        description="Never miss a deadline. Keep track of Early Action, Regular Decision, and financial aid dates."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Admissions Timeline: 2026 - 2027" subtitle="Important Dates" align="center" />
          
          <table className={styles.admissionsTable} aria-label="Admissions Deadlines Table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Admission Event / Milestone</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {importantDatesList.map((item, idx) => (
                <tr key={idx}>
                  <td className={styles.dateHighlight}>{item.date}</td>
                  <td>{item.event}</td>
                  <td>
                    <span className={styles.badge}>{item.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ImportantDates;
