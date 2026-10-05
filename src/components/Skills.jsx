import React from 'react';
import { Layout, Server, Database, Code2, Wrench } from 'lucide-react';
import BorderGlow from './react-bits/BorderGlow';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Layout,
      color: "from-blue-500/20 to-cyan-500/10",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-indigo-500/20 to-blue-500/10",
      skills: ["Python", "Django", "REST APIs"],
    },
    {
      category: "Databases",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/10",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Cloud & Tools",
      icon: Wrench,
      color: "from-purple-500/20 to-pink-500/10",
      skills: ["AWS (fundamentals)", "Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-slate-800/60" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <span>02 / SKILLS</span>
            <div className="h-px w-12 bg-emerald-500/40" />
          </div>
          <h2 id="skills-title" className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Technical proficiencies categorized across frontend, server-side development, database architectures, and data workflows.
          </p>
        </div>

        {/* Categorized Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <BorderGlow
                key={idx}
                glowColor="#2563EB"
                accentColor="#10B981"
                glowRadius={220}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-lg hover:border-slate-700/80 transition-all duration-200"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/70 text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-base">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Tags / Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/60 hover:border-emerald-500/40 hover:text-white transition-colors duration-150 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </BorderGlow>
            );
          })}
        </div>

      </div>
    </section>
  );
}
