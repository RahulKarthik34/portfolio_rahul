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
    id: "dev-os",
    name: "DEV OS — Interactive Web Operating System",
    summary: "An interactive OS-style web app simulating a desktop environment in the browser.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    tag: "Interactive Web App",
    // PLACE PROJECT SCREENSHOT HERE: public/images/projects/dev-os.png
    screenshot: "/images/projects/dev-os.png",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "An interactive OS-style web application simulating a desktop operating environment through the browser.",
    problem: "Standard web portfolios and showcases can feel static; simulating a responsive OS environment tests deep component isolation, state synchronization, and window management in the browser.",
    solution: "Created a modular browser OS architecture with window dragging, taskbar navigation, application launch lifecycle, and authentic desktop UI controls using pure React and modern CSS.",
    keyFeatures: [
      "Boot screen and login interface",
      "Desktop environment with icon grid",
      "Multiple simultaneous application windows",
      "Taskbar navigation and interactive controls"
    ],
    myContributions: [
      "Built reusable React components for desktop elements and app-level functionality",
      "Implemented JavaScript-based interactions for window management, navigation, buttons, and forms",
      "Designed responsive layouts with HTML5/CSS3",
      "Tested and debugged interface workflows",
      "Maintained version history with Git/GitHub"
    ],
    challenge: "Managing multiple interactive \"windows\" and state simultaneously required careful component structuring to avoid state conflicts across simulated apps."
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
  }
];
