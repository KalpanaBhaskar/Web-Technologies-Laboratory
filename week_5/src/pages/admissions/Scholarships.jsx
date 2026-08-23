import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import styles from './AdmissionsPages.module.css';

/**
 * Scholarships page outlining financial aid and merit options.
 */
const Scholarships = () => {
  const aidTypes = [
    { title: "Need-Blind Admissions", desc: "For domestic applicants, our admissions team evaluates files without knowing their financial backgrounds. If you are admitted, we meet 100% of your demonstrated need." },
    { title: "Merit-Based Fellowships", desc: "Top-ranking applicants are automatically reviewed for our President's Scholar Grant ($15k to $25k per year), rewarding outstanding scholastic achievements." },
    { title: "International Student Grants", desc: "We reserve $20M in grant funds annually to support international students who demonstrate financial need. File the CSS Profile to apply." }
  ];

  return (
    <main>
      <PageHero 
        category="Admissions"
        title="Scholarships & Financial Aid"
        description="Arcade University is committed to making an elite education affordable for all admitted students."
      />

      {/* Need-blind statement */}
      <section className="section">
        <div className="container">
          <div className={styles.introBlock}>
            <SectionHeading title="Guaranteed Financial Coverage" subtitle="Aid Philosophy" align="center" />
            <p className={styles.paragraph}>
              We believe financial limitations should never prevent talented scholars from pursuing higher learning. Arcade offers need-based financial aid packages containing grants, work-study options, and zero interest student loans.
            </p>
          </div>
        </div>
      </section>

      {/* Aid Categories Grid */}
      <section className="section section-bg-warm" aria-label="Available Aid">
        <div className="container">
          <SectionHeading title="Financing Options" subtitle="Scholarship Schemes" align="center" />
          
          <div className={styles.reqGrid}>
            {aidTypes.map((aid, idx) => (
              <div key={idx} className={styles.reqCard}>
                <h4 className={styles.reqTitle}>{aid.title}</h4>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {aid.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Link */}
      <section className="section" aria-label="Aid Calculator">
        <div className="container text-center">
          <h2 className={styles.subheading}>Estimate Your Net Price</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Use our Net Price Calculator to estimate your family's contribution and discover potential financial aid packages.
          </p>
          <Button href="https://npc.arcade.edu" variant="outline">
            Calculate Net Price
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Scholarships;
