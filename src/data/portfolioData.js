export const personalInfo = {
  name: "Ayushman Singh",
  role: "Full-Stack Software Engineer",
  tagline: "Specializing in React.js, Next.js, Node.js, and Real-Time RTSP/FFmpeg Video Streaming.",
  location: "Gurugram, Haryana, India",
  timezone: "IST (UTC+5:30)",
  email: "ayushman7310@gmail.com",
  phone: "+91 6393663934",
  github: "https://github.com/ayushman1729",
  linkedin: "https://www.linkedin.com/in/ayushman1729",
  company: {
    name: "Genius Vision Digital (GVD)",
    role: "Software Engineer Intern",
    period: "Jul 2026 – Present",
    location: "Gurugram, Haryana"
  },
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    university: "Babu Banarasi Das University",
    location: "Lucknow, Uttar Pradesh",
    period: "2022 – 2026"
  }
};

export const skillsData = {
  languages: ["JavaScript (ES6+)", "Java", "Python", "HTML5", "CSS3 / Tailwind"],
  frontend: ["React.js", "Next.js", "TanStack Query", "Redux Toolkit", "React Router", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Cloudinary SDK", "Postman API Testing"],
  database: ["MongoDB", "Mongoose"],
  multimedia: ["RTSP Streaming", "FFmpeg Transcoding", "HLS Browser Playback", "CCTV Integration", "Cloudinary Media"],
  tools: ["Git & GitHub", "VS Code", "Postman", "Thunder Client"]
};

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Genius Vision Digital (GVD)",
    period: "Jul 2026 – Present",
    location: "Gurugram, Haryana",
    description:
      "Working on enterprise video surveillance platforms, frontend modernization, and low-latency media streaming architecture.",
    contributions: [
      "Engineered low-latency RTSP-to-HLS video streaming architecture with FFmpeg, conducting functional testing on live production builds to guarantee zero-lag browser playback.",
      "Accelerated web performance, Core Web Vitals, and SEO by migrating Hunt Technologies website from WordPress to Next.js, authoring 15+ modular reusable UI components.",
      "Designed, tested, and integrated 8+ RESTful API endpoints using Postman, validating strict JSON payload schemas, scan event streams, and JWT authentication.",
      "Developed 10+ responsive web interfaces using React.js, Next.js, and Tailwind CSS, standardizing layout consistency across mobile, tablet, and desktop screens."
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "RTSP / FFmpeg", "MongoDB", "Postman"]
  }
];

export const projects = [
  {
    title: "E-Commerce Packing Audit & CCTV Playback System",
    tagline: "Resolving e-commerce return disputes by automatically linking Start/Close packaging scans with CCTV surveillance footage.",
    category: "Full-Stack / Video",
    date: "Sep 2026",
    problem:
      "E-commerce sellers frequently suffer from fraudulent customer claims (empty box received, wrong item, missing parts). Manually sifting through hours of warehouse CCTV footage takes hours and leads to automatic financial dispute losses.",
    solution:
      "Engineered an automated 2-scan audit pipeline: (1) Worker scans product barcode at START PACKING, (2) Worker scans shipping label when CARTON IS CLOSED & SEALED. The system logs timestamps & camera channels in MongoDB. On dispute, entering the Order ID automatically extracts and serves the exact CCTV clip via RTSP & FFmpeg for zero-lag HLS browser playback.",
    tech: ["React.js", "Node.js", "MongoDB", "FFmpeg", "RTSP Streams", "HLS Playback"],
    github: "https://github.com/ayushman1729",
    featured: true
  },
  {
    title: "RentProof – Property Inspection & Rental Management System",
    tagline: "Full-stack property condition verification platform with Cloudinary media uploads, role-based access, and shareable dispute reports.",
    category: "Full-Stack",
    date: "2026",
    problem:
      "Disputes between tenants and landlords over security deposit deductions frequently occur due to lack of verifiable evidence of property condition during move-in and move-out.",
    solution:
      "Developed a full-stack web application that helps tenants and landlords document property conditions. Implemented JWT authentication, role-based access control (RBAC), property creation, tenant invitations, and photo/video uploads using Cloudinary. Built a condition comparison workflow that contrasts move-in vs move-out evidence and generates shareable inspection reports.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "JWT Auth", "REST APIs"],
    github: "https://github.com/ayushman1729",
    featured: true
  },
  {
    title: "Enterprise React Admin Dashboard",
    tagline: "Modular management panel with TanStack Query caching, protected routes, and instant search.",
    category: "Frontend",
    date: "Jul 2026",
    problem:
      "Large catalog dashboards suffer from sluggish table re-renders, redundant network calls, and clunky navigation across paginated records.",
    solution:
      "Implemented TanStack Query for server-state caching, data deduplication, and background synchronization. Structured protected dynamic routes, product management, search filtering, and loading skeleton states.",
    tech: ["React.js", "React Router", "TanStack Query", "Axios", "Tailwind CSS"],
    github: "https://github.com/ayushman1729/react-admin-dashboard",
    featured: true
  },
  {
    title: "Social Echo — Community Interaction Platform",
    tagline: "Responsive interaction feed built with modern React component patterns and state management.",
    category: "Frontend",
    date: "2025",
    problem:
      "Building a snappy social feed with responsive post interactions and clean state isolation.",
    solution:
      "Engineered dynamic post feeds, modal views, and reactive UI interactions using React and Context API.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Context API"],
    github: "https://github.com/ayushman1729/social-echo",
    featured: false
  },
  {
    title: "Modern E-Commerce Storefront",
    tagline: "Fast shopping catalog with local cart persistence, filtering, and responsive checkout.",
    category: "Frontend",
    date: "2025",
    problem:
      "Creating a mobile-first shopping experience with instant cart updates and price filtering.",
    solution:
      "Developed a product catalog with category search, local storage cart synchronization, and clean checkout states.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/ayushman1729/react-ecommerce-website",
    featured: false
  },
  {
    title: "Task & Team Workflow Manager",
    tagline: "Lightweight project organization tool with Kanban prioritization and deadline alerts.",
    category: "Full-Stack",
    date: "2025",
    problem:
      "Tracking team task execution without heavyweight enterprise tool bloat.",
    solution:
      "Engineered a Kanban board allowing team members to assign tasks, set priority statuses, and track sprint deadlines.",
    tech: ["JavaScript", "Python Backend", "REST APIs"],
    github: "https://github.com/ayushman1729/Task-management",
    featured: false
  }
];

export const certifications = [
  {
    name: "Data Structures & Algorithms in Java",
    issuer: "Apna College",
    focus: "Comprehensive problem solving in Java covering Arrays, Linked Lists, Binary Trees, Graphs, Recursion, and Dynamic Programming."
  },
  {
    name: "Full Stack Web Development (MERN)",
    issuer: "GRAStec",
    focus: "End-to-end full-stack development covering MongoDB, Express.js, React.js, Node.js, and API security."
  },
  {
    name: "Deloitte Data Analytics Simulation",
    issuer: "Deloitte (Forage)",
    focus: "Business requirements analysis, telemetry data interpretation, and client communication."
  }
];

export const activities = [
  {
    title: "Weather Forecasting System Presentation",
    event: "TechXplore Project Exhibition — Babu Banarasi Das University",
    summary: "Demonstrated an automated telemetry visualization prototype to university evaluators and faculty."
  },
  {
    title: "National Innovation & Quizzes Programs",
    event: "MyGov & Ministry of Tribal Affairs",
    summary: "Participated and recognized in government digital empowerment and technology initiatives."
  }
];
