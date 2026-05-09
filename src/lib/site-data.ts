/**
 * Site content and config. Edit this file to customize copy, links, and resume.
 */

export const site = {
  name: "Astrid Greene",
  tagline:
    "Computer Science at the University of Michigan, focused on software engineering and machine learning.",
  headshot: "/images/headshot.jpg",
  resumeUrl: "/resume/resume.pdf",
} as const;

export const contact = {
  email: "astridig@umich.edu",
  phone: "929-249-6335",
  linkedin: "https://linkedin.com/in/astridgreene",
  github: "https://github.com/astridigreene",
} as const;

export const education = {
  school: "University of Michigan",
  degree: "B.S. in Computer Science, Minor in French",
  gpa: "3.7/4.0",
  honors: "University Honors",
  coursework: [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Computer Organization",
    "Object Oriented Programming",
    "Discrete Mathematics",
    "Linear Algebra",
    "Calculus I-II",
  ],
} as const;

export const about = {
  bio: `I study computer science at the University of Michigan, focusing on data structures, algorithms, and systems. I build software across C++ and Python, from low-level implementations to full-stack applications.`,
} as const;

export const experiences = [
  {
    id: "coretek",
    company: "Coretek",
    role: "AI Engineering Intern",
    location: "Farmington Hills, MI",
    period: "May 2026 – Present",
    bullets: [
      "Built a company-wide meeting scheduling agent using Microsoft Copilot Studio, Microsoft Graph API, and Power Automate, ranking optimal meeting times across 2–10+ participants and reducing manual scheduling overhead.",
      "Designed cloud flows in Power Automate using HTTP requests with Microsoft Entra ID authentication to retrieve Outlook calendar availability, working hours, time zones, and scheduling constraints across 1,000+ internal users.",
      "Implemented AI-driven scheduling workflows using Claude Sonnet, Swagger/OpenAPI 2.0, Azure AI Foundry, and Microsoft Graph integrations to automate real-time meeting coordination across internal company teams.",
    ],
  },
  {
    id: "tech-plus-dev",
    company: "Tech Plus Development Team",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "Mar 2025 – May 2026",
    bullets: [
      "Designed and implemented a role-based authentication system using Supabase Auth and PostgreSQL, writing 10+ Row Level Security policies to enforce granular access control across 3 user roles (admin, member, recruit).",
      "Built an internal member portal in React and TypeScript with Vite, featuring a member directory, project team management, attendance tracking, and event scheduling, serving 50+ active club members across 6 project teams.",
      "Configured full-stack deployment pipeline using GitHub, Supabase, and Vercel, managing environment variables and API keys across both development and production environments to support continuous deployment workflows.",
    ],
  },
  {
    id: "tech-plus",
    company: "Tech Plus Consulting",
    role: "Technical Analyst",
    location: "Ann Arbor, MI",
    period: "Jan 2026 – Present",
    bullets: [
      "Built an AI policy chatbot by migrating 200+ client policy documents into a structured Google Drive and connecting U-M Maizey’s REST API to embed a searchable chatbot widget directly on the client’s password-protected site.",
      "Resolved data ingestion issues caused by inconsistent document formatting, access-restricted pages, and duplicate file versions, cleaning and standardizing source data across 15+ file types to improve retrieval accuracy and reliability.",
      "Conducted 6+ stakeholder meetings over a 4-week sprint to define system requirements, identify access constraints, and scope chatbot functionality, reducing the initial feature set by 40% to prioritize high-value policy retrieval",
    ],
  },
  {
    id: "kode-klossy",
    company: "Kode with Klossy",
    role: "Junior Developer / Team Lead",
    location: "New York, NY",
    period: "June 2023 – Aug 2023",
    bullets: [
      "Led a 4-person team to design and develop a website addressing workplace discrimination",
      "Acted as lead debugger across front-end and back-end to support teammates and improve reliability",
      "Implemented a user story submission feature that collected over 100 contributions and published select narratives to spotlight underrepresented experiences",
    ],
  },
  {
    id: "morgan-state",
    company: "Morgan State University",
    role: "Research Assistant",
    location: "",
    period: "June 2023 – Aug 2023",
    bullets: [
      'Co-authored paper ”Debunking The Curse of Dimensionality in a K-Nearest Neighbors Classification Problem” with advisor Dr. Eric Sakk, selected as a national Semi-Finalist in the Junior Science and Humanities Symposium',
      "Researched ”Curse of Dimensionality” in k-Nearest Neighbors, running controlled Python experiments to show that in uniform, hard-confidence data sets, increasing dimensionality can improve k-NN classification performance",
      "Designed k-NN experiments in Python on datasets of 1000+ points, varying k-values and dimensions (2D–15D) to test classification accuracy, with NumPy, Scikit-learn, and Matplotlib for data generation, training, and visualization",
    ],
  },
] as const;

/** sortDate: ISO YYYY-MM-DD for chronological ordering (display `date` stays human-readable) */
export const projects = [
  {
    id: "dog-classification",
    title: "Deep Learning Dog Breed Classification",
    date: "Mar 2026",
    sortDate: "2026-03-24",
    description:
      "Developed deep learning architectures in PyTorch for multi-class dog breed classification, implementing convolutional neural networks, Vision Transformers, transfer learning, and multi-head self-attention across an 8,867-image dataset.",
    highlights: [
      "Implemented CNN and Vision Transformer architectures with scaled dot-product attention",
      "Trained models across 10-class, 8,867-image computer vision dataset",
      "Built transfer learning pipelines with checkpointing and Adam optimization",
    ],
    tools: ["PyTorch", "CNNs", "Vision Transformers", "Python"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "icu-mortality-prediction",
    title: "ICU Mortality Prediction Model",
    date: "Feb 2026",
    sortDate: "2026-02-18",
    description:
      "Engineered a clinical machine learning pipeline to predict ICU mortality risk using multivariate EHR time-series data, feature engineering workflows, and kernelized classification models across 12,000+ patient admissions.",
    highlights: [
      "Processed 12,000+ ICU admissions and 40+ physiological variables",
      "Executed 1,000+ bootstrap resampling iterations and 5-fold cross-validation",
      "Benchmarked logistic regression, kernel ridge regression, and RBF models using AUROC",
    ],
    tools: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "order-book",
    title: "Order Book Simulator",
    date: "Oct 2025",
    sortDate: "2025-10-15",
    description:
      "Built a price-time priority order-matching engine in C++ using priority queues to model bid and ask books. Achieves O(log n) complexity for both order insertion and matching, while enforcing strict price-time ordering to guarantee deterministic execution. The design focuses on efficient data structures and predictable performance under sustained, high-frequency order flow.",
    highlights: [
      "Processed 1M+ orders and executed 760K+ trades in under 10 seconds",
      "74K+ orders/second throughput",
      "O(log n) trade matching efficiency",
    ],
    tools: ["C++", "Priority Queues", "Data Structures"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "personal-website",
    title: "Personal Website",
    date: "March 2026",
    sortDate: "2026-03-01",
    description:
      "Personal portfolio built with modern web tooling. Responsive layout, scroll and interaction-driven animation, and structured sections for experience, projects, and contact.",
    highlights: [
      "Responsive design across breakpoints",
      "Animation-heavy UI with Framer Motion",
      "Structured content sections with clear hierarchy",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    githubUrl: "https://github.com/astridigreene/personal-website",
    liveUrl: null as string | null,
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    date: "Nov 2025",
    sortDate: "2025-11-15",
    description:
      "C++ solver for 9x9 Sudoku. Represents the board as a 9x9 grid, validates rows, columns, and 3x3 boxes, tracks candidate values for open cells, and solves via repeated constraint checks and possibility elimination.",
    highlights: [
      "81-cell board with row, column, and box validity checks",
      "Candidate tracking and constraint propagation",
      "Solves NYT Easy puzzles in under a second; runtime measured with chrono",
    ],
    tools: ["C++", "STL", "chrono"],
    featured: false,
    githubUrl: "https://github.com/astridigreene/sudoku-solver",
    liveUrl: null as string | null,
  },
  {
    id: "naive-bayes",
    title: "Naive Bayes Text Classifier",
    date: "May 2025",
    sortDate: "2025-05-01",
    description:
      "Multivariate Bernoulli naive Bayes classifier to classify posts by topic using log-probability scores.",
    highlights: [
      "Determined labels using highest log-probability score",
      "Abstract data types for efficient file parsing and word-frequency detection",
    ],
    tools: ["C++", "Probability", "ADTs"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "bst-map",
    title: "BST-Based Map Container",
    date: "June 2025",
    sortDate: "2025-06-01",
    description:
      "Binary Search Tree with sorting invariants and an ordered Map ADT for efficient key-value storage.",
    highlights: [
      "Sorting invariants, traversal logic, functors, templates, and recursion",
      "O(log n) insertion and lookup performance",
    ],
    tools: ["C++", "BST", "Templates"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    date: "Oct 2021",
    sortDate: "2021-10-01",
    description:
      "Interactive tic-tac-toe game in Python using turtle graphics. Keyboard-controlled for both players.",
    highlights: [
      "Board, Xs, and Os drawn with turtle; win and tie detection",
      "Scoreboard, reset, and replay with basic error checking",
    ],
    tools: ["Python", "turtle"],
    featured: false,
    githubUrl: "https://github.com/astridigreene/tic-tac-toe",
    liveUrl: null as string | null,
  },
] as const;

/** Projects ordered by sortDate descending (most recent first). Use this for the Projects UI. */
export const projectsByDateDesc = [...projects].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate)
);

export const extracurriculars = [
  {
    id: "geecs",
    name: "Girls in Electrical Engineering and Computer Science",
    shortName: "GEECS",
    role: "Member",
    description: "Community for women and non-binary students in EECS.",
  },
  {
    id: "eecs201",
    name: "EECS 201",
    shortName: "Instructional Aide",
    role: "Instructional Aide",
    description: "Support for Computer Organization coursework.",
  },
  {
    id: "math-proctor",
    name: "University of Michigan Math Learning Center",
    shortName: "Math Exam Proctor",
    role: "Proctor",
    description: "Monitor exam sessions, verify identities, and coordinate sign-in for 25–30 students per session.",
  },
] as const;

export const skills = {
  languages: ["C/C++", "Java", "Python", "JavaScript/TypeScript", "HTML/CSS", "SQL", "R"],
  tools: ["Git", "Matplotlib", "NumPy", "Scikit-learn", "Pandas", "Linux"],
  coreAreas: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Retrieval-Augmented Generation",
    "Software Development",
    "Technical Research",
  ],
} as const;

export const resumeSummary =
  "BS Computer Science (Minor: French) at University of Michigan. Experience in full-stack development, technical analysis, and research. Strong foundation in data structures, algorithms, and ML.";

export const resumeHighlights = [
  "B.S. Computer Science, Minor in French, University of Michigan",
  "Full-stack and systems-level development",
  "Research and data-driven projects",
  "Data structures, algorithms, and ML",
] as const;

export const contactCta =
  "Open to internships, research opportunities, and collaborative projects.";

export const currentFocus = [
  "Software engineering in C++ and Python",
  "Core CS: data structures, algorithms, systems",
  "Designing efficient and usable applications",
] as const;
