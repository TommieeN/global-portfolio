// Project Thumbnails
import journey from "../assets/projects/journey.jpg"
import bandsite from "../assets/projects/bandsite.jpg"
import brainflix from "../assets/projects/brainflix.jpg"
import flags from "../assets/projects/flags.jpg"
import inStock from "../assets/projects/instock.jpg"
import rockPaperScissors from "../assets/projects/rockPaperScissors.jpg"

// Tech Stack Icons
import git from "../assets/techIcons/git.svg"
import javascript from "../assets/techIcons/javascript.svg"
import mysql from "../assets/techIcons/mysql.svg"
import node from "../assets/techIcons/node.svg"
import react from "../assets/techIcons/react.svg"
import tailwind from "../assets/techIcons/tailwind.svg"
import sass from "../assets/techIcons/sass.svg"
import typescript from "../assets/techIcons/typescript.svg"

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
    title: "TailwindCSS",
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
]

const projects = [
    {
      id: 1,
      title: "Journey",
      description: "2D platformer game built with react using canvas",
      img: journey,
      link: "https://github.com/TommieeN/Journey-React-Platformer-Game",
      deploy: "https://647fe614ec115515d29a0e71--golden-nasturtium-3edb6f.netlify.app/",
    },
    {
      id: 2,
      title: "Bandsite",
      description: "Fully responsive website for a fictional band that include show dates.",
      img: bandsite,
      link: "https://github.com/TommieeN/band-site",
      deploy: "https://my-band-site.netlify.app/",
    },
    {
      id: 3,
      title: "Brainflix",
      description: "Full stack streaming platform. Users can post comments and upload videos.",
      img: brainflix,
      link: "https://github.com/TommieeN/Brainflix",
      deploy: "https://brainflix.onrender.com/",
    },
    {
      id: 5,
      title: "In-Stock",
      description: "A collaborative project utilizing agile methodologies to create a full stack application.",
      img: inStock,
      link: "https://github.com/TommieeN/instock-client",
    },
    {
      id: 4,
      title: "Flags",
      description: "A list of flags from around the world.",
      img: flags,
      link: "https://github.com/TommieeN/country-flags-api",
      deploy: "https://client-flags.onrender.com/"
    },
    {
      id: 5,
      title: "Rock Paper Scissors!",
      description: "Play a game of rock paper scissors",
      img: rockPaperScissors,
      link: "https://github.com/TommieeN/rock-paper-scissors/tree/main",
      deploy: "https://rock-paper-scissors-tommy.netlify.app/"
    },
  ];

  export { projects, techIcons }