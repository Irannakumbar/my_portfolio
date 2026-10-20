import React from 'react';
import { Layout, Server, Database, Code, Shield, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return Layout;
      case 'Backend':
        return Server;
      case 'Databases':
        return Database;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-950/70 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Technical Toolkit
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Confirmed core technologies used across my projects, academic coursework, and development workflows.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((categoryGroup) => {
            const Icon = getCategoryIcon(categoryGroup.category);
            return (
              <div
                key={categoryGroup.category}
                className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-600 hover:-translate-y-1 shadow-md shadow-black/20"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 px-2 py-1 rounded bg-dark-850 border border-white/[0.06]">
                      {categoryGroup.skills.length} confirmed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {categoryGroup.description}
                  </p>

                  {/* Skills List without fake percentages */}
                  <div className="space-y-2.5">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-dark-850/80 border border-white/[0.06] hover:border-white/15 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                          <span className="font-medium text-xs sm:text-sm text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Practical project implementation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Engineering Focus Callout */}
        <div className="mt-10 rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5 sm:mt-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>AI Engineering Interest</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-white/10">
                    Project-Driven
                  </span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  My interest in AI engineering is actively pursued through hands-on software projects like <strong>SentinelPI</strong>, focusing on privacy middleware and safe agent integration rather than unsubstantiated claims.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap self-end sm:self-center"
            >
              See SentinelPI Details &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
