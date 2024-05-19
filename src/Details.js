// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/projects/Profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/todoapp.png";
import projectImage2 from "./assets/projects/XO.png";
import projectImage3 from "./assets/projects/QR.png";
import projectImage4 from "./assets/projects/markdown.png";
import projectImage5 from "./assets/projects/burger-shop.png";
import projectImage6 from "./assets/projects/Weather.png";
import projectImage7 from "./assets/projects/json-crud.png";
import projectImage8 from "./assets/projects/Amazon.png";
import projectImage9 from "./assets/projects/Text.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vishal V",
  tagline: "I build things for web",
  img: profile,
  about: `Committed to continuous learning and staying updated on emerging technologies. Excellent communication and collaboration abilities. Quick learner and adaptable team player with a strong analytical mindset. Ready to contribute effectively in the software industry.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/vishal-v-27088422a/",
  github: "https://www.github.com/VISHALVKY",
};

// Enter your Work Experience here
export const workDetails = [
  // {
  //   Position: "Frontend Web Developer",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Full Time",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "BE-Computer Science and Engineering",
    Company: "Mohamed Sathak A.J College Of Engineering",
    Location: "Chennai",
    Type: "Full Time",
    Duration: "2019 - 2023",
  },
  {
    Position: "Higher Secondary School",
    Company: `Gk Matriculation Higher Secondary School`,
    Location: "kattumannar Koil",
    Type: "Full Time",
    Duration: "2018 - 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Todo App",
    image: projectImage1,
    description: `Effortlessly manage your to-do list and boost your productivity with the React Todo App.`,
    techstack: "React Js",
    previewLink: "https://simpletodolist-react.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/TodoList-React",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage2,
    description: `Play solo or against a friend, with real-time updates and responsive design for seamless
    gaming.`,
    techstack: "React Js",
    previewLink: "https://tic-tac-toe-gamesreact.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Tic-Tac-Toe",
  },
  {
    title: "QR Generator",
    image: projectImage3,
    description: `A user-friendly web application that allows you to create QR codes quickly and easily..`,
    techstack: "React Js",
    previewLink: "https://qrgenerator-react.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/QR-Code-React",
  },
  {
    title: "Markdown-Previewer",
    image: projectImage4,
    description: `With a clean and intuitive interface, users can type Markdown code on one side and
    instantly see the formatted output on the other side.`,
    techstack: "React Js",
    previewLink: "https://react-markdown-previewers.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Markdown-Previewer",
  },
  {
    title: "Burger Shop",
    image: projectImage5,
    description: `Our burger shop offers a mouthwatering menu of gourmet burgers, fries that
    will satisfy even the most discerning taste buds.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://burgershop-by-vishal.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Burger-Shop",
  },
  {
    title: "Weather App",
    image: projectImage6,
    description: `WeatherWise is your personal weather companion, delivering accurate forecasts right to
    your fingertips.`,
    techstack: "HTML/CSS, JS,API",
    previewLink: "https://weather-condition-app-api.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Weather-web-app",
  },
  {
    title: "JSON CRUD Operation",
    image: projectImage7,
    description: `The application is built with a responsive design, ensuring optimal performance and
    user experience across various devices.`,
    techstack: "React Js,API",
    previewLink: "https://json-crud-react.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/JSON-CRUD-Using-React",
  },
  {
    title: "Amazon Clone",
    image: projectImage8,
    description: `Explore the familiar layout and design of Amazon with our HTML & CSS replica. From the
    iconic logo to the detailed product listings`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://amazone-cloneapp.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/amazon-clone",
  },
  {
    title: "Text-to-Speech-Converter",
    image: projectImage9,
    description: `his user-friendly tool allows you to type or paste text into the interface
    and instantly hear it read aloud in a natural-sounding voice.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://simple-text-to-speech-converter.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Text-to-Speech-Converter",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vishal.viswanaathan@gmail.com",
  phone: "+91 8270249850",
};
