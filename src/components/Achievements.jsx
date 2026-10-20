import React from 'react';
import { Trophy, Calendar, CheckCircle2, Award } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Competitive hackathons and software challenges demonstrating rapid problem-solving under real-world constraints.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Featured Prominent Card */}
        <div className="max-w-3xl mx-auto">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-slate-600 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.07]">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-dark-850 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-dark-850 text-amber-400 font-mono text-[10px] font-semibold uppercase tracking-wider mb-1.5 border border-amber-500/20">
                      <span>{item.highlightBadge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center">
                  <span className="px-3 py-1 rounded-lg bg-dark-850 text-xs font-mono text-slate-300 border border-white/10 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </div>

              {/* Achievement Body */}
              <div className="pt-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-5 p-4 rounded-xl bg-dark-850 border border-white/[0.06] space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified 24-Hour AI Vision Hackathon Milestone</span>
                  </div>
                  <p className="text-slate-400">
                    Demonstrated rapid prototyping, full-stack architecture, and AI vision implementation under continuous 24-hour evaluation.
                  </p>
                </div>

                {/* Certificate Link Placeholder slot */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                  <span>
                    Certificate / Event Verification: Available upon request
                  </span>
                  <span className="text-slate-400">
                    MITK AI VISION 2026
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
