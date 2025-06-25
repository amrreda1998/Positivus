import React from 'react';
import HeroSection from '../Sections/HeroSection';
import ServicesSection from '../Sections/ServicesSection';
import CtaSection from '../Sections/CtaSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <main className="w-full">
      <div className="px-4 md:px-20 pt-8">
        <HeroSection />
      </div>
      <div className="px-4 md:px-20 my-8">
        <ServicesSection />
      </div>
      <div className="px-4 md:px-20 my-8">
        <CtaSection />
      </div>
      <div className="px-0 md:px-10 mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
