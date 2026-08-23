import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { images } from '../../data/images';
import styles from './ResearchPreview.module.css';

/**
 * Research Preview panel for Home Page.
 * Utilizes a dark-navy background card block to contrast with warm sections.
 */
const ResearchPreview = () => {
  const highlights = [
    { title: "Quantum Computing Systems", desc: "Developing room-temperature hardware models." },
    { title: "Neuro-Prosthetics & Biotech", desc: "Designing bio-compatible interfaces for sensory restoration." },
    { title: "Global Macroeconomic Policy", desc: "Interdisciplinary modeling for post-inflation stabilization." },
    { title: "Climatology & Grid Systems", desc: "Fostering sustainable urban electrification grids." }
  ];

  return (
    <section className="section section-bg-dark" aria-label="Research Preview">
      <div className="container">
        
        {/* Split Grid */}
        <div className={styles.splitGrid}>
          
          {/* Left: Image Box */}
          <div className={styles.imageBlock}>
            <img src={images.researchFeatured} className={styles.featuredImg} alt="Researcher adjusting spectrometer in Arcade laboratory" />
            <div className={styles.imageCaption}>
              <span>Center for Advanced Diagnostics &bull; Lab 12</span>
            </div>
          </div>

          {/* Right: Informational Box */}
          <div className={styles.textBlock}>
            <SectionHeading 
              title="Tackling Global Challenges Through Inquiry" 
              subtitle="Research & Innovation" 
              align="left"
              light={true}
            />
            <p className={styles.leadText}>
              At Arcade, research is not confined to silos. Our centers bring together computer scientists, ethicists, clinicians, and economists to solve complex, systemic issues.
            </p>
            
            <ul className={styles.highlightsList}>
              {highlights.map((item, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  <strong className={styles.highlightTitle}>{item.title}</strong>
                  <span className={styles.highlightDesc}>{item.desc}</span>
                </li>
              ))}
            </ul>

            <div className={styles.ctaWrapper}>
              <Button to="/research" variant="outline" className={styles.outlineGold}>
                Explore Research Overview
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchPreview;
