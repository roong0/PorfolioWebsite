import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import map from "../assets/map.png"
import stock from "../assets/stock.png"

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
                imgPath={map}
                isBlog={false}
                title="Personal Website"
                description="A website to display my abilities and skills. It was built using React and Bootstrap CSS."
                ghLink="https://github.com/"
                demoLink=""
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={stock}
                isBlog={false}
                title="Stock Searcher"
                description="A website allowing users to search for different stocks and find relevant information about them. It was build using React, Material UI and deployed using vercel."
                ghLink="https://github.com/"
                demoLink="map.yardsticks.net"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={map}
                isBlog={false}
                title="Base Map"
                description="A website which displays the location of military bases using open source data. It was build using React, Material-UI and deployed with firebase."
                ghLink="https://github.com/"
                demoLink="https://map.yardsticks.net"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;