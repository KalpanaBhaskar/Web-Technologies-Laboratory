import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import StatCard from '../../components/common/StatCard';
import Button from '../../components/common/Button';
import styles from './PlacementsPages.module.css';

/**
 * PlacementsOverview page describing Career Services.
 */
const PlacementsOverview = () => {
  const stats = [
    { number: "95%", label: "Employment Rate", description: "Graduates employed or enrolled in further study within 6 months." },
    { number: "$115k", label: "Average Starting Salary", description: "Median starting compensation reported by Class of 2025." },
    { number: "450+", label: "Hiring Partners", description: "Companies participating in recruiting events annually." }
  ];

  const services = [
    { title: "One-on-One Counselling", desc: "Work with dedicated sector experts to align your course pathway with career goals." },
    { title: "Mock Interview Series", desc: "Simulate rigorous technical, banking, case, and policy interviews with industry advisors." },
    { title: "Alumni Mentorship", desc: "Access the Arcade Global Network, matching students with alumni working in top positions." }
  ];

  return (
    <main>
      <PageHero 
        category="Placements"
        title="Career Services & Placements"
        description="Fostering career preparation, interview mastery, and access to hiring partners."
      />

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <h2 className={styles.subheading}>Empowering Graduating Scholars</h2>
            <p className={styles.paragraph}>
              At Arcade, career development begins in your first year. Through the Office of Career Services, we help you translate academic rigor into meaningful outcomes. We organize career fairs, host recruitment panels, and maintain a broad alumni network.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="section section-bg-warm" aria-label="Placement Stats Preview">
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

      {/* Career Services */}
      <section className="section" aria-label="Career Resources">
        <div className="container">
          <SectionHeading title="Comprehensive Career Support" subtitle="Our Services" align="center" />
          
          <div className="grid grid-3">
            {services.map((s, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem', margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Links */}
      <section className="section section-bg-warm" aria-label="Placement Subpages">
        <div className="container text-center">
          <h2 className={styles.subheading}>Explore Graduate Outcomes</h2>
          <p className={styles.paragraph} style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Review detailed employment statistics, find recruitment calendars, or read alumni success stories.
          </p>
          <div className={styles.ctaFlex}>
            <Button to="/placements/statistics" variant="outline">Statistics Report</Button>
            <Button to="/placements/recruiters" variant="outline">Hiring Partners</Button>
            <Button to="/placements/stories" variant="outline">Alumni Stories</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlacementsOverview;
