import React from 'react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import styles from './PlacementsPages.module.css';

/**
 * SuccessStories page.
 */
const SuccessStories = () => {
  const stories = [
    {
      name: "Dr. Clara Sterling",
      classYear: "Class of 2021",
      degree: "B.S. in Bioengineering",
      initials: "CS",
      quote: "Arcade's Venture Lab provided me the seed funding and legal advice to patent my graduation project. Today, that project is BioGlow Diagnostics, employing 40 engineers."
    },
    {
      name: "Arthur Vance",
      classYear: "Class of 2023",
      degree: "B.B.A. in Finance",
      initials: "AV",
      quote: "The mock interview program organized by Career Services was key. I was prepared for every single case and technical question during the analyst interviews at Vanguard Capital."
    }
  ];

  return (
    <main>
      <PageHero 
        category="Placements"
        title="Student Success Stories"
        description="Fostering career preparation and highlighting outstanding graduates of Arcade University."
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Alumni Highlights" subtitle="Profiles" align="center" />
          
          <div className={styles.storyGrid}>
            {stories.map((story, idx) => (
              <div key={idx} className={styles.storyCard}>
                <div className={styles.alumniHeader}>
                  <div className={styles.alumniAvatar}>{story.initials}</div>
                  <div>
                    <h3 className={styles.alumniName}>{story.name}</h3>
                    <div className={styles.alumniMeta}>{story.classYear} &bull; {story.degree}</div>
                  </div>
                </div>
                <p className={styles.paragraph} style={{ fontStyle: 'italic', margin: 0 }}>
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuccessStories;
