export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
];

export const leetcodeAchievement = {
  value: "200+",
  label: "LeetCode Problems",
  url: "https://leetcode.com/u/srijon-paul/"
};

export const focusData = [
  {
    id: "01",
    title: "REST APIs",
    items: ["API design", "Integration", "Backend services"]
  },
  {
    id: "02",
    title: "AUTH & RBAC",
    items: ["JWT", "Authentication", "Authorization", "Role-based access"]
  },
  {
    id: "03",
    title: "DATABASE SYSTEMS",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM"]
  },
  {
    id: "04",
    title: "SECURITY",
    items: ["Helmet", "CORS", "Rate limiting", "Input validation"]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "MOMENTUM",
    subtitle: "OPPORTUNITY MANAGEMENT PLATFORM",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
    highlights: ["REST APIs", "JWT", "RBAC", "SEARCH", "PAGINATION", "SECURITY"],
    description: "Backend service for managing opportunities, users and bookmarks with authentication, authorization, administrative operations and backend security practices.",
    githubUrl: "https://github.com/Srijon-paul/Momentum", 
    liveUrl: null,
    caseStudyUrl: null,
    featured: true
  },
  {
    id: "02",
    title: "KINDCYCLE",
    subtitle: "PEER-TO-PEER DONATION PLATFORM",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    highlights: ["AUTHENTICATION", "RBAC", "MODERATION", "KARMA SYSTEM"],
    description: "Full-stack peer-to-peer donation platform with item listings, claims, moderation workflows and a karma-based trust system.",
    githubUrl: "https://github.com/Srijon-paul/KindCycle",
    liveUrl: null,
    caseStudyUrl: null,
    featured: false
  }
];

export const engineeringSpecs = [
  { 
    id: "01", 
    category: "BACKEND", 
    items: ["Node.js", "Express.js", "REST APIs"] 
  },
  { 
    id: "02", 
    category: "DATA", 
    items: ["PostgreSQL", "MongoDB", "Prisma ORM"] 
  },
  { 
    id: "03", 
    category: "SECURITY", 
    items: ["JWT", "RBAC", "Helmet", "CORS", "Rate Limiting", "Input Validation"] 
  },
  { 
    id: "04", 
    category: "ENGINEERING", 
    items: ["API Design", "Database Design", "Authentication", "Authorization", "Testing", "Documentation"] 
  }
];

export const experienceData = [
  {
    role: "WEB DEVELOPMENT INTERN",
    subRole: "Backend / MERN Stack",
    company: "Blend Vidya EdTech",
    location: "Remote",
    date: "Nov 2025 — Feb 2026",
    responsibilities: [
      "Developed backend services and REST APIs using Node.js, Express.js and MongoDB.",
      "Implemented JWT authentication and role-based authorization.",
      "Worked across user, attendance and performance APIs.",
      "Built modules for user and department management.",
      "Implemented attendance sessions and records.",
      "Worked with performance metrics and records.",
      "Used centralized error handling and request-size/CORS configuration."
    ]
  }
];
