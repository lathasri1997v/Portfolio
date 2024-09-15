import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import './ProjectCard.css';

// Import images for projects
import todoAppImage from '../../assets/img/todo_app.png';
import cashTrackImage from '../../assets/img/cashtrack.png';
import portfolioImage from '../../assets/img/portfolio.png';

// Language logo map
const languageLogos = {
  JavaScript: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  HTML: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  CSS: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  SCSS: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  React: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
};

// Function to retrieve the image for each project
const projectImageURL = (projectName) => {
  const projectImages = {
    "Todo-application": todoAppImage,
    "CashTrack-App": cashTrackImage,
    "portfolio": portfolioImage,
  };

  return projectImages[projectName] || "/path/to/default-image.jpg";
};

// CardButtons Component
const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block text-start mt-3">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary me-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a
        href={svn_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-secondary"
      >
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

// Main ProjectCard Component
const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  const [languages, setLanguages] = useState([]);

  const fetchLanguages = useCallback(async () => {
    if (!languages_url) return;
    try {
      const response = await axios.get(languages_url);
      setLanguages(Object.keys(response.data));
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages]);

  return (
    <Card className="shadow-lg mb-4 project-card d-flex flex-row justify-content-center mx-auto" style={{ maxWidth: "800px" }}>
      <Row className="g-0 align-items-center">
        {/* Left side: Image */}
        <Col md={6} className="d-flex align-items-center justify-content-center"> {/* Updated to occupy equal space */}
          <Card.Img
            variant="left"
            src={projectImageURL(name)}
            alt={name}
            className="img-fluid project-image"
            style={{ maxHeight: "180px", objectFit: "cover", borderRadius: "10px", margin: "auto 0" }} // Vertically centered image
          />
        </Col>

        {/* Right side: Details */}
        <Col md={6}> {/* Updated to occupy equal space */}
          <Card.Body>
            {/* Title */}
            <Card.Title as="h5" className="mb-2">
              {name || <Skeleton />}
            </Card.Title>
            
            {/* Tags */}
            <div className="mb-2">
              {languages.map((lang) => (
                <span key={lang} className="badge bg-secondary me-2">{lang}</span>
              ))}
            </div>

            {/* Description */}
            <Card.Text>
              {description || <Skeleton count={3} />}
            </Card.Text>

            {/* Buttons */}
            {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}

            {/* Footer */}
            <div className="mt-3">
              <span className="text-muted">Stars: {stargazers_count || 0}</span>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;
