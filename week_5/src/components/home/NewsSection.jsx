import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import Button from '../common/Button';
import { newsArticles } from '../../data/news';
import styles from './NewsSection.module.css';

/**
 * Editorial News & Stories section for Home Page.
 * Concludes with a strong institutional call-to-action block.
 */
const NewsSection = () => {
  return (
    <section className="section section-bg-warm" aria-label="News and Call to Action">
      <div className="container">
        
        {/* Title */}
        <SectionHeading 
          title="Arcade Chronicles: Research & Community Updates" 
          subtitle="News & Stories" 
          align="center"
        />

        {/* News Grid */}
        <div className={styles.newsGrid}>
          {newsArticles.map((article, idx) => (
            <Card
              key={idx}
              title={article.title}
              description={article.description}
              image={article.image}
              category={article.category}
              to={article.link}
              linkLabel={`Read Article (${article.date})`}
            />
          ))}
        </div>

        {/* Major Final Call to Action Block */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Begin Your Journey at Arcade</h3>
            <p className={styles.ctaDesc}>
              Whether you are an aspiring undergraduate, a prospective doctoral candidate, or a researcher looking to join our faculty, your story starts here.
            </p>
            <div className={styles.ctaActions}>
              <Button to="/admissions/application-process" variant="secondary">
                Apply Now
              </Button>
              <Button to="/contact" variant="outline">
                Visit Campus
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
