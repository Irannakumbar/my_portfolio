import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, GraduationCap, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Precision Engineering Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Subtle, restrained top-center vignette */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-dark-900 border border-white/10 text-xs font-medium text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-slate-300">
                MCA 2nd Year • Open to Opportunities
              </span>
            </div>

            {/* Intro Greeting */}
            <p className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3">
              Hi, I'm <span className="text-slate-100 font-semibold">{personalInfo.name}</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
              Full Stack Developer <br className="hidden sm:inline" />
              <span className="text-slate-400 font-medium">&amp; AI Engineer</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 shadow-md shadow-indigo-950/40 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Explore My Projects
              </button>
              
              <button
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white border border-white/10 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Contact Me
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08] w-full">
              <span className="text-xs font-mono text-slate-500 mr-2">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                {personalInfo.email}
              </span>
            </div>
          </div>

          {/* Right Column: Verified Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl bg-dark-900 border border-white/[0.08] shadow-2xl p-5 sm:p-6 relative overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.07] mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700/80"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700/80"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700/80"></div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-indigo-400" />
                  <span>iranna_kumbar.dev</span>
                </div>
              </div>

              {/* Real Portrait Photo */}
              <div className="relative mb-5 flex justify-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-dark-850 border border-white/15 shadow-xl">
                  {!imgError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-dark-850">
                      <span className="font-mono font-bold text-4xl text-indigo-400">
                        {personalInfo.initials}
                      </span>
                    </div>
                  )}
                  {/* Subtle bottom vignette inside image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Developer Details Centerpiece */}
              <div className="text-center pb-5 border-b border-white/[0.07]">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {personalInfo.role}
                </p>
              </div>

              {/* Key Confirmed Attributes */}
              <div className="pt-4 space-y-2.5">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Education</div>
                    <div className="font-medium text-slate-200">{personalInfo.education.degree}, {personalInfo.education.year}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Location</div>
                    <div className="font-medium text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Focus</div>
                    <div className="font-medium text-slate-200">Full Stack Systems &amp; AI Middleware</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
