/**
 * Site content and config. Edit this file to customize copy, links, and resume.
 */

export const site = {
  name: "Astrid Greene",
  tagline:
    "Computer Science at the University of Michigan, focused on software engineering and machine learning.",
  headshot: "/images/headshot.jpeg",
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
  gpa: "3.8/4.0",
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
    id: "tech-plus-dev",
    company: "Tech Plus Development Team",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "2025 – Present",
    bullets: [
      "Built a full-stack club platform for Tech Plus serving 300+ members and about 20 clients. Multi-page responsive frontend and backend architecture with a Node/Express-style API, REST endpoints, auth, and scalable data models for members, projects, events, and attendance.",
      "Built an internal portal for 300+ users with auth, protected routes, and modular dashboards for member directory, alumni graph, project assignments, attendance, and resources.",
      "Designed JSON-based data models with a path to migrate to PostgreSQL and cloud deployment.",
    ],
  },
  {
    id: "tech-plus",
    company: "Tech Plus Consulting",
    role: "Technical Analyst",
    location: "Ann Arbor, MI",
    period: "Jan 2026 – Present",
    bullets: [
      "Designed technical requirements for an internal AI policy chatbot using retrieval-augmented generation (RAG), including document ingestion, embedding, vector search, and source attribution",
      "Evaluated data quality, access control, and update workflows to ensure accurate, auditable, and maintainable AI responses from sanctioned policy sources",
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
      'Co-authored a paper titled "Debunking The Curse of Dimensionality in a K-Nearest Neighbors Classification Problem"',
      "Selected as a Semi-Finalist in the Junior Science and Humanities Symposium",
      "Researched k-nearest neighbors and the curse of dimensionality using Python experiments",
      "Designed experiments on datasets with 1000+ points, varying k-values and dimensions from 2D to 15D",
      "Used NumPy, Scikit-learn, and Matplotlib for data generation, training, and visualization",
    ],
  },
] as const;

export const projects = [
  {
    id: "order-book",
    title: "Order Book Simulator",
    date: "Oct 2025",
    description:
      "Price-time-priority order-matching engine built with priority queues. Handles high throughput with O(log n) trade matching.",
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
    date: "November 2025",
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
  "BS Computer Science (Minor: French) at University of Michigan. Experience in full-stack development, technical analysis, RAG systems, and research. Strong foundation in data structures, algorithms, and ML.";

export const resumeHighlights = [
  "B.S. Computer Science, Minor in French, University of Michigan",
  "Full-stack and systems-level development",
  "Research and data-driven projects",
  "Data structures, algorithms, and ML",
] as const;

export const contactCta =
  "Open to internships, research opportunities, and collaborative projects. Get in touch below.";

export const currentFocus = [
  "Side projects in C++ and Python",
  "Data structures, algorithms, and systems",
  "Clean implementation and things people can use",
] as const;
