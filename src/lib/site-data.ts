/**
 * Site content and config. Edit this file to customize copy and links.
 */

export const site = {
  name: "Astrid Greene",
  tagline:
    "Computer Science at the University of Michigan, focused on software engineering and machine learning.",
  headshot: "/images/headshot.jpg",
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
  location: "Ann Arbor, MI",
  expectedGraduation: "May 2028",
  gpa: "3.7/4.0",
  honors: "University Honors",
  coursework: [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Linear Algebra",
    "Discrete Mathematics",
    "Computer Organization",
    "Object Oriented Programming",
    "Calculus I-II",
    "Computer Pragmatics",
    "Programming Concepts",
  ],
} as const;

export const about = {
  bio: `I study computer science at the University of Michigan, focusing on data structures, algorithms, and systems. I build software across C++ and Python, from low-level implementations to full-stack applications.`,
} as const;

export const experiences = [
  {
    id: "coretek",
    company: "Coretek",
    role: "Software Engineering Intern",
    location: "Farmington Hills, MI",
    period: "May 2026 – Present",
    bullets: [
      "Built an expense validation system across 5 Python Azure Function endpoints with OCR extraction, a 19-rule policy engine, and 10+ AI agent modules, processing 4,700+ lines annually and saving 500 hours and $30K/year",
      "Designed deterministic-then-probabilistic validation architecture with worst-wins result aggregation, per-trip segmentation, and confidence-scored OCR fallback handling across 12 edge cases and 2 processing layers",
      "Wrote 500+ automated tests across 3 tiers using independent reference oracles and boundary-value coverage, deploying code via GitHub Actions CI/CD with OIDC authentication and Azure Key Vault secret management",
    ],
  },
  {
    id: "tech-plus-dev",
    company: "Tech Plus Development",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Designed and implemented a role-based authentication system using Supabase Auth and PostgreSQL, writing 10+ Row Level Security policies to enforce granular access control across 3 user roles (admin, member, recruit)",
      "Developed a full-stack internal platform in React, TypeScript, and Vite, featuring member management, attendance tracking, and event scheduling, serving 50+ active club members across 6 project teams",
      "Configured full-stack deployment pipeline using GitHub, Supabase, and Vercel, managing environment variables and API keys across both development and production environments to support continuous deployment workflows",
    ],
  },
  {
    id: "tech-plus",
    company: "Tech Plus Consulting",
    role: "Technical Analyst",
    location: "Ann Arbor, MI",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Built an AI policy chatbot by migrating 200+ client policy documents into a structured Google Drive and connecting U-M Maizey's REST API to embed a searchable chatbot widget directly on the client's password-protected site",
      "Resolved data ingestion issues caused by inconsistent document formatting, access-restricted pages, and duplicate file versions, cleaning and standardizing source data across 15+ file types to improve retrieval accuracy and reliability",
      "Conducted 6+ stakeholder meetings over a 4-week sprint to define system requirements, identify access constraints, and scope chatbot functionality, reducing the initial feature set by 40% to prioritize high-value policy retrieval",
    ],
  },
  {
    id: "morgan-state",
    company: "Morgan State University",
    role: "Research Assistant",
    location: "",
    period: "June 2023 – Aug 2023",
    bullets: [
      'Co-authored paper "Debunking The Curse of Dimensionality in a K-Nearest Neighbors Classification Problem" with advisor Dr. Eric Sakk, selected as a national Semi-Finalist in the Junior Science and Humanities Symposium',
      "Researched Curse of Dimensionality in k-Nearest Neighbors, running controlled Python experiments to show that in uniform, hard-confidence data sets, increasing dimensionality can improve k-NN classification performance",
      "Designed k-NN experiments in Python on datasets of 1000+ points, varying k-values and dimensions (2D to 15D) to test classification accuracy, with NumPy, Scikit-learn, and Matplotlib for data generation, training, and visualization",
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
] as const;

/** sortDate: ISO YYYY-MM-DD for chronological ordering (display `date` stays human-readable) */
export const projects = [
  {
    id: "dog-classification",
    title: "Deep Learning Dog Breed Classification",
    date: "Mar 2026",
    sortDate: "2026-03-24",
    description:
      "Custom PyTorch CNN and Vision Transformer architectures for 10-class dog breed image classification across a 9,000-image dataset.",
    highlights: [
      "Implemented transformer encoders, multi-head self-attention, and scaled dot-product attention",
      "Built transfer learning pipelines with Adam optimization, checkpoint serialization, tensor normalization, and 256-patch embeddings, training models over 10,000+ update iterations",
    ],
    tools: ["PyTorch", "CNNs", "Vision Transformers", "Python"],
    featured: true,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "icu-mortality-prediction",
    title: "ICU Mortality Prediction Model",
    date: "Feb 2026",
    sortDate: "2026-02-18",
    description:
      "Clinical ML pipeline predicting ICU mortality from sparse EHR time-series data across 12,000+ admissions and 40+ physiological variables.",
    highlights: [
      "Transformed sparse EHR time-series data through normalization, imputation, statistical aggregation, and feature engineering workflows",
      "Executed 5-fold cross-validation and 1,000+ bootstrap resampling iterations across logistic regression, kernel ridge regression, and RBF kernel models, benchmarking AUROC, sensitivity, and specificity under imbalance conditions",
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
      "Central limit order book matching engine in C++ using heap-backed bid/ask books for low-latency trade execution.",
    highlights: [
      "Processed 1M+ orders and executed 760K+ trades in under 10 seconds with O(log n) matching complexity",
      "Implemented limit and market order types with real-time bid-ask spread tracking, partial fill logic, and order cancellation, validating engine accuracy against 500K+ expected trade outputs with automated test scripts",
    ],
    tools: ["C++", "Heaps", "Data Structures"],
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
    featured: false,
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
  "Girls in Electrical Engineering and Computer Science",
  "Tech+ Consulting and Development",
  "EECS 201 Instructional Aide",
  "Math Exam Proctor",
] as const;

export const skills = {
  languages: [
    "Python",
    "C/C++",
    "Bash",
    "SQL",
    "R",
    "Java",
    "C#",
    "JavaScript/TypeScript",
    "HTML/CSS",
    "Swift",
    "Kotlin",
    "Go",
  ],
  tools: [
    "Git",
    "Linux",
    "PyTorch",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "PostgreSQL",
    "GitHub",
    "REST APIs",
  ],
  interests: [
    "Avid Sudoku Solver",
    "Card Game Enthusiast",
    "Dedicated Tennis Player",
    "Music Lover & Passionate Musician",
  ],
} as const;


export const contactCta =
  "Open to internships, research opportunities, and collaborative projects.";

export const currentFocus = [
  "Software engineering in C++ and Python",
  "Core CS: data structures, algorithms, systems",
  "Designing efficient and usable applications",
] as const;
