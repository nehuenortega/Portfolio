import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className = "footer">
            <Row>
                <Col md = "4" className = "footer-copywright">
                    <h3>Designed and Developed by Nehuen Ortega</h3>
                </Col>
                <Col md = "4" className = "footer-copywright">
                    <h3>Copyright © { year } N.O.</h3>
                </Col>
                <Col md = "4" className = "footer-body">
                    <ul className = "footer-icons">
                        <li className = "social-icons"> {/*Para modificar */}
                            <a 
                                href = "https://github.com/nehuenortega"
                                style = {{ color: "white" }}
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>

                        <li className = "social-icons"> {/*Para modificar */}
                            <a 
                                href = "https://twitter.com/CrisApablaza"
                                style = {{ color: "white" }}
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>

                        <li className = "social-icons"> {/*Para modificar */}
                            <a 
                                href = "https://www.linkedin.com/in/cristian-nehuen-apablaza-ortega/"
                                style = {{ color: "white" }}
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;