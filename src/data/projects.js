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
    name: "AI Mock Interview Platform",
    summary: "AI-powered platform for resume analysis, mock interviews, and personalized candidate feedback.",
    tech: ["React.js", "Python", "Django", "AI/LLM APIs"],
    tag: "AI & Full-Stack",
    // PLACE PROJECT SCREENSHOT HERE: public/images/projects/ai-mock-interview.png
    screenshot: "/images/projects/ai-mock-interview.png",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "A full-stack AI-powered platform for resume analysis, mock interview practice, candidate assessment, and personalized feedback.",
    problem: "Job seekers often lack realistic, domain-specific interview practice and actionable, prompt feedback tailored directly to their resumes and target roles.",
    solution: "Engineered an interactive multi-step interview pipeline where candidates upload resumes, get relevant technical/behavioral questions synthesized via LLM APIs, and receive detailed evaluation rubrics upon completion.",
    keyFeatures: [
      "5+ interactive screens (resume upload, interview setup, question flow, assessment results, feedback)",
      "AI/LLM-generated technical and behavioral questions",
      "Personalized feedback generation"
    ],
    myContributions: [
      "Built REST API workflows with Python and Django",
      "Integrated AI/LLM capabilities for question generation and assessment",
      "Implemented structured workflows for processing candidate data",
      "Built responsive, reusable React interfaces",
      "Tested and debugged API endpoints",
      "Used Git/GitHub for version control"
    ],
    challenge: "Structuring prompts and workflows to get consistent, useful AI-generated feedback required iterating on how candidate data was formatted before being sent to the LLM API."
  }
];
