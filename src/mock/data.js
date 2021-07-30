import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '<Hagen/> | Full-stack Web Developer | Scrum Master', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hagen DeRouen',
  subtitle: 'I design and build websites and apps',
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
    img: 'realtime-chat-screenshot.png',
    title: 'Real-time Chat',
    info: 'Join a private room and send messages in real-time.',
    info2:
      'Built messaging with the WebSocket protocol featuring Geolocation. Deployed to Heroku. Stack: Node, Express.',
    url: 'https://hagen-chat-app.herokuapp.com/',
    repo: 'https://github.com/hagenderouen/my-chat-app',
  },
  {
    id: nanoid(),
    img: 'task-api-screenshot.png',
    title: 'Task Manager API',
    info: 'An API to manage your to-do lists.',
    info2:
      'Developed middleware for database queries, authentication, and data validation. Structured REST API. Stack: Node, Express.',
    url: 'https://hagen-task-manager.herokuapp.com/',
    repo: 'https://github.com/hagenderouen/task-manager-api',
  },
  {
    id: nanoid(),
    img: 'weather-screenshot.png',
    title: 'Weather Geolocation',
    info: 'Get real-time weather by search or geolocation.',
    info2:
      'Integrated weather data from WeatherStack API and geocoding with MapBox API. Deployed to Heroku. Stack: Node, Express.',
    url: 'https://hagen-weather-application.herokuapp.com/',
    repo: 'https://github.com/hagenderouen/node-weather-website',
  },
  {
    id: nanoid(),
    img: 'password-screenshot.png',
    title: 'Password Generator',
    info: 'Generates a random password from a select criteria.',
    info2: 'Developed with vanilla JavaScript. Deployed to GitHub pages.',
    url: 'https://hagenderouen.github.io/js-password-generator/',
    repo: 'https://github.com/hagenderouen/js-password-generator',
  },
  {
    id: nanoid(),
    img: 'codequiz-screenshot.png',
    title: 'Code Quiz',
    info: 'A simple quiz app developed with vanilla JavaScript.',
    info2: 'Developed views and workflow. Deployed to GitHub pages.',
    url: 'https://hagenderouen.github.io/code-quiz/',
    repo: 'https://github.com/hagenderouen/code-quiz',
  },
  {
    id: nanoid(),
    img: 'scheduler-screenshot.png',
    title: 'Workday Scheduler',
    info: 'Save your important work events in a simple calendar.',
    info2: 'Developed with vanilla JavaScript. Deployed to GitHub pages.',
    url: 'https://hagenderouen.github.io/workday-scheduler/',
    repo: 'https://github.com/hagenderouen/workday-scheduler',
  },
  {
    id: nanoid(),
    img: 'techblog-screenshot.png',
    title: 'TechBlog',
    info: 'An open source blogging site.',
    info2:
      'Developed using the model-view-controller (MVC) design pattern. Includes user login and authentication with password security (hashing). Deployed to Heroku. Stack: Node, Express, Handlebars (views), MySQL.',
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
