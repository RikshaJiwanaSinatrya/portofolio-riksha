export default {
  nav: {
    home: 'Beranda',
    about: 'Tentang',
    projects: 'Project',
    contact: 'Kontak',
  },
  hero: {
    greeting: 'Halo, aku',
    subtitle: 'Student Developer yang passionate di frontend development. Aku suka banget ngulik UI/UX, bikin animasi yang smooth, dan ngejar performa terbaik di setiap project. Selalu haus belajar hal baru dan challenger diri sendiri untuk bikin sesuatu yang beda.',
    ctaPrimary: 'Lihat Project',
    ctaSecondary: 'Hubungi Saya',
  },
  about: {
    label: 'Tentang Saya',
    statement: 'Aku suka banget bikin interface yang cepat, accessible, dan enak dipandang.',
    detail1: 'Sekarang aku masih mahasiswa yang fokus di frontend development. Aku selalu perhatiin detail kecil di setiap project yang aku kerjain.',
    detail2: 'Yang lagi aku pelajari: design systems, motion design, dan batas antara estetika sama engineering.',
    focusAreas: [
      {
        title: 'Frontend Development',
        description: 'Membangun interface yang responsive dan performa tinggi dengan framework modern dan clean code.',
        icon: 'code',
      },
      {
        title: 'UI/UX Design',
        description: 'Mendesain user experience yang intuitif dengan perhatian pada visual hierarchy dan micro-interactions.',
        icon: 'design',
      },
      {
        title: 'Motion & Animation',
        description: 'Menghidupkan interface dengan animasi yang smooth dan purposeful yang meningkatkan usability.',
        icon: 'motion',
      },
    ],
  },
  skills: {
    label: 'Keahlian',
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
    label: 'Project',
    items: [
      {
        name: 'Project Alpha',
        description: 'Design system & component library untuk mempercepat development UI yang konsisten.',
        tags: ['react', 'design-system', 'typescript'],
        slug: 'project-alpha',
      },
      {
        name: 'Project Beta',
        description: 'Platform e-commerce dengan performa tinggi dan desain yang clean.',
        tags: ['nextjs', 'tailwind', 'stripe'],
        slug: 'project-beta',
      },
      {
        name: 'Project Gamma',
        description: 'Open source developer tooling untuk meningkatkan produktivitas.',
        tags: ['nodejs', 'cli', 'open-source'],
        slug: 'project-gamma',
      },
    ],
  },
  contact: {
    label: 'Kontak',
    headline: 'Ada yang mau dibicarakan? Yuk ngobrol.',
    description: 'Aku selalu terbuka untuk diskusi project baru, ide kreatif, atau kesempatan untuk jadi bagian dari visi kamu.',
    email: 'hello@riksha.dev',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '\u00a9 2026 Riksha. Dibuat dengan React.',
    tagline: 'Menciptakan pengalaman digital dengan penuh semangat.',
  },
}
