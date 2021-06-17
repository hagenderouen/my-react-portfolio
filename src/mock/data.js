import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '<Hagen/> | Full-stack Web Developer | Scrum Master', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hagen DeRouen',
  subtitle: 'I design and build things',
  cta: 'Let me show you',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'password-screenshot.png',
    title: 'Password Generator',
    info: 'Generate a random password from a select criteria.',
    info2: '',
    url: 'https://hagenderouen.github.io/js-password-generator/',
    repo: 'https://github.com/hagenderouen/js-password-generator',
  },
  {
    id: nanoid(),
    img: 'codequiz-screenshot.png',
    title: 'Code Quiz',
    info: 'Test your coding knowledge.',
    info2: '',
    url: 'https://hagenderouen.github.io/code-quiz/',
    repo: 'https://github.com/hagenderouen/code-quiz',
  },
  {
    id: nanoid(),
    img: 'scheduler-screenshot.png',
    title: 'Workday Scheduler',
    info: 'Save your important work events in a simple calendar.',
    info2: '',
    url: 'https://hagenderouen.github.io/workday-scheduler/',
    repo: 'https://github.com/hagenderouen/workday-scheduler',
  },
  {
    id: nanoid(),
    img: 'techblog-screenshot.png',
    title: 'TechBlog',
    info: 'An open source blogging site.',
    info2: '',
    url: 'https://hagen-tech-blog.herokuapp.com/',
    repo: 'https://github.com/hagenderouen/tech-blog',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Download my resume',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hagen_derouen',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hagen-derouen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hagenderouen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
