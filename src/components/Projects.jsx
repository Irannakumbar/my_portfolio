import React, { useState } from 'react';
import { ExternalLink, Info, Shield, Database, GraduationCap, Terminal, Lock, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Clean, authentic engineering schematics for each project
  const renderProjectVisual = (project) => {
    if (project.id === 'virtual-autopsy-lms') {
      return (
        <div className="w-full h-44 rounded-xl bg-dark-950 border border-white/[0.07] p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-colors">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            </div>
            <div className="text-[10px] font-mono text-slate-500 truncate max-w-[190px]">
              virtual-autopsy-training.vercel.app
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>LIVE</span>
            </div>
          </div>

          {/* Minimalist Medical LMS UI Representation */}
          <div className="my-auto py-2 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center text-slate-200 shadow-sm">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-slate-200">Forensic Simulation Modules</div>
              <div className="text-[11px] font-mono text-slate-500">Interactive Web Curriculum</div>
            </div>
          </div>

          {/* Bottom status line */}
          <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>PLATFORM</span>
            <span>ONLINE LMS</span>
          </div>
        </div>
      );
    }

    if (project.id === 'student-enrollment-system') {
      return (
        <div className="w-full h-44 rounded-xl bg-dark-950 border border-white/[0.07] p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-colors font-mono">
          {/* Terminal / Query Bar */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06] text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Terminal className="w-3 h-3 text-sky-400" />
              <span>flask_app.py</span>
            </div>
            <span className="text-[10px] text-slate-500">SQLAlchemy ORM</span>
          </div>

          {/* Code / DB Query representation */}
          <div className="my-auto py-1 text-[11px] text-slate-400 space-y-1">
            <div className="text-slate-300">
              <span className="text-indigo-400">SELECT</span> * <span className="text-indigo-400">FROM</span> students
            </div>
            <div className="text-[10px] text-slate-500 pl-2">
              ↳ JOIN enrollments ON student_id = id
            </div>
            <div className="text-[10px] text-emerald-400/90 pl-2">
              ✓ 200 OK — Schema synchronized
            </div>
          </div>

          {/* Bottom status line */}
          <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-slate-500">
            <span>BACKEND</span>
            <span>FLASK + MYSQL</span>
          </div>
        </div>
      );
    }

    // SentinelPI
    return (
      <div className="w-full h-44 rounded-xl bg-dark-950 border border-white/[0.07] p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/20 transition-colors font-mono">
        {/* Middleware Flow Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06] text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Shield className="w-3 h-3" />
            <span>sentinel_pi.middleware</span>
          </div>
          <span className="text-[10px] text-emerald-400/80">PII SHIELD</span>
        </div>

        {/* Schematic Flow */}
        <div className="my-auto py-1 text-[11px] flex flex-col gap-1.5">
          <div className="flex items-center justify-between p-1.5 rounded bg-dark-900 border border-white/[0.06] text-[10px]">
            <span className="text-slate-400">Inbound Prompt</span>
            <span className="text-amber-400 font-semibold">[PII DETECTED]</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-dark-900 border border-white/[0.06] text-[10px]">
            <span className="text-slate-400">Redacted Payload</span>
            <span className="text-emerald-400 font-semibold">[SANITIZED 🔒]</span>
          </div>
        </div>

        {/* Bottom status line */}
        <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-slate-500">
          <span>AI SAFETY</span>
          <span>PII FIREWALL</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects I've Worked On
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Selected software development projects highlighting full-stack engineering, database integration, and AI safety middleware.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-dark-900 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-600 hover:-translate-y-1 shadow-md shadow-black/30"
            >
              <div>
                {/* Visual Header */}
                <div className="mb-5">
                  {renderProjectVisual(project)}
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Factual Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Confirmed Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.confirmedTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-dark-850 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                {project.hasLiveUrl ? (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 transition-colors"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title="View Details"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white border border-white/10 transition-colors"
                  >
                    <span>Project Details</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
