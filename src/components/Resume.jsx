import React from 'react';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const resumeUrl = "/resume/Rahul-Karthik-Mugachintala-Resume.pdf";

  return (
    <section id="resume" className="py-12 bg-transparent relative border-t border-slate-200/80 dark:border-slate-800/60" aria-label="Resume Download">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 transition-all">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Official Resume
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Standard PDF format • Full project achievements & technical proficiencies
              </p>
            </div>
          </div>

          <a
            href={resumeUrl}
            download="Rahul-Karthik-Mugachintala-Resume.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shrink-0 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
