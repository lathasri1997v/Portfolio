import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import './ProjectCard.css'; 

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `https://api.github.com/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(dummyProject);

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.slice(0, length)];

      for (let repoName of specfic) {
        const response = await axios.get(`${specficReposAPI}/${repoName}`);
        repoList.push(response.data);
      }

      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Container fluid id="projects" className="bg-custom py-5">
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <Row className="g-4 d-flex flex-column align-items-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {projectsArray.length
          ? projectsArray.map((project, index) => (
              <ProjectCard key={`project-card-${index}`} value={project} />
            ))
          : dummyProjectsArr.map((project, index) => (
              <ProjectCard key={`dummy-${index}`} value={project} />
            ))}
      </Row>
    </Container>
  );
};

export default Project;
