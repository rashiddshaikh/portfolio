export type SocialLinks = {
  linkedIn: string[];
  github: string[];
  phone: string[];
  email: string[];
};

export const SOCIAL_LINKS: SocialLinks = {
  linkedIn: 'https://www.linkedin.com/in/rashidshaikh-dev'.split(''),
  github: 'https://github.com/rashiddshaikh'.split(''),
  phone: ['+91-', '7304334553'],
  email: ['rashidshaikh.dev', '@gmail.com'],
};

export interface Fact {
  quantity: number;
  quantityPlus: boolean;
  caption: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  mainTitle: string;
  titlePrefix: string;
  titles: string[];
  email: string[];
  phoneNumber: string[];
  shortIntroduction: string;
  introduction: string;
  openToWork: boolean;
  openToRelocating: boolean;
  //two facts max
  facts: Fact[];
  codewarsLink?: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  firstName: 'Rashid',
  lastName: 'Shaikh',
  mainTitle: 'Software Developer',
  titlePrefix: 'Full Stack',
  titles: ['Java Developer', 'Web Developer'],
  email: SOCIAL_LINKS.email,
  phoneNumber: SOCIAL_LINKS.phone,
  shortIntroduction: 'Rashid Shaikh is open for new opportunities',
  introduction: `
  Passionate <strong>Full Stack Java Developer</strong> with expertise in building scalable and efficient web applications.<br>
  Skilled in <strong>Java, Spring Boot, React.js, Next.js,</strong> and <strong>AWS</strong>, focusing on performance, security, and clean architecture.<br>
  Experienced in developing <strong>AI-integrated solutions</strong> and cloud-based microservices that deliver real business impact.<br>
  Dedicated to continuous learning, innovation, and creating software that truly makes a difference.<br>
  <br>
  
  <br><p class="text-lime-500">#open_to_work #open_to_relocation</p>  
  `,
  openToWork: true,
  openToRelocating: false,
  facts: [
    {
      quantity: 7,
      quantityPlus: false,
      caption: 'YEARS OF EXPERIENCE',
    },
    {
      quantity: 30,
      quantityPlus: true,
      caption: 'APPS AND WEBSITES',
    },
  ],
};
