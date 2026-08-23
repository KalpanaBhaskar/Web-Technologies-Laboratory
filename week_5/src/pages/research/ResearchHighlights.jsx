import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import { images } from '../../data/images';
import styles from './ResearchPages.module.css';

/**
 * ResearchHighlights page presenting scientific breakthrough journals.
 */
const ResearchHighlights = () => {
  const highlights = [
    {
      title: "Quantum Computation Breakthrough at Arcade CAC Lab",
      category: "Scientific Discovery",
      date: "August 15, 2026",
      image: images.news1,
      desc: "Researchers at the Center for Advanced Computing have developed an 80-qubit logic gate that operates at room temperature, paving the way for commercial quantum processors."
    },
    {
      title: "CRISPR-Derived Bio-compatible Neuro-prosthetics",
      category: "Biotechnology & Medicine",
      date: "June 20, 2026",
      image: images.news3,
      desc: "Our molecular biology group successfully designed cellular interfaces that integrate directly with neural circuits without trigger rejection responses."
    }
  ];

  return (
    <main>
      <PageHero 
        category="Research"
        title="Research Highlights"
        description="A showcase of our faculty and students' latest contributions to global scholarship."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Recent Scholarly Contributions" subtitle="Discoveries" align="center" />
          
          <div className={styles.highlightsGrid}>
            {highlights.map((h, idx) => (
              <div key={idx} className={styles.highlightArticle}>
                <img src={h.image} className={styles.highlightImg} alt={h.title} />
                <div className={styles.highlightContent}>
                  <span className={styles.highlightCategory}>{h.category} &bull; {h.date}</span>
                  <h3 className={styles.highlightTitle}>{h.title}</h3>
                  <p className={styles.paragraph} style={{ margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchHighlights;
