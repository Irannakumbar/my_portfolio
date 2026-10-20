import React from 'react';
import { Briefcase, Building2, CheckCircle2, Edit3 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-dark-950/70 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Professional development internship experience adhering strictly to confirmed company and role records.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8 shadow-md shadow-black/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <Building2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-slate-400 font-mono text-xs mt-0.5">
                      {item.company}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-850 text-xs text-slate-300 border border-white/10 self-start sm:self-center font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.type}</span>
                </div>
              </div>

              {/* Description */}
              <div className="pt-6">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Practical Takeaways */}
                <div className="mt-5 space-y-2.5">
                  {item.confirmedDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Editable slot note for user convenience */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Note: {item.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
