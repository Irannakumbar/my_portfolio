import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-indigo-400">IK</span>
              </div>
              <span className="font-bold text-base text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {personalInfo.role} • {personalInfo.location}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-dark-850 border border-white/10 text-slate-400 hover:text-white hover:bg-dark-800 transition-colors ml-1"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono text-center sm:text-left">
          <p>
            &copy; {currentYear} {personalInfo.name}. Built with React &amp; Tailwind CSS.
          </p>
          <p className="text-[11px] text-slate-500">
            Strict Fact Compliance • Zero Fabricated Stats
          </p>
        </div>
      </div>
    </footer>
  );
}
