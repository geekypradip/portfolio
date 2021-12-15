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
  paragraph:
    `Observant and detail-oriented aspiring full-
    stack web developer with a specialization in
    MERN stack. Well-versed in technology and
    writing code to create Web apps that are
    reliable and user-friendly.`
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React Js",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "npm",
    // svg: '',
    faClass: "fab fa-npm",
  }, 
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  }
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Fathom health Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/geekypradip/fathom-heath",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Bath And body Works Clone",
    skills: ["HTML, CSS, JS, JSON, API"],
    url: "https://github.com/geekypradip/bath-and-body-works-clone",
  }

  ,{
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Recepie search",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/geekypradip/food-app",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "News app",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/geekypradip/newsApp",
  },
  // {
  //   // Add image in './styles/images.css' in #project5
  //   id: "project5",
  //   name: "Project 5",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/geekypradip",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/geekypradip",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "hey, if you have any suggestions or queries feel free to contact me, please visit my social profiles below links. If You want to get my resume, you can download it from the below button.",
  copyright: "pradip Mandal",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/geekypradip",
  facebook: "https://www.facebook.com/profile.php?id=100012481479777",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://linkedin.com/in/pradip-mandal-08509615b/",
  resume: "https://drive.google.com/file/d/178nmfCAPGqr92DPlCxZWYoYYPuCJMO7-/view",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
