import { Project } from '@/models/project';

export const PROJECTS_LAST_UPDATED = 'September 2025';

export const PROJECTS: Project[] = [
  {
    type: 'backend',
    name: 'PayFlow Gateway',
    description: `A secure and efficient payment processing microservice integrating Stripe APIs with Java Spring Boot.</br>
    Handles transaction workflows, webhook management, and error logging for scalable payment systems.`,
    image: '/web/hulkhire_logo.png',
    image: '/web/hulkhire_logo.png',
    link: 'https://github.com/rashiddshaikh/stripe-payment-microservice',
    technologies: ['Java', 'Spring Boot', 'Stripe API', 'REST APIs', 'Postman'],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2025,
  },

  {
    type: 'backend',
    name: 'PeopleMatrix Manager',
    description: `A Spring Boot-based enterprise application for managing employees, departments, and roles with robust CRUD and REST API support.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/employee-management-system',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'REST APIs'],
    company: 'Academic Project',
    client: 'University of Mumbai',
    year: 2025,
  },

  {
    type: 'web',
    name: 'MailCraft AI',
    description: `An AI-powered email generation extension designed to help users craft clean, professional, and personalized emails instantly.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/email-writer',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenAI API'],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2025,
  },

  {
    type: 'web',
    name: 'InterviewGenius AI',
    description: `An AI-based mock interview assistant that generates technical questions and evaluates answers using advanced generative AI models.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/Ai-Interview-Mocker',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Google Generative AI',
      'Drizzle ORM',
      'Clerk',
    ],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2025,
  },

  {
    type: 'ml',
    name: 'DeepWave Classifier',
    description: `A machine learning system that classifies sonar signals to distinguish between rocks and underwater mines.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/sonar-rock-vs-mine-detector',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    company: 'Machine Learning Project',
    client: 'University Research',
    year: 2024,
  },

  {
    type: 'ml',
    name: 'WildVision AI Classifier',
    description: `A machine learning web app that classifies animal species from uploaded images using TensorFlow and CNN models.</br>
    Includes a Flask API backend with an interactive web UI.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/animal-species-predictor',
    technologies: [
      'Python',
      'TensorFlow',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2024,
  },

  {
    type: 'web',
    name: 'RideSwift Platform',
    description: `A real-time ride booking platform built with TypeScript and React.</br>
    RideSwift provides user management, ride tracking, and payment handling with a scalable Node.js + Express backend.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/ride-now-booking-system',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2024,
  },

  {
    type: 'web',
    name: 'KicksGalaxy',
    description: `A responsive e-commerce website for browsing, filtering, and purchasing footwear online.</br>
    Developed with HTML, CSS, and JavaScript for a smooth shopping experience.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/online-shoe-store',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2023,
  },

  {
    type: 'web',
    name: 'GitHub Profile Explorer',
    description: `A lightweight tool to search any GitHub username and instantly view public profile details using the GitHub REST API.</br>
    Built with HTML, Tailwind CSS, and JavaScript.`,
    image: '/favicon.ico',
    link: 'https://github.com/rashiddshaikh/github-profile-viewer',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub REST API'],
    company: 'Personal Project',
    client: 'Open Source',
    year: 2023,
  },
];

export const FEATURED_PROJECTS = [
  PROJECTS[0],
  PROJECTS[1],
  PROJECTS[2],
  PROJECTS[3],
  // PROJECTS[5],
  // PROJECTS[6],
];
