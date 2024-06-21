import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  threejs,
  python,
  usc,
  nipyum,
  binhi,
  logo,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Asterix Logo",
    icon: logo,
  },
  {
    title: "Web Development",
    icon: web,
  },
  // {
  //   title: "React Frameworks",
  //   icon: mobile,
  // },
  {
    title: "Networking Services",
    icon: backend,
  },
  {
    title: "Machine Learning and AI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  }
];

const projects = [
  {
    name: "USC Infosite (Beta)",
    description:
      "The USC Student-Led Infosite is developed and managed by the USC - Committee on Innovation and Tech Empowerment. CITE is established to manage the information system of the USC, and to bring forward innovation that are beneficial to the students and the university.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: usc,
    web_link: 'https://fastnetphbyrus.com/',
    source_code_link: "https://github.com/r-amee/USCINFOSITE-NA/blob/main/README.md",
  },
  {
    name: "Nippon Yum",
    description:
      "Discover NipponYum (NipYum), a responsive Japanese restaurant website template featuring online ordering and payment. Our project showcases our user-friendly design. The website is optimized for different devices and screen sizes, making it accessible to a broader range of customers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nipyum,
    web_link: '#',
    source_code_link: "#",
  },
  {
    name: "BINHI Website",
    description:
      "BINHI is an incubation program that aims to support and nurture the growth of startups in the Philippines. The website is designed to provide information about the program and its services. It features a clean and modern design that is easy to navigate. The website is built using Next.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: binhi,
    web_link: 'https://binhi.wvsu.edu.ph',
    source_code_link: "#",
  },
];

export { services, technologies, projects };
