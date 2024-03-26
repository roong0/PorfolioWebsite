import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/home-main.svg";
import Type from "./Type";
import myImg from "../assets/avatar.svg";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RYAN OONG</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Container fluid className="home-about-section" id="about">
            <Container>
              <Row>
                <Col md={8} className="home-about-description">
                  <p className="home-about-body">
                    I am a passionate student currently studing Electrical Engineering and Computer Science at UNSW.
                    <br />
                    <br />I have experience in languages such as
                    <i>
                      <b className="purple"> C, Java, Typescript, Javascript, Python and Verilog</b>
                    </i>
                    <br />
                    <br />
                    I've always been interested in technology and engineering and enjoy facing technical <b className="purple">challenges</b> and
                      <b className="purple">
                        {" "}
                        problems.
                      </b>
                  </p>
                </Col>
                <Col md={4} className="myAvtar">
                    <img src={myImg} className="img-fluid" alt="avatar" />      
                </Col>
              </Row>
              <Row>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
  );
}

export default Home;
