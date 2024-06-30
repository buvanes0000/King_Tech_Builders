import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsSticky(window.scrollY > heroBottom + 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('div.section');
    const options = {
      root: null,
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`nav ${isSticky ? 'scrolled' : ''}`}>
      <div className='nav-logo'>
  <img className='logo' src={logo} alt="logo" />
  <div className='logo-text-container'>
    <p className='logo-p1'>KING TECH</p>
    <p className='logo-p2'>BUILDERS</p>
  </div>
      </div>
      <div className='nav-menu-icon' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={closeMenu}><li className={activeSection === 'hero' ? 'active' : ''} onClick={() => setActiveSection('hero')}>Home</li></a>
        <a href="#service" onClick={closeMenu}><li className={activeSection === 'service' ? 'active' : ''} onClick={() => setActiveSection('service')}>Service</li></a>
        <a href="#projects" onClick={closeMenu}><li className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</li></a>
        <a href="#about" onClick={closeMenu}><li className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</li></a>
        <a href="#contact" onClick={closeMenu}><li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</li></a>
      </ul>
    </div>
  );
};

export default Navbar;
