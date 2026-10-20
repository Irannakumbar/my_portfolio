import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, AlertCircle, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (minimum 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Iranna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            I'm open to connecting about internships, software development opportunities, and interesting technical projects.
          </p>
          <div className="w-12 h-0.5 bg-slate-700 rounded-full mt-3"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Channels (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to reach out directly through email, LinkedIn, or explore my code repositories on GitHub.
              </p>

              <div className="space-y-3">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-dark-850 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm text-slate-200 hover:text-white font-mono transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-400 hover:text-white border border-white/10 text-xs transition-colors"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {emailCopied ? (
                      <span className="text-emerald-400 text-[11px] font-mono font-medium">Copied</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-dark-850 border border-white/[0.06] flex items-center justify-between group hover:border-slate-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">LinkedIn</div>
                      <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                        iranna-kumbar-b15758310
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-dark-850 border border-white/[0.06] flex items-center justify-between group hover:border-slate-500 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <Github className="w-4 h-4 text-slate-200" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">GitHub</div>
                      <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors font-mono">
                        github.com/Irannakumbar
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>Location: {personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-dark-900 border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">
                Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Submitting opens your default email client with your message pre-formatted.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-dark-850 border border-white/10 text-center space-y-4">
                  <div className="w-10 h-10 rounded-full bg-dark-800 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Email Client Triggered</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md mx-auto leading-relaxed">
                      Your mail client was opened with the message addressed to <code>{personalInfo.email}</code>.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-lg text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      Re-open Email App
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-medium bg-dark-800 hover:bg-dark-750 text-slate-300 border border-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-850 text-slate-100 placeholder-slate-500 border text-sm transition-all focus:outline-none ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-850 text-slate-100 placeholder-slate-500 border text-sm transition-all focus:outline-none ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-850 text-slate-100 placeholder-slate-500 border text-sm transition-all focus:outline-none ${
                        errors.subject
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-dark-850 text-slate-100 placeholder-slate-500 border text-sm transition-all focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
