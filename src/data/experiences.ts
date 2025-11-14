import { Experience } from '@/models/Experience';


export const PRESENT = 'present';
export const EXP_DIVIDER = '●';

export const EXPERIENCES: Experience[] = [
  {
    start: 'Feb 2025',
    end: 'Present',
    title: 'Java Developer',
    company: {
      name: 'HulkHire Tech',
      logo: '/web/hulkhire.png',
      website: 'https://hulkhire.com',
    },
    location: 'Remote',
    technologies: [
      'Java',
      'Spring Boot',
      'REST API',
      'AWS EC2',
      'AWS RDS',
      'ActiveMQ',
      'MySQL',
      'JUnit',
      'Mockito',
    ],
    achievements: [
      'Collaborated with backend team to integrate Stripe payment gateway into Spring Boot microservices, improving transaction reliability and security.',
      'Enhanced API performance by optimizing validation logic and implementing asynchronous event handling using ActiveMQ.',
      'Wrote JUnit-based unit tests to ensure reliability and reduce regression defects.',
      'Participated in Agile sprints and performed code reviews to maintain RESTful and SOLID coding standards.',
      'Deployed and monitored microservices on AWS EC2/RDS environments.',
    ],
  },
];
