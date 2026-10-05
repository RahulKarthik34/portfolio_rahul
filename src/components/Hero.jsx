import React, { Suspense } from 'react';
import { Download, Send, ArrowRight, Mail, MapPin, CheckCircle2, Sparkles, Move } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import ParticleText from './react-bits/ParticleText';
import AeroShards from './react-bits/AeroShards';
import BorderGlow from './react-bits/BorderGlow';
import LanyardErrorBoundary from './LanyardErrorBoundary';

// Lazy-load the heavy 3D Lanyard & Rapier physics engine so main page loads instantly
const Lanyard = React.lazy(() => import('./react-bits/Lanyard'));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
      aria-labelledby="hero-heading"
    >
      {/* Background AeroShards Atmospheric visual */}
      <AeroShards
        backgroundColor="#000000"
        shardColor="#2563EB"
        accentColor="#10B981"
        placement="right"
        flow="stream"
        material="pearl"
        detail="balanced"
        effect="none"
        scale={1.0}
        spread={1.0}
        depth={1.0}
        speed={0.65}
        interaction="repel"
        density={18}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Full-Stack / Software Engineering Roles
            </div>

            {/* Visual Particle Heading Layer */}
            <div className="w-full -ml-2 mb-1">
              <ParticleText
                text="RAHUL KARTHIK"
                particleSize={2.2}
                density={4}
                scatter={50}
                gatherDuration={1200}
                pointerRepel={true}
                repelRadius={80}
                idleDrift={true}
              />
            </div>

            {/* Semantic Accessible Heading for SEO & Screen Readers */}
            <h1 id="hero-heading" className="sr-only">
              Rahul Karthik Mugachintala - Full-Stack Developer | Software Engineer
            </h1>

            {/* Main Tagline */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4">
              Hi, I'm Rahul Karthik 👋 —{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
                Full-Stack Developer | Python & JavaScript
              </span>
            </h2>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              B.Tech IT graduate skilled in full-stack development (React, Node.js, Django) and data tooling (Python, Pandas, SQL). I enjoy building end-to-end systems — from database schema to a working UI — and solving real workflow problems with code.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9 w-full sm:w-auto">
              <a
                href="/resume/Rahul-Karthik-Mugachintala-Resume.pdf"
                download="Rahul-Karthik-Mugachintala-Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm transition-all duration-200 hover:border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                Contact Me
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View Projects
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Nellore, Andhra Pradesh, India
              </span>

              <div className="h-3 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/rahul-karthik-mugachintala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/RahulKarthik34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:rahulkarthik017@gmail.com"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Visual Profile Card with 3D Lanyard ID Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full h-[620px] max-w-md lg:max-w-lg flex items-center justify-center">
              <LanyardErrorBoundary
                fallback={
                  <BorderGlow
                    glowColor="#2563EB"
                    accentColor="#10B981"
                    glowRadius={320}
                    className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 shadow-2xl backdrop-blur-md"
                  >
                    <div className="relative mb-5 rounded-xl overflow-hidden aspect-[4/4.5] bg-slate-800 border border-slate-700/60 shadow-inner">
                      <img
                        src="/images/profile/rahul1.jpeg"
                        alt="Rahul Karthik Mugachintala - Full-Stack Developer"
                        className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[1.03] transition-transform duration-300 hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-900/85 backdrop-blur-md py-2 px-3.5 rounded-lg border border-slate-700/60 shadow-md">
                        <span className="font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          B.Tech IT Graduate
                        </span>
                        <span className="text-slate-300 font-medium">NBKRIST</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="text-slate-400">Target Role</span>
                        <span className="font-semibold text-slate-200">Full-Stack / Software Eng.</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="text-slate-400">Core Stack</span>
                        <span className="font-mono text-blue-400">React · Node · Python · SQL</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Location</span>
                        <span className="text-slate-200">Nellore, Andhra Pradesh</span>
                      </div>
                    </div>
                  </BorderGlow>
                }
              >
                <Suspense
                  fallback={
                    <div className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 shadow-2xl backdrop-blur-md animate-pulse">
                      <div className="relative mb-5 rounded-xl overflow-hidden aspect-[4/4.5] bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                        <img
                          src="/images/profile/rahul1.jpeg"
                          alt="Rahul Karthik Mugachintala"
                          className="w-full h-full object-cover object-top opacity-80"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2">
                          <div className="w-8 h-8 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                          <span className="text-xs font-mono text-emerald-400 font-medium">Loading 3D ID Badge...</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3.5 bg-slate-800 rounded w-3/4" />
                        <div className="h-3 bg-slate-800/70 rounded w-1/2" />
                      </div>
                    </div>
                  }
                >
                  <Lanyard
                    position={[0, 0, 15]}
                    gravity={[0, -40, 0]}
                    frontImage="/images/profile/rahul1.jpeg"
                    backImage="/images/profile/rahul1.jpeg"
                    imageFit="cover"
                    transparent={true}
                    lanyardWidth={1.2}
                  />
                </Suspense>
              </LanyardErrorBoundary>

              {/* Interactive Cue Tag */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-xs font-mono text-emerald-400 border border-slate-700/80 shadow-lg backdrop-blur-md whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive 3D ID Badge • Hover, Scroll to Jump & Drag
                </span>
              </div>
            </div>

            {/* Quick Developer Meta Row below badge */}
            <div className="w-full max-w-md mt-2 px-4 py-2.5 rounded-xl bg-slate-900/85 border border-slate-800 flex items-center justify-between text-xs text-slate-300 shadow-md">
              <span className="font-mono text-blue-400 font-medium">React · Node · Python · SQL</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-mono font-medium">Full-Stack Engineer</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
