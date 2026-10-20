/**
 * Portfolio Data for Iranna Kumbar
 * Note: All information is strictly based on confirmed details.
 * No fabricated statistics, unverified technologies, or fake ratings.
 */

export const personalInfo = {
  name: "Iranna Kumbar",
  initials: "IK",
  role: "Full Stack Developer & AI Engineer",
  tagline: "MCA student building practical web applications and exploring AI-powered software solutions.",
  bio: "I'm an MCA student who enjoys building practical web applications and exploring AI-powered software solutions. I focus on developing useful projects, improving my technical skills, and solving real-world problems through code.",
  aboutExtended: "I am pursuing my Master of Computer Applications (MCA) and am currently in my second year. With hands-on experience spanning both frontend and backend development technologies, I am passionate about engineering reliable software systems and exploring the potential of AI-powered tooling. I am actively seeking internship and full-time software development opportunities where I can contribute to impactful products and continue to grow as an engineer.",
  profileImage: "/profile.jpg",
  education: {
    degree: "MCA (Master of Computer Applications)",
    year: "2nd Year",
  },
  location: "Karnataka, India",
  email: "irannakumbar.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/iranna-kumbar-b15758310/",
  github: "https://github.com/Irannakumbar",
  status: "Open to Internship & Full-Time Opportunities",
};

export const skillsData = [
  {
    category: "Frontend",
    description: "Building responsive, modern, and interactive user interfaces.",
    skills: [
      { name: "HTML", tag: "Markup & Semantics" },
      { name: "CSS", tag: "Responsive Styling & Layouts" },
      { name: "JavaScript", tag: "ES6+ Logic & Web APIs" },
      { name: "React", tag: "Component-Driven UI Development" },
    ],
  },
  {
    category: "Backend",
    description: "Developing server-side logic, REST APIs, and application architecture.",
    skills: [
      { name: "Python", tag: "Scripting, Logic & AI Middleware" },
      { name: "Node.js", tag: "Event-Driven Server Runtime" },
      { name: "Flask", tag: "Lightweight Python Web Services" },
    ],
  },
  {
    category: "Databases",
    description: "Designing schema structures, relational queries, and document storage.",
    skills: [
      { name: "MongoDB", tag: "NoSQL Document Storage" },
      { name: "SQL", tag: "Relational Queries & Data Integrity" },
    ],
  },
];

export const projectsData = [
  {
    id: "virtual-autopsy-lms",
    title: "Virtual Autopsy Training LMS",
    tagline: "Medical & Forensic Online Education Platform",
    description: "A virtual autopsy training learning management system designed for online learning and training.",
    details: "Designed as an online learning management system tailored for virtual autopsy simulations and forensic education training modules. Structured to provide intuitive navigation, structured learning flows, and web-accessible educational resources.",
    confirmedTech: ["Web Technologies", "Responsive Frontend", "LMS Architecture"],
    liveUrl: "https://virtual-autopsy-training.vercel.app/",
    hasLiveUrl: true,
    githubUrl: null, // Repo pending confirmation
    badge: "Live Web App",
  },
  {
    id: "student-enrollment-system",
    title: "Advanced Student Enrollment System",
    tagline: "Academic Records & Enrollment Management",
    description: "A student enrollment system built using Flask, MySQL, and SQLAlchemy.",
    details: "A structured academic management application created to handle student registrations, course enrollments, and persistent database transactions. Leverages Flask's backend routing alongside SQLAlchemy ORM for relational queries against a MySQL database schema.",
    confirmedTech: ["Flask", "MySQL", "SQLAlchemy", "Python"],
    liveUrl: null,
    hasLiveUrl: false,
    githubUrl: null, // Repo pending confirmation
    badge: "Relational System",
  },
  {
    id: "sentinel-pi",
    title: "SentinelPI — PII Firewall for AI Agents",
    tagline: "Privacy & Data Protection Middleware",
    description: "A privacy-focused middleware project designed to detect and protect personally identifiable information (PII) in AI-agent interactions.",
    details: "A specialized privacy middleware project conceived to intercept, inspect, and redact personally identifiable information (PII) before prompts or messages reach AI agents and large language models. Demonstrates active exploration in AI safety, data compliance, and cybersecurity engineering.",
    confirmedTech: ["AI Agent Middleware", "Privacy Engineering", "Python / Security Logic"],
    techStatusNote: "Specific framework stack & repository pending confirmation.",
    liveUrl: null,
    hasLiveUrl: false,
    githubUrl: null, // Repo pending confirmation
    badge: "PII Firewall",
  },
];

export const experienceData = [
  {
    company: "Cognifyz",
    role: "Full Stack Developer Intern",
    type: "Internship",
    description: "Full-stack development internship experience, contributing to my practical understanding of software development.",
    confirmedDetails: [
      "Worked on full-stack web development tasks, practicing modern engineering principles.",
      "Gained practical experience bridging user interface components with server-side logic.",
      "Enhanced problem-solving abilities within collaborative development environments.",
    ],
    note: "Dates and specific team assignments can be updated as needed.",
  },
];

export const achievementsData = [
  {
    title: "1st Place — MITK AI VISION 24H Hackathon 2026",
    subtitle: "24-Hour Intensive AI & Software Hackathon",
    recognition: "Winner / First Prize",
    year: "2026",
    description: "Secured first place in a high-intensity 24-hour hackathon focused on AI vision and innovative software problem-solving.",
    highlightBadge: "Champion",
  },
];
