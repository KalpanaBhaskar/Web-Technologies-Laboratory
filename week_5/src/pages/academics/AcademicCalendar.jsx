import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import { academicCalendarEvents } from '../../data/academics';
import styles from './AcademicsPages.module.css';

/**
 * AcademicCalendar page displaying scheduling matrices.
 */
const AcademicCalendar = () => {
  return (
    <main>
      <PageHero 
        category="Academics"
        title="Academic Calendar"
        description="Important term dates, enrollment deadlines, exams, and university holidays."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Term Schedule: 2026 - 2027" subtitle="Timelines" align="center" />
          
          <table className={styles.calendarTable} aria-label="Academic Calendar Table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Academic Event</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {academicCalendarEvents.map((item, idx) => (
                <tr key={idx}>
                  <td className={styles.eventDate}>{item.date}</td>
                  <td>{item.event}</td>
                  <td>
                    <span className={styles.eventType}>{item.type}</span>
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

export default AcademicCalendar;
