import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './AboutPages.module.css';

/**
 * AboutOverview page describing the university background, core values, and stats.
 */
const AboutOverview = () => {
  const values = [
    { name: "Intellectual Rigor", desc: "We demand critical, evidence-based inquiry and refuse superficial analysis." },
    { name: "Inclusive Community", desc: "Association thrives when diverse viewpoints meet in respectful, structured dialogue." },
    { name: "Global Perspective", desc: "Our research and teaching seek local solutions with broad international relevance." },
    { name: "Uncompromising Integrity", desc: "We hold our scholastic and institutional behaviors to the highest moral codes." }
  ];

  return (
    <main>
      <PageHero 
        category="About Us"
        title="Arcade University Overview"
        description="A globally prominent institute dedicated to academic rigor, pioneering discovery, and community engagement."
      />
      
      <section className="section" aria-label="Introduction">
        <div className="container">
          <div className={styles.introFlex}>
            <div className={styles.textContent}>
              <h2 className={styles.subheading}>Shaping Scholars and Citizens of the World</h2>
              <p className={styles.paragraph}>
                Founded in 1892, Arcade University sits on a historic residential campus in Massachusetts. We support an environment where 8,500 students work alongside 900 faculty members to push the limits of human knowledge.
              </p>
              <p className={styles.paragraph}>
                At Arcade, we balance the classics with high-tech science. Whether examining archaeological fragments, writing AI algorithms, or drafting trade policies, our students develop analytical tools that stay with them for life.
              </p>
            </div>
            
            <div className={styles.sidebarBox}>
              <h3 className={styles.sidebarTitle}>Key Highlights</h3>
              <ul className={styles.sidebarList}>
                <li><strong>9:1</strong> Student-to-Faculty Ratio</li>
                <li><strong>80+</strong> Fields of Study</li>
                <li><strong>12</strong> Distinct Student Residential Houses</li>
                <li><strong>$2.4B</strong> Research Endowment Fund</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-bg-warm" aria-label="Core Values">
        <div className="container">
          <SectionHeading title="Our Core Values" subtitle="Philosophy" align="center" />
          
          <div className="grid grid-4">
            {values.map((v, idx) => (
              <div key={idx} className={styles.valueCard}>
                <h4 className={styles.valueTitle}>{v.name}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Links Call to Action */}
      <section className="section" aria-label="Next Steps">
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Discover Our Heritage & Leadership</h2>
          <p className={styles.ctaText}>Explore our vision, our administrative leadership, or the historical milestones that define us.</p>
          <div className={styles.ctaButtons}>
            <Button to="/about/vision" variant="outline">Vision & Mission</Button>
            <Button to="/about/leadership" variant="outline">Our Leadership</Button>
            <Button to="/about/history" variant="outline">History Timeline</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutOverview;
