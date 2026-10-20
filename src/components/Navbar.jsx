import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/[0.08] shadow-md shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Iranna Kumbar - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center transition-colors group-hover:border-indigo-500/50">
            <span className="font-mono font-bold text-xs text-indigo-400 group-hover:text-indigo-300">
              IK
            </span>
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-900/90 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-dark-800 text-white border border-white/10 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm border border-indigo-400/20 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-dark-950/98 backdrop-blur-2xl z-40 border-t border-white/[0.08] px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-dark-850 text-white border border-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-lg font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              Let's Connect
            </a>
            <div className="text-center text-xs text-slate-500 font-mono">
              {personalInfo.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
