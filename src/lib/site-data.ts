/**
 * site content and config. edit this file to customize copy and links.
 */

export const site = {
  name: "astrid greene",
  tagline:
    "computer science at the university of michigan, focused on software engineering and machine learning.",
  headshot: "/images/headshot.jpg",
} as const;

export const contact = {
  email: "astridig@umich.edu",
  phone: "929-249-6335",
  linkedin: "https://linkedin.com/in/astridgreene",
  github: "https://github.com/astridigreene",
} as const;

export const education = {
  school: "university of michigan",
  degree: "b.s. in computer science, minor in french",
  location: "ann arbor, mi",
  expectedGraduation: "may 2028",
  gpa: "3.73/4.0",
  honors: "university honors",
  coursework: [
    "operating systems",
    "data structures and algorithms",
    "machine learning",
    "linear algebra",
    "discrete mathematics",
    "computer organization",
    "object oriented programming",
    "calculus i-ii",
    "computer pragmatics",
    "programming concepts",
  ],
} as const;

export const about = {
  bio: `i study computer science at the university of michigan, focusing on data structures, algorithms, and systems. i build software across c++ and python, from low-level implementations to full-stack applications.`,
} as const;

export const experiences = [
  {
    id: "coretek",
    company: "coretek",
    role: "software development intern",
    location: "farmington hills, mi",
    period: "may 2026 – sep 2026",
    bullets: [
      "built an automated expense validation system in python across 5 azure function endpoints with ocr extraction, a 19-rule policy engine, and 10+ ai agent modules, processing 5k+ expense lines annually and saving 500+ hours and $35k+/year",
      "built a deterministic gate routing system that examines report-level line composition and triggers only relevant ai agents per report, reducing unnecessary model calls and keeping agent analysis scoped to flagged subsets",
      "designed deterministic-then-probabilistic validation architecture with worst-wins result aggregation, per-trip segmentation, and confidence-scored ocr fallback handling across 12 edge cases and 2 processing layers",
      "wrote 500+ automated tests across 3 tiers using independent reference oracles and boundary-value coverage, deploying via github actions ci/cd with oidc auth, federated identity credentials, and azure key vault secret rotation",
      "built a fastapi backend with sqlalchemy async, alembic migrations, and apscheduler running salesforce sync, deadline alerts (45/15-day), status reminders, and weekly pipeline summaries on configurable utc schedules",
      "implemented 10+ specialized ai agent modules (hotel folio detection, duplicate receipt analysis, per diem reasonableness, etc.) with a strict safety invariant enforced in the parser: agent verdicts coerced to warnings",
    ],
  },
  {
    id: "tech-plus-dev",
    company: "tech plus development",
    role: "software engineer",
    location: "ann arbor, mi",
    period: "feb 2026 – may 2026",
    bullets: [
      "designed and implemented a role-based authentication system using supabase auth and postgresql, writing 10+ row level security policies to enforce granular access control across 3 user roles (admin, member, recruit)",
      "developed a full-stack internal platform in react, typescript, and vite, featuring member management, attendance tracking, and event scheduling, serving 50+ active club members across 6 project teams",
      "configured full-stack deployment pipeline using github, supabase, and vercel, managing environment variables and api keys across both development and production environments to support continuous deployment workflows",
    ],
  },
  {
    id: "tech-plus",
    company: "tech plus consulting",
    role: "technical analyst",
    location: "ann arbor, mi",
    period: "jan 2026 – may 2026",
    bullets: [
      "built an ai policy chatbot by migrating 200+ client policy documents into a structured google drive and connecting u-m maizey's rest api to embed a searchable chatbot widget directly on the client's password-protected site",
      "resolved data ingestion issues caused by inconsistent document formatting, access-restricted pages, and duplicate file versions, cleaning and standardizing source data across 15+ file types to improve retrieval accuracy and reliability",
      "conducted 6+ stakeholder meetings over a 4-week sprint to define system requirements, identify access constraints, and scope chatbot functionality, reducing the initial feature set by 40% to prioritize high-value policy retrieval",
    ],
  },
  {
    id: "morgan-state",
    company: "morgan state university",
    role: "research assistant",
    location: "",
    period: "june 2023 – aug 2023",
    bullets: [
      'co-authored paper "debunking the curse of dimensionality in a k-nearest neighbors classification problem" with advisor dr. eric sakk, selected as a national semi-finalist in the junior science and humanities symposium',
      "researched curse of dimensionality in k-nearest neighbors, running controlled python experiments to show that in uniform, hard-confidence data sets, increasing dimensionality can improve k-nn classification performance",
      "designed k-nn experiments in python on datasets of 1000+ points, varying k-values and dimensions (2d to 15d) to test classification accuracy, with numpy, scikit-learn, and matplotlib for data generation, training, and visualization",
    ],
  },
  {
    id: "kode-klossy",
    company: "kode with klossy",
    role: "junior developer / team lead",
    location: "new york, ny",
    period: "june 2023 – aug 2023",
    bullets: [
      "led a 4-person team to design and develop a website addressing workplace discrimination",
      "acted as lead debugger across front-end and back-end to support teammates and improve reliability",
      "implemented a user story submission feature that collected over 100 contributions and published select narratives to spotlight underrepresented experiences",
    ],
  },
] as const;

/** sortDate: ISO YYYY-MM-DD for chronological ordering (display `date` stays human-readable) */
export const projects = [
  {
    id: "dog-classification",
    title: "deep learning dog breed classification",
    date: "mar 2026",
    sortDate: "2026-03-24",
    description:
      "custom pytorch cnn and vision transformer architectures for 10-class dog breed image classification across a 9,000-image dataset.",
    highlights: [
      "implemented transformer encoders, multi-head self-attention, and scaled dot-product attention",
      "built transfer learning pipelines with adam optimization, checkpoint serialization, tensor normalization, and 256-patch embeddings, training models over 10,000+ update iterations",
    ],
    tools: ["pytorch", "cnns", "vision transformers", "python"],
    featured: true,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "icu-mortality-prediction",
    title: "icu mortality prediction model",
    date: "feb 2026",
    sortDate: "2026-02-18",
    description:
      "clinical ml pipeline predicting icu mortality from sparse ehr time-series data across 12,000+ admissions and 40+ physiological variables.",
    highlights: [
      "transformed sparse ehr time-series data through normalization, imputation, statistical aggregation, and feature engineering workflows",
      "executed 5-fold cross-validation and 1,000+ bootstrap resampling iterations across logistic regression, kernel ridge regression, and rbf kernel models, benchmarking auroc, sensitivity, and specificity under imbalance conditions",
    ],
    tools: ["python", "scikit-learn", "numpy", "pandas"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "order-book",
    title: "order book simulator",
    date: "oct 2025",
    sortDate: "2025-10-15",
    description:
      "price-time-priority central limit order book matching engine in c++ using priority queue (heap-backed) bid/ask books for low-latency trade execution.",
    highlights: [
      "processed 1m+ orders and executed 760k+ trades in under 10 seconds (74k+ orders/s) with o(log n) average matching complexity",
      "implemented limit and market order types with real-time bid-ask spread tracking, partial fill logic, and order cancellation, validating engine accuracy against 500k+ expected trade outputs with automated test scripts",
    ],
    tools: ["c++", "heaps", "data structures"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "personal-website",
    title: "personal website",
    date: "march 2026",
    sortDate: "2026-03-01",
    description:
      "personal portfolio built with modern web tooling. responsive layout, scroll and interaction-driven animation, and structured sections for experience, projects, and contact.",
    highlights: [
      "responsive design across breakpoints",
      "animation-heavy ui with framer motion",
      "structured content sections with clear hierarchy",
    ],
    tools: ["next.js", "typescript", "tailwind css", "framer motion"],
    featured: false,
    githubUrl: "https://github.com/astridigreene/personal-website",
    liveUrl: null as string | null,
  },
  {
    id: "sudoku-solver",
    title: "sudoku solver",
    date: "nov 2025",
    sortDate: "2025-11-15",
    description:
      "c++ solver for 9x9 sudoku. represents the board as a 9x9 grid, validates rows, columns, and 3x3 boxes, tracks candidate values for open cells, and solves via repeated constraint checks and possibility elimination.",
    highlights: [
      "81-cell board with row, column, and box validity checks",
      "candidate tracking and constraint propagation",
      "solves nyt easy puzzles in under a second; runtime measured with chrono",
    ],
    tools: ["c++", "stl", "chrono"],
    featured: false,
    githubUrl: "https://github.com/astridigreene/sudoku-solver",
    liveUrl: null as string | null,
  },
  {
    id: "naive-bayes",
    title: "naive bayes text classifier",
    date: "may 2025",
    sortDate: "2025-05-01",
    description:
      "multivariate bernoulli naive bayes classifier to classify posts by topic using log-probability scores.",
    highlights: [
      "determined labels using highest log-probability score",
      "abstract data types for efficient file parsing and word-frequency detection",
      "generates per-label log-likelihood maps used for automated topic classification",
    ],
    tools: ["c++", "probability", "adts"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "bst-map",
    title: "bst-based map container",
    date: "june 2025",
    sortDate: "2025-06-01",
    description:
      "binary search tree with sorting invariants and an ordered map adt for efficient key-value storage.",
    highlights: [
      "sorting invariants, traversal logic, functors, templates, and recursion",
      "o(log n) insertion and lookup performance",
    ],
    tools: ["c++", "bst", "templates"],
    featured: false,
    githubUrl: null as string | null,
    liveUrl: null as string | null,
  },
  {
    id: "tic-tac-toe",
    title: "tic-tac-toe",
    date: "oct 2021",
    sortDate: "2021-10-01",
    description:
      "interactive tic-tac-toe game in python using turtle graphics. keyboard-controlled for both players.",
    highlights: [
      "board, xs, and os drawn with turtle; win and tie detection",
      "scoreboard, reset, and replay with basic error checking",
    ],
    tools: ["python", "turtle"],
    featured: false,
    githubUrl: "https://github.com/astridigreene/tic-tac-toe",
    liveUrl: null as string | null,
  },
] as const;

/** projects ordered by sortDate descending (most recent first). use this for the projects ui. */
export const projectsByDateDesc = [...projects].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate)
);

export const extracurriculars = [
  "girls in electrical engineering and computer science",
  "tech+ consulting and development",
  "eecs 201 instructional aide",
  "math exam proctor",
] as const;

export const skills = {
  languages: [
    "python",
    "c/c++",
    "bash",
    "sql",
    "r",
    "java",
    "c#",
    "javascript/typescript",
    "html/css",
    "swift",
    "kotlin",
    "go",
  ],
  tools: [
    "git",
    "linux",
    "pytorch",
    "scikit-learn",
    "numpy",
    "pandas",
    "matplotlib",
    "postgresql",
    "github",
    "rest apis",
    "node.js",
    "react",
    "azure",
    "docker",
    "vercel",
    "vite",
  ],
  interests: [
    "avid sudoku solver",
    "card game enthusiast",
    "dedicated tennis player",
    "music lover & passionate musician",
  ],
} as const;


export const contactCta =
  "open to internships, research opportunities, and collaborative projects.";

export const currentFocus = [
  "software engineering in c++ and python",
  "core cs: data structures, algorithms, systems",
  "designing efficient and usable applications",
] as const;
