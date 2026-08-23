import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './AboutPages.module.css';

/**
 * History page depicting chronological milestones of Arcade University.
 */
const History = () => {
  const milestones = [
    { year: "1892", title: "The Foundation", desc: "Arcade College is founded by a charter of scholars, starting with 4 professors and 18 students studying classical languages.", align: "left" },
    { year: "1924", title: "Scientific Expansion", desc: "The construction of the Pendelton Laboratory marks our expansion into physics, chemistry, and genetics research.", align: "right" },
    { year: "1968", title: "Co-educational Integration", desc: "The college formally becomes a co-educational university, welcoming its first fully integrated co-ed cohort.", align: "left" },
    { year: "2001", title: "Advanced Computing Initiative", desc: "Inauguration of the School of Computer Science, backed by a significant endowment for laboratory infrastructure.", align: "right" },
    { year: "2022", title: "The Quantum Frontier", desc: "Opening of the Room-Temperature Quantum Research Facility, leading to globally notable discoveries.", align: "left" }
  ];

  return (
    <main>
      <PageHero 
        category="About Us"
        title="Our History & Heritage"
        description="Over a century of pioneering discoveries and empowering global citizens."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Chronology of Discovery" subtitle="Timeline" align="center" />
          
          <div className={styles.timeline}>
            {milestones.map((item, idx) => (
              <div 
                key={idx} 
                className={`${styles.timelineItem} ${item.align === 'left' ? styles.leftTimeline : styles.rightTimeline}`}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;
