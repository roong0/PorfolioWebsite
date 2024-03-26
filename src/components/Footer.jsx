import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row md="4" className="footer-body">
            <h3>Get in Touch</h3>
            <ul className="footer-icons">
                <li className="social-icons">
                <a
                    href="https://github.com/roong0"
                    style={{ color: "white" }}
                    target="_blank"
                >
                    <AiFillGithub />
                </a>
                </li>
                <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/ryanoong/"
                    style={{ color: "white" }}
                    target="_blank"
                >
                    <FaLinkedinIn />
                </a>
                </li>
            </ul>

      </Row>
    </Container>
  );
}

export default Footer;