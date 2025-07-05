import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  python,
  gearXpert,
  chatbot,
  project2,
  project3,
  express,
  aws,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
} from '../assets'
// Import EPAM Systems icon separately
import epamIcon from "../assets/tech/epam.png";


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Agent Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  { name: "AI Agent",
    icon: chatbot,},
  {
    name: "CSS 3",
    icon: css,
  },
  { name: "Python",
    icon: python,},
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
 {
    title: "Python Developer Intern",
    company_name: "EPAM Systems",
    icon: epamIcon,
    iconBg: "#fff",
    date: "July 2025 - Present",
    points: [
      "Gaining practical experience in Python web development and frameworks.",
      "Working with relational (SQL & NoSQL) databases and Object-Relational Mappers (ORMs).",
      "Exploring GenAI capabilities for Python engineers.",
      "Strengthening cloud computing knowledge with leading cloud providers.",
      "Developing skills in RESTful API design and networking fundamentals.",
      "Adopting engineering excellence (EngX) practices.",
      "Collaborating with multi-national teams and contributing to innovative projects.",
      "Learning from top-notch educational content designed by experienced Python specialists.",
      "Building a strong foundation for further specialization and career growth.",
    ],
  },
];


const projects = [
  {
    name: "🚀 AI Content Generator",
    description:
      "An end-to-end AI-powered content generation platform that creates blog posts, emails, and images using OpenAI. Built with a full-stack architecture, it features JWT-based authentication, daily token limits, user profile persistence, and image/text saving — all containerized with Docker for smooth deployment.\n\n🔧 Tools & Frameworks\nFrontend: React, Next.js, Tailwind CSS, TypeScript\nBackend: FastAPI, Pydantic, SQLAlchemy\nAI Integration: OpenAI API, LangChain PromptTemplate\nDatabase: PostgreSQL, pgAdmin\nAuthentication: JWT, OAuth2\nDevOps: Docker, Docker Compose\nOther: ESLint, Prettier, RESTful APIs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "teal-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "langchain",
        color: "purple-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Predaotor/AI-content-Generator",
    live_link: "https://ai-content-generator-blush.vercel.app/", // <-- Added live link
  },
  {
    name: "Marketplace WebApp",
    description:
      "Designed and built a full-stack marketplace enabling users to upload, sell, and buy products. The platform features user authentication, an admin dashboard, and robust product management. Includes a responsive UI, Dockerized deployment, PostgreSQL database, and Nginx for reverse proxy. The project demonstrates scalable architecture and modern DevOps practices.\n\nDemo video: https://www.youtube.com/watch?v=9MoG9lnR6sg\nGitHub: https://github.com/Predaotor/Marketplace",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "postgresql", color: "orange-text-gradient" },
      { name: "nginx", color: "green-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "authentication", color: "yellow-text-gradient" },
      { name: "admin-dashboard", color: "purple-text-gradient" },
      { name: "responsive-ui", color: "teal-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Predaotor/Marketplace",
  }
];

export { services, technologies, experiences, projects };
