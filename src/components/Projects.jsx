import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import SiteImage from "../assets/Site.png"
import stock from "../assets/StockSearcher.png"
import chip8 from "../assets/Chip8Emulator.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={SiteImage}
                isBlog={false}
                title="Personal Website"
                description="A website to display my abilities and skills. It was built using React and Bootstrap CSS."
                ghLink="https://github.com/roong0/PorfolioWebsite"
                demoLink=""
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chip8}
                isBlog={false}
                title="Chip8 Emulator"
                description="An emulator for the Chip8 interpreted programming language. It is capable of running games such as Space Invaders and Pong. It was built using Javascript and playable on a HTML page."
                ghLink="https://github.com/"
                demoLink="https://chip8.roong.net"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={stock}
                isBlog={false}
                title="Stock Searcher"
                description="A website allowing users to search for different stocks and find relevant information about them. It was build using React, Material UI. (Work in progress)"
                ghLink="https://github.com/roong0/StockSearcher"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;