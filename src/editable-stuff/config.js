// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Latha Sri",
  backgroundImage: require('../assets/img/background_2.png'),
  middleName: "",
  lastName: "Vurukuti",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/lathasri1997v",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lathasrivurukuti/",
    },
  ],
};



const about = {
  show: true,
  heading: "About Me",
  profilePic: require('../assets/img/profilepic.png'),
  imageSize: 375,
  message:
    "Hi there, I'm Latha sri a skilled fronted developer with a passion for crafting innovative solutions and driving technological advancements. Armed with an extensive toolkit of languages, frameworks, and methodologies, including JavaScript, React, CSS, Bootstrap, Node.js, Express.js, PostgreSQL, Web3, RestAPIs and Agile, I've honed my expertise through hands-on experience at Tata Consultancy and Services. My goal is to deliver high-quality products that meet the needs and expectations of the users and clients. My relentless curiosity and excitement for overcoming new challenges keep me on a constant journey of learning, making me highly adaptable.",
  resume: require('../assets/img/resume.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "lathasri1997v", 
  reposLength: 4,
  specificRepos: [],
};



// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  backgroundImage: require('../assets/img/background.png'),
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time full stack developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lathasri1997v@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Full Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ],
  icons: [
    { url: "https://linkedin.com", image: "fa-linkedin" },
    { url: "https://github.com", image: "fa-github" },
    { url: "https://twitter.com", image: "fa-twitter" },
    { url: "https://instagram.com", image: "fa-instagram" },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
