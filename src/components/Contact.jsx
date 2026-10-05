import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import BorderGlow from './react-bits/BorderGlow';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Formspree or EmailJS integration endpoint (configured via environment variable or default)
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/placeholder";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // If user hasn't set custom Formspree endpoint yet, simulate successful submission for developer preview
      if (FORMSPREE_ENDPOINT.includes('placeholder')) {
        await new Promise((res) => setTimeout(res, 800));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed. Please reach out directly via email.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try emailing directly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-slate-800/60" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <span>05 / CONTACT</span>
            <div className="h-px w-12 bg-emerald-500/40" />
          </div>
          <h2 id="contact-title" className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Let's Connect
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            I'm currently looking for full-stack or software development opportunities where I can keep building things end-to-end and keep learning.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Direct Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BorderGlow
              glowColor="#2563EB"
              accentColor="#10B981"
              glowRadius={250}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/85 border border-slate-800 shadow-xl"
            >
              <h3 className="font-heading text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:rahulkarthik017@gmail.com"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Direct Email</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors break-all">
                      rahulkarthik017@gmail.com
                    </span>
                  </div>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/rahul-karthik-mugachintala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">LinkedIn</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/rahul-karthik-mugachintala
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/RahulKarthik34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">GitHub</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      github.com/RahulKarthik34
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Current Location</span>
                    <span className="text-sm font-medium text-slate-200">
                      Nellore, Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <BorderGlow
              glowColor="#2563EB"
              accentColor="#10B981"
              glowRadius={300}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/85 border border-slate-800 shadow-xl"
            >
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Recruiters and hiring managers: feel free to leave a note regarding open roles or interview scheduling.
              </p>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-center gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message was received. I will reply to you as soon as possible.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center gap-3 text-red-300 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Rahul, we have an open full-stack developer opportunity at..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </BorderGlow>
          </div>

        </div>

      </div>
    </section>
  );
}
