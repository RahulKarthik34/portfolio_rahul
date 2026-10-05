// Centralized Project Data for Rahul Karthik Mugachintala's Portfolio
// Note: Placeholder URLs are clearly marked below. Do not replace with fake URLs.

export const GITHUB_URL = "#PLACEHOLDER_GITHUB_URL"; // TODO: Replace with actual GitHub repository URL
export const LIVE_DEMO_URL = "#PLACEHOLDER_LIVE_DEMO_URL"; // TODO: Replace with actual live demo URL

export const projects = [
  {
    id: "qr-bus-attendance",
    name: "QR / Barcode Based Bus Attendance System",
    summary: "A smart and reliable solution for tracking student transit attendance using QR/Barcode scanning with real-time validation.",
    tech: ["Python", "Django", "Django REST Framework", "MySQL", "JavaScript", "QR/Barcode"],
    tag: "QR & Bus Attendance",
    // Project Screenshot
    screenshot: "/images/projects/bus-attendance.jpg",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "A smart full-stack attendance management system that automates student identification and bus boarding logs via QR & barcode scanning, replacing manual roll calls with real-time validation.",
    problem: "Manual transit attendance tracking is slow, error-prone, and vulnerable to duplicate scans or fraudulent entries.",
    solution: "Students scan their QR/barcode, the system validates identity against a MySQL student database, checks time-window and duplicate boarding rules, presents live student preview, and records attendance via Django REST APIs.",
    keyFeatures: [
      "QR & Barcode Scanning",
      "Real-Time Validation & Duplicate Prevention",
      "Role-Based Access Control",
      "Live Student Preview before Confirmation",
      "Manual & Automatic Confirmation",
      "Live Attendance Dashboard & Records"
    ],
    myContributions: [
      "Designed relational MySQL schema for student & route tracking",
      "Built RESTful API endpoints for validation, duplicate checks, and writes",
      "Implemented QR/barcode decoding and real-time attendance verification",
      "Created interactive dashboard with daily attendance analytics",
      "Tested all endpoints thoroughly with Postman"
    ],
    challenge: "Handling duplicate-submission edge cases required validation at both API and DB level, not just frontend — reinforced treating the backend as the source of truth for data integrity."
  },
  {
    id: "movie-hub",
    name: "MovieHub — Modern Movie Website",
    summary: "A modern movie website to browse movies, view details, search, and explore by genre using real-time API data.",
    tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "HTML5"],
    tag: "Web App & APIs",
    screenshot: "/images/projects/movie-website.jpg",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "A modern movie discovery and entertainment web application (MovieHub) that allows users to explore trending movies, search titles in real time, view trailers and cast details, and manage a personalized watchlist.",
    problem: "Finding where to watch movies, discovering similar titles by genre, and keeping track of an upcoming watchlist across fragmented platforms can be cumbersome without a unified, responsive interface.",
    solution: "Built a responsive movie web application powered by real-time movie database APIs, featuring live search, genre filtering, trailer previews, cast profiles, and local storage watchlist management.",
    keyFeatures: [
      "Browse Latest Movies (trending, popular, top-rated)",
      "Instant Movie Search with real-time API query",
      "Genre Filtering (Action, Adventure, Comedy, Drama, Sci-Fi)",
      "Detailed Info View (trailer, cast, ratings, and similar movies)",
      "Personalized Watchlist to save favorite movies",
      "Fully Responsive Design optimized for mobile, tablet, and desktop"
    ],
    myContributions: [
      "Architected component hierarchy in React for movie grids, hero banners, and modal views",
      "Integrated real-time movie database REST APIs for dynamic search and genre queries",
      "Implemented responsive mobile and desktop navigation with trailer embed modals",
      "Built client-side watchlist state synchronization with localStorage",
      "Styled user interface with modern glassmorphic accents using Tailwind CSS"
    ],
    challenge: "Handling real-time search debouncing and managing responsive layout states across mobile and wide desktop views while keeping API request rates optimized."
  },
  {
    id: "ai-mock-interview",
    name: "AI Based 3D Avatar Mock Interview System",
    summary: "An intelligent mock interview platform with a realistic 3D AI avatar, resume-based questions, and AI-powered evaluation.",
    tech: ["React.js", "Three.js", "Django", "Python", "Ollama", "REST API"],
    tag: "3D AI & Full-Stack",
    screenshot: "/images/projects/ai-mock-interview.jpg",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "An intelligent mock interview platform (Intervexa) featuring an interactive 3D AI avatar, automated resume skill extraction, role-specific question synthesis, and live multi-metric candidate evaluation.",
    problem: "Job seekers often lack realistic, domain-specific interview practice and actionable, prompt feedback tailored directly to their resumes and target roles.",
    solution: "Built a realistic 3D avatar interviewer in Three.js powered by local/cloud LLMs (Ollama) and Django backend, delivering real-time voice/chat interaction, resume parsing, and multi-metric performance rubrics.",
    keyFeatures: [
      "Realistic 3D AI Avatar with natural conversational interface",
      "Automated Resume Analysis & skill extraction",
      "AI Generated role-specific & behavioral questions",
      "Live Evaluation & scoring (Technical, Communication, Problem Solving, Confidence)",
      "Two Modes: AI Mode (Online) & Pre-built Questions (Offline)",
      "Comprehensive Interview History & progress tracking"
    ],
    myContributions: [
      "Built 3D avatar rendering and interactive conversation viewport with React & Three.js",
      "Architected RESTful backend with Python & Django for session and scoring management",
      "Integrated Ollama/LLM APIs for real-time contextual question generation and evaluation",
      "Created responsive interview room UI with live feedback and scoring indicators",
      "Tested and optimized API pipelines for low-latency conversational feedback"
    ],
    challenge: "Synchronizing 3D avatar states with LLM streaming responses and structuring evaluation prompts to return reliable, actionable rubric scores required careful prompt engineering and API state handling."
  },
  {
    id: "techblog-ai",
    name: "TechBlog AI — Blog with AI Automation",
    summary: "An AI-powered blog automation platform delivering well-researched technical articles with admin review workflows and multi-category reader experience.",
    tech: ["Python", "Django", "Django REST Framework", "React.js", "AI/LLM APIs", "Tailwind CSS"],
    tag: "AI & Content Automation",
    screenshot: "/images/projects/techblog-ai.jpg",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "An automated technical blogging platform (TechBlog AI) that pairs AI-driven article generation with an editorial review pipeline, allowing administrators to review, edit, approve, or reject AI-generated posts before automatic publishing.",
    problem: "Consistent technical content publishing demands extensive research, drafting, and editorial review. Without structured automation and review checkpoints, scaling content quality remains bottlenecked.",
    solution: "Built an end-to-end publishing pipeline: AI synthesizes well-researched drafts with category tags, administrators inspect and approve articles via a dedicated review dashboard, and approved posts automatically deploy to the public reader UI with reading time and table of contents.",
    keyFeatures: [
      "AI Article Generation (structured, well-researched posts)",
      "Admin Review Dashboard (Pending, Edit, Approve, Reject actions)",
      "Multi-Category Classification (Technology, Programming, AI & Tools, Career, Productivity)",
      "Automated Publishing Lifecycle with status tracking",
      "Reader Experience (Estimated read time, Table of Contents, Social Sharing)",
      "Dark & Light Mode Toggle for optimal reading comfort"
    ],
    myContributions: [
      "Engineered Django REST Framework API for article generation, review stages, and status transitions",
      "Integrated LLM APIs for automated outline structuring, content drafting, and SEO meta extraction",
      "Built React admin dashboard with pending article queue, live preview, and approval workflows",
      "Developed reader-facing blog interface with category filters, dynamic table of contents, and search",
      "Implemented database schema in MySQL/PostgreSQL for authors, categories, articles, and review logs"
    ],
    challenge: "Balancing AI generation speed with editorial quality control required designing a strict multi-state review pipeline (Draft -> Pending Approval -> Published / Rejected) with rollback and revision tracking."
  }
];
