import React from 'react';
import positivusLogo from '../assets/images/logos/positivus-white-logo.svg';
import linkedinIcon from '../assets/icons/Linkedin-icon.svg';
import facebookIcon from '../assets/icons/facebook-icon.svg';
import twitterIcon from '../assets/icons/twitter-icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1B22] text-white rounded-t-[2.5rem] p-6 md:p-10 font-sans mx-2 md:mx-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto gap-8 md:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <img
            src={positivusLogo}
            alt="Positivus Logo"
            className="h-8 md:h-9 w-auto"
          />
        </div>
        {/* Nav Links */}
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-base md:text-lg font-normal text-white mb-6 md:mb-0">
          <li>
            <a
              href="#about"
              className="underline underline-offset-4 hover:text-primary transition"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="underline underline-offset-4 hover:text-primary transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#use-cases"
              className="underline underline-offset-4 hover:text-primary transition"
            >
              Use Cases
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="underline underline-offset-4 hover:text-primary transition"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="underline underline-offset-4 hover:text-primary transition"
            >
              Blog
            </a>
          </li>
        </ul>
        {/* Social Icons */}
        <div className="flex gap-3 md:gap-4 justify-center md:justify-end">
          <a href="#" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>
      </div>
      {/* Lower Section: Contact & Newsletter */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto mt-8">
        {/* Contact Info */}
        <div className="flex-1 mb-6 md:mb-0">
          <span className="inline-block bg-primary text-black font-medium px-3 py-1 rounded mb-3 w-fit">
            Contact us:
          </span>
          <div className="text-white/90 text-base mt-2">
            <div className="mb-2">Email: info@positivus.com</div>
            <div className="mb-2">Phone: 555-567-8901</div>
            <div>
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </div>
          </div>
        </div>
        {/* Newsletter Form */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <div className="w-full md:w-auto bg-white/5 rounded-xl p-4 md:p-6 flex flex-col justify-center">
            <form className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-lg px-4 md:px-6 py-3 md:py-4 bg-transparent border border-white/60 text-white placeholder-white/60 focus:outline-none text-base md:text-lg"
              />
              <button
                type="submit"
                className="bg-primary text-black font-medium rounded-lg px-6 md:px-8 py-3 md:py-4 hover:bg-white transition text-base md:text-lg whitespace-nowrap"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white/30 my-8 max-w-7xl mx-auto" />
      {/* Bottom: Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-white/70 text-sm max-w-7xl mx-auto pb-2">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href="#" className="underline hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
