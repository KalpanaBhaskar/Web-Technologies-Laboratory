import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import StatCard from '../../components/common/StatCard';
import Button from '../../components/common/Button';
import styles from './ResearchPages.module.css';

/**
 * ResearchOverview page introducing university research grants, areas, and structures.
 */
const ResearchOverview = () => {
  const stats = [
    { number: "120+", label: "Active Grants", description: "Projects funded by Federal, state, and foundation sponsors." },
    { number: "18", label: "Research Centers", description: "Interdisciplinary institutes housing specialized equipment." },
    { number: "$2.4B", label: "Total Endowment", description: "Capital yields funding annual research stipend awards." },
    { number: "150+", label: "Patents Filed", description: "Pioneered by faculty and doctoral students since 2021." }
  ];

  const disciplines = [
    { title: "Quantum & Computational Sciences", desc: "Modeling molecular logic, silicon architectures, and cryptographic structures." },
    { title: "Translational Immunology", desc: "Pioneering gene-editing therapies, molecular diagnostics, and cellular immunology." },
    { title: "Sustainable Policy & Climatology", desc: "Devising green energy infrastructure grids and carbon tax models." }
  ];

  return (
    <main>
      <PageHero 
        category="Research"
        title="Research & Innovation"
        description="Encouraging interdisciplinary inquiry to solve the world's most complex challenges."
      />

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <h2 className={styles.subheading}>Shaping Discoveries That Transcend the Lab</h2>
            <p className={styles.paragraph}>
              Research at Arcade is defined by collaborations. Our computer scientists work with clinicians, and our ethicists partner with robotics engineers. With a $2.4B endowment, we provide the tools, labs, and stipends required to turn bold theories into working solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="section section-bg-warm" aria-label="Research Metrics">
        <div className="container">
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

      {/* Focus Areas */}
      <section className="section" aria-label="Research Disciplines">
        <div className="container">
          <SectionHeading title="Primary Research Focus Areas" subtitle="Disciplines" align="center" />
          
          <div className="grid grid-3">
            {disciplines.map((d, idx) => (
              <div key={idx} className={styles.focusCard}>
                <h3 className={styles.focusTitle}>{d.title}</h3>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Research Links */}
      <section className="section section-bg-warm" aria-label="Sub-navigation">
        <div className="container text-center">
          <h2 className={styles.subheading}>Explore Research Ecosystems</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Read scientific breakthrough write-ups, find laboratory centers, or learn about our technology startup incubators.
          </p>
          <div className={styles.ctaFlex}>
            <Button to="/research/centers" variant="outline">Research Centers</Button>
            <Button to="/research/innovation" variant="outline">Innovation & Startups</Button>
            <Button to="/research/highlights" variant="outline">Research Highlights</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchOverview;
