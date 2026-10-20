import React, { useEffect } from 'react';
import { X, ExternalLink, Info, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-dark-900 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2 font-mono">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-dark-850 border border-white/10">
              Project Specification
            </span>
            {project.hasLiveUrl && (
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium px-2 py-0.5 rounded bg-dark-850 border border-emerald-500/20">
                Deployed Online
              </span>
            )}
          </div>
          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">{project.tagline}</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-1 space-y-6 text-sm text-slate-300 leading-relaxed">
          {/* Factual Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              <span>Project Overview</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06] text-slate-200">
              <p className="font-medium text-white mb-2">{project.description}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{project.details}</p>
            </div>
          </div>

          {/* Confirmed Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Confirmed Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.confirmedTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-850 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verification Status Notice */}
          <div className="p-4 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-300 space-y-1">
            <div className="font-semibold flex items-center gap-1.5 text-slate-200 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Record</span>
            </div>
            <p className="text-slate-400">
              {project.techStatusNote ||
                "This project card strictly displays confirmed information. Additional feature metrics and repository links will be added upon verification."}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-dark-850 hover:bg-dark-800 border border-white/10 transition-colors"
          >
            Close Details
          </button>

          {project.hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 transition-all"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
