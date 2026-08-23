import React from 'react';
import SectionHeading from '../common/SectionHeading';
import StatCard from '../common/StatCard';
import Button from '../common/Button';
import { images } from '../../data/images';
import styles from './IntroSection.module.css';

/**
 * Editorial Intro Section for Home Page.
 * Displays our institutional philosophy along with quantitative stats cards.
 */
const IntroSection = () => {
  const stats = [
    { number: "95%", label: "Graduate Employment", description: "Secured employment or enrolled in advanced degrees within 6 months." },
    { number: "80+", label: "Academic Programs", description: "Undergraduate majors, double-majors, and specialized doctoral paths." },
    { number: "120+", label: "Research Projects", description: "Active grants funding original faculty-student collaborations." },
    { number: "40+", label: "Countries Represented", description: "Diverse viewpoints forming an inclusive global scholar body." }
  ];

  return (
    <section className="section section-bg-warm" aria-label="University Overview">
      <div className="container">
        
        {/* Core philosophy split layout */}
        <div className={styles.splitGrid}>
          <div className={styles.textContent}>
            <SectionHeading 
              title="A Tradition of Scholarly Rigor & Intellectual Courage" 
              subtitle="Welcome to Arcade" 
              align="left"
            />
            <p className={styles.leadText}>
              At Arcade University, we believe that education is an ongoing dialogue. Our curriculum empowers students to interrogate assumptions, push disciplinary boundaries, and seek truth.
            </p>
            <p className={styles.bodyText}>
              Founded in 1892, Arcade has stood as a beacon of liberal arts and scientific discovery. We combine the intimate mentorship of a top-tier college with the research infrastructure of a world-renowned university. Our campus is a testing ground for bold ideas that impact global society.
            </p>
            <div className={styles.ctaWrapper}>
              <Button to="/about" variant="outline">
                More About Us
              </Button>
            </div>
          </div>
          <div className={styles.imageContent}>
            <img src={images.introduction} className={styles.introImg} alt="Arcade University Historic Archway" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <StatCard 
              key={idx} 
              number={stat.number} 
              label={stat.label} 
              description={stat.description} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
