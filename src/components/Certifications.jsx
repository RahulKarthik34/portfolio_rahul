import React from 'react';
import { Award, CheckCircle2, Calendar } from 'lucide-react';
import BorderGlow from './react-bits/BorderGlow';

export default function Certifications() {
  const certifications = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Aug 2025",
      category: "Artificial Intelligence"
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Great Learning",
      date: "Sep 2025",
      category: "Databases & Analytics"
    },
    {
      title: "Python Programming",
      issuer: "Great Learning",
      date: "Jun 2025",
      category: "Software Development"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-transparent relative border-t border-slate-800/60" aria-labelledby="certifications-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <span>CREDENTIALS & KNOWLEDGE</span>
            <div className="h-px w-12 bg-emerald-500/40" />
          </div>
          <h2 id="certifications-title" className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <BorderGlow
              key={idx}
              glowColor="#2563EB"
              accentColor="#10B981"
              glowRadius={220}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-lg hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {cert.date}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-1.5 leading-snug">
                {cert.title}
              </h3>

              <p className="text-sm text-emerald-400 font-medium mb-3">
                {cert.issuer}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{cert.category}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </BorderGlow>
          ))}
        </div>

      </div>
    </section>
  );
}
