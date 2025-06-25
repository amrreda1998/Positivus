import React from 'react';
import ctaIllustration from '../assets/images/services-section/cta-section-illustration.svg';

const CtaSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-items-end w-full max-w-6xl bg-light rounded-[2.5rem] gap-6 md:gap-0 px-4 md:px-14 py-8 md:py-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl mb-8 md:mb-0">
          <h2 className="text-h2-m md:text-h2 font-bold text-black mb-4 md:mb-6">
            Let's make things happen
          </h2>
          <p className="text-p-m md:text-p text-black mb-6 md:mb-8 max-w-md">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white text-base md:text-lg font-medium rounded-xl px-6 md:px-8 py-3 md:py-4 hover:bg-primary hover:text-black transition">
            Get your free proposal
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-xs md:max-w-md">
          <img
            src={ctaIllustration}
            alt="CTA Illustration"
            className="w-full max-w-xs md:max-w-md h-48 md:h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
