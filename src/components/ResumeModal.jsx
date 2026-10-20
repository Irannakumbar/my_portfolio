import React from 'react';
import { X, FileText, Upload, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const copyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-dark-900 border border-white/10 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-indigo-400">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-white">
              Resume Setup Instruction
            </h3>
            <p className="text-xs text-slate-400 font-mono">Status: Awaiting PDF placement</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            In accordance with strict content accuracy, no fabricated PDF is served. To enable instant one-click downloads for recruiters:
          </p>

          <div className="p-4 rounded-xl bg-dark-850 border border-white/10 space-y-2.5">
            <div className="font-semibold text-white flex items-center gap-2 font-mono text-xs">
              <Upload className="w-4 h-4 text-indigo-400" />
              <span>Step 1: Place your PDF file in the public folder</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-dark-950 font-mono text-xs text-slate-200 border border-white/[0.06]">
              <span>public/resume.pdf</span>
              <button
                onClick={copyPath}
                className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Name your file exactly <code>resume.pdf</code> inside the <code>public/</code> folder.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-850 border border-white/10 text-slate-300 text-xs">
            <span className="font-semibold block mb-0.5 text-slate-200 font-mono">Automated Detection:</span>
            The website automatically verifies whether <code>/resume.pdf</code> exists. Once placed, clicking "Download Resume" will immediately trigger the direct file download.
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <a
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Iranna%20Kumbar`}
            className="text-xs text-slate-400 hover:text-slate-200 underline font-mono"
          >
            Or request resume via email
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium bg-dark-850 hover:bg-dark-800 text-white border border-white/10 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
