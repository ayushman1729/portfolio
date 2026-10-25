export const personalInfo = {
  name: "Ayushman Singh",
  role: "Full-Stack Developer & AI Software Engineer",
  tagline: "Specializing in Next.js, React.js, Node.js, PostgreSQL, and Autonomous AI Agent Integration.",
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
  languages: ["TypeScript", "JavaScript (ES6+)", "Java", "Python", "SQL", "HTML5", "CSS3 / Tailwind"],
  frontend: ["Next.js 15 (App Router)", "React.js", "Tailwind CSS", "TanStack Query", "Zustand", "Redux Toolkit", "React Router v7", "Chart.js"],
  backend: ["Node.js", "FastAPI", "Express.js", "RESTful APIs", "Row-Level Locking", "Database Transactions", "JWT Auth", "Postman"],
  ai: ["LLM Function Calling (Gemini API)", "Tool-Based Agent Design", "Prompt Engineering", "Structured Outputs"],
  database: ["PostgreSQL (Neon Serverless)", "Prisma 6 ORM", "SQLite", "MongoDB", "Mongoose"],
  multimedia: ["RTSP Streaming", "FFmpeg Transcoding", "HLS Browser Playback", "CCTV Integration", "Cloudinary Media"],
  tools: ["Git & GitHub", "Vercel (CI/CD)", "Vite", "VS Code", "Postman", "Thunder Client"]
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
    title: "SwiftCart — Autonomous AI Support & Tool Calling System",
    tagline: "Autonomous customer service agent using LLM Function Calling to perform verified SQLite database operations and escalation.",
    category: "AI / GenAI",
    date: "Oct 2026",
    problem:
      "Customer support teams face thousands of repetitive order inquiries and cancellation requests, while generic chatbots frequently hallucinate and lack the ability to safely query or modify internal databases.",
    solution:
      "Engineered an autonomous AI agent leveraging LLM Function Calling (Gemini API) to execute verified backend actions (order tracking, conditional cancellations, policy lookup). Implemented sentiment-triggered escalation creating priority tickets in SQLite, coupled with an interactive full-stack inspection dashboard with live DB sync and execution logs.",
    tech: ["Python", "FastAPI", "SQLite", "Gemini API", "LLM Tool Calling", "REST APIs", "Vercel"],
    github: "https://github.com/ayushman1729/ai-support-agent",
    demo: "https://ai-support-agent-6rbb.vercel.app",
    featured: true
  },
  {
    title: "TicketRush — High-Concurrency Event Ticketing Platform",
    tagline: "Flash-sale ticketing engine modeled after Tatkal/BookMyShow with atomic concurrency locking and zero double-bookings.",
    category: "Full-Stack",
    date: "Oct 2026",
    problem:
      "High-traffic ticket drops create severe race conditions and database deadlocks when 50+ concurrent buyers hit checkout on the exact same seat at the same millisecond.",
    solution:
      "Engineered a full-stack ticketing engine with PostgreSQL row-level locking (transactions) to achieve zero double-bookings with 409 Conflict rejection. Implemented a 7-minute TTL checkout hold engine with automated background sweepers to prevent seat hoarding, paired with an interactive stadium seat grid with tiered pricing.",
    tech: ["Next.js 15", "TypeScript", "Prisma 6", "Neon Cloud PostgreSQL", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ayushman1729/TicketRush",
    demo: "https://ticketrush.vercel.app",
    featured: true
  },
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
    title: "PulseAdmin — Enterprise React & Commerce Platform",
    tagline: "High-performance enterprise admin dashboard with Redux state management, live commerce metrics, and CI/CD automation.",
    category: "Frontend",
    date: "2026",
    problem:
      "Enterprise commerce back-offices suffer from sluggish catalog rendering, disjointed state synchronization across modules, and difficult live deployments.",
    solution:
      "Architected a responsive Crimson & Slate dashboard with Redux Toolkit for unified cart & catalog state, React Router client-side routing with 404 fallback handling, 1-click demo recruiter authentication, and automated GitHub-to-Vercel CI/CD pipeline.",
    tech: ["React.js", "Redux Toolkit", "React Router", "Vite", "REST APIs", "Vercel CI/CD", "Bootstrap/CSS3"],
    github: "https://github.com/ayushman1729/react-admin-dashboard",
    demo: "https://react-admin-dashboard-iota-rosy.vercel.app",
    featured: true
  },
  {
    title: "EchoPulse — In-Browser API Workbench & Telemetry Engine",
    tagline: "High-performance developer API client & telemetry platform for testing endpoints, measuring latency, and inspecting payloads in real-time.",
    category: "Full-Stack",
    date: "2026",
    problem:
      "Developers needing rapid API debugging often have to switch to heavy desktop tools that lack sharable web links and instant telemetry metrics.",
    solution:
      "Built a browser-based Postman alternative supporting multi-method HTTP requests (GET, POST, PUT, DELETE), header presets, JSON payload syntax highlighting, real-time response timing telemetry, and status breakdown.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "Vite", "Vercel CI/CD"],
    github: "https://github.com/ayushman1729/echopulse",
    demo: "https://echopulse-nine.vercel.app",
    featured: true
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
