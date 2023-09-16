// Project Thumbnails
import journey from "../assets/projects/journey.jpg";
import bandsite from "../assets/projects/bandsite.jpg";
import brainflix from "../assets/projects/brainflix.jpg";
import flags from "../assets/projects/flags.jpg";
import inStock from "../assets/projects/instock.jpg";
import rockPaperScissors from "../assets/projects/rockPaperScissors.jpg";
import todoApp from "../assets/projects/todo-crud-app.jpg";

// Tech Stack Icons
import git from "../assets/techIcons/git.svg";
import javascript from "../assets/techIcons/javascript.svg";
import mysql from "../assets/techIcons/mysql.svg";
import node from "../assets/techIcons/node.svg";
import react from "../assets/techIcons/react.svg";
import tailwind from "../assets/techIcons/tailwind.svg";
import sass from "../assets/techIcons/sass.svg";
import typescript from "../assets/techIcons/typescript.svg";
import mongoDb from "../assets/techIcons/mongodb.svg";
import jest from "../assets/techIcons/jest.svg";

const navBarLinks = [
  {
    anchorTag: "#home",
    title: "Home",
  },
  {
    anchorTag: "#about",
    title: "About",
  },
  {
    anchorTag: "#works",
    title: "Works",
  },
  {
    anchorTag: "#contact",
    title: "Contact",
  },
];

const techIcons = [
  {
    id: 1,
    title: "React",
    img: react,
  },
  {
    id: 2,
    title: "TypeScript",
    img: typescript,
  },
  {
    id: 3,
    title: "Javascript",
    img: javascript,
  },
  {
    id: 4,
    title: "Tailwind",
    img: tailwind,
  },
  {
    id: 5,
    title: "mySQL",
    img: mysql,
  },
  {
    id: 6,
    title: "Node",
    img: node,
  },
  {
    id: 7,
    title: "Sass",
    img: sass,
  },
  {
    id: 8,
    title: "Git",
    img: git,
  },
  {
    id: 9,
    title: "MongoDB",
    img: mongoDb,
  },
  {
    id: 10,
    title: "Jest",
    img: jest,
  },
];

const projects = [
  {
    id: 1,
    title: "Journey",
    description:
      "I crafted a 2D platformer game using React and Canvas. Guide the character to the level's end using arrow keys, while dodging airborne enemies. I independently designed the entire map using Tiled, incorporating freely available assets for characters, enemies, and tilesets.",
    img: journey,
    link: "https://github.com/TommieeN/Journey-React-Platformer-Game",
    deploy:
      "https://647fe614ec115515d29a0e71--golden-nasturtium-3edb6f.netlify.app/",
    techStack: ["React", "SASS", "Object Oriented"],
  },
  {
    id: 2,
    title: "Bandsite",
    description:
      "Designed a fully responsive website for a fictional band where users can conveniently purchase event tickets.",
    img: bandsite,
    link: "https://github.com/TommieeN/band-site-react-client",
    deploy: "https://my-band-site.netlify.app/",
    techStack: ["React", "TailWind", "Vite", "Node.js"],
  },
  {
    id: 3,
    title: "Brainflix",
    description:
      "Developed a comprehensive full-stack streaming platform that allows users to post comments and upload their own videos, fostering a vibrant and interactive online community.",
    img: brainflix,
    link: "https://github.com/TommieeN/Brainflix",
    deploy: "https://brainflix.onrender.com/",
    techStack: ["React", "Express.js", "RestAPI"],
  },
  {
    id: 4,
    title: "In-Stock",
    description: "This collaborative project followed agile methodologies, involving three other web developers from our class. Our mission: design an efficient inventory system for warehouse management. We relied on MySQL for the database and React for the frontend. To coordinate tasks, we used Jira for ticket assignment, and maintained version control with Git.",
    img: inStock,
    link: "https://github.com/TommieeN/instock-client",
    techStack: ["React", "SASS", "Express.js", "mySQL"],
  },
  {
    id: 5,
    title: "Flags",
    description: "Crafted a user-friendly flag directory featuring flags from across the globe. Users can seamlessly search, filter by region, and navigate through an extensive list of flags. Upon selecting a flag, they can access in-depth information about the corresponding country's flag. Additionally, the application boasts a convenient dark mode feature, utilizing local storage to remember the user's preferred theme across sessions.",
    img: flags,
    link: "https://github.com/TommieeN/country-flags-api",
    deploy: "https://client-flags.onrender.com/",
    techStack: ["React", "SASS", "Node.js", "Axios"],
  },
  {
    id: 6,
    title: "Game",
    description: "Engaged in a captivating game of rock-paper-scissors, inspired by a frontend mentor challenge. This project involved transforming Figma mockups into a fully functional game, providing an interactive and enjoyable gaming experience.",
    img: rockPaperScissors,
    link: "https://github.com/TommieeN/rock-paper-scissors/tree/main",
    deploy: "https://rock-paper-scissors-tommy.netlify.app/",
    techStack: ["Typescript", "Tailwind", "FramerMotion"],
  },
  {
    id: 7,
    title: "Auth App",
    description:
      "A meticulously crafted to-do application developed with Svelte, seamlessly integrating Firebase for user authentication and secure storage of valuable user data. Enjoy a streamlined and efficient task management experience.",
    img: todoApp,
    link: "https://github.com/TommieeN/svelte-todo-crud-app/tree/main/src/routes",
    techStack: ["Svelte", "CSS", "FireBase", "Auth"],
  },
];

export { projects, techIcons, navBarLinks };
