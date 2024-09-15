import { useState } from "react";

const skills = [
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "Javascript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Babel",
    icon: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="aboutme" className="p-4 py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 mb-5 position-relative">About Me</h2>
        <h3 className="text-center text-muted mb-5">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </h3>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div>
            <h3 className="h3 mb-4">Who I Am</h3>
            <p className="text-muted">
              I'm a <strong>Full Stack Web Developer</strong> with over three years of experience in the field. I am passionate about designing and developing websites that are not only visually appealing but also highly functional.
            </p>
            <p className="text-muted">
              Armed with an extensive toolkit of languages, frameworks, and methodologies, including JavaScript, React, CSS, Bootstrap, Node.js, Express.js, PostgreSQL, Web3, RestAPIs and Agile, I've honed my expertise through hands-on experience at Tata Consultancy and Services. My goal is to deliver high-quality products that meet the needs and expectations of the users and clients. My relentless curiosity and excitement for overcoming new challenges keep me on a constant journey of learning, making me highly adaptable.
            </p>
            <p className="text-muted">
              In addition to my technical skills, I am a team player who thrives in collaborative environments. I am always open to learning new technologies and staying up-to-date with the latest web development trends.
            </p>
          </div>

          <div>
            <h3 className="h3 mb-4">My Skills</h3>
            <div className="d-flex flex-wrap gap-2 justify-content-start">
              {skills.map((skill) => (
                <div key={skill.name} className="d-flex flex-column align-items-center p-2 bg-white rounded shadow-sm">
                  <img src={skill.icon} alt={skill.name} width={40} height={40} />
                  <span className="mt-2 small">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
