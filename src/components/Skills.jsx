import React from 'react';
import { Layout, Server, Database, Wrench, Terminal, Code2, Sparkles } from 'lucide-react';
import ChromaGrid from './react-bits/ChromaGrid';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layout,
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, rgba(59, 130, 246, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    },
    {
      category: "Backend & APIs",
      icon: Server,
      borderColor: "#6366F1",
      gradient: "linear-gradient(145deg, rgba(99, 102, 241, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["Python", "Django", "Node.js", "Express.js", "RESTful APIs", "JSON"],
    },
    {
      category: "Database Systems",
      icon: Database,
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, rgba(16, 185, 129, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["MySQL", "MongoDB", "Schema Modeling", "Relational Integrity", "CRUD"],
    },
    {
      category: "Cloud & Dev Tools",
      icon: Wrench,
      borderColor: "#A855F7",
      gradient: "linear-gradient(145deg, rgba(168, 85, 247, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["AWS (fundamentals)", "Git", "GitHub", "Postman", "VS Code", "Linux CLI"],
    },
    {
      category: "Data Tooling & Analytics",
      icon: Terminal,
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, rgba(245, 158, 11, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["Pandas", "NumPy", "Data Cleaning", "SQL Queries", "Workflow Automation"],
    },
    {
      category: "Core Computer Science",
      icon: Code2,
      borderColor: "#06B6D4",
      gradient: "linear-gradient(145deg, rgba(6, 182, 212, 0.22), rgba(15, 23, 42, 0.95))",
      skills: ["Object-Oriented Programming (OOP)", "Data Structures", "Algorithms", "Clean Code"],
    },
  ];

  // Map each category to a ChromaGrid item with custom content
  const chromaItems = skillCategories.map((cat) => {
    const Icon = cat.icon;
    return {
      borderColor: cat.borderColor,
      gradient: cat.gradient,
      content: (
        <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
          <div>
            {/* Category Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl border transition-transform duration-200 group-hover:scale-105"
                  style={{
                    backgroundColor: `${cat.borderColor}18`,
                    borderColor: `${cat.borderColor}35`,
                    color: cat.borderColor,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {cat.skills.length} core proficiencies
                  </span>
                </div>
              </div>
            </div>

            {/* Skill Badges / Pills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150 cursor-default"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: cat.borderColor }}
                  />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle / Focus footer */}
          <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500 dark:text-slate-400">Proficiency</span>
            <span
              className="inline-flex items-center gap-1 font-mono font-medium"
              style={{ color: cat.borderColor }}
            >
              <Sparkles className="w-3 h-3" />
              Verified Stack
            </span>
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-slate-200/80 dark:border-slate-800/60" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3">
            <span>02 / SKILLS & TECH</span>
            <div className="h-px w-12 bg-emerald-500/40" />
          </div>
          <h2 id="skills-title" className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Technical Proficiencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Hover and move across the interactive chroma spotlight grid to explore my stack across frontend, backend, databases, cloud, and data engineering.
          </p>
        </div>

        {/* Interactive ChromaGrid */}
        <div className="relative w-full">
          <ChromaGrid
            items={chromaItems}
            columns={3}
            rows={2}
            radius={340}
            damping={0.4}
            fadeOut={0.7}
            ease="power3.out"
          />
        </div>

      </div>
    </section>
  );
}
