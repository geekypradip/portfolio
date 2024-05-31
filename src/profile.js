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
  paragraph: `Observant and detail-oriented aspiring full-
    stack web developer with a specialization in
    MERN stack. Well-versed in technology and
    writing code to create Web apps that are
    reliable and user-friendly.`,
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
    name: "Redux",
    svg: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z",
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
    id: "project1",
    name: "Fathom health Clone",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/fathom-heath",
    deployurl: "https://geeksblogs.000webhostapp.com/fathom-health/",
    descriptions: `Fathom Health is a deep learning NLP system to accelerate medical reimbursement.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image: "https://miro.medium.com/max/700/1*7pnTMLWX-fEWjlF3pc-eOw.png",
  },
  {
    id: "project2",
    name: "Bath And body Works Clone",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/bath-and-body-works-clone",
    deployurl: "https://geeksblogs.000webhostapp.com/bath-and-bodyworks/",
    descriptions: `Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image:
      "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202021-12-24%2019-34-17.png",
  },
  {
    id: "project3",
    name: "Recepie search",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-js"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/food-app",
    deployurl: "https://geekypradip.github.io/food-app/",
    descriptions: `Recepie Search is Api Based food recepie search app . where you can search for a perticular of any food.`,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image:
      "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202021-10-13%2018-53-59.png",
  },
  {
    id: "project4",
    name: "Booking.com clone",
    skills: [
      <i className={"fab fa-html5"}></i>,
      <i className={"fab fa-react"}></i>,
      <i className={"fab fa-css3"}></i>,
    ],
    url: "https://github.com/geekypradip/Booking.com-clone",
    deployurl: "https://geekypradip.github.io/Booking.com-clone/",
    descriptions: `Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. `,
    github: "fab fa-github",
    deploy: "fas fa-globe",
    image:
      "https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202022-02-08%2017-08-57.png",
  },
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
    "hey, if you have any suggestions or queries feel free to contact me, please visit my social profiles below links. If You want to get my resume, you can download it from the below button.",
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
