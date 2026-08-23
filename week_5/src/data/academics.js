import { images } from './images';

export const academicSchools = [
  {
    name: "School of Engineering & Applied Sciences",
    description: "Pioneering the future of computing, mechanics, and material sciences through discovery-led instruction.",
    image: images.engineering,
    departments: ["Computer Science", "Electrical Engineering", "Bioengineering", "Mechanical Engineering"],
    link: "/academics/schools"
  },
  {
    name: "Arcade Business School",
    description: "Cultivating business minds, financial modeling mastery, leadership principles, and entrepreneurial ecosystems.",
    image: images.business,
    departments: ["Finance & Economics", "Management Science", "Entrepreneurship", "Analytics & Marketing"],
    link: "/academics/schools"
  },
  {
    name: "School of Humanities & Fine Arts",
    description: "Exploring history, literature, music, and philosophy with deep critical analysis and expressive research.",
    image: images.humanities,
    departments: ["History & Politics", "Comparative Literature", "Philosophy", "Fine Arts & Design"],
    link: "/academics/schools"
  },
  {
    name: "School of Biological & Physical Sciences",
    description: "Seeking to understand physical laws, cellular mechanisms, and interstellar dynamics.",
    image: images.sciences,
    departments: ["Molecular Biology", "Physics & Astronomy", "Chemistry", "Mathematics"],
    link: "/academics/schools"
  }
];

export const undergraduatePrograms = [
  { code: "B.S. CS", name: "Bachelor of Science in Computer Science", duration: "4 Years", description: "Comprehensive study of algorithms, system programming, AI, and cloud architectures." },
  { code: "B.B.A. FIN", name: "Bachelor of Business Administration in Finance", duration: "4 Years", description: "Prepares students for global banking, corporate strategy, and asset management." },
  { code: "B.A. LIT", name: "Bachelor of Arts in Literature & Media Studies", duration: "4 Years", description: "Analyzes narratives across centuries, classical texts, and new digital media channels." },
  { code: "B.S. BIO", name: "Bachelor of Science in Molecular Genetics", duration: "4 Years", description: "Hands-on laboratory training in CRISPR gene editing, cellular biology, and pathology." }
];

export const postgraduatePrograms = [
  { code: "M.S. AI", name: "Master of Science in Artificial Intelligence", duration: "2 Years", description: "Advanced specialization in Deep Learning, Natural Language Processing, and Robotics." },
  { code: "M.B.A. EXEC", name: "Executive Master of Business Administration", duration: "2 Years", description: "Strategic leadership development program designed for working executives." },
  { code: "Ph.D. PHYS", name: "Doctor of Philosophy in Astroparticle Physics", duration: "5 Years", description: "Original research on dark matter detectors and cosmic radiation backgrounds." }
];

export const academicCalendarEvents = [
  { date: "Sept 1, 2026", event: "Fall Term Instruction Begins", type: "Academic" },
  { date: "Oct 12-16, 2026", event: "Midterm Examination Week", type: "Exams" },
  { date: "Nov 25-27, 2026", event: "Thanksgiving Recess", type: "Holiday" },
  { date: "Dec 11, 2026", event: "Fall Term Ends", type: "Academic" },
  { date: "Dec 14-18, 2026", event: "Final Examination Period", type: "Exams" },
  { date: "Jan 11, 2027", event: "Spring Term Instruction Begins", type: "Academic" }
];
