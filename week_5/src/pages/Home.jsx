import React from 'react';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import AcademicsPreview from '../components/home/AcademicsPreview';
import ResearchPreview from '../components/home/ResearchPreview';
import CampusPreview from '../components/home/CampusPreview';
import NewsSection from '../components/home/NewsSection';

/**
 * Composite Homepage component assembling sections.
 */
const Home = () => {
  return (
    <main id="main-content">
      <Hero />
      <IntroSection />
      <AcademicsPreview />
      <ResearchPreview />
      <CampusPreview />
      <NewsSection />
    </main>
  );
};

export default Home;
