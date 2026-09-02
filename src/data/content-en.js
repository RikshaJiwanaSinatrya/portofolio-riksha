export default {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    subtitle: 'Student Developer passionate about frontend development. I love crafting UI/UX, building smooth animations, and chasing peak performance in every project. Always eager to learn something new and challenge myself to create something different.',
    ctaPrimary: 'View Work',
    ctaSecondary: 'Get in Touch',
  },
  about: {
    label: 'About Me',
    statement: 'I love building interfaces that are fast, accessible, and visually pleasing.',
    statementHighlights: ['fast', 'accessible', 'visually pleasing'],
    statementEyebrow: 'Why I code',
    detail1: "I'm a student focused on frontend development with deep attention to visual craft and interaction design. Every project I work on gets the small-detail treatment.",
    detail2: "Currently learning: design systems, motion design, and the edge between aesthetics and engineering.",
    identity: {
      name: 'Riksha Jiwana Sinatrya',
      role: 'Student · Frontend Developer',
      based: 'Indonesia (UTC+7)',
      status: 'Open to collaboration',
    },
    stats: [
      { value: 2, suffix: '+', label: 'Years of crafting' },
      { value: 3, suffix: '', label: 'Core focus areas' },
      { value: 100, suffix: '%', label: 'Curiosity' },
    ],
    focusAreas: [
      {
        title: 'Frontend Development',
        description: 'Crafting responsive, performant interfaces with modern frameworks and clean code architecture.',
        icon: 'code',
      },
      {
        title: 'UI/UX Design',
        description: 'Designing intuitive user experiences with attention to visual hierarchy and micro-interactions.',
        icon: 'design',
      },
      {
        title: 'Motion & Animation',
        description: 'Bringing interfaces to life with smooth, purposeful animations that enhance usability.',
        icon: 'motion',
      },
    ],
  },
  skills: {
    label: 'Skills',
    intro: 'The technology I use to build.',
    unit: 'skills',
    categories: [
      {
        name: 'Frontend',
        items: [
          { name: 'React', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'TypeScript', level: 75 },
          { name: 'Next.js', level: 70 },
        ],
      },
      {
        name: 'Styling',
        items: [
          { name: 'Tailwind CSS', level: 90 },
          { name: 'CSS/SASS', level: 85 },
          { name: 'Framer Motion', level: 80 },
        ],
      },
      {
        name: 'Tools',
        items: [
          { name: 'Git', level: 80 },
          { name: 'Figma', level: 75 },
          { name: 'Vite', level: 85 },
          { name: 'Node.js', level: 65 },
        ],
      },
    ],
  },
  projects: {
    label: 'Projects',
    intro: 'Projects born from curiosity.',
    cta: 'Read the case study',
    items: [
      {
        name: 'Project Alpha',
        description: 'A design system & component library for fast, consistent UI development.',
        tags: ['react', 'design-system', 'typescript'],
        slug: 'project-alpha',
      },
      {
        name: 'Project Beta',
        description: 'High-performance e-commerce platform with a clean, modern design.',
        tags: ['nextjs', 'tailwind', 'stripe'],
        slug: 'project-beta',
      },
      {
        name: 'Project Gamma',
        description: 'Open source developer tooling to boost productivity.',
        tags: ['nodejs', 'cli', 'open-source'],
        slug: 'project-gamma',
      },
    ],
  },
  contact: {
    label: 'Contact',
    intro: 'Always happy for a casual chat.',
    prompt: 'send_message --start',
    headline: 'Have something in mind? Let\u2019s talk.',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    email: 'hello@riksha.dev',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '\u00a9 2026 Riksha. Built with React.',
    tagline: 'Crafting digital experiences with passion.',
  },
}
