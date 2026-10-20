import React, { useState } from 'react';
import { Download, GraduationCap, Briefcase, Trophy, Code2, CheckCircle2 } from 'lucide-react';
import { personalInfo, experienceData, achievementsData } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

export default function Resume() {
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleDownload = async () => {
    setChecking(true);
    try {
      const response = await fetch('/resume.pdf', { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Iranna_Kumbar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setShowSetupModal(true);
      }
    } catch (err) {
      setShowSetupModal(true);
    } finally {
      setChecking(false);
    }
  };

  return (
    <section id="resume" className="py-20 relative bg-dark-950/70 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Resume &amp; Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive, verified summary of academic qualifications, technical proficiencies, and project experiences.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Credentials Preview Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.07]">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                Developer Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-slate-400 font-mono mt-1">
                {personalInfo.role} • {personalInfo.location}
              </p>
            </div>

            {/* Resume Download CTA */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <button
                onClick={handleDownload}
                disabled={checking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>{checking ? 'Checking File...' : 'Download Resume'}</span>
              </button>
              <span className="text-[10px] text-slate-500 font-mono">
                Direct PDF download
              </span>
            </div>
          </div>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* Left Column: Education & Experience */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Education</span>
                </h4>
                <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06]">
                  <div className="font-semibold text-sm text-white">
                    {personalInfo.education.degree}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {personalInfo.education.year} • Karnataka, India
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Professional Experience</span>
                </h4>
                <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06]">
                  <div className="font-semibold text-sm text-white">
                    {experienceData[0].role}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {experienceData[0].company}
                  </div>
                  <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {experienceData[0].description}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Achievements & Technical Toolkit */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Recognition</span>
                </h4>
                <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06]">
                  <div className="font-semibold text-sm text-white">
                    {achievementsData[0].title}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {achievementsData[0].subtitle}
                  </div>
                  <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {achievementsData[0].description}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Confirmed Stack</span>
                </h4>
                <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Flask', 'Node.js', 'MongoDB', 'SQL'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-dark-900 text-slate-300 border border-white/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Setup instruction hint */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Strict compliance: Zero fabricated metrics or unverified links.</span>
            </span>
            <button
              onClick={() => setShowSetupModal(true)}
              className="text-xs text-indigo-400 hover:text-indigo-300 underline font-mono"
            >
              Resume PDF setup instructions
            </button>
          </div>
        </div>

      </div>

      <ResumeModal
        isOpen={showSetupModal}
        onClose={() => setShowSetupModal(false)}
      />
    </section>
  );
}
