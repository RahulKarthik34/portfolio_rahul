// Centralized Project Data for Rahul Karthik Mugachintala's Portfolio
// Note: Placeholder URLs are clearly marked below. Do not replace with fake URLs.

export const GITHUB_URL = "#PLACEHOLDER_GITHUB_URL"; // TODO: Replace with actual GitHub repository URL
export const LIVE_DEMO_URL = "#PLACEHOLDER_LIVE_DEMO_URL"; // TODO: Replace with actual live demo URL

export const projects = [
  {
    id: "id-card-attendance",
    name: "Smart ID Card Scan & Attendance System",
    summary: "Full-stack attendance system with ID scanning, duplicate-prevention, and time-window validation.",
    tech: ["Python", "MySQL", "REST APIs", "React.js", "Node.js", "Express.js"],
    tag: "Full-Stack System",
    // PLACE PROJECT SCREENSHOT HERE: public/images/projects/id-card-attendance.png
    screenshot: "/images/projects/id-card-attendance.png",
    github: GITHUB_URL,
    liveDemo: LIVE_DEMO_URL,
    overview: "A full-stack attendance management system that automates student identification and attendance logging via ID card scanning, replacing manual roll-call processes.",
    problem: "Manual attendance tracking is slow, error-prone, and vulnerable to duplicate or fraudulent entries.",
    solution: "Students scan their ID card, the system validates identity against a MySQL-backed student database, checks time-window and duplicate rules, and logs a verified attendance record via a React frontend and REST API.",
    keyFeatures: [
      "ID scan → lookup → confirmation flow",
      "Duplicate-prevention logic",
      "Time-window validation",
      "Real-time student info preview"
    ],
    myContributions: [
      "Designed relational MySQL schema",
      "Built REST API endpoints for lookup/validation/writes",
      "Implemented duplicate-prevention and time-based validation",
      "Built React frontend",
      "Tested all endpoints with Postman"
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
    tech: ["React.js", "Node.js", "Express.js", "AI/LLM APIs"],
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
      "Built REST API workflows with Node.js/Express.js",
      "Integrated AI/LLM capabilities for question generation and assessment",
      "Implemented structured workflows for processing candidate data",
      "Built responsive, reusable React interfaces",
      "Tested and debugged API endpoints",
      "Used Git/GitHub for version control"
    ],
    challenge: "Structuring prompts and workflows to get consistent, useful AI-generated feedback required iterating on how candidate data was formatted before being sent to the LLM API."
  }
];
