import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'pepe', // e.g: 'Name | Developer'
  lang: 'knmrew', // e.g: en, es, fr, jp
  description: 'ergregerregr', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Luciano Ojeda',
  subtitle: 'I`m Full Stack Web Developer and Civil Engineer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'foto maletin.jpg',
  paragraphOne:
    'Full Stack Developer and Civil Engineer. Passionate about algorithms and data structures, problem solving and optimization.',
  paragraphTwo:
    'I have experience in the backend and frontend development. Interested in devising a better problem‑solving method for challenging tasks, and learning new technologies and tools if the need arises.',
  paragraphThree: 'I´m always looking for new challenges.my motto is learning by doing.',
  resume: 'https://lucianoojeda36.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce.jpg',
    title: 'Ecommerce Deliviry Restaurant',
    info: 'Project about a food deliviry ecommerce based on the rappi platform.',
    info2:
      'Carried out in Henry Labs, using ReactJS |Redux |React Hooks | Material-UI | NodeJS |Express | Sequelize | PostgresSQL | Firebase |Recharts',
    url: 'https://ecommerce-restaurant.vercel.app/',
    repo: 'https://github.com/lucianoojeda36/Ecommerce-Restaurant', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Netflix-clon.jpg',
    title: 'Netflix-clon',
    info: 'Project about a Movies platform, based on Netflix.',
    info2: 'Carried out using React_Native |Redux |NodeJS |MongoDb',
    url: '',
    repo: 'https://github.com/lucianoojeda36/Clon-de-Netflix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'videogames.jpg',
    title: 'Videogames',
    info: 'project, consuming and integrating Rawng APIs',
    info2:
      'Carried out using ReactJS |Redux |React Hooks | NodeJS |Express | Sequelize | PostgresSQL ',
    url: 'https://gestor-precios.vercel.app/',
    repo: 'https://github.com/lucianoojeda36/gestor-precios', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gestor-precios.jpg',
    title: 'Gestor de Precios',
    info: 'project based on a price manager for a business,through an excel template.',
    info2: 'Carried out using ReactJS ',
    url: 'https://gestor-precios.vercel.app/',
    repo: 'https://github.com/lucianoojeda36/gestor-precios', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lucianoojeda36@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Lucho9911',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucianoojeda/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lucianoojeda36',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
