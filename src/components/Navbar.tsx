import React, { useState } from 'react';
import positivusLogo from '../assets/images/logos/positivus-black-logo.svg';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:px-20 bg-white font-sans relative z-30">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <img src={positivusLogo} alt="Positivus Logo" className="h-8 w-auto" />
      </div>
      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden ml-auto p-2 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-black mb-1 rounded transition-all" />
        <span className="block w-6 h-0.5 bg-black mb-1 rounded transition-all" />
        <span className="block w-6 h-0.5 bg-black rounded transition-all" />
      </button>
      {/* Nav Links & Button */}
      <div
        className={`fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0 transition-all duration-300 md:translate-x-0 z-20 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:relative`}
        style={{
          pointerEvents: menuOpen || window.innerWidth >= 768 ? 'auto' : 'none',
        }}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-base md:text-lg font-normal text-black mt-24 md:mt-0">
          <li>
            <a href="#about" className="hover:text-primary transition">
              About us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary transition">
              Services
            </a>
          </li>
          <li>
            <a href="#use-cases" className="hover:text-primary transition">
              Use Cases
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-primary transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-primary transition">
              Blog
            </a>
          </li>
        </ul>
        <button className="border border-black rounded-xl ml-10 px-7 py-3 text-base font-medium text-black hover:bg-primary hover:border-primary transition mt-8 md:mt-0 hidden md:block">
          Request a quote
        </button>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
