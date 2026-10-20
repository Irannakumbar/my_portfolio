import React from 'react';
import { User, BookOpen, MapPin, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    "Pursuing MCA (Master of Computer Applications) in the 2nd year.",
    "Hands-on experience with frontend (React, JavaScript) and backend (Node.js, Flask, Python).",
    "Practical background designing relational and document database schemas (MongoDB, SQL).",
    "Deep interest in AI-related software architectures and middleware solutions like SentinelPI.",
    "Actively seeking full-stack, frontend, backend, or software developer internships and entry-level roles.",
  ];

  const infoGrid = [
    { label: "Name", value: personalInfo.name, icon: User },
    { label: "Education", value: `${personalInfo.education.degree}, ${personalInfo.education.year}`, icon: BookOpen },
    { label: "Location", value: personalInfo.location, icon: MapPin },
    { label: "Role", value: personalInfo.role, icon: Briefcase },
    { label: "Availability", value: "Open to relevant opportunities", icon: Sparkles },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Full-Stack Focused with a Passion for Practical AI Software
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am currently in my second year of pursuing a Master of Computer Applications (MCA) in Karnataka, India. Throughout my academic journey and practical project work, I have focused on building reliable, user-friendly software that bridges frontend interfaces with robust backend logic.
                </p>
                <p>
                  My experience ranges from developing responsive web applications using React and vanilla web technologies to building backend REST services with Python, Flask, and Node.js. In databases, I work with both SQL relational structures and MongoDB document collections.
                </p>
                <p>
                  Beyond traditional web architecture, I have a strong interest in AI-related software—particularly in middleware, agent interaction safety, and privacy, as explored in my SentinelPI project. I am eager to apply my practical skills to challenging engineering problems and continue growing as a professional software engineer.
                </p>
              </div>
            </div>

            {/* Quick check highlights */}
            <div className="mt-8 pt-6 border-t border-white/[0.07] space-y-2.5">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Information Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-400" />
                  <span>Quick Facts</span>
                </h4>

                <div className="divide-y divide-white/[0.06] space-y-4">
                  {infoGrid.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="pt-4 first:pt-0 flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                            {item.label}
                          </span>
                          <span className="text-sm sm:text-base font-medium text-slate-100">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified Career Goal Banner */}
              <div className="mt-8 p-3.5 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-300">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                  Career Objective
                </span>
                Seeking entry-level developer, internship, or junior software engineering opportunities in full-stack, frontend, backend, or AI-adjacent engineering teams.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
