import React from 'react';
import seoIcon from '../assets/images/services-section/SEO-Illustration.svg';
import ppcIcon from '../assets/images/services-section/Pay-per-click-Illustration.svg';
import socialIcon from '../assets/images/services-section/social-media-Illustration.svg';
import emailIcon from '../assets/images/services-section/email-marketing-illustration.svg';
import contentIcon from '../assets/images/services-section/content-creation-Illustration.svg';
import analyticsIcon from '../assets/images/services-section/Analytics-and-tracking-Illustration.svg';
import learnMoreBlack from '../assets/icons/learn-more-black-and-wight-Icon.svg';
import learnMoreGreen from '../assets/icons/learn-more-green-and-black-Icon.svg';

const services = [
  {
    title: (
      <>
        <span className="bg-primary text-black px-1 rounded">
          Search engine
        </span>
        <br />
        <span className="bg-primary text-black px-1 rounded">optimization</span>
      </>
    ),
    bg: 'bg-light',
    icon: seoIcon,
    learnIcon: learnMoreGreen,
    text: 'text-black',
  },
  {
    title: (
      <>
        <>
          <span className="bg-white text-black px-1 rounded">
            Pay-per-click
          </span>
          <br />
          <span className="bg-white text-black px-1 rounded">advertising</span>
        </>
      </>
    ),
    bg: 'bg-primary',
    icon: ppcIcon,
    learnIcon: learnMoreGreen,
    text: 'text-black',
  },
  {
    title: (
      <>
        <span className="bg-white text-black px-1 rounded">Social Media</span>
        <br />
        <span className="bg-white text-black px-1 rounded">Marketing</span>
      </>
    ),
    bg: 'bg-black',
    icon: socialIcon,
    learnIcon: learnMoreBlack,
    text: 'text-white',
  },
  {
    title: (
      <>
        <span className="bg-primary text-black px-1 rounded">Email</span>
        <br />
        <span className="bg-primary text-black px-1 rounded">Marketing</span>
      </>
    ),
    bg: 'bg-light',
    icon: emailIcon,
    learnIcon: learnMoreGreen,
    text: 'text-black',
  },
  {
    title: (
      <>
        <span className="bg-white text-black px-1 rounded">Content</span>
        <br />
        <span className="bg-white text-black px-1 rounded">Creation</span>
      </>
    ),
    bg: 'bg-primary',
    icon: contentIcon,
    learnIcon: learnMoreGreen,
    text: 'text-black',
  },
  {
    title: (
      <>
        <span className="bg-primary text-black px-1 rounded">
          Analytics and
        </span>
        <br />
        <span className="bg-primary text-black px-1 rounded">Tracking</span>
      </>
    ),
    bg: 'bg-black',
    icon: analyticsIcon,
    learnIcon: learnMoreBlack,
    text: 'text-white',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full font-sans py-10 md:py-20 max-w-7xl mx-auto">
      {/* Section Title and Description - two vertical strings */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-8 md:mb-14">
        <h2 className="text-h2-m md:text-h2 font-bold text-black whitespace-nowrap mb-2 md:mb-0">
          <span className="bg-primary px-2 py-1 rounded">Services</span>
        </h2>
        <p className="text-p-m md:text-p text-black md:ml-0 md:mt-2 max-w-2xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Services Grid - 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between rounded-[2rem] ${service.bg} ${service.text} p-4 md:p-8 min-h-[220px] md:min-h-[300px] shadow-sm border border-black/10 hover:scale-[1.02] transition-transform duration-200`}
            style={{
              boxShadow: '0 5px 0 0 #191A23',
            }}
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="text-base md:text-xl font-bold leading-snug">
                {service.title}
              </div>
            </div>
            <div className="flex justify-end mr-2 md:mr-5">
              <img
                src={service.icon}
                alt="Service Illustration"
                className="h-20 md:h-32 w-auto"
              />
            </div>
            <button className="flex items-center gap-2 mt-2 bg-transparent border-none cursor-pointer">
              <img
                src={service.learnIcon}
                alt="Learn more"
                className="h-6 md:h-7 w-6 md:w-7"
              />
              <span className="text-base md:text-lg font-medium">
                Learn more
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
