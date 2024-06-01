import {
  Bootstrap,
  Leaflet,
  Mongo,
  MUI,
  NextJs,
  Redux,
  Sass,
  StyledComponent,
  Typescript,
} from "./asset/icon/jsx";
import { aranoz } from "./asset/projects";

// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "pradip",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph: `Software Engineer with a passion for solving real-world problems through optimized code. Skilled in designing and integrating intuitive solutions using HTML, CSS, JavaScript, React, Redux, TypeScript, Bootstrap, and Material UI. Dedicated to staying fit through daily exercise and enjoy playing video games in my downtime.`,
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Bootstrap",
    // svg: '',
    // faClass: "fab fa-css3",
    element: Bootstrap,
  },
  {
    name: "Material UI",
    // svg: '',
    // faClass: "fab fa-css3",
    element: MUI,
  },

  {
    name: "SASS",
    // svg: '',
    // faClass: "fab fa-css3",
    element: Sass,
  },
  {
    name: "Styled Components",
    // svg: '',
    // faClass: "fab fa-css3",
    element: StyledComponent,
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node JS",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Mongo DB",
    // svg: '',
    // faClass: "fab fa-node",
    element: Mongo,
  },
  {
    name: "TypeScript",
    // svg: ts,
    // faClass: "fab fa-ts",
    element: Typescript,
  },
  {
    name: "React Js",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Next Js",
    // svg: '',
    // faClass: "fab fa-react",
    element: NextJs,
  },
  {
    name: "Redux",
    element: Redux,
    // faClass: "fas fa-database",
  },
  {
    name: "npm",
    // svg:"",
    faClass: "fab fa-npm",
  },
  {
    name: "Git",
    faClass: "fa fa-git",
  },
  {
    name: "Github",
    faClass: "fa fa-github",
  },
  {
    name: "Linux",
    faClass: "fa fa-linux",
  },

  {
    name: "Leaflet Js",
    // faClass: "fa fa-linux",
    element: Leaflet,
  },

  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
];
const projectDepolyBar = {
  github: "fab fa-github",
  deploy: "fas fa-globe",
};

const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "Aranoz",
    name: "Aranoz Ecommerce Project",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"} style={{ color: "fdd235" }}></i>,
      <i className={"fab fa-css3"}></i>,
      <i className={"fab fa-sass"} style={{ color: "#d824e5" }}></i>,
    ],
    url: "https://github.com/geekypradip/aranoz",
    deployurl: "https://geekypradip.github.io/aranoz/",
    descriptions: `Aranoz is a Ecommerce application.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image: aranoz,
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "fathom-health",
    name: "Fathom health Clone",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/fathom-heath",
    deployurl: "https://geekypradip.github.io/fathom-heath/",
    descriptions: `Fathom Health is a deep learning NLP system to accelerate medical reimbursement.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image: "https://miro.medium.com/max/700/1*7pnTMLWX-fEWjlF3pc-eOw.png",
  },
  {
    id: "bath-and-body-works",
    name: "Bath And body Works Clone",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/bath-and-body-works-clone",
    deployurl: "https://geekypradip.github.io/bath-and-body-works-clone/",
    descriptions: `Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image:
      "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202021-12-24%2019-34-17.png",
  },
  // {
  //   id: "project3",
  //   name: "Recepie search",
  //   skills: [
  //     <i className={"fab fa-html5"}></i>,
  //     <i className={"fab fa-js"}></i>,
  //     <i className={"fab fa-css3"}></i>,
  //   ],
  //   url: "https://github.com/geekypradip/food-app",
  //   deployurl: "https://geekypradip.github.io/food-app/",
  //   descriptions: `Recepie Search is Api Based food recepie search app . where you can search for a perticular of any food.`,
  //   github: "fab fa-github",
  //   deploy: "fas fa-globe",
  //   image:
  //     "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202021-10-13%2018-53-59.png",
  // },
  // {
  //   id: "project4",
  //   name: "Booking.com clone",
  //   skills: [
  //     <i className={"fab fa-html5"}></i>,
  //     <i className={"fab fa-react"} style={{ color: "#74c0fc" }}></i>,
  //     <i className={"fab fa-css3"}></i>,
  //   ],
  //   url: "https://github.com/geekypradip/Booking.com-clone",
  //   deployurl: "https://geekypradip.github.io/Booking.com-clone/",
  //   descriptions: `Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. `,
  //   github: "fab fa-github",
  //   deploy: "fas fa-globe",
  //   image:
  //     "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202022-02-08%2017-08-57.png",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "",
//   },
// ];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you have any suggestions or queries, feel free to contact me through my social profiles linked below. You can also download my resume using the button below. I am always open to new opportunities and collaborations.",
  copyright: "pradip Mandal",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/geekypradip",
  // facebook: "https://www.facebook.com/profile.php?id=100012481479777",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://linkedin.com/in/pradip-mandal-08509615b/",
  resume:
    "https://drive.google.com/drive/folders/1FvMrwWPyLsuoeLDZhgEir4TND4NfI9nj?usp=sharing",
};
// Dont change anything here
export {
  about,
  animation,
  background,
  contact,
  header,
  // miscellaneous,
  projectDepolyBar,
  projects,
  section2title,
  section3Title,
  // section4Title,
  section5Title,
  skillsBar,
  social,
};
