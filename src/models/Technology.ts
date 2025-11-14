export const Technology = [
  // Languages
  'Java',
  'JavaScript',
  'TypeScript',
  'Python',

  // Backend
  'Spring Boot',
  'Node.js',
  'Express.js',

  // Frontend
  'React',
  'Next.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'MUI',

  // Database
  'MySQL',
  'MongoDB',

  // Cloud / DevOps
  'AWS',
  'Docker',
  'Linux',
  'Git',

  // AI / ML
  'TensorFlow',

  // Tools & Design
  'Postman',
  'VS Code',
] as const;

export type TechnologyType = (typeof Technology)[number];
