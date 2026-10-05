import React, { useState } from 'react';
import { Download, ExternalLink, FileText, CheckCircle2, Eye } from 'lucide-react';
import BorderGlow from './react-bits/BorderGlow';

export default function Resume() {
  const [iframeError, setIframeError] = useState(false);
  // PLACE RESUME PDF HERE: public/resume/Rahul-Karthik-Mugachintala-Resume.pdf
  const resumeUrl = "/resume/Rahul-Karthik-Mugachintala-Resume.pdf";

  return (
    <section id="resume" className="py-24 bg-transparent relative border-t border-slate-800/60" aria-labelledby="resume-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>04 / RESUME</span>
            <div className="h-px w-12 bg-blue-500/40" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 id="resume-title" className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                Resume
              </h2>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base">
                Review qualifications, project achievements, and technical stack. Available for download in standard PDF format.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                download="Rahul-Karthik-Mugachintala-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ExternalLink className="w-4 h-4" />
                Open PDF
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Viewer Card */}
        <BorderGlow
          glowColor="#2563EB"
          accentColor="#10B981"
          glowRadius={300}
          borderRadius="1.5rem"
          className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Top Bar of Viewer */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400">
                Rahul-Karthik-Mugachintala-Resume.pdf
              </span>
            </div>

            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Document
            </span>
          </div>

          {/* Iframe or Clean Fallback */}
          <div className="relative w-full h-[650px] bg-slate-950">
            {!iframeError ? (
              <iframe
                src={`${resumeUrl}#toolbar=0`}
                title="Rahul Karthik Mugachintala - Resume Viewer"
                className="w-full h-full border-none"
                onError={() => setIframeError(true)}
              />
            ) : null}

            {/* Fallback overlay if file is loading or browser blocks inline PDF iframe */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900/95 transition-opacity duration-300 ${
              iframeError ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none -z-10'
            }`}>
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Resume PDF Preview
              </h3>
              <p className="text-sm text-slate-300 max-w-md mb-6">
                To view or download Rahul's official resume, please use the direct links below.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={resumeUrl}
                  download="Rahul-Karthik-Mugachintala-Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </BorderGlow>

      </div>
    </section>
  );
}
