// Project Thumbnails
import journey from "../assets/projects/journey.jpg"
import bandsite from "../assets/projects/bandsite.jpg"
import brainflix from "../assets/projects/brainflix.jpg"
import flags from "../assets/projects/flags.jpg"
import inStock from "../assets/projects/instock.jpg"
import rockPaperScissors from "../assets/projects/rockPaperScissors.jpg"
import todoApp from "../assets/projects/todo-crud-app.png"

// Tech Stack Icons
import git from "../assets/techIcons/git.svg"
import javascript from "../assets/techIcons/javascript.svg"
import mysql from "../assets/techIcons/mysql.svg"
import node from "../assets/techIcons/node.svg"
import react from "../assets/techIcons/react.svg"
import tailwind from "../assets/techIcons/tailwind.svg"
import sass from "../assets/techIcons/sass.svg"
import typescript from "../assets/techIcons/typescript.svg"
import mongoDb from "../assets/techIcons/mongodb.svg"
import jest from "../assets/techIcons/jest.svg"

const techIcons = [
  {
    title: "React",
    img: react
  },
  {
    title: "TypeScript",
    img: typescript
  },
  {
    title: "Javascript",
    img: javascript
  },
  {
    title: "Tailwind",
    img: tailwind
  },
  {
    title: "mySQL",
    img: mysql
  },
  {
    title: "Node",
    img: node
  },
  {
    title: "Sass",
    img: sass
  },
  {
    title: "Git",
    img: git
  },
  {
    title: "MongoDB",
    img: mongoDb
  },
  {
    title: "Jest",
    img: jest
  },
]

const projects = [
    {
      id: 1,
      title: "Journey",
      description: "2D platformer game built with react using canvas",
      img: journey,
      link: "https://github.com/TommieeN/Journey-React-Platformer-Game",
      deploy: "https://647fe614ec115515d29a0e71--golden-nasturtium-3edb6f.netlify.app/",
      techStack: ["Canvas", "React", "SASS", "Object Oriented Programming"]
    },
    {
      id: 2,
      title: "Bandsite",
      description: "Fully responsive website for a fictional band that include show dates.",
      img: bandsite,
      link: "https://github.com/TommieeN/band-site-react-client",
      deploy: "https://my-band-site.netlify.app/",
      techStack: ["React", "TailWind", "Vite", "Node.js", "Express.js", "React-Router-Dom"]
    },
    {
      id: 3,
      title: "Brainflix",
      description: "Full stack streaming platform. Users can post comments and upload videos.",
      img: brainflix,
      link: "https://github.com/TommieeN/Brainflix",
      deploy: "https://brainflix.onrender.com/",
      techStack: ["React", "React-Router-Dom", "SASS", "BEM", "Node.js", "Express.js", "Rest API"]
    },
    {
      id: 5,
      title: "In-Stock",
      description: "A collaborative project utilizing agile methodologies to create a full stack application.",
      img: inStock,
      link: "https://github.com/TommieeN/instock-client",
      techStack: ["React", "React-Router-Dom", "SASS", "BEM", "Node.js", "Express.js", "mySQL", "Knex"]
    },
    {
      id: 4,
      title: "Flags",
      description: "A list of flags from around the world.",
      img: flags,
      link: "https://github.com/TommieeN/country-flags-api",
      deploy: "https://client-flags.onrender.com/",
      techStack: ["React", "SASS", "Node.js", "Express.js", "Axios", "React-Router-Dom", "BEM"]
    },
    {
      id: 5,
      title: "Rock Paper Scissors!",
      description: "Play a game of rock paper scissors",
      img: rockPaperScissors,
      link: "https://github.com/TommieeN/rock-paper-scissors/tree/main",
      deploy: "https://rock-paper-scissors-tommy.netlify.app/",
      techStack: ["Typescript", "React", "Tailwind", "FramerMotion"]
    },
    {
      id: 6,
      title: "Todo Crud App",
      description: "A todo app built with Svelte using firebase for auth and storing user data",
      img: todoApp,
      link: "https://github.com/TommieeN/svelte-todo-crud-app/tree/main/src/routes",
      deploy: "",
      techStack: ["Svelte", "CSS", "FireBase", "Authorization/Authentication"]
    }
  ];

  export { projects, techIcons }