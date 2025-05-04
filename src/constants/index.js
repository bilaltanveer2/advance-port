/* eslint-disable no-unused-vars */
import {
  article1,
  article2,
  article3,
  article4,
  article5,
  backend,
  cmb,
  cnpc,
  creator,
  css,
  docker,
  git,
  golang,
  herobgPreview,
  html,
  ipmanage,
  ipmanageBackend,
  javascript,
  knownsec,
  linux,
  mobile,
  mongodb,
  mysql,
  preview,
  python,
  reactjs,
  redis,
  redux,
  s360,
  spark,
  tailwind,
  typescript,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    titleKey: 'navBar.about',
  },
  {
    id: 'work',
    titleKey: 'navBar.work',
  },
  {
    id: 'tech',
    titleKey: 'navBar.tech',
  },
  {
    id: 'project',
    titleKey: 'navBar.project',
  },
  {
    id: 'blog',
    titleKey: 'navBar.blog',
  },
  {
    id: 'contact',
    titleKey: 'navBar.contact',
  },
];

const services = [
  {
    title: 'about.cardTitle.0',
    icon: web,
  },
  {
    title: 'about.cardTitle.1',
    icon: mobile,
  },
  {
    title: 'about.cardTitle.2',
    icon: backend,
  },
  {
    title: 'about.cardTitle.3',
    icon: creator,
  },
];
const socials = [
  {
    name: 'github',
    url: 'https://github.com/bilaltanveer2',
  },
  {
    name: 'facebook',
    url: 'https://www.instagram.com/code._with_bilal/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'wechat',
    url: 'https://api.whatsapp.com/send/?phone=923105445335&text&type=phone_number&app_absent=0',
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Spark',
    icon: spark,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'typescript',
    icon: typescript,
  },
  {
    name: 'tailwind',
    icon: tailwind,
  },
  {
    name: 'redux',
    icon: redux,
  },
  {
    name: 'antd',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
];

export const skills = [
  {
    Stack: 'tech.skill.0', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'tech.skill.1',
    progressPercentage: '90',
  },
  {
    Stack: 'tech.skill.2',
    progressPercentage: '50',
  },
];

const experiences = [
  {
    title: 'experience.detail.0.title',
    company_name: 'experience.detail.0.company_name',
    icon: cnpc,
    iconBg: '#E6DEDD',
    date: 'experience.detail.0.date',
    points: 'experience.detail.0.points',
  },
  {
    title: 'experience.detail.1.title',
    company_name: 'experience.detail.1.company_name',
    icon: cmb,
    iconBg: '#E6DEDD',
    date: 'experience.detail.1.date',
    points: 'experience.detail.1.points',
  },
  {
    title: 'experience.detail.2.title',
    company_name: 'experience.detail.2.company_name',
    icon: knownsec,
    iconBg: '#E6DEDD',
    date: 'experience.detail.2.date',
    points: 'experience.detail.2.points',
  },
  {
    title: 'experience.detail.3.title',
    company_name: 'experience.detail.3.company_name',
    icon: '',
    iconBg: '#E6DEDD',
    date: 'experience.detail.3.date',
    points: 'experience.detail.3.points',
  },
  {
    title: 'experience.detail.4.title',
    company_name: 'experience.detail.4.company_name',
    icon: s360,
    iconBg: '#E6DEDD',
    date: 'experience.detail.4.date',
    points: 'experience.detail.4.points',
  },
];

const projects = [
  {
    name: 'work.card.0.name',
    description: 'work.card.0.description',
    tags: [
      {
        name: 'react',
        color: 'text-cyan-500', // 青色
      },
      {
        name: 'threejs',
        color: 'text-red-500', // 红色
      },
      {
        name: 'tailwindcss',
        color: 'text-orange-500', // 橙色
      },
    ],
    image: preview,
    source_code_link: 'https://github.com/bilaltanveer2',
  },
  {
    name: 'work.card.1.name',
    description: 'work.card.1.description',
    tags: [
      {
        name: 'html, js , css',
        color: 'text-blue-500', // 蓝色
      },
      {
        name: 'mongodb',
        color: 'text-green-500', // 绿色
      },
      {
        name: 'fastapi',
        color: 'text-pink-500', // 粉红色
      },
    ],
    image: ipmanageBackend,
    source_code_link: 'https://github.com/bilaltanveer2/assistant',
  },
  {
    name: 'work.card.2.name',
    description: 'work.card.2.description',
    tags: [
      {
        name: 'react',
        color: 'text-cyan-500', // 青色
      },
      {
        name: 'threejs',
        color: 'text-purple-500', // 紫色
      },
      {
        name: 'tailwindcss',
        color: 'text-yellow-500', // 黄色
      },
    ],
    image: ipmanage,
    source_code_link: 'https://github.com/bilaltanveer2/portfoilo',
  },
];

const blogs = [
  {
    title: "Echoes of Time",
    description:
      "A breathtaking view captured in time, where every memory tells a story of its own — vivid, timeless, unforgettable.",
    tags: [
      {
        "name": "like",
        "icon": "👍",
        "color": "green"
      },
      {
        "name": "comment",
        "icon": "💬",
        "color": "blue"
      }
    ],
    image: article1,
    articleLink: '',
  },
  {
    title: "Frames of Forever",
    description:
      "The serenity captured in these frames speaks louder than words — moments frozen in their purest form.",
    tags: [
      {
        "name": "like",
        "icon": "👍",
        "color": "green"
      },
      {
        "name": "comment",
        "icon": "💬",
        "color": "blue"
      }
    ],
    image: article2,
    articleLink: '',
  },
  {
    title: "Whispers of the Lens",
    description:
      "Every click whispers a story, every shot holds a thousand emotions — where every lens captures not just images, but feelings.",
    tags: [
      {
        "name": "like",
        "icon": "👍",
        "color": "green"
      },
      {
        "name": "comment",
        "icon": "💬",
        "color": "blue"
      }
    ],
    image: article3,
    articleLink: '',
  },
  {
    title: "Flickers of Life",
    description:
      "In each frame, there's a heartbeat, a flicker of life that tells a story of dreams, desires, and memories.",
    tags: [
      {
        "name": "like",
        "icon": "👍",
        "color": "green"
      },
      {
        "name": "comment",
        "icon": "💬",
        "color": "blue"
      }
    ],
    image: article4,
    articleLink: '',
  },
  {
    title: "Timeless Stories in Motion",
    description:
      "Captured moments that live forever in the frame — stories told through the beauty of motion and stillness.",
    tags: [
      {
        "name": "like",
        "icon": "👍",
        "color": "green"
      },
      {
        "name": "comment",
        "icon": "💬",
        "color": "blue"
      }
    ],
    image: article5,
    articleLink: '',
  },
];

const githubRepos = {
  show: true,
  heading: 'Recent Projects',
  username: 'ayueaa', //i.e."johnDoe12Gh"
  length: 4,
  specfic: [],
};

const thisProject = {
  name: 'react-developer-portfolio',
  githubLink: 'https://bilal-tanveer.vercel.app/',
  description: 'Portfolio website create by ayuea',
};

export { blogs, experiences, githubRepos, projects, services, socials, technologies, thisProject };


