import React from 'react';
import heroIllustration from '../assets/images/hero-section/hero-Illustration.svg';
import amazonLogo from '../assets/images/logos/amazon-logo.svg';
import dribbbleLogo from '../assets/images/logos/5L-logo.svg';
import hubspotLogo from '../assets/images/logos/hubspot-logo.svg';
import notionLogo from '../assets/images/logos/notion-logo.svg';
import netflixLogo from '../assets/images/logos/netflix-logo.svg';
import zoomLogo from '../assets/images/logos/zoom-logo.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white font-sans pt-8 md:pt-20 pb-8 md:pb-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl mb-8 md:mb-0">
          <h1 className="text-h1-m md:text-h1 font-bold text-black mb-4 md:mb-6 leading-tight">
            Navigating the
            <br className="hidden md:block" />
            digital landscape
            <br className="hidden md:block" />
            for success
          </h1>
          <p className="text-p-m md:text-p text-black mb-6 md:mb-8 max-w-md">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white text-base md:text-lg font-medium rounded-xl px-6 md:px-8 py-3 md:py-4 hover:bg-primary transition">
            Book a consultation
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-xs md:max-w-xl">
          <img
            src={heroIllustration}
            alt="Megaphone Illustration"
            className="w-full max-w-xs md:max-w-lg h-auto"
          />
        </div>
      </div>
      {/* Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mt-10 md:mt-20 max-w-5xl mx-auto">
        <img src={amazonLogo} alt="Amazon" className="h-7 md:h-10 w-auto" />
        <img src={dribbbleLogo} alt="Dribbble" className="h-7 md:h-10 w-auto" />
        <img src={hubspotLogo} alt="HubSpot" className="h-7 md:h-10 w-auto" />
        <img src={notionLogo} alt="Notion" className="h-7 md:h-10 w-auto" />
        <img src={netflixLogo} alt="Netflix" className="h-7 md:h-10 w-auto" />
        <img src={zoomLogo} alt="Zoom" className="h-7 md:h-10 w-auto" />
      </div>
    </section>     
  );
};

export default HeroSection;
